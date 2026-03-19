"use server";

import { apiFetch } from "./api";
import { buildHeaders } from "./common";
import {
    IntroProps,
    Blog,
    BlogCategories,
    BlogListing
} from "@/types/api";

export const getIntroduction = async () => apiFetch<IntroProps>(`blog/introduction`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlog = async (blog_category_url_slug: string, blog_url_slug: string) => apiFetch<Blog>(`blog/${blog_category_url_slug}/${blog_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlogCategories = async () => apiFetch<BlogCategories[]>(`blog/categories`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlogFeatured = async () => apiFetch<BlogListing[]>(`blog/featured`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlogCategoryFeatured = async (blog_category_url_slug: string) => apiFetch<BlogListing[]>(`blogs/featured/${blog_category_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlogs = async () => apiFetch<BlogListing[]>(`blogs`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlogsByCategory = async (blog_category_url_slug: string) => apiFetch<BlogListing[]>(`blogs/${blog_category_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});

export const getBlogsRelatedByCategory = async (blog_category_url_slug: string, blog_url_slug: string) => apiFetch<BlogListing[]>(`blogs/related/${blog_category_url_slug}/${blog_url_slug}`, {
    method: "GET",
    headers: await buildHeaders()
});