"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    Reports
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`scholarships/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getScholarshipsMerit = async () => apiFetch<IntroProps>(`scholarships/merit`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getScholarshipsInclusivity = async () => apiFetch<IntroProps>(`scholarships/inclusivity`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getScholarshipsSecondYear = async () => apiFetch<IntroProps>(`scholarships/second-year`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getScholarshipsReportsIntroduction = async () => apiFetch<IntroProps>(`scholarships/reports/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getScholarshipsReports = async () => apiFetch<Reports[]>(`scholarships/reports`, {
    method: "GET",
    headers: await buildHeaders()
});