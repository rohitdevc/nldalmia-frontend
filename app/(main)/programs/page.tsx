import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getProgramsBlocks, getProgramsScholarshipIntroduction, getPrograms } from "@/lib/program";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import ProgramsListingComponent from "@/components/pages/ProgramsListingComponent";
import { Suspense } from "react";


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
    <Suspense fallback={<div>Loading programs...</div>}>
      <ProgramsListingComponent
      banner={banner}
      introduction={introduction}
      program_blocks={program_blocks}
      scholarship_introduction={scholarship_introduction}
      programs={programs}
      />
    </Suspense>
  )
}
