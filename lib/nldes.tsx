"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    NLDESObjectives,
    Institutes,
    NLDESManagement,
    NLDESSocialResponsibility,
    NLDESCareers
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`nldes/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESObjectivesIntroduction = async () => apiFetch<IntroProps>(`nldes/objectives/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESObjectives = async () => apiFetch<NLDESObjectives[]>(`nldes/objectives`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESInstitutesIntroduction = async () => apiFetch<IntroProps>(`nldes/institutes/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESInstitutes = async () => apiFetch<Institutes[]>(`nldes/institutes`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESManagementIntroduction = async () => apiFetch<IntroProps>(`nldes/management/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESManagement = async () => apiFetch<NLDESManagement[]>(`nldes/management`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESSocialResponsibilityIntroduction = async () => apiFetch<IntroProps>(`nldes/social-responsibility/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESSocialResponsibility = async () => apiFetch<NLDESSocialResponsibility[]>(`nldes/social-responsibility`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESCareersIntroduction = async () => apiFetch<IntroProps>(`nldes/careers/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESCareers = async () => apiFetch<NLDESCareers[]>(`nldes/careers`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getNLDESFooter = async () => apiFetch<IntroProps>(`nldes/footer`, {
    method: "GET",
    headers: await buildHeaders()
});