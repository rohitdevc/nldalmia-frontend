import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAwards } from "@/lib/awards";
import { getMediaCategories } from "@/lib/media";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import AwardsComponent from "@/components/pages/AwardsComponent";

const [
  meta,
  banner,
  introduction,
  awards,
  media_categories
] = await Promise.all([
  getMetaData("Awards"),
  getBanner("Awards"),
  getIntroduction(),
  getAwards(),
  getMediaCategories()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
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
    <AwardsComponent
    banner={banner}
    introduction={introduction}
    awards={awards}
    media_categories={media_categories}
    />
  )
}
