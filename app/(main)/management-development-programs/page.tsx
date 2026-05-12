import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getWhyChooseIntroduction, getMDPProgramsIntroduction, getMDPPrograms, getMDPTestimonialsIntroduction, getMDPTestimonials, getMDPFAQsIntroduction, getMDPFAQs, getMDPEnquiry } from "@/lib/mdp";

import type { Metadata } from "next";
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
