"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    AdmissionPrograms,
    AdmissionHelpOptions,
    AdmissionProcessInformation,
    FinancialPartner,
    FAQs
} from "@/types/api";
import { AdmissionDownloadBrochure } from "@/types/forms";

export const getIntroduction = async () => apiFetch<IntroProps>(`admissions/introduction`, {
    method: "GET"
});

export const getAdmissionsPrograms = async () => apiFetch<AdmissionPrograms[]>(`admissions/programs`, {
    method: "GET"
});

export const getAdmissionsHelpIntroduction = async () => apiFetch<IntroProps>(`admissions/help/introduction`, {
    method: "GET"
});

export const getAdmissionsHelpOptions = async () => apiFetch<AdmissionHelpOptions[]>(`admissions/help/options`, {
    method: "GET"
});

export const getAdmissionsProcessIntroduction = async () => apiFetch<IntroProps>(`admissions/process/introduction`, {
    method: "GET"
});

export const getAdmissionsProcessInformation = async () => apiFetch<AdmissionProcessInformation[]>(`admissions/process/information`, {
    method: "GET"
});

export const getAdmissionsScholarshipIntroduction = async () => apiFetch<IntroProps>(`admissions/scholarship/introduction`, {
    method: "GET"
});

export const getAdmissionsScholarshipTable = async () => apiFetch<IntroProps>(`admissions/scholarship/table`, {
    method: "GET"
});

export const getAdmissionsTuitionIntroduction = async () => apiFetch<IntroProps>(`admissions/tuition/introduction`, {
    method: "GET"
});

export const getAdmissionsTuitionTable = async () => apiFetch<IntroProps>(`admissions/tuition/table`, {
    method: "GET"
});

export const getAdmissionsFinanceIntroduction = async () => apiFetch<IntroProps>(`admissions/finance/introduction`, {
    method: "GET"
});

export const getFinancialAssistancePartners = async () => apiFetch<FinancialPartner[]>(`financial-assistance/partners`, {
    method: "GET"
});

export const getAdmissionsFAQsIntroduction = async () => apiFetch<IntroProps>(`admissions/faqs/introduction`, {
    method: "GET"
});

export const getAdmissionsFAQs = async () => apiFetch<FAQs[]>(`admissions/faqs`, {
    method: "GET"
});

export const getAdmissionsBrochureIntroduction = async () => apiFetch<IntroProps>(`admissions/brochure/introduction`, {
    method: "GET"
});

export const submitAdmissionDownloadBrochure = async (formData: AdmissionDownloadBrochure) => apiFetch<AdmissionDownloadBrochure>(`admissions/download-brochure`, {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify(formData)
})