"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    Awards
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`awards/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getAwards = async () => apiFetch<Awards[]>(`awards`, {
    method: "GET",
    headers: await buildHeaders()
});