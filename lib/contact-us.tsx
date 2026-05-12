"use server";

import { EnquiryForm } from "@/types/forms";
import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`contact-us/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getEnquiryReasons = async () => apiFetch<string[]>(`contact-us/reasons`, {
    method: "GET",
    headers: await buildHeaders()
})

export const submitEnquiry = async (formData: EnquiryForm) => apiFetch<EnquiryForm>(`contact-us/enquiry`, {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify(formData)
})