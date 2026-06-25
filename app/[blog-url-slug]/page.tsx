import { getBlog, getBlogsRelatedByCategory } from "@/lib/blog";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogDetailsComponent from "@/components/pages/BlogDetailsComponent";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

type PageProps = {
  params: Promise<{
    "blog-category-url-slug": string,
    "blog-url-slug": string
  }>
}

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_PATH;

let blogCache = new Map();

export async function loadBlog(slug: string) {
  if (blogCache.has(slug)) return blogCache.get(slug);
  
  const blog = await getBlog(slug);
  blogCache.set(slug, blog);

  return blog;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "blog-url-slug": blog_url_slug } = await params;

  console.log("BLOG ROUTE:", blog_url_slug);

  const blog = await loadBlog(blog_url_slug);

  if (!blog) {
    notFound()
  }

  const canonical_tag = basePath + blog.canonical_tag;

  return {
    title: blog.meta_title,
    description: blog.meta_description,
    alternates: {
      canonical: canonical_tag,
    },
    openGraph: {
      title: blog.meta_title,
      description: blog.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: blog.og_image,
          width: 1200,
          height: 630,
          alt: blog.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta_title,
      description: blog.meta_description,
      images: [blog.og_image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { "blog-url-slug": blog_url_slug } = await params;
  
  const blog = await loadBlog(blog_url_slug);

  if (!blog) {
    notFound()
  }
  const related_blog = await getBlogsRelatedByCategory(blog.blog_category_url_slug, blog_url_slug);

  return (
    <BlogDetailsComponent
    blog={blog}
    related_blog={related_blog}
    />
  )
}
