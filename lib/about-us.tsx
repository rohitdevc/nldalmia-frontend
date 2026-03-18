"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
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
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsObjectives = async () => apiFetch<Objectives[]>(`about-us/objectives`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsTimeline = async () => apiFetch<Timeline[]>(`about-us/timeline`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsFounderQuote = async () => apiFetch<FounderQuote>(`about-us/founder-quote`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsManagementQuotes = async () => apiFetch<ManagementQuote[]>(`about-us/management-quotes`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getManagingCouncilIntroduction = async () => apiFetch<IntroProps>(`about-us/managing-council/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsManagingCouncil = async () => apiFetch<ManagingCouncil[]>(`about-us/managing-council`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsGoverningCouncilIntroduction = async () => apiFetch<IntroProps>(`about-us/governing-council/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsGoverningCouncil = async () => apiFetch<GoverningCouncil[]>(`about-us/governing-council`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsVideoSection = async () => apiFetch<VideoSection>(`about-us/video-section`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsInternationalUniversitiesIntroduction = async () => apiFetch<IntroProps>(`about-us/international-universities/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutUsInternationalUniversities = async () => apiFetch<InternationalUniversities[]>(`about-us/international-universities`, {
    method: "GET",
    headers: await buildHeaders()
});