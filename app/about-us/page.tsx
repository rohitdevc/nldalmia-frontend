import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAboutUsObjectives, getAboutUsTimeline, getAboutUsFounderQuote, getAboutUsManagementQuotes, getManagingCouncilIntroduction, getAboutUsManagingCouncil, getAboutUsGoverningCouncilIntroduction, getAboutUsGoverningCouncil, getAboutUsVideoSection, getAboutUsInternationalUniversitiesIntroduction, getAboutUsInternationalUniversities } from "@/lib/about-us";

import type { Metadata } from "next";
import AboutUsComponent from "@/components/pages/AboutUsComponent";

const [
  meta,
  banner,
  introduction,
  objectives,
  timeline,
  founder_quote,
  management_quotes,
  managing_council_introduction,
  managing_council,
  governing_council_introduction,
  governing_council,
  video_section,
  international_universities_introduction,
  international_universities
] = await Promise.all([
  getMetaData("About Us"),
  getBanner("About Us"),
  getIntroduction(),
  getAboutUsObjectives(),
  getAboutUsTimeline(),
  getAboutUsFounderQuote(),
  getAboutUsManagementQuotes(),
  getManagingCouncilIntroduction(),
  getAboutUsManagingCouncil(),
  getAboutUsGoverningCouncilIntroduction(),
  getAboutUsGoverningCouncil(),
  getAboutUsVideoSection(),
  getAboutUsInternationalUniversitiesIntroduction(),
  getAboutUsInternationalUniversities()
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
    <AboutUsComponent
    banner={banner}
    introduction={introduction}
    objectives={objectives}
    timeline={timeline}
    founder_quote={founder_quote}
    management_quotes={management_quotes}
    managing_council_introduction={managing_council_introduction}
    managing_council={managing_council}
    governing_council_introduction={governing_council_introduction}
    governing_council={governing_council}
    video_section={video_section}
    international_universities_introduction={international_universities_introduction}
    international_universities={international_universities}
    />
  )
}
