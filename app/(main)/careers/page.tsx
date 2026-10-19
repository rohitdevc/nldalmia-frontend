import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getCareersOurValuesIntroduction, getCareersOurValues, getCareersMilestones, getCareersAchievementsIntroduction, getCareersAchievements, getCareersVacanciesIntroduction, getCareersVacancies, getCareersApplicationIntroduction, getCareersApplication, getCareersProgramApplication } from "@/lib/career";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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
