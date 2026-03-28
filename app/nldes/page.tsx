import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getNLDESObjectivesIntroduction, getNLDESObjectives, getNLDESInstitutesIntroduction, getNLDESInstitutes, getNLDESManagementIntroduction, getNLDESManagement, getNLDESSocialResponsibilityIntroduction, getNLDESSocialResponsibility, getNLDESCareersIntroduction, getNLDESCareers, getNLDESFooter } from "@/lib/nldes";

import type { Metadata } from "next";
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
