import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getScholarshipsMerit, getScholarshipsInclusivity, getScholarshipsSecondYear, getScholarshipsReportsIntroduction, getScholarshipsReports } from "@/lib/scholarships";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import ScholarshipComponent from "@/components/pages/ScholarshipComponent";

const [
  meta,
  banner,
  introduction,
  scholarship_merit,
  scholarship_inclusivity,
  scholarship_second_year,
  reports_introduction,
  reports
] = await Promise.all([
  getMetaData("Scholarship"),
  getBanner("Scholarship"),
  getIntroduction(),
  getScholarshipsMerit(),
  getScholarshipsInclusivity(),
  getScholarshipsSecondYear(),
  getScholarshipsReportsIntroduction(),
  getScholarshipsReports()
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
    <ScholarshipComponent
    banner={banner}
    introduction={introduction}
    scholarship_merit={scholarship_merit}
    scholarship_inclusivity={scholarship_inclusivity}
    scholarship_second_year={scholarship_second_year}
    reports_introduction={reports_introduction}
    reports={reports}
    />
  )
}
