import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getPlacementsSlider, getPlacementCorporateEngagement, getPlacementsTabs, getPlacementRecruitersIntroduction, getPlacementRecruiters, getPlacementsFeaturesIntroduction, getPlacementsFeatures, getPlacementsLatestBrochure, getPlacementsReportsIntroduction, getPlacementsReports, getPlacementsTestimonials, getPlacementsContactsIntroduction, getPlacementsContacts } from "@/lib/placements";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import PlacementsComponent from "@/components/pages/PlacementsComponent";

const [
  meta,
  banner,
  introduction,
  sliders,
  corporate_engagements,
  placement_content,
  recruiters_introduction,
  recruiters,
  features_introduction,
  placement_features,
  placement_latest_brochure,
  reports_introduction,
  placement_reports,
  testimonials,
  contacts_introduction,
  contacts
] = await Promise.all([
  getMetaData("Placements"),
  getBanner("Placements"),
  getIntroduction(),
  getPlacementsSlider(),
  getPlacementCorporateEngagement(),
  getPlacementsTabs(),
  getPlacementRecruitersIntroduction(),
  getPlacementRecruiters(),
  getPlacementsFeaturesIntroduction(),
  getPlacementsFeatures(),
  getPlacementsLatestBrochure(),
  getPlacementsReportsIntroduction(),
  getPlacementsReports(),
  getPlacementsTestimonials(),
  getPlacementsContactsIntroduction(),
  getPlacementsContacts()
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
    <PlacementsComponent
    banner={banner}
    introduction={introduction}
    sliders={sliders}
    corporate_engagements={corporate_engagements}
    placement_content={placement_content}
    recruiters_introduction={recruiters_introduction}
    recruiters={recruiters}
    features_introduction={features_introduction}
    placement_features={placement_features}
    placement_latest_brochure={placement_latest_brochure}
    reports_introduction={reports_introduction}
    placement_reports={placement_reports}
    testimonials={testimonials}
    contacts_introduction={contacts_introduction}
    contacts={contacts}
    />
  )
}
