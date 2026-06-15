"use server";

import { apiFetch } from "./api";
import {
    IntroProps,
    Objectives,
    Timeline,
    FounderQuote,
    ManagementQuote,
    ManagingCouncil,
    GoverningCouncil,
    VideoSection,
    InternationalUniversities
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`about-us/introduction`, {
    method: "GET"
});

export const getAboutUsObjectives = async () => apiFetch<Objectives[]>(`about-us/objectives`, {
    method: "GET"
});

export const getAboutUsTimeline = async () => apiFetch<Timeline[]>(`about-us/timeline`, {
    method: "GET"
});

export const getAboutUsFounderQuote = async () => apiFetch<FounderQuote>(`about-us/founder-quote`, {
    method: "GET"
});

export const getAboutUsManagementQuotes = async () => apiFetch<ManagementQuote[]>(`about-us/management-quotes`, {
    method: "GET"
});

export const getManagingCouncilIntroduction = async () => apiFetch<IntroProps>(`about-us/managing-council/introduction`, {
    method: "GET"
});

export const getAboutUsManagingCouncil = async () => apiFetch<ManagingCouncil[]>(`about-us/managing-council`, {
    method: "GET"
});

export const getAboutUsGoverningCouncilIntroduction = async () => apiFetch<IntroProps>(`about-us/governing-council/introduction`, {
    method: "GET"
});

export const getAboutUsGoverningCouncil = async () => apiFetch<GoverningCouncil[]>(`about-us/governing-council`, {
    method: "GET"
});

export const getAboutUsVideoSection = async () => apiFetch<VideoSection>(`about-us/video-section`, {
    method: "GET"
});

export const getAboutUsInternationalUniversitiesIntroduction = async () => apiFetch<IntroProps>(`about-us/international-universities/introduction`, {
    method: "GET"
});

export const getAboutUsInternationalUniversities = async () => apiFetch<InternationalUniversities[]>(`about-us/international-universities`, {
    method: "GET"
});