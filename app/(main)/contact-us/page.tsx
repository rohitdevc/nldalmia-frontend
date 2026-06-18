import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getEnquiryReasons } from "@/lib/contact-us";

import type { Metadata } from "next";
import ContactUsComponent from "@/components/pages/ContactUsComponent";

const [
  meta,
  banner,
  introduction,
  enquiry_reasons
] = await Promise.all([
  getMetaData("Contact Us"),
  getBanner("Contact Us"),
  getIntroduction(),
  getEnquiryReasons()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_PATH;

const canonical_tag = basePath + meta.canonical_tag;

export const metadata: Metadata = {
  title: meta.meta_title,
  description: meta.meta_description,
  alternates: {
    canonical: canonical_tag
  },
  openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: banner.banner_image,
          width: 1200,
          height: 630,
          alt: meta.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.meta_title,
      description: meta.meta_description,
      images: [banner.banner_image],
    },
};

export default async function Page() {
  return (
    <ContactUsComponent
    banner={banner}
    introduction={introduction}
    enquiry_reasons={enquiry_reasons} />
  )
}
