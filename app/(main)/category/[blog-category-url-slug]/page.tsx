import { permanentRedirect } from "next/navigation";

import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getBlogCategories, getBlogCategoryFeatured, getBlogsByCategory } from "@/lib/blog";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import BlogComponent from "@/components/pages/BlogComponent";

const [
  meta,
  banner,
  introduction,
  blog_categories
] = await Promise.all([
  getMetaData("Blog"),
  getBanner("Blog"),
  getIntroduction(),
  getBlogCategories()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
  ],
};

type PageProps = {
  params: Promise<{
    "blog-category-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const blog_categories = await getBlogCategories();

  return blog_categories.map((blog_category) => ({
    "blog-category-url-slug": blog_category.blog_category_url_slug
  }));
}

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

const canonical_tag = basePath + meta.canonical_tag;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "blog-category-url-slug": blog_category_url_slug } = await params;

  return createMetadata({
    meta,
    banner,
    canonical_tag: `${canonical_tag}/${blog_category_url_slug}`
  });
}

export default async function Blog({ params }: PageProps) {
  const { "blog-category-url-slug": blog_category_url_slug } = await params;

  const blog_featured = await getBlogCategoryFeatured(blog_category_url_slug);
  const blogs = await getBlogsByCategory(blog_category_url_slug);

  if(!blogs.length) permanentRedirect(process.env.NEXT_PUBLIC_PATH + "blogs");

  return (
    <BlogComponent
    banner={banner}
    blog_category_url_slug={blog_category_url_slug}
    introduction={introduction}
    blog_categories={blog_categories}
    blog_featured={blog_featured}
    blogs={blogs}
    />
  )
}
