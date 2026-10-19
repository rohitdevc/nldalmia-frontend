import { getMetaData, getBanner, getInstagramFeed, getCommonPrograms } from "@/lib/common";
import { getIntroduction, getHomeCareerFinder, getHomeCareerPaths, getHomeProgramsIntroduction, getHomeVideoSection, getHomePlacementPartnersIntroduction, getHomeTestimonialsIntroduction, getHomeTestimonials, getHomeEventsIntroduction, getHomeAwardsIntroduction, getHomeAwards, getMediaIntroduction, getMedia, getHomeBlogIntroduction, getHomeBlog, getHomeInstagramIntroduction, getAnnouncements, getHomeEvents } from "@/lib/home";

import { getLifeAtNLDAchievements } from "@/lib/life-at-nld";

import HomeComponent from "@/components/pages/HomeComponent";
import { getPlacementRecruiters } from "@/lib/placements";
import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

const [
  meta,
  banner,
  announcements,
  introduction,
  career_finder,
  career_paths,
  program_introduction,
  programs,
  video,
  placement_partners_introduction,
  placement_recruiters,
  testimonials_introduction,
  testimonials,
  events_introduction,
  events,
  achievements,
  awards_introduction,
  awards,
  media_introduction,
  media,
  blog_introduction,
  blogs,
  instagram_introduction,
  instagram_feed
] = await Promise.all([
  getMetaData("Home"),
  getBanner("Home"),
  getAnnouncements(),
  getIntroduction(),
  getHomeCareerFinder(),
  getHomeCareerPaths(),
  getHomeProgramsIntroduction(),
  getCommonPrograms(),
  getHomeVideoSection(),
  getHomePlacementPartnersIntroduction(),
  getPlacementRecruiters(),
  getHomeTestimonialsIntroduction(),
  getHomeTestimonials(),
  getHomeEventsIntroduction(),
  getHomeEvents(),
  getLifeAtNLDAchievements(),
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
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

const canonical_tag = basePath ?? "/";

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page() {
  return (
    <HomeComponent
    banner={banner}
    announcements={announcements}
    introduction={introduction}
    career_finder={career_finder}
    career_paths={career_paths}
    program_introduction={program_introduction}
    programs={programs}
    video={video}
    placement_partners_introduction={placement_partners_introduction}
    placement_recruiters={placement_recruiters}
    testimonials_introduction={testimonials_introduction}
    testimonials={testimonials}
    events_introduction={events_introduction}
    events={events}
    achievements={achievements}
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
