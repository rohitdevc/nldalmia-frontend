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
    method: "GET"
});

export const getNLDESObjectivesIntroduction = async () => apiFetch<IntroProps>(`nldes/objectives/introduction`, {
    method: "GET"
});

export const getNLDESObjectives = async () => apiFetch<NLDESObjectives[]>(`nldes/objectives`, {
    method: "GET"
});

export const getNLDESInstitutesIntroduction = async () => apiFetch<IntroProps>(`nldes/institutes/introduction`, {
    method: "GET"
});

export const getNLDESInstitutes = async () => apiFetch<Institutes[]>(`nldes/institutes`, {
    method: "GET"
});

export const getNLDESManagementIntroduction = async () => apiFetch<IntroProps>(`nldes/management/introduction`, {
    method: "GET"
});

export const getNLDESManagement = async () => apiFetch<NLDESManagement[]>(`nldes/management`, {
    method: "GET"
});

export const getNLDESSocialResponsibilityIntroduction = async () => apiFetch<IntroProps>(`nldes/social-responsibility/introduction`, {
    method: "GET"
});

export const getNLDESSocialResponsibility = async () => apiFetch<NLDESSocialResponsibility[]>(`nldes/social-responsibility`, {
    method: "GET"
});

export const getNLDESCareersIntroduction = async () => apiFetch<IntroProps>(`nldes/careers/introduction`, {
    method: "GET"
});

export const getNLDESCareers = async () => apiFetch<NLDESCareers[]>(`nldes/careers`, {
    method: "GET"
});

export const getNLDESFooter = async () => apiFetch<IntroProps>(`nldes/footer`, {
    method: "GET"
});