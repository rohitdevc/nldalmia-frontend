import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAwards } from "@/lib/awards";
import { getMediaCategories } from "@/lib/media";

import type { Metadata } from "next";
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
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: meta.meta_title,
  description: meta.meta_description,
  alternates: {
    canonical: meta.canonical_tag
  },
  openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: meta.canonical_tag,
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
    <AwardsComponent
    banner={banner}
    introduction={introduction}
    awards={awards}
    media_categories={media_categories}
    />
  )
}
