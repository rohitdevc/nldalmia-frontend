import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAlumniWallOfFame, getSlider, getAlumniMeet, getAlumniQuotes, getAlumniConnectIntroduction, getAlumniConnect, getAlumniGlobal, getAlumniHallOfFameIntroduction, getAlumniHallOfFame, getAlumniTestimonialsIntroduction, getAlumniTestimonials, getAlumniEventsIntroduction, getAlumniEvents, getAlumniPortal } from "@/lib/alumni";

import type { Metadata } from "next";
import AlumniComponent from "@/components/pages/AlumniComponent";

const [
  meta,
  banner,
  introduction,
  wall_of_fame,
  slider,
  alumni_meet,
  alumni_quotes,
  alumni_connect_introduction,
  alumni_connect,
  alumni_global,
  alumni_hall_of_fame_introduction,
  alumni_hall_of_fame,
  alumni_testimonials_introduction,
  alumni_testimonials,
  alumni_events_introduction,
  alumni_events,
  alumni_portal
] = await Promise.all([
  getMetaData("Alumni"),
  getBanner("Alumni"),
  getIntroduction(),
  getAlumniWallOfFame(),
  getSlider(),
  getAlumniMeet(),
  getAlumniQuotes(),
  getAlumniConnectIntroduction(),
  getAlumniConnect(),
  getAlumniGlobal(),
  getAlumniHallOfFameIntroduction(),
  getAlumniHallOfFame(),
  getAlumniTestimonialsIntroduction(),
  getAlumniTestimonials(),
  getAlumniEventsIntroduction(),
  getAlumniEvents(),
  getAlumniPortal()
]);

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2e4f84" },
    { media: "(prefers-color-scheme: dark)", color: "#2e4f84" },
  ],
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: meta.meta_title,
  description: meta.meta_description,
  alternates: {
    canonical: meta.canonical_tag
  },
  openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: meta.canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: banner.banner_image,
          width: 1200,
          height: 630,
          alt: meta.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.meta_title,
      description: meta.meta_description,
      images: [banner.banner_image],
    },
};

export default async function Page() {
  return (
    <AlumniComponent
    banner={banner}
    introduction={introduction}
    wall_of_fame={wall_of_fame}
    slider={slider}
    alumni_meet={alumni_meet}
    alumni_quotes={alumni_quotes}
    alumni_connect_introduction={alumni_connect_introduction}
    alumni_connect={alumni_connect}
    alumni_global={alumni_global}
    alumni_hall_of_fame_introduction={alumni_hall_of_fame_introduction}
    alumni_hall_of_fame={alumni_hall_of_fame}
    alumni_testimonials_introduction={alumni_testimonials_introduction}
    alumni_testimonials={alumni_testimonials}
    alumni_events_introduction={alumni_events_introduction}
    alumni_events={alumni_events}
    alumni_portal={alumni_portal}
    />
  )
}
