import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getProgramsBlocks, getProgramsScholarshipIntroduction, getPrograms } from "@/lib/program";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
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

type PageProps = {
  searchParams: Promise<{
    career_path?: string | string[];
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  const selectedCareerPaths = params.career_path
      ? Array.isArray(params.career_path)
      ? params.career_path
      : [params.career_path]
    : [];
    
  return (
    <ProgramsListingComponent
    banner={banner}
    introduction={introduction}
    program_blocks={program_blocks}
    scholarship_introduction={scholarship_introduction}
    programs={programs}
    selectedCareerPaths={selectedCareerPaths}
    />
  )
}
