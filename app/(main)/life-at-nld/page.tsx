import { getMetaData, getBanner, getInstagramFeed } from "@/lib/common";
import { getIntroduction, getLifeAtNLDEvents, getLifeAtNLDAchievementsIntroduction, getLifeAtNLDAchievements, getLifeAtNLDStudentClubIntroduction, getLifeAtNLDStudentClubs, getLifeAtNLDGallery, getLifeAtNLDInstagramIntroduction, getLifeAtNLDInsideNLDIntroduction, getLifeAtNLDInsideNLD, getLifeAtNLDMagazinesIntroduction, getLifeAtNLDMagazines } from "@/lib/life-at-nld";
import { getAboutUsFounderQuote } from "@/lib/about-us";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import LifeAtNLDComponent from "@/components/pages/LifeAtNLDComponent";

const [
  meta,
  banner,
  introduction,
  events,
  achievements_introduction,
  achievements,
  student_club_introduction,
  student_clubs,
  gallery,
  founder_quote,
  instagram_introduction,
  inside_nld_introduction,
  inside_nld,
  magazines_introduction,
  magazines,
  instagram_feed
] = await Promise.all([
  getMetaData("Life@NLD"),
  getBanner("Life@NLD"),
  getIntroduction(),
  getLifeAtNLDEvents(),
  getLifeAtNLDAchievementsIntroduction(),
  getLifeAtNLDAchievements(),
  getLifeAtNLDStudentClubIntroduction(),
  getLifeAtNLDStudentClubs(),
  getLifeAtNLDGallery(),
  getAboutUsFounderQuote(),
  getLifeAtNLDInstagramIntroduction(),
  getLifeAtNLDInsideNLDIntroduction(),
  getLifeAtNLDInsideNLD(),
  getLifeAtNLDMagazinesIntroduction(),
  getLifeAtNLDMagazines(),
  getInstagramFeed()
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
    <LifeAtNLDComponent
    banner={banner}
    introduction={introduction}
    events={events}
    achievements_introduction={achievements_introduction}
    achievements={achievements}
    student_club_introduction={student_club_introduction}
    student_clubs={student_clubs}
    gallery={gallery}
    founder_quote={founder_quote}
    instagram_introduction={instagram_introduction}
    inside_nld_introduction={inside_nld_introduction}
    inside_nld={inside_nld}
    magazines_introduction={magazines_introduction}
    magazines={magazines}
    instagram_feed={instagram_feed}
    />
  )
}
