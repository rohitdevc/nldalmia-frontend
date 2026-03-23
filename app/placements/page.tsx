import { getTicker, getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getPlacementsSlider, getPlacementCorporateEngagement, getPlacementsTabs, getPlacementRecruitersIntroduction, getPlacementRecruiters, getPlacementsFeaturesIntroduction, getPlacementsFeatures, getPlacementsTestimonials, getPlacementsContactsIntroduction, getPlacementsContacts } from "@/lib/placements";

import type { Metadata } from "next";
import PlacementsComponent from "@/components/pages/PlacementsComponent";

const [
  ticker,
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
  testimonials,
  contacts_introduction,
  contacts
] = await Promise.all([
  getTicker(),
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
  getPlacementsTestimonials(),
  getPlacementsContactsIntroduction(),
  getPlacementsContacts()
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
    <PlacementsComponent
    ticker={ticker}
    banner={banner}
    introduction={introduction}
    sliders={sliders}
    corporate_engagements={corporate_engagements}
    placement_content={placement_content}
    recruiters_introduction={recruiters_introduction}
    recruiters={recruiters}
    features_introduction={features_introduction}
    placement_features={placement_features}
    testimonials={testimonials}
    contacts_introduction={contacts_introduction}
    contacts={contacts}
    />
  )
}
