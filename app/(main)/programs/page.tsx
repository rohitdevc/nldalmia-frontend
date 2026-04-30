import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getProgramsBlocks, getProgramsScholarshipIntroduction, getPrograms } from "@/lib/program";

import type { Metadata } from "next";
import ProgramsListingComponent from "@/components/pages/ProgramsListingComponent";

const [
  meta,
  banner,
  introduction,
  program_blocks,
  scholarship_introduction,
  programs
] = await Promise.all([
  getMetaData("Programs"),
  getBanner("Programs"),
  getIntroduction(),
  getProgramsBlocks(),
  getProgramsScholarshipIntroduction(),
  getPrograms()
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
    <ProgramsListingComponent
    banner={banner}
    introduction={introduction}
    program_blocks={program_blocks}
    scholarship_introduction={scholarship_introduction}
    programs={programs}
    />
  )
}
