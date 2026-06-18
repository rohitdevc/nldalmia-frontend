import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getWhyChooseIntroduction, getFDPProgramsIntroduction, getFDPPrograms, getFDPTestimonialsIntroduction, getFDPTestimonials, getFDPFAQsIntroduction, getFDPFAQs, getFDPEnquiry } from "@/lib/fdp";

import type { Metadata } from "next";
import FacultyDevelopmentProgramsComponent from "@/components/pages/FacultyDevelopmentProgramsComponent";

const [
  meta,
  banner,
  introduction,
  why_choose_introduction,
  programs_introduction,
  programs,
  testimonial_introduction,
  testimonials,
  faqs_introduction,
  faqs,
  enquiry
] = await Promise.all([
  getMetaData("FDP"),
  getBanner("FDP"),
  getIntroduction(),
  getWhyChooseIntroduction(),
  getFDPProgramsIntroduction(),
  getFDPPrograms(),
  getFDPTestimonialsIntroduction(),
  getFDPTestimonials(),
  getFDPFAQsIntroduction(),
  getFDPFAQs(),
  getFDPEnquiry()
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
    <FacultyDevelopmentProgramsComponent
    banner={banner}
    introduction={introduction}
    why_choose_introduction={why_choose_introduction}
    programs_introduction={programs_introduction}
    programs={programs}
    testimonial_introduction={testimonial_introduction}
    testimonials={testimonials}
    faqs_introduction={faqs_introduction}
    faqs={faqs}
    enquiry={enquiry}
    />
  )
}
