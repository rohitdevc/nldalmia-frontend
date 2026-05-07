import { getBlog, getBlogsRelatedByCategory } from "@/lib/blog";

import { redirect } from "next/navigation";
import type { Metadata } from "next";
import BlogDetailsComponent from "@/components/pages/BlogDetailsComponent";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

type PageProps = {
  params: Promise<{
    "blog-category-url-slug": string,
    "blog-url-slug": string
  }>
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "blog-category-url-slug": blog_category_url_slug, "blog-url-slug": blog_url_slug } = await params;

  const blog = await getBlog(blog_category_url_slug, blog_url_slug);

  if(!blog) redirect(process.env.NEXT_PUBLIC_PATH + 'blog');

  return {
    title: blog.meta_title,
    description: blog.meta_description,
    alternates: {
      canonical: blog.canonical_tag,
    },
    openGraph: {
      title: blog.meta_title,
      description: blog.meta_description,
      type: "website",
      url: blog.canonical_tag,
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
  const { "blog-category-url-slug": blog_category_url_slug, "blog-url-slug": blog_url_slug } = await params;
  
  const blog = await getBlog(blog_category_url_slug, blog_url_slug);
  const related_blog = await getBlogsRelatedByCategory(blog_category_url_slug, blog_url_slug);

  return (
    <BlogDetailsComponent
    blog={blog}
    related_blog={related_blog}
    />
  )
}
