"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    CareersOurValues,
    CareerMilestones,
    CareersAchievements,
    CareersVacancies,
    CareersApplication
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`careers/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersOurValuesIntroduction = async () => apiFetch<IntroProps>(`careers/our-values/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersOurValues = async () => apiFetch<CareersOurValues[]>(`careers/our-values`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersMilestones = async () => apiFetch<CareerMilestones[]>(`careers/milestones`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersAchievementsIntroduction = async () => apiFetch<IntroProps>(`careers/achievements/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersAchievements = async () => apiFetch<CareersAchievements[]>(`careers/achievements`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersVacanciesIntroduction = async () => apiFetch<IntroProps>(`careers/vacancies/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersVacancies = async () => apiFetch<CareersVacancies[]>(`careers/vacancies`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersApplicationIntroduction = async () => apiFetch<IntroProps>(`careers/application/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersApplication = async () => apiFetch<CareersApplication[]>(`careers/application`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getCareersProgramApplication = async () => apiFetch<IntroProps>(`careers/program/application`, {
    method: "GET",
    headers: await buildHeaders()
});