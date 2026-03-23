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
    Testimonials,
    Contacts
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`placements/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsSlider = async () => apiFetch<Slider[]>(`placements/slider`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementCorporateEngagement = async () => apiFetch<PlacementCorporateEngagement[]>(`placements/corporate-engagement`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsTabs = async () => apiFetch<PlacementsTabs[]>(`placements/tabs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementRecruitersIntroduction = async () => apiFetch<IntroProps>(`placements/recruiters/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementRecruiters = async () => apiFetch<PlacementRecruiters[]>(`placements/recruiters`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsFeaturesIntroduction = async () => apiFetch<IntroProps>(`placements/features/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsFeatures = async () => apiFetch<PlacementFeatures[]>(`placements/features`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsTestimonials = async () => apiFetch<Testimonials[]>(`placements/testimonials`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsContactsIntroduction = async () => apiFetch<IntroProps>(`placements/contacts/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPlacementsContacts = async () => apiFetch<Contacts[]>(`placements/contacts`, {
    method: "GET",
    headers: await buildHeaders()
});