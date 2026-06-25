import { getMetaData, getBanner } from "@/lib/common";
import { getIndustrialVisits } from "@/lib/industrial-visits";

import type { Metadata } from "next";
import IndustrialVisitsComponent from "@/components/pages/IndustrialVisitsComponent";

const [
  meta,
  banner,
  industrial_visits
] = await Promise.all([
  getMetaData("Industrial Visits"),
  getBanner("Industrial Visits"),
  getIndustrialVisits()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

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
    <IndustrialVisitsComponent
    banner={banner}
    industrial_visits={industrial_visits}
    />
  )
}
