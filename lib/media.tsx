"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    MediaCategory,
    Media,
    MediaCategoryListing
} from "@/types/api";

export const getMediaCategory = async (slug: string) => apiFetch<MediaCategory>(`media/${slug}`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMediaCategories = async () => apiFetch<MediaCategoryListing[]>(`media/categories`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getMedia = async (slug: string) => apiFetch<Media[]>(`media/listing/${slug}`, {
    method: "GET",
    headers: await buildHeaders()
});