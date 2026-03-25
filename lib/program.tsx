"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    Program,
    ProgramsBlocks,
    ProgramListing
} from "@/types/api";
import { ProgramDownloadBrochure } from "@/types/forms";

export const getIntroduction = async () => apiFetch<IntroProps>(`programs/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getProgram = async (program_url_slug: string) => apiFetch<Program>(`program/${program_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getProgramsBlocks = async () => apiFetch<ProgramsBlocks[]>(`programs/blocks`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getProgramsScholarshipIntroduction = async () => apiFetch<IntroProps>(`programs/scholarship/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getPrograms = async () => apiFetch<ProgramListing[]>(`programs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const submitProgramDownloadBrochure = async (formData: ProgramDownloadBrochure) => apiFetch<ProgramDownloadBrochure>(`program/download-brochure`, {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify(formData)
})