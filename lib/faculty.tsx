"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Faculties,
    Faculty,
    BookChapters,
    JournalPublications,
    CaseStudies,
    Reports
} from "@/types/api";

export const getFaculties = async () => apiFetch<Faculties[]>(`faculties`, {
    method: "GET"
});

export const getFaculty = async (faculty_url_slug: string) => apiFetch<Faculty>(`faculty/${faculty_url_slug}`, {
    method: "GET"
});

export const getBookChapters = async () => apiFetch<BookChapters[]>(`faculty/research-papers-published/book-chapters`, {
    method: "GET"
});

export const getJournalPublications = async () => apiFetch<JournalPublications[]>(`faculty/research-papers-published/journal-publications`, {
    method: "GET"
});

export const getCaseStudies = async () => apiFetch<CaseStudies[]>(`faculty/research-papers-published/case-studies`, {
    method: "GET"
});

export const getReports = async () => apiFetch<Reports[]>(`faculty/research-papers-published/reports`, {
    method: "GET"
});