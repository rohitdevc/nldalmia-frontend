import { getTicker, getMetaData, getBanner, getInstagramFeed } from "@/lib/common";
import { getIntroduction, getHomeCareerFinder, getHomeCareerPaths, getHomeProgramsIntroduction, getHomePrograms, getHomeVideoSection, getHomePlacementPartnersIntroduction, getHomePlacementPartners, getHomeTestimonialsIntroduction, getHomeTestimonials, getHomeEventsIntroduction, getHomeEvents, getHomeAwardsIntroduction, getHomeAwards, getMediaIntroduction, getMedia, getHomeBlogIntroduction, getHomeBlog, getHomeInstagramIntroduction } from "@/lib/home";

import type { Metadata } from "next";
import HomeComponent from "@/components/pages/HomeComponent";

const [
  ticker,
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
  testimonials,
  events_introduction,
  events,
  awards_introduction,
  awards,
  media_introduction,
  media,
  blog_introduction,
  blogs,
  instagram_introduction,
  instagram_feed
] = await Promise.all([
  getTicker(),
  getMetaData("Home"),
  getBanner("Home"),
  getIntroduction(),
  getHomeCareerFinder(),
  getHomeCareerPaths(),
  getHomeProgramsIntroduction(),
  getHomePrograms(),
  getHomeVideoSection(),
  getHomePlacementPartnersIntroduction(),
  getHomePlacementPartners(),
  getHomeTestimonialsIntroduction(),
  getHomeTestimonials(),
  getHomeEventsIntroduction(),
  getHomeEvents(),
  getHomeAwardsIntroduction(),
  getHomeAwards(),
  getMediaIntroduction(),
  getMedia(),
  getHomeBlogIntroduction(),
  getHomeBlog(),
  getHomeInstagramIntroduction(),
  getInstagramFeed()
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
    ticker={ticker}
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
    events_introduction={events_introduction}
    events={events}
    awards_introduction={awards_introduction}
    awards={awards}
    media_introduction={media_introduction}
    media={media}
    blog_introduction={blog_introduction}
    blogs={blogs}
    instagram_introduction={instagram_introduction}
    instagram_feed={instagram_feed}
    />
  )
}
