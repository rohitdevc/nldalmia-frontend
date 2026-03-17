import { getMetaData, getBanner } from "@/lib/common";
import { getHomeIntroduction, getHomeCareerFinder, getHomeCareerPaths, getHomeProgramsIntroduction, getHomePrograms, getHomeVideoSection, getHomePlacementPartnersIntroduction, getHomePlacementPartners, getHomeTestimonialsIntroduction, getHomeTestimonials } from "@/lib/home";

import type { Metadata } from "next";
import HomeComponent from "@/components/pages/HomeComponent";

const [
  meta,
  banner,
  introduction,
  career_finder,
  career_paths,
  program_introduction,
  programs,
  video,
  placement_partners_introduction,
  placement_partners,
  testimonials_introduction,
  testimonials
] = await Promise.all([
  getMetaData("Home"),
  getBanner("Home"),
  getHomeIntroduction(),
  getHomeCareerFinder(),
  getHomeCareerPaths(),
  getHomeProgramsIntroduction(),
  getHomePrograms(),
  getHomeVideoSection(),
  getHomePlacementPartnersIntroduction(),
  getHomePlacementPartners(),
  getHomeTestimonialsIntroduction(),
  getHomeTestimonials()
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
    <HomeComponent
    banner={banner}
    introduction={introduction}
    career_finder={career_finder}
    career_paths={career_paths}
    program_introduction={program_introduction}
    programs={programs}
    video={video}
    placement_partners_introduction={placement_partners_introduction}
    placement_partners={placement_partners}
    testimonials_introduction={testimonials_introduction}
    testimonials={testimonials}
    />
  )
}
