"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    Slider,
    PlacementCorporateEngagement,
    PlacementsTabs,
    PlacementRecruiters,
    PlacementFeatures,
    PlacementReports,
    Testimonials,
    Contacts
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`placements/introduction`, {
    method: "GET"
});

export const getPlacementsSlider = async () => apiFetch<Slider[]>(`placements/slider`, {
    method: "GET"
});

export const getPlacementCorporateEngagement = async () => apiFetch<PlacementCorporateEngagement[]>(`placements/corporate-engagement`, {
    method: "GET"
});

export const getPlacementsTabs = async () => apiFetch<PlacementsTabs[]>(`placements/tabs`, {
    method: "GET"
});

export const getPlacementRecruitersIntroduction = async () => apiFetch<IntroProps>(`placements/recruiters/introduction`, {
    method: "GET"
});

export const getPlacementRecruiters = async () => apiFetch<PlacementRecruiters[]>(`placements/recruiters`, {
    method: "GET"
});

export const getPlacementsFeaturesIntroduction = async () => apiFetch<IntroProps>(`placements/features/introduction`, {
    method: "GET"
});

export const getPlacementsFeatures = async () => apiFetch<PlacementFeatures[]>(`placements/features`, {
    method: "GET"
});

export const getPlacementsLatestBrochure = async () => apiFetch<IntroProps>(`placements/latest-brochure`, {
    method: "GET"
});

export const getPlacementsReportsIntroduction = async () => apiFetch<IntroProps>(`placements/reports/introduction`, {
    method: "GET"
});

export const getPlacementsReports = async () => apiFetch<PlacementReports[]>(`placements/reports`, {
    method: "GET"
});

export const getPlacementsTestimonials = async () => apiFetch<Testimonials[]>(`placements/testimonials`, {
    method: "GET"
});

export const getPlacementsContactsIntroduction = async () => apiFetch<IntroProps>(`placements/contacts/introduction`, {
    method: "GET"
});

export const getPlacementsContacts = async () => apiFetch<Contacts[]>(`placements/contacts`, {
    method: "GET"
});