"use server";

import { apiFetch } from "./api";
import { getAuthToken } from './auth';
import {
    MetaData,
    Banner
} from "@/types/api";

async function buildHeaders() {
    const { token } = await getAuthToken();
    
    return {
        Authorization: `Bearer ${token}`
    };
}

export const getMetaData = async () => apiFetch<MetaData>("meta-data", {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify({ page_name: "Home" })
});

export const getBanner = async () => apiFetch<Banner>("banner", {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify({ page_name: "Home" })
});