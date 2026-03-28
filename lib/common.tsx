"use server";

import { apiFetch } from "./api";
import { getAuthToken } from './auth';
import {
    MetaData,
    Banner,
    Ticker,
    InstagramFeed,
    ProgramsProps
} from "@/types/api";

export const buildHeaders = async () => {
    const { token } = await getAuthToken();
    
    return {
        Authorization: `Bearer ${token}`
    };
}

export const getMetaData = async (page_name: string) => apiFetch<MetaData>("meta-data", {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify({ page_name })
});

export const getBanner = async (page_name: string) => apiFetch<Banner>("banner", {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify({ page_name })
});

export const getTicker = async () => apiFetch<Ticker>("ticker", {
    method: "GET",
    headers: await buildHeaders()
});

export const getInstagramFeed = async () => apiFetch<InstagramFeed[]>("nldalmia/instagram/feed", {
    method: "GET",
    headers: await buildHeaders()
});

export const getCommonPrograms = async () => apiFetch<ProgramsProps[]>(`home/programs`, {
    method: "GET",
    headers: await buildHeaders()
});