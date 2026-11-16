"use server";

import { apiFetch } from "./api";
import { getAuthToken } from './auth';
import {
    StaticPages,
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

export const getStaticPages = async () => apiFetch<StaticPages[]>(`static-pages`, {
    method: "GET"
});

export const getMetaData = async (page_name: string) => apiFetch<MetaData>(`meta-data?page_name=${page_name}`, {
    method: "GET"
});

export const getBanner = async (page_name: string) => apiFetch<Banner>(`banner?page_name=${page_name}`, {
    method: "GET"
});

export const getTicker = async () => apiFetch<Ticker>("ticker", {
    method: "GET"
});

export const getInstagramFeed = async () => apiFetch<InstagramFeed[]>("nldalmia/instagram/feed", {
    method: "GET"
});

export const getCommonPrograms = async () => apiFetch<ProgramsProps[]>(`home/programs`, {
    method: "GET"
});