"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    CareerFinderProps,
    CareerPathProps,
    ProgramsProps,
    VideoSection,
    PlacementPartners,
    HomeTestimonials
} from "@/types/api";

export const getHomeIntroduction = async () => apiFetch<IntroProps>(`home/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeCareerFinder = async () => apiFetch<CareerFinderProps>(`home/career-finder`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeCareerPaths = async () => apiFetch<CareerPathProps>(`home/career-paths`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeProgramsIntroduction = async () => apiFetch<IntroProps>(`home/programs/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomePrograms = async () => apiFetch<ProgramsProps[]>(`home/programs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeVideoSection = async () => apiFetch<VideoSection>(`home/video-section`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomePlacementPartnersIntroduction = async () => apiFetch<IntroProps>(`home/placement-partners/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomePlacementPartners = async () => apiFetch<PlacementPartners[]>(`home/placement-partners`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeTestimonialsIntroduction = async () => apiFetch<IntroProps>(`home/testimonials/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeTestimonials = async () => apiFetch<HomeTestimonials[]>(`home/testimonials`, {
    method: "GET",
    headers: await buildHeaders()
});