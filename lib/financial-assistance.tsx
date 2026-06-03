"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    FinancialAssistancePartners
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`financial-assistance/introduction`, {
    method: "GET"
});

export const getFinancialAssistancePartners = async () => apiFetch<FinancialAssistancePartners[]>(`financial-assistance/partners`, {
    method: "GET"
});