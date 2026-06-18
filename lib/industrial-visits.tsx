"use server";

import { apiFetch } from "./api";
import {
    IndustrialVisits
} from "@/types/api";

export const getIndustrialVisits = async () => apiFetch<IndustrialVisits[]>(`industrial-visits`, {
    method: "GET"
});