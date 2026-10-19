import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getWhyChooseIntroduction, getFDPProgramsIntroduction, getFDPPrograms, getFDPTestimonialsIntroduction, getFDPTestimonials, getFDPFAQsIntroduction, getFDPFAQs, getFDPEnquiry } from "@/lib/fdp";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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
