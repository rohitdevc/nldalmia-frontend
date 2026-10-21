import { getMetaData, getBanner } from "@/lib/common";
import { getFaculties } from "@/lib/faculty";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import FacultyComponent from "@/components/pages/FacultyComponent";

const [
  meta,
  banner,
  faculties
] = await Promise.all([
  getMetaData("Faculty"),
  getBanner("Faculty"),
  getFaculties()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: '#800000' },
    { media: "(prefers-color-scheme: dark)", color: '#800000' },
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
    <FacultyComponent
    banner={banner}
    faculties={faculties}
    />
  )
}
