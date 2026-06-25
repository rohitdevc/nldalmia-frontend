import { getBlog, getBlogsRelatedByCategory } from "@/lib/blog";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
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

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

let blogCache = new Map();

export async function loadBlog(slug: string) {
  if (blogCache.has(slug)) return blogCache.get(slug);
  
  const blog = await getBlog(slug);
  blogCache.set(slug, blog);

  return blog;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "blog-url-slug": blog_url_slug } = await params;

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

  const blogUrl = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}${blog.canonical_tag}`;

  const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${blogUrl}#article`,
          isPartOf: {
            "@id": blogUrl,
          },
          author: {
            "@type": "Organization",
            name: "NL Dalmia",
          },
          headline: blog.blog_title,
          datePublished: blog.blog_published_date,
          dateModified: blog.blog_updated_date,
          mainEntityOfPage: {
            "@id": blogUrl,
          },
          publisher: {
            "@id": `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/#organization`,
          },
          image: {
            "@id": `${blogUrl}#primaryimage`,
          },
          thumbnailUrl: blog.og_image,
          articleSection: blog.blog_category_name,
          description: blog.meta_description,
          inLanguage: "en-IN",
        },
        {
          "@type": "WebPage",
          "@id": blogUrl,
          url: blogUrl,
          name: blog.meta_title || blog.blog_title,
          description: blog.meta_description,
          datePublished: blog.blog_published_date,
          dateModified: blog.blog_updated_date,
          primaryImageOfPage: {
            "@id": `${blogUrl}#primaryimage`,
          },
          breadcrumb: {
            "@id": `${blogUrl}#breadcrumb`,
          },
        },
        {
          "@type": "ImageObject",
          "@id": `${blogUrl}#primaryimage`,
          url: blog.og_image,
          contentUrl: blog.og_image,
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${blogUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: blog.blog_title,
            },
          ],
        },
      ],
  }

  const related_blog = await getBlogsRelatedByCategory(blog.blog_category_url_slug, blog_url_slug);

  return (
    <>
    <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
    />
    <BlogDetailsComponent
    blog={blog}
    related_blog={related_blog}
    />
    </>
  )
}
