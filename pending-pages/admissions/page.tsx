import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAdmissionsPrograms, getAdmissionsProcessIntroduction, getAdmissionsProcessInformation, getAdmissionsScholarshipIntroduction, getAdmissionsScholarshipTable, getAdmissionsTuitionIntroduction, getAdmissionsTuitionTable, getAdmissionsFinanceIntroduction, getFinancialAssistancePartners, getAdmissionsFAQsIntroduction, getAdmissionsFAQs, getAdmissionsBrochureIntroduction } from "@/lib/admission";

import type { Metadata } from "next";
import AdmissionComponent from "@/components/pages/AdmissionComponent";

const [
  meta,
  banner,
  introduction,
  admission_programs,
  admissions_process_introduction,
  admission_process,
  admissions_scholarship_introduction,
  admissions_scholarship_table,
  admissions_tuition_introduction,
  admissions_tuition_table,
  admissions_finance_introduction,
  financial_assistance_partners,
  admissions_faqs_introduction,
  admissions_faqs,
  admissions_brochure_introduction
] = await Promise.all([  
  getMetaData("Admissions"),
  getBanner("Admissions"),
  getIntroduction(),
  getAdmissionsPrograms(),
  getAdmissionsProcessIntroduction(),
  getAdmissionsProcessInformation(),
  getAdmissionsScholarshipIntroduction(),
  getAdmissionsScholarshipTable(),
  getAdmissionsTuitionIntroduction(),
  getAdmissionsTuitionTable(),
  getAdmissionsFinanceIntroduction(),
  getFinancialAssistancePartners(),
  getAdmissionsFAQsIntroduction(),
  getAdmissionsFAQs(),
  getAdmissionsBrochureIntroduction()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: meta.meta_title,
  description: meta.meta_description,
  alternates: {
    canonical: meta.canonical_tag
  },
  openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: meta.canonical_tag,
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
    <AdmissionComponent
    banner={banner}
    introduction={introduction}
    admission_programs={admission_programs}
    admissions_process_introduction={admissions_process_introduction}
    admission_process={admission_process}
    admissions_scholarship_introduction={admissions_scholarship_introduction}
    admissions_scholarship_table={admissions_scholarship_table}
    admissions_tuition_introduction={admissions_tuition_introduction}
    admissions_tuition_table={admissions_tuition_table}
    admissions_finance_introduction={admissions_finance_introduction}
    financial_assistance_partners={financial_assistance_partners}
    admissions_faqs_introduction={admissions_faqs_introduction}
    admissions_faqs={admissions_faqs}
    admissions_brochure_introduction={admissions_brochure_introduction}
    />
  )
}
