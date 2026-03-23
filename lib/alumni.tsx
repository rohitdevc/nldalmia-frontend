"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    WallOfFame,
    Slider,
    AlumniMeet,
    AlumniQuotes,
    AlumniConnect,
    AlumniHallOfFame,
    AlumniTestimonials,
    AlumniEvents
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`alumni/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniWallOfFame = async () => apiFetch<WallOfFame[]>(`alumni/wall-of-fame`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getSlider = async () => apiFetch<Slider[]>(`alumni/slider`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniMeet = async () => apiFetch<AlumniMeet[]>(`alumni/meet`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniQuotes = async () => apiFetch<AlumniQuotes[]>(`alumni/quotes`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniConnectIntroduction = async () => apiFetch<IntroProps>(`alumni/connect/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniConnect = async () => apiFetch<AlumniConnect[]>(`alumni/connect`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniGlobal = async () => apiFetch<IntroProps>(`alumni/global`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniHallOfFameIntroduction = async () => apiFetch<IntroProps>(`alumni/hall-of-fame/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniHallOfFame = async () => apiFetch<AlumniHallOfFame[]>(`alumni/hall-of-fame`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniTestimonialsIntroduction = async () => apiFetch<IntroProps>(`alumni/testimonials/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniTestimonials = async () => apiFetch<AlumniTestimonials[]>(`alumni/testimonials`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniEventsIntroduction = async () => apiFetch<IntroProps>(`alumni/events/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniEvents = async () => apiFetch<AlumniEvents[]>(`alumni/events`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAlumniPortal = async () => apiFetch<IntroProps>(`alumni/portal`, {
    method: "GET",
    headers: await buildHeaders()
});