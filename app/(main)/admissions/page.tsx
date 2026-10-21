import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAdmissionsPrograms, getAdmissionsHelpIntroduction, getAdmissionsHelpOptions, getAdmissionsProcessIntroduction, getAdmissionsProcessInformation, getAdmissionsScholarshipIntroduction, getAdmissionsScholarshipTable, getAdmissionsTuitionIntroduction, getAdmissionsTuitionTable, getAdmissionsFinanceIntroduction, getFinancialAssistancePartners, getAdmissionsFAQsIntroduction, getAdmissionsFAQs, getAdmissionsBrochureIntroduction } from "@/lib/admission";
import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import AdmissionComponent from "@/components/pages/AdmissionComponent";

const [
  meta,
  banner,
  introduction,
  admission_programs,
  admission_help_introduction,
  admission_help_options,
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
  getAdmissionsHelpIntroduction(),
  getAdmissionsHelpOptions(),
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
    <AdmissionComponent
    banner={banner}
    introduction={introduction}
    admission_programs={admission_programs}
    admission_help_introduction={admission_help_introduction}
    admission_help_options={admission_help_options}
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
