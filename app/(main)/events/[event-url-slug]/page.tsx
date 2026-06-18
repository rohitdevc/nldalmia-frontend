import { getEvent } from "@/lib/event";

import type { Metadata } from "next";
import EventDetailsComponent from "@/components/pages/EventDetailsComponent";
import { notFound, permanentRedirect } from "next/navigation";

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

export const revalidate = 300;

const basePath = process.env.NEXT_PUBLIC_PATH;

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

  return {
    title: event.meta_title,
    description: event.meta_description,
    alternates: {
      canonical: canonical_tag,
    },
    openGraph: {
      title: event.meta_title,
      description: event.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: event.og_image,
          width: 1200,
          height: 630,
          alt: event.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.meta_title,
      description: event.meta_description,
      images: [event.og_image],
    },
  };
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
