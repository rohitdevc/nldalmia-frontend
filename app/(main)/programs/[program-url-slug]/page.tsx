import { getProgram } from "@/lib/program";

import type { Metadata } from "next";
import ProgramComponent from "@/components/pages/ProgramComponent";
import { notFound, permanentRedirect } from "next/navigation";

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

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_PATH;

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

  return {
    title: program.meta_title,
    description: program.meta_description,
    alternates: {
      canonical: canonical_tag,
    },
    openGraph: {
      title: program.meta_title,
      description: program.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: program.og_image,
          width: 1200,
          height: 630,
          alt: program.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: program.meta_title,
      description: program.meta_description,
      images: [program.og_image],
    },
  };
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
