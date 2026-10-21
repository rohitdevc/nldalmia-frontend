import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAboutUsObjectives, getAboutUsTimeline, getAboutUsFounderQuote, getAboutUsManagementQuotes, getManagingCouncilIntroduction, getAboutUsManagingCouncil, getAboutUsGoverningCouncilIntroduction, getAboutUsGoverningCouncil, getAboutUsVideoSection, getAboutUsInternationalUniversitiesIntroduction, getAboutUsInternationalUniversities } from "@/lib/about-us";
import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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
