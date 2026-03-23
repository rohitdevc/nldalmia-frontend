import { getTicker, getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getLifeAtNLDEvents, getLifeAtNLDAchievementsIntroduction, getLifeAtNLDAchievements, getLifeAtNLDStudentClubIntroduction, getLifeAtNLDStudentClubs, getLifeAtNLDGallery, getLifeAtNLDInstagramIntroduction, getLifeAtNLDInsideNLDIntroduction, getLifeAtNLDInsideNLD, getLifeAtNLDMagazinesIntroduction, getLifeAtNLDMagazines } from "@/lib/life-at-nld";
import { getAboutUsFounderQuote } from "@/lib/about-us";

import type { Metadata } from "next";
import LifeAtNLDComponent from "@/components/pages/LifeAtNLDComponent";

const [
  ticker,
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
  magazines
] = await Promise.all([
  getTicker(),
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
  getLifeAtNLDMagazines()
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
    <LifeAtNLDComponent
    ticker={ticker}
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
    />
  )
}
