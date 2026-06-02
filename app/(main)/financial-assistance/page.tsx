import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getFinancialAssistancePartners } from "@/lib/financial-assistance";

import type { Metadata } from "next";
import FinancialAssistanceComponent from "@/components/pages/FinancialAssistanceComponent";

const [
  meta,
  banner,
  introduction,
  financial_assistance_partners
] = await Promise.all([
  getMetaData("Financial Assistance"),
  getBanner("Financial Assistance"),
  getIntroduction(),
  getFinancialAssistancePartners()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

export const revalidate = 0;

const basePath = process.env.NEXT_PUBLIC_PATH;

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
    <FinancialAssistanceComponent
    banner={banner}
    introduction={introduction}
    financial_assistance_partners={financial_assistance_partners}
    />
  )
}
