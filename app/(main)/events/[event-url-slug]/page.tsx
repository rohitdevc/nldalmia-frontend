import { getEvent, getEvents } from "@/lib/event";

import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import EventDetailsComponent from "@/components/pages/EventDetailsComponent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: process.env.DEFAULT_THEME_COLOUR },
    { media: "(prefers-color-scheme: dark)", color: process.env.DEFAULT_THEME_COLOUR },
  ],
};

type PageProps = {
  params: Promise<{
    "event-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const events = await getEvents();

  return events.map((event) => ({
    "event-url-slug": event.event_url_slug
  }));
}

const basePath = process.env.NEXT_PUBLIC_DOMAIN_NAME;

let eventCache = new Map();

export async function loadEvent(slug: string) {
  if (eventCache.has(slug)) return eventCache.get(slug);
  
  const event = await getEvent(slug);
  eventCache.set(slug, event);

  return event;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "event-url-slug": event_url_slug } = await params;

  const event = await loadEvent(event_url_slug);

  if(!event) {
    notFound()
  }

  const canonical_tag = basePath + event.canonical_tag;

  const meta = {
    meta_title: event.meta_title,
    meta_description: event.meta_description,
    canonical_tag: event.canonical_tag
  }

  const banner = {
    banner_image: event.banner_image
  }

  return createMetadata({
    meta,
    banner,
    canonical_tag
  });
}

export default async function Page({ params }: PageProps) {
  const { "event-url-slug": event_url_slug } = await params;

  const event = await loadEvent(event_url_slug);

  if(!event) {
    notFound()
  }

  return (
    <EventDetailsComponent
    event={event} />
  )
}
