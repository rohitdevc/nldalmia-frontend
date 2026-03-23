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
    HomeTestimonials,
    HomeEvents,
    HomeAwards,
    HomeMedia,
    HomeBlog
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`home/introduction`, {
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

export const getHomeEventsIntroduction = async () => apiFetch<IntroProps>(`home/events/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeEvents = async () => apiFetch<HomeEvents[]>(`home/events`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeAwardsIntroduction = async () => apiFetch<IntroProps>(`home/awards/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeAwards = async () => apiFetch<HomeAwards[]>(`home/awards`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeMediaIntroduction = async () => apiFetch<IntroProps>(`home/media/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeMedia = async () => apiFetch<HomeMedia[]>(`home/media`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeBlogIntroduction = async () => apiFetch<IntroProps>(`home/blog/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeBlog = async () => apiFetch<HomeBlog[]>(`home/blog`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getHomeInstagramIntroduction = async () => apiFetch<IntroProps>(`home/instagram/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});