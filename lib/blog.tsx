"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    Blog
} from "@/types/api";

export const getBlog = async (blog_category_url_slug: string, blog_url_slug: string) => apiFetch<Blog>(`blog/${blog_category_url_slug}/${blog_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});