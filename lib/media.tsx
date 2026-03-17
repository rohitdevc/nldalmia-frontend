"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    MediaCategory
} from "@/types/api";

export const getMediaCategory = async (slug: string) => apiFetch<MediaCategory>(`media/${slug}`, {
    method: "GET",
    headers: await buildHeaders()
});