"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Program
} from "@/types/api";

export const getProgram = async (program_url_slug: string) => apiFetch<Program>(`program/${program_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});