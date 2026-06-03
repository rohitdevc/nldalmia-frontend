"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Announcements,
    IntroProps,
    CareerFinderProps,
    CareerPathProps,
    VideoSection,
    PlacementPartners,
    HomeTestimonials,
    HomeEvents,
    HomeAwards,
    Media,
    HomeBlog
} from "@/types/api";

export const getAnnouncements = async () => apiFetch<Announcements[]>(`home/announcements`, {
    method: "GET"
})

export const getIntroduction = async () => apiFetch<IntroProps>(`home/introduction`, {
    method: "GET"
});

export const getHomeCareerFinder = async () => apiFetch<CareerFinderProps>(`home/career-finder`, {
    method: "GET"
});

export const getHomeCareerPaths = async () => apiFetch<CareerPathProps>(`home/career-paths`, {
    method: "GET"
});

export const getHomeProgramsIntroduction = async () => apiFetch<IntroProps>(`home/programs/introduction`, {
    method: "GET"
});

export const getHomeVideoSection = async () => apiFetch<VideoSection>(`home/video-section`, {
    method: "GET"
});

export const getHomePlacementPartnersIntroduction = async () => apiFetch<IntroProps>(`home/placement-partners/introduction`, {
    method: "GET"
});

export const getHomePlacementPartners = async () => apiFetch<PlacementPartners[]>(`home/placement-partners`, {
    method: "GET"
});

export const getHomeTestimonialsIntroduction = async () => apiFetch<IntroProps>(`home/testimonials/introduction`, {
    method: "GET"
});

export const getHomeTestimonials = async () => apiFetch<HomeTestimonials[]>(`home/testimonials`, {
    method: "GET"
});

export const getHomeEventsIntroduction = async () => apiFetch<IntroProps>(`home/events/introduction`, {
    method: "GET"
});

export const getHomeEvents = async () => apiFetch<HomeEvents[]>(`home/events`, {
    method: "GET"
});

export const getHomeAwardsIntroduction = async () => apiFetch<IntroProps>(`home/awards/introduction`, {
    method: "GET"
});

export const getHomeAwards = async () => apiFetch<HomeAwards[]>(`home/awards`, {
    method: "GET"
});

export const getMediaIntroduction = async () => apiFetch<IntroProps>(`home/media/introduction`, {
    method: "GET"
});

export const getMedia = async () => apiFetch<Media[]>(`home/media`, {
    method: "GET"
});

export const getHomeBlogIntroduction = async () => apiFetch<IntroProps>(`home/blog/introduction`, {
    method: "GET"
});

export const getHomeBlog = async () => apiFetch<HomeBlog[]>(`home/blog`, {
    method: "GET"
});

export const getHomeInstagramIntroduction = async () => apiFetch<IntroProps>(`home/instagram/introduction`, {
    method: "GET"
});