"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`contact-us/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});