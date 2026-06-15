"use server";

import { apiFetch } from "./api";
import {
    IntroProps,
    MSRVerticals,
    MSRImpact,
    MSRCaseStudies,
    MSRSDGGoals,
    MSRGallery,
    MSRReport,
    MSRTestimonials,
    MSRContribution
} from "@/types/api";

export const getMSRIntroduction = async () => apiFetch<IntroProps>(`msr/introduction`, {
    method: "GET"
});

export const getMSRVerticalsIntroduction = async () => apiFetch<IntroProps>(`msr/verticals/introduction`, {
    method: "GET"
});

export const getMSRVerticals = async () => apiFetch<MSRVerticals[]>(`msr/verticals`, {
    method: "GET"
});

export const getMSRImpact = async () => apiFetch<MSRImpact[]>(`msr/impact`, {
    method: "GET"
});

export const getMSRCaseStudiesIntroduction = async () => apiFetch<IntroProps>(`msr/case-studies/introduction`, {
    method: "GET"
});

export const getMSRCaseStudies = async () => apiFetch<MSRCaseStudies[]>(`msr/case-studies`, {
    method: "GET"
});

export const getMSRSDGGoalsIntroduction = async () => apiFetch<IntroProps>(`msr/sdg-goals/introduction`, {
    method: "GET"
});

export const getMSRSDGGoals = async () => apiFetch<MSRSDGGoals[]>(`msr/sdg-goals`, {
    method: "GET"
});

export const getMSRGalleryIntroduction = async () => apiFetch<IntroProps>(`msr/gallery/introduction`, {
    method: "GET"
});

export const getMSRGallery = async () => apiFetch<MSRGallery[]>(`msr/gallery`, {
    method: "GET"
});

export const getMSRReportsIntroduction = async () => apiFetch<IntroProps>(`msr/reports/introduction`, {
    method: "GET"
});

export const getMSRReports = async () => apiFetch<MSRReport[]>(`msr/reports`, {
    method: "GET"
});

export const getMSRTestimonialsIntroduction = async () => apiFetch<IntroProps>(`msr/testimonials/introduction`, {
    method: "GET"
});

export const getMSRTestimonials = async () => apiFetch<MSRTestimonials[]>(`msr/testimonials`, {
    method: "GET"
});

export const getMSRContributionIntroduction = async () => apiFetch<IntroProps>(`msr/contribution/introduction`, {
    method: "GET"
});

export const getMSRContribution = async () => apiFetch<MSRContribution[]>(`msr/contribution`, {
    method: "GET"
});