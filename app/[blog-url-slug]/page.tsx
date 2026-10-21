import { getBlogsRelatedByCategory, getBlogs } from "@/lib/blog";
import { loadBlog } from "./blog-loader";
import { notFound } from "next/navigation";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import Script from "next/script";
import BlogDetailsComponent from "@/components/pages/BlogDetailsComponent";
import searchIndex from "@/generated/search-index.json";
import type { Metadata } from "next";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
  ],
};

type PageProps = {
  params: Promise<{
    "blog-category-url-slug": string,
    "blog-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    "blog-category-url-slug": blog.blog_category_url_slug,
    "blog-url-slug": blog.blog_url_slug,
  }));
}

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "blog-url-slug": blog_url_slug } = await params;

  const exists = searchIndex.some((item) => item.path === `/${blog_url_slug}`);

  if(!exists) {
    notFound();
  }

  const blog = await loadBlog(blog_url_slug);

  if (!blog) {
    notFound()
  }

  const canonical_tag = basePath + blog.canonical_tag;

  const meta = {
    meta_title: blog.meta_title,
    meta_description: blog.meta_description,
    canonical_tag: blog.canonical_tag
  }

  const banner = {
    banner_image: blog.banner_image
  }

  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page({ params }: PageProps) {
  const { "blog-url-slug": blog_url_slug } = await params;

  const exists = searchIndex.some((item) => item.path === `/${blog_url_slug}`);

  if(!exists) {
    notFound();
  }
  
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
