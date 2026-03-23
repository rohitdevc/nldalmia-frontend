"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    MDPPrograms,
    MDPTestimonials,
    FAQs
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`mdp/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getWhyChooseIntroduction = async () => apiFetch<IntroProps>(`mdp/why-choose/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMDPProgramsIntroduction = async () => apiFetch<IntroProps>(`mdp/programs/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMDPPrograms = async () => apiFetch<MDPPrograms[]>(`mdp/programs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMDPTestimonialsIntroduction = async () => apiFetch<IntroProps>(`mdp/testimonials/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMDPTestimonials = async () => apiFetch<MDPTestimonials[]>(`mdp/testimonials`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMDPFAQsIntroduction = async () => apiFetch<IntroProps>(`mdp/faqs/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMDPFAQs = async () => apiFetch<FAQs[]>(`mdp/faqs`, {
    method: "GET",
    headers: await buildHeaders()
});