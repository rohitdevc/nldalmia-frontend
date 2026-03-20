"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Event,
    Events
} from "@/types/api";

export const getEvent = async (event_url_slug: string) => apiFetch<Event>(`event/${event_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getEvents = async () => apiFetch<Events[]>(`events`, {
    method: "GET",
    headers: await buildHeaders()
});