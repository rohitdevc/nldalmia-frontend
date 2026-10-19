import { getMediaCategory, getMedia, getMediaCategories } from "@/lib/media";

import type { Metadata } from "next";

import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import MediaComponent from "@/components/pages/MediaComponent";
import { permanentRedirect } from "next/navigation";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

type PageProps = {
  params: Promise<{
    "media-category-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const media_categories = await getMediaCategories();

  return media_categories.map((media_category) => ({
    "media-category-url-slug": media_category.media_category_url_slug
  }));
}

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

let mediaCache = new Map();

export async function loadMedia(slug: string) {
  if (mediaCache.has(slug)) return mediaCache.get(slug);
  
  const media = await getMediaCategory(slug);

  mediaCache.set(slug, media);

  return media;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "media-category-url-slug": media_category_url_slug } = await params;

  const media_category = await loadMedia(media_category_url_slug);

  if(!media_category) permanentRedirect(process.env.NEXT_PUBLIC_PATH + "media");

  const canonical_tag = basePath + media_category.canonical_tag;

  const meta = {
    meta_title: media_category.meta_title,
    meta_description: media_category.meta_description,
    canonical_tag: media_category.canonical_tag
  }

  const banner = {
    banner_image: media_category.banner_image
  }

  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page({ params }: PageProps) {
  const { "media-category-url-slug": media_category_url_slug } = await params;

  const media_category = await loadMedia(media_category_url_slug);

  const media_categories = await getMediaCategories();

  const media = await getMedia(media_category_url_slug);

  if(!media.length) permanentRedirect(process.env.NEXT_PUBLIC_PATH + "media");
  
  return (
    <MediaComponent
    banner={media_category}
    media_category_url_slug={media_category_url_slug}
    media_categories={media_categories}
    media={media}
     />
  )
}
