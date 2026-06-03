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
    method: "GET"
});

export const getCareersOurValuesIntroduction = async () => apiFetch<IntroProps>(`careers/our-values/introduction`, {
    method: "GET"
});

export const getCareersOurValues = async () => apiFetch<CareersOurValues[]>(`careers/our-values`, {
    method: "GET"
});

export const getCareersMilestones = async () => apiFetch<CareerMilestones[]>(`careers/milestones`, {
    method: "GET"
});

export const getCareersAchievementsIntroduction = async () => apiFetch<IntroProps>(`careers/achievements/introduction`, {
    method: "GET"
});

export const getCareersAchievements = async () => apiFetch<CareersAchievements[]>(`careers/achievements`, {
    method: "GET"
});

export const getCareersVacanciesIntroduction = async () => apiFetch<IntroProps>(`careers/vacancies/introduction`, {
    method: "GET"
});

export const getCareersVacancies = async () => apiFetch<CareersVacancies[]>(`careers/vacancies`, {
    method: "GET"
});

export const getCareersApplicationIntroduction = async () => apiFetch<IntroProps>(`careers/application/introduction`, {
    method: "GET"
});

export const getCareersApplication = async () => apiFetch<CareersApplication[]>(`careers/application`, {
    method: "GET"
});

export const getCareersProgramApplication = async () => apiFetch<IntroProps>(`careers/program/application`, {
    method: "GET"
});