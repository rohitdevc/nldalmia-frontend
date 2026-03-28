import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getCareersOurValuesIntroduction, getCareersOurValues, getCareersMilestones, getCareersAchievementsIntroduction, getCareersAchievements, getCareersVacanciesIntroduction, getCareersVacancies, getCareersApplicationIntroduction, getCareersApplication, getCareersProgramApplication } from "@/lib/career";

import type { Metadata } from "next";
import CareerComponent from "@/components/pages/CareerComponent";

const [
  meta,
  banner,
  introduction,
  careers_our_values_introduction,
  careers_our_values,
  careers_milestones,
  careers_achievements_introduction,
  careers_achievements,
  careers_vacancies_introduction,
  careers_vacancies,
  careers_application_introduction,
  applications,
  careers_program_application
] = await Promise.all([
  getMetaData("Careers"),
  getBanner("Careers"),
  getIntroduction(),
  getCareersOurValuesIntroduction(),
  getCareersOurValues(),
  getCareersMilestones(),
  getCareersAchievementsIntroduction(),
  getCareersAchievements(),
  getCareersVacanciesIntroduction(),
  getCareersVacancies(),
  getCareersApplicationIntroduction(),
  getCareersApplication(),
  getCareersProgramApplication()
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
    <CareerComponent
    banner={banner}
    introduction={introduction}
    careers_our_values_introduction={careers_our_values_introduction}
    careers_our_values={careers_our_values}
    careers_milestones={careers_milestones}
    careers_achievements_introduction={careers_achievements_introduction}
    careers_achievements={careers_achievements}
    careers_vacancies_introduction={careers_vacancies_introduction}
    careers_vacancies={careers_vacancies}
    careers_application_introduction={careers_application_introduction}
    applications={applications}
    careers_program_application={careers_program_application}
    />
  )
}
