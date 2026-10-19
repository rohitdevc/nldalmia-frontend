import { getMetaData, getBanner } from "@/lib/common";
import { getInstitutionalPublicationCategories, getInstitutionalPublications } from "@/lib/institutional-publications";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import InstitutionalPublicationsComponent from "@/components/pages/InstitutionalPublicationsComponent";

const [
  meta,
  banner,
  institutional_publications_categories,
  institutional_publications
] = await Promise.all([
  getMetaData("Institutional Publications"),
  getBanner("Institutional Publications"),
  getInstitutionalPublicationCategories(),
  getInstitutionalPublications()
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
    <InstitutionalPublicationsComponent
    banner={banner}
    institutional_publications_categories={institutional_publications_categories}
    institutional_publications={institutional_publications}
    />
  )
}
