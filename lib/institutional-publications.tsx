"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    InstitutionalPublicationCategories,
    InstitutionalPublications
} from "@/types/api";

export const getInstitutionalPublicationCategories = async () => apiFetch<InstitutionalPublicationCategories[]>(`institutional-publications/categories`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getInstitutionalPublications = async () => apiFetch<InstitutionalPublications[]>(`institutional-publications`, {
    method: "GET",
    headers: await buildHeaders()
});