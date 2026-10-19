import { getMetaData, getBanner } from "@/lib/common";
import { getIntroduction, getAlumniWallOfFame, getSlider, getAlumniMeet, getAlumniQuotes, getAlumniConnectIntroduction, getAlumniConnect, getAlumniGlobal, getAlumniHallOfFameIntroduction, getAlumniHallOfFame, getAlumniTestimonialsIntroduction, getAlumniTestimonials, getAlumniEventsIntroduction, getAlumniEvents, getAlumniPortal } from "@/lib/alumni";
import type { Metadata } from "next";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
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
