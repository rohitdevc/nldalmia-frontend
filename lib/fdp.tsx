"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    FDPPrograms,
    Testimonials,
    FAQs
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`faculty/fdp/introduction`, {
    method: "GET"
});

export const getWhyChooseIntroduction = async () => apiFetch<IntroProps>(`faculty/fdp/why-choose/introduction`, {
    method: "GET"
});

export const getFDPProgramsIntroduction = async () => apiFetch<IntroProps>(`faculty/fdp/programs/introduction`, {
    method: "GET"
});

export const getFDPPrograms = async () => apiFetch<FDPPrograms[]>(`faculty/fdp/programs`, {
    method: "GET"
});

export const getFDPTestimonialsIntroduction = async () => apiFetch<IntroProps>(`faculty/fdp/testimonials/introduction`, {
    method: "GET"
});

export const getFDPTestimonials = async () => apiFetch<Testimonials[]>(`faculty/fdp/testimonials`, {
    method: "GET"
});

export const getFDPFAQsIntroduction = async () => apiFetch<IntroProps>(`faculty/fdp/faqs/introduction`, {
    method: "GET"
});

export const getFDPFAQs = async () => apiFetch<FAQs[]>(`faculty/fdp/faqs`, {
    method: "GET"
});

export const getFDPEnquiry = async () => apiFetch<IntroProps>(`faculty/fdp/enquiry`, {
    method: "GET"
});