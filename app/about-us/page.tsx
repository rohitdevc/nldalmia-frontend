//import { getMetaData, getBanner } from "@/lib/home";

import type { Metadata } from "next";
import AboutUsComponent from "@/components/pages/AboutUsComponent";

//const [ meta, banner ] = await Promise.all([ getMetaData(), getBanner() ]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

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

export default async function AboutUs() {
  return (
    <AboutUsComponent />
  )
}
