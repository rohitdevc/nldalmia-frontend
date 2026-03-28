import { getFaculty } from "@/lib/faculty";

import type { Metadata } from "next";
import FacultyDetailsComponent from "@/components/pages/FacultyDetailsComponent";
import { redirect } from "next/navigation";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

type PageProps = {
  params: Promise<{
    "faculty-url-slug": string
  }>
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "faculty-url-slug": faculty_url_slug } = await params;

  const faculty = await getFaculty(faculty_url_slug);

  if(!faculty) redirect(process.env.NEXT_PUBLIC_PATH + 'faculty');

  return {
    title: faculty.meta_title,
    description: faculty.meta_description,
    alternates: {
      canonical: faculty.canonical_tag,
    },
    openGraph: {
      title: faculty.meta_title,
      description: faculty.meta_description,
      type: "website",
      url: faculty.canonical_tag,
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

  const faculty = await getFaculty(faculty_url_slug);

  return (
    <FacultyDetailsComponent
    faculty={faculty} />
  )
}
