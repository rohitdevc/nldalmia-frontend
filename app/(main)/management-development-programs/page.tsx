import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getWhyChooseIntroduction, getMDPProgramsIntroduction, getMDPPrograms, getMDPTestimonialsIntroduction, getMDPTestimonials, getMDPFAQsIntroduction, getMDPFAQs, getMDPEnquiry } from "@/lib/mdp";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import ManagementDevelopmentProgramsComponent from "@/components/pages/ManagementDevelopmentProgramsComponent";

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
  getMetaData("MDP"),
  getBanner("MDP"),
  getIntroduction(),
  getWhyChooseIntroduction(),
  getMDPProgramsIntroduction(),
  getMDPPrograms(),
  getMDPTestimonialsIntroduction(),
  getMDPTestimonials(),
  getMDPFAQsIntroduction(),
  getMDPFAQs(),
  getMDPEnquiry()
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
    <ManagementDevelopmentProgramsComponent
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
