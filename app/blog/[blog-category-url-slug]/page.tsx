import { getTicker, getMetaData, getBanner } from "@/lib/common";

import type { Metadata } from "next";
import BlogComponent from "@/components/pages/BlogComponent";

const [ ticker, meta, banner ] = await Promise.all([ getTicker(), getMetaData("Blog"), getBanner("Blog") ]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

type PageProps = {
  params: Promise<{
    "blog-category-url-slug": string
  }>
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "blog-category-url-slug": blog_category_url_slug } = await params;

  return {
    title: meta.meta_title,
    description: meta.meta_description,
    alternates: {
      canonical: meta.canonical_tag + "/" + blog_category_url_slug,
    },
    openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: meta.canonical_tag + "/" + blog_category_url_slug,
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
}

export default async function Blog({ params }: PageProps) {
  const { "blog-category-url-slug": blog_category_url_slug } = await params;

  return (
    <BlogComponent
    ticker={ticker}
    banner={banner}
    blog_category_url_slug={blog_category_url_slug} />
  )
}
