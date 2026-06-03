"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    MDPPrograms,
    Testimonials,
    FAQs
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`mdp/introduction`, {
    method: "GET"
});

export const getWhyChooseIntroduction = async () => apiFetch<IntroProps>(`mdp/why-choose/introduction`, {
    method: "GET"
});

export const getMDPProgramsIntroduction = async () => apiFetch<IntroProps>(`mdp/programs/introduction`, {
    method: "GET"
});

export const getMDPPrograms = async () => apiFetch<MDPPrograms[]>(`mdp/programs`, {
    method: "GET"
});

export const getMDPTestimonialsIntroduction = async () => apiFetch<IntroProps>(`mdp/testimonials/introduction`, {
    method: "GET"
});

export const getMDPTestimonials = async () => apiFetch<Testimonials[]>(`mdp/testimonials`, {
    method: "GET"
});

export const getMDPFAQsIntroduction = async () => apiFetch<IntroProps>(`mdp/faqs/introduction`, {
    method: "GET"
});

export const getMDPFAQs = async () => apiFetch<FAQs[]>(`mdp/faqs`, {
    method: "GET"
});

export const getMDPEnquiry = async () => apiFetch<IntroProps>(`mdp/enquiry`, {
    method: "GET"
});