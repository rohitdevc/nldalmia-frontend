import { getMetaData, getBanner } from "@/lib/common";
import { getBookChapters } from "@/lib/faculty";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import BookChaptersComponent from "@/components/pages/BookChaptersComponent";

const [
  meta,
  banner,
  book_chapters
] = await Promise.all([
  getMetaData("Book Chapters"),
  getBanner("Book Chapters"),
  getBookChapters()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

const canonical_tag = basePath + meta.canonical_tag;

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page() {
  return (
    <BookChaptersComponent
    banner={banner}
    book_publications={book_chapters}
    />
  )
}
