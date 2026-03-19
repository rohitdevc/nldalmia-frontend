"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    AdmissionPrograms,
    AdmissionProcessInformation,
    FinancialPartner,
    FAQs
} from "@/types/api";
import { AdmissionDownloadBrochure } from "@/types/forms";

export const getIntroduction = async () => apiFetch<IntroProps>(`admissions/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsPrograms = async () => apiFetch<AdmissionPrograms[]>(`admissions/programs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsProcessIntroduction = async () => apiFetch<IntroProps>(`admissions/process/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsProcessInformation = async () => apiFetch<AdmissionProcessInformation[]>(`admissions/process/information`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsScholarshipIntroduction = async () => apiFetch<IntroProps>(`admissions/scholarship/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsScholarshipTable = async () => apiFetch<IntroProps>(`admissions/scholarship/table`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsTuitionIntroduction = async () => apiFetch<IntroProps>(`admissions/tuition/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsTuitionTable = async () => apiFetch<IntroProps>(`admissions/tuition/table`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsFinanceIntroduction = async () => apiFetch<IntroProps>(`admissions/finance/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getFinancialAssistancePartners = async () => apiFetch<FinancialPartner[]>(`financial-assistance/partners`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsFAQsIntroduction = async () => apiFetch<IntroProps>(`admissions/faqs/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsFAQs = async () => apiFetch<FAQs[]>(`admissions/faqs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAdmissionsBrochureIntroduction = async () => apiFetch<IntroProps>(`admissions/brochure/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const submitAdmissionDownloadBrochure = async (formData: AdmissionDownloadBrochure) => apiFetch<AdmissionDownloadBrochure>(`admissions/download-brochure`, {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify(formData)
})