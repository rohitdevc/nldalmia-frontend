import { getMetaData, getBanner } from "@/lib/common";
import { getMSRIntroduction, getMSRVerticalsIntroduction, getMSRVerticals, getMSRImpact, getMSRCaseStudiesIntroduction, getMSRCaseStudies, getMSRSDGGoalsIntroduction, getMSRSDGGoals, getMSRGalleryIntroduction, getMSRGallery, getMSRReportsIntroduction, getMSRReports, getMSRTestimonialsIntroduction, getMSRTestimonials, getMSRContributionIntroduction, getMSRContribution } from "@/lib/msr";

import type { Metadata } from "next";
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
