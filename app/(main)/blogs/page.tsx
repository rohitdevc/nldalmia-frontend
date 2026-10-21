import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getBlogCategories, getBlogFeatured, getBlogs } from "@/lib/blog";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import BlogComponent from "@/components/pages/BlogComponent";

const [
  meta,
  banner,
  introduction,
  blog_categories,
  blog_featured,
  blogs
] = await Promise.all([
  getMetaData("Blog"),
  getBanner("Blog"),
  getIntroduction(),
  getBlogCategories(),
  getBlogFeatured(),
  getBlogs()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
  ],
};

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

const canonical_tag = basePath + meta.canonical_tag;

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page() {
  return (
    <BlogComponent
    banner={banner}
    introduction={introduction}
    blog_categories={blog_categories}
    blog_featured={blog_featured}
    blogs={blogs}
    />
  )
}
