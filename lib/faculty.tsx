"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Faculty
} from "@/types/api";

export const getFaculty = async (faculty_url_slug: string) => apiFetch<Faculty>(`faculty/${faculty_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});