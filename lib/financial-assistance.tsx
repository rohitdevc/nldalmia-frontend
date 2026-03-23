"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    FinancialAssistancePartners
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`financial-assistance/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getFinancialAssistancePartners = async () => apiFetch<FinancialAssistancePartners[]>(`financial-assistance/partners`, {
    method: "GET",
    headers: await buildHeaders()
});