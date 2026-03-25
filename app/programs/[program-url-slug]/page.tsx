import { getTicker } from "@/lib/common";
import { getProgram } from "@/lib/program";

import type { Metadata } from "next";
import ProgramComponent from "@/components/pages/ProgramComponent";
import { redirect } from "next/navigation";

const [ ticker ] = await Promise.all([
  getTicker()
])

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

type PageProps = {
  params: Promise<{
    "program-url-slug": string
  }>
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "program-url-slug": program_url_slug } = await params;

  const program = await getProgram(program_url_slug);

  if(!program) redirect(process.env.NEXT_PUBLIC_PATH + "programs");

  return {
    title: program.meta_title,
    description: program.meta_description,
    alternates: {
      canonical: program.canonical_tag,
    },
    openGraph: {
      title: program.meta_title,
      description: program.meta_description,
      type: "website",
      url: program.canonical_tag,
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

  const program = await getProgram(program_url_slug);

  if(!program) return false;

  return (
    <ProgramComponent
    ticker={ticker}
    program={program} />
  )
}
