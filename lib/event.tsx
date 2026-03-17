"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Event
} from "@/types/api";

export const getEvent = async (event_url_slug: string) => apiFetch<Event>(`event/${event_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});