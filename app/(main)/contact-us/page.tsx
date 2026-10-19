import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getEnquiryReasons } from "@/lib/contact-us";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

const canonical_tag = basePath + meta.canonical_tag;

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page() {
  return (
    <ContactUsComponent
    banner={banner}
    introduction={introduction}
    enquiry_reasons={enquiry_reasons} />
  )
}
