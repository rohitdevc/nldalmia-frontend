import { getMetaData, getBanner } from "@/lib/common";
import { getEvents } from "@/lib/event";

import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import EventsComponent from "@/components/pages/EventsComponent";

const [
  meta,
  banner,
  events
] = await Promise.all([
  getMetaData("Events"),
  getBanner("Events"),
  getEvents()
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
    <EventsComponent
    banner={banner}
    events={events}
    />
  )
}
