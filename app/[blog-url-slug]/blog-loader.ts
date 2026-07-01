import { cache } from "react";
import { getBlog } from "@/lib/blog";

export const loadBlog = cache(async (slug: string) => {
    return getBlog(slug);
});