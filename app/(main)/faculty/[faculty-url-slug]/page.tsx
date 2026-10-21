import { getFaculties, getFaculty } from "@/lib/faculty";
import type { Metadata } from "next";

import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import FacultyDetailsComponent from "@/components/pages/FacultyDetailsComponent";
import { notFound, permanentRedirect, redirect } from "next/navigation";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
  ],
};

type PageProps = {
  params: Promise<{
    "faculty-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const faculties = await getFaculties();

  return faculties.map((faculty) => ({
    "faculty-url-slug": faculty.faculty_url_slug
  }));
}

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
    permanentRedirect('/faculty');
  };

  const canonical_tag = basePath + faculty.canonical_tag;

  const meta = {
    meta_title: faculty.meta_title,
    meta_description: faculty.meta_description,
    canonical_tag: faculty.canonical_tag
  }

  const banner = {
    banner_image: faculty.banner_image
  }

  return createMetadata({
      meta,
      banner,
      canonical_tag
    });
}

export default async function Page({ params }: PageProps) {
  const { "faculty-url-slug": faculty_url_slug } = await params;

  const faculty = await loadFaculty(faculty_url_slug);

  if(!faculty) {
    permanentRedirect('/faculty');
  };

  return (
    <FacultyDetailsComponent
    faculty={faculty} />
  )
}
