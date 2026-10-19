import { getMetaData, getBanner } from "@/lib/common";

import "./style.css"
import IFRC2027 from "@/components/pages/IFRC2027";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

const [
  meta,
  banner
] = await Promise.all([
  getMetaData("IFRC 2027"),
  getBanner("Home")
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
    <IFRC2027 />
  )
}
