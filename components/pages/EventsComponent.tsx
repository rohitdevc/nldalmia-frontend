"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import lodash from 'lodash';

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { useServerCountdown } from "@/hooks/useServerCountdown";

import { Banner as BannerProps } from "@/types/api";

type PageProps = {
  banner: BannerProps;
};

export default function Events({banner}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const events = [
    {
      id: 1,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_start_date: new Date('2027-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 2,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_start_date: new Date('2026-12-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
    {
      id: 3,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_start_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 4,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_start_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
    {
      id: 5,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_start_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 6,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_start_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
  ]

  const [activeEvent, updateActiveEvent] = useState(0);

  const handleEventClick = (alumni_event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveEvent(alumni_event_id);
      }
    }
  }

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      {
        events && events.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-15 xl:px-30 py-10">
            {
              events.map((event, key) => {
                const startDate = event.event_start_date;
                                  
                const nowValid = !!startDate && new Date(startDate).getTime() > Date.now();
                
                const countdown = useServerCountdown(new Date(startDate));

                return (
                  <div className="group border-[0.5px] border-[#800000] text-white relative overflow-hidden" title={event.event_name} key={key} onClick={handleEventClick(event.id)}>
                    <div className="flex py-7 px-5 transition-all duration-300 h-100 bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${basePath}images/alumni/DecodeX-2024.jpg)`}}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"></div>
                      <div className="font-georgia text-lg mt-auto relative flex flex-col gap-3">
                        <h2>{event.event_name}</h2>
                        <h3>{dayjs(event.event_start_date).format('DD/MM/YYYY')}</h3>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col gap-5 py-10 px-5 justify-center items-center text-center transition-all duration-300 bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeEvent === event.id ? "scale-y-100" : "scale-y-0"}`}>
                      <h2 className="text-xl">{event.event_name}</h2>
                      <h3>{dayjs(event.event_start_date).format('Do MMMM, YYYY')}</h3>
                      <p className="leading-loose">{parser(nl2br(event.event_description))}</p>
                      {startDate && nowValid && countdown && (
                          <span className="text-3xl">
                              {countdown.days ? `${countdown.days}d ` : ""}
                              {countdown.hours ? `${countdown.hours}h ` : ""}
                              {countdown.minutes ? `${countdown.minutes}m ` : ""}
                              {countdown.seconds}s
                          </span>
                      )}
                      <ul className="flex gap-5">
                          <li>
                              <Link href="" target="_blank" className="py-2 px-2 text-sm bg-white text-[#800000]">Apply Now</Link>
                          </li>
                          <li>
                              <Link href={`${basePath}events/${lodash.kebabCase(event.event_name)}`} className="border py-2 px-2 text-sm border-white bg-[#800000]">View Program Details</Link>
                          </li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
      <Footer />
    </main>
    </>
  );
}