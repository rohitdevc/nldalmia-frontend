import { getTicker } from "@/lib/common";
import { getMediaCategory, getMedia, getMediaCategories } from "@/lib/media";

import type { Metadata } from "next";
import MediaComponent from "@/components/pages/MediaComponent";
import { redirect } from "next/navigation";

const [ ticker ] = await Promise.all([ getTicker() ])

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

type PageProps = {
  params: Promise<{
    "media-category-url-slug": string
  }>
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "media-category-url-slug": media_category_url_slug } = await params;

  const media_category = await getMediaCategory(media_category_url_slug);

  if(!media_category) redirect(process.env.NEXT_PUBLIC_PATH + "media");

  return {
    title: media_category.meta_title,
    description: media_category.meta_description,
    alternates: {
      canonical: media_category.canonical_tag,
    },
    openGraph: {
      title: media_category.meta_title,
      description: media_category.meta_description,
      type: "website",
      url: media_category.canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: media_category.banner_image,
          width: 1200,
          height: 630,
          alt: media_category.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: media_category.meta_title,
      description: media_category.meta_description,
      images: [media_category.banner_image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { "media-category-url-slug": media_category_url_slug } = await params;

  const media_category = await getMediaCategory(media_category_url_slug);

  const media_categories = await getMediaCategories();

  const media = await getMedia(media_category_url_slug);

  if(!media.length) redirect(process.env.NEXT_PUBLIC_PATH + "media");
  
  return (
    <MediaComponent
    ticker={ticker}
    banner={media_category}
    media_category_url_slug={media_category_url_slug}
    media_categories={media_categories}
    media={media}
     />
  )
}
