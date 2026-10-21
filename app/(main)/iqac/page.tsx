import { getMetaData, getBanner } from "@/lib/common";
import { getIQACCategories, getIQAC, getIQACPOE } from "@/lib/iqac";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import IQACComponent from "@/components/pages/IQACComponent";

const [
  meta,
  banner,
  iqac_categories,
  iqac,
  iqac_poe
] = await Promise.all([
  getMetaData("IQAC"),
  getBanner("IQAC"),
  getIQACCategories(),
  getIQAC(),
  getIQACPOE()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
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
    <IQACComponent
    banner={banner}
    iqac_categories={iqac_categories}
    iqac_pdfs={iqac}
    iqac_poe={iqac_poe}
    />
  )
}
