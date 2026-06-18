import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getPlacementsSlider, getPlacementCorporateEngagement, getPlacementsTabs, getPlacementRecruitersIntroduction, getPlacementRecruiters, getPlacementsFeaturesIntroduction, getPlacementsFeatures, getPlacementsLatestBrochure, getPlacementsReportsIntroduction, getPlacementsReports, getPlacementsTestimonials, getPlacementsContactsIntroduction, getPlacementsContacts } from "@/lib/placements";

import type { Metadata } from "next";
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

export const revalidate = 300;

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
