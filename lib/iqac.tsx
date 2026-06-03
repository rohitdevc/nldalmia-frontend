"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IQACCategories,
    IQAC,
    IQACPOE
} from "@/types/api";

export const getIQACCategories = async () => apiFetch<IQACCategories>(`iqac/categories`, {
    method: "GET"
});

export const getIQAC = async () => apiFetch<IQAC[]>(`iqac`, {
    method: "GET"
});

export const getIQACPOE = async () => apiFetch<IQACPOE[]>(`iqac/poe`, {
    method: "GET"
});