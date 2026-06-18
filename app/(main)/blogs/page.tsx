import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getBlogCategories, getBlogFeatured, getBlogs } from "@/lib/blog";

import type { Metadata } from "next";
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
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_PATH;

const canonical_tag = basePath + meta.canonical_tag;

export const metadata: Metadata = {
  title: meta.meta_title,
  description: meta.meta_description,
  alternates: {
    canonical: canonical_tag
  },
  openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: banner.banner_image,
          width: 1200,
          height: 630,
          alt: meta.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.meta_title,
      description: meta.meta_description,
      images: [banner.banner_image],
    },
};

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
