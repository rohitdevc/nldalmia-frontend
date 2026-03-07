//import { getMetaData, getBanner } from "@/lib/home";

import type { Metadata } from "next";
import FacultyDetailsComponent from "@/components/pages/FacultyDetailsComponent";

//const [ meta, banner ] = await Promise.all([ getMetaData(), getBanner() ]);

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

export const metadata: Metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: ""
  },
  openGraph: {
      title: "",
      description: "",
      type: "website",
      url: "",
      siteName: "NL Dalmia",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "",
      description: "",
      images: [""],
    },
};

export default async function Faculty({ params }: PageProps) {
  const { "faculty-url-slug": faculty_url_slug } = await params;

  return (
    <FacultyDetailsComponent faculty_url_slug={faculty_url_slug} />
  )
}
