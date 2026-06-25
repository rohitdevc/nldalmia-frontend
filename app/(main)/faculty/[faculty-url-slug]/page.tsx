import { getFaculty } from "@/lib/faculty";

import type { Metadata } from "next";
import FacultyDetailsComponent from "@/components/pages/FacultyDetailsComponent";
import { notFound, permanentRedirect } from "next/navigation";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

type PageProps = {
  params: Promise<{
    "faculty-url-slug": string
  }>
}

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

let facultyCache = new Map();

export async function loadFaculty(slug: string) {
  if (facultyCache.has(slug)) return facultyCache.get(slug);
  
  const faculty = await getFaculty(slug);

  facultyCache.set(slug, faculty);

  return faculty;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "faculty-url-slug": faculty_url_slug } = await params;

  const faculty = await loadFaculty(faculty_url_slug);

  if(!faculty) {
    notFound()
  };

  const canonical_tag = basePath + faculty.canonical_tag;

  return {
    title: faculty.meta_title,
    description: faculty.meta_description,
    alternates: {
      canonical: canonical_tag,
    },
    openGraph: {
      title: faculty.meta_title,
      description: faculty.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: faculty.faculty_thumbnail,
          width: 1200,
          height: 630,
          alt: faculty.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: faculty.meta_title,
      description: faculty.meta_description,
      images: [faculty.faculty_thumbnail],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { "faculty-url-slug": faculty_url_slug } = await params;

  const faculty = await loadFaculty(faculty_url_slug);

  if(!faculty) {
    notFound()
  };

  return (
    <FacultyDetailsComponent
    faculty={faculty} />
  )
}
