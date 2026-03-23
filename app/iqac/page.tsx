import { getTicker, getMetaData, getBanner } from "@/lib/common";
import { getIQACCategories, getIQAC, getIQACPOE } from "@/lib/iqac";

import type { Metadata } from "next";
import IQACComponent from "@/components/pages/IQACComponent";

const [
  ticker,
  meta,
  banner,
  iqac_categories,
  iqac,
  iqac_poe
] = await Promise.all([
  getTicker(),
  getMetaData("IQAC"),
  getBanner("IQAC"),
  getIQACCategories(),
  getIQAC(),
  getIQACPOE()
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
    <IQACComponent
    ticker={ticker}
    banner={banner}
    iqac_categories={iqac_categories}
    iqac_pdfs={iqac}
    iqac_poe={iqac_poe}
    />
  )
}
