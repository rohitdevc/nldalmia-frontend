import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getNLDESObjectivesIntroduction, getNLDESObjectives, getNLDESInstitutesIntroduction, getNLDESInstitutes, getNLDESManagementIntroduction, getNLDESManagement, getNLDESSocialResponsibilityIntroduction, getNLDESSocialResponsibility, getNLDESCareersIntroduction, getNLDESCareers, getNLDESFooter } from "@/lib/nldes";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import NLDESComponent from "@/components/pages/NLDESComponent";

const [
  meta,
  banner,
  introduction,
  objectives_introduction,
  objectives,
  institutes_introduction,
  institutes,
  management_introduction,
  management,
  social_responsibility_introduction,
  social_responsibilities,
  careers_introduction,
  careers,
  footer
] = await Promise.all([
  getMetaData("NLDES"),
  getBanner("NLDES"),
  getIntroduction(),
  getNLDESObjectivesIntroduction(),
  getNLDESObjectives(),
  getNLDESInstitutesIntroduction(),
  getNLDESInstitutes(),
  getNLDESManagementIntroduction(),
  getNLDESManagement(),
  getNLDESSocialResponsibilityIntroduction(),
  getNLDESSocialResponsibility(),
  getNLDESCareersIntroduction(),
  getNLDESCareers(),
  getNLDESFooter()
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
    <NLDESComponent
    banner={banner}
    introduction={introduction}
    objectives_introduction={objectives_introduction}
    objectives={objectives}
    institutes_introduction={institutes_introduction}
    institutes={institutes}
    management_introduction={management_introduction}
    management={management}
    social_responsibility_introduction={social_responsibility_introduction}
    social_responsibilities={social_responsibilities}
    careers_introduction={careers_introduction}
    careers={careers}
    footer={footer}
    />
  )
}
