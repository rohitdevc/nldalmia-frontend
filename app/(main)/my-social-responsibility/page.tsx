import { getMetaData, getBanner } from "@/lib/common";
import { getMSRIntroduction, getMSRVerticalsIntroduction, getMSRVerticals, getMSRImpact, getMSRCaseStudiesIntroduction, getMSRCaseStudies, getMSRSDGGoalsIntroduction, getMSRSDGGoals, getMSRGalleryIntroduction, getMSRGallery, getMSRReportsIntroduction, getMSRReports, getMSRTestimonialsIntroduction, getMSRTestimonials, getMSRContributionIntroduction, getMSRContribution } from "@/lib/msr";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import MSRComponent from "@/components/pages/MSRComponent";

const [
  meta,
  banner,
  introduction,
  verticals_intro,
  verticals,
  impact,
  case_studies_intro,
  case_studies,
  sdg_goals_intro,
  sdg_goals,
  gallery_intro,
  gallery,
  reports_intro,
  reports,
  testimonials_intro,
  testimonials,
  contribution_intro,
  contribution
] = await Promise.all([
  getMetaData("MSR"),
  getBanner("MSR"),
  getMSRIntroduction(),
  getMSRVerticalsIntroduction(),
  getMSRVerticals(),
  getMSRImpact(),
  getMSRCaseStudiesIntroduction(),
  getMSRCaseStudies(),
  getMSRSDGGoalsIntroduction(),
  getMSRSDGGoals(),
  getMSRGalleryIntroduction(),
  getMSRGallery(),
  getMSRReportsIntroduction(),
  getMSRReports(),
  getMSRTestimonialsIntroduction(),
  getMSRTestimonials(),
  getMSRContributionIntroduction(),
  getMSRContribution()
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
    <MSRComponent
    banner={banner}
    introduction={introduction}
    verticals_intro={verticals_intro}
    verticals={verticals}
    impact={impact}
    case_studies_intro={case_studies_intro}
    case_studies={case_studies}
    sdg_goals_intro={sdg_goals_intro}
    sdg_goals={sdg_goals}
    gallery_intro={gallery_intro}
    gallery={gallery}
    reports_intro={reports_intro}
    reports={reports}
    testimonials_intro={testimonials_intro}
    testimonials={testimonials}
    contribution_intro={contribution_intro}
    contribution={contribution}
    />
  )
}
