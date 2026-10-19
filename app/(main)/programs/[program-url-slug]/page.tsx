import { getPrograms, getProgram } from "@/lib/program";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import ProgramComponent from "@/components/pages/ProgramComponent";
import { notFound } from "next/navigation";

export const viewport = {
  themeColor: [
    { program: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { program: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

type PageProps = {
  params: Promise<{
    "program-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const programs = await getPrograms();

  return programs.map((program) => ({
    "program-url-slug": program.program_url_slug,
  }));
}

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

let programCache = new Map();

export async function loadProgram(slug: string) {
  if (programCache.has(slug)) return programCache.get(slug);
  
  const program = await getProgram(slug);

  programCache.set(slug, program);

  return program;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "program-url-slug": program_url_slug } = await params;

  const program = await loadProgram(program_url_slug);

  if(!program) {
    notFound()
  };

  const canonical_tag = basePath + program.canonical_tag;

  const meta = {
    meta_title: program.meta_title,
    meta_description: program.meta_description,
    canonical_tag: program.canonical_tag
  }

  const banner = {
    banner_image: program.banner_image
  }

  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page({ params }: PageProps) {
  const { "program-url-slug": program_url_slug } = await params;

  if(!program_url_slug) { return false };

  const program = await loadProgram(program_url_slug);

  if(!program) {
    notFound()
  };

  return (
    <ProgramComponent
    program={program} />
  )
}
