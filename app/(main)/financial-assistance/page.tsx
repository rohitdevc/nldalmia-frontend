import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getFinancialAssistancePartners } from "@/lib/financial-assistance";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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
    <FinancialAssistanceComponent
    banner={banner}
    introduction={introduction}
    financial_assistance_partners={financial_assistance_partners}
    />
  )
}
