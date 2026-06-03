"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    Events,
    LifeAtNLDAchievements,
    LifeAtNLDStudentClubs,
    LifeAtNLDGallery,
    LifeAtNLDInsideNLD,
    InstitutionalPublications
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`life-at-nld/introduction`, {
    method: "GET"
});

export const getLifeAtNLDEvents = async () => apiFetch<Events[]>(`life-at-nld/events`, {
    method: "GET"
});

export const getLifeAtNLDAchievementsIntroduction = async () => apiFetch<IntroProps>(`life-at-nld/achievements/introduction`, {
    method: "GET"
});

export const getLifeAtNLDAchievements = async () => apiFetch<LifeAtNLDAchievements[]>(`life-at-nld/achievements`, {
    method: "GET"
});

export const getLifeAtNLDStudentClubIntroduction = async () => apiFetch<IntroProps>(`life-at-nld/student-club/introduction`, {
    method: "GET"
});

export const getLifeAtNLDStudentClubs = async () => apiFetch<LifeAtNLDStudentClubs[]>(`life-at-nld/student-clubs`, {
    method: "GET"
});

export const getLifeAtNLDGallery = async () => apiFetch<LifeAtNLDGallery[]>(`life-at-nld/gallery`, {
    method: "GET"
});

export const getLifeAtNLDInstagramIntroduction = async () => apiFetch<IntroProps>(`life-at-nld/instagram/introduction`, {
    method: "GET"
});

export const getLifeAtNLDInsideNLDIntroduction = async () => apiFetch<IntroProps>(`life-at-nld/inside-nld/introduction`, {
    method: "GET"
});

export const getLifeAtNLDInsideNLD = async () => apiFetch<LifeAtNLDInsideNLD[]>(`life-at-nld/inside-nld`, {
    method: "GET"
});

export const getLifeAtNLDMagazinesIntroduction = async () => apiFetch<IntroProps>(`life-at-nld/magazines/introduction`, {
    method: "GET"
});

export const getLifeAtNLDMagazines = async () => apiFetch<InstitutionalPublications[]>(`life-at-nld/magazines`, {
    method: "GET"
});