import { getEvent } from "@/lib/event";

import type { Metadata } from "next";
import EventDetailsComponent from "@/components/pages/EventDetailsComponent";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

type PageProps = {
  params: Promise<{
    "event-url-slug": string
  }>
}

export const revalidate = 0;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { "event-url-slug": event_url_slug } = await params;

  const event = await getEvent(event_url_slug);

  return {
    title: event.meta_title,
    description: event.meta_description,
    alternates: {
      canonical: event.canonical_tag,
    },
    openGraph: {
      title: event.meta_title,
      description: event.meta_description,
      type: "website",
      url: event.canonical_tag,
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

  const event = await getEvent(event_url_slug);

  return (
    <EventDetailsComponent event={event} />
  )
}
