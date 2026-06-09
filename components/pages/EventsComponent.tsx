"use client"

import Link from "next/link";

import { useState, useEffect } from "react";

import Banner from "@/components/Banner";

import { useHeader } from "@/context/HeaderContext";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { IoIosArrowDown } from "react-icons/io";

import { Banner as BannerProps, Events as EventProps } from "@/types/api";
import EventCard from "../EventCard";

type PageProps = {
  banner: BannerProps
  events: EventProps[]
};

export default function Events({ banner, events}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader()

  useEffect(() => {
      setHeaderProps({})
  }, [])

  const [activeEvent, updateActiveEvent] = useState(-1);

  const handleEventClick = (event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveEvent(event_id);
      }
    }
  }

  const event_years: number[] = [];

  events.forEach((event) => {
    if(!event_years.includes(new Date(event.event_start_date).getFullYear())) {
      event_years.push(new Date(event.event_start_date).getFullYear());
    }
  })

  event_years.sort((a, b) => b - a);

  const [year, setYear] = useState("");
  const [timeline, setTimeline] = useState("");

  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setTimeline("")
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeline(e.target.value);
    setYear("")
  };

  const filteredEvents = events?.filter((event) => {
    if (year) {
      return new Date(event.event_start_date).getFullYear().toString() === year;
    }

    if(timeline) {
      if(Number(timeline) === 1) {
        return new Date(event.event_end_date) >= new Date();
      } else if(Number(timeline) === 2) {
        return new Date(event.event_end_date) < new Date();
      }
    }
    
    return true;
  });

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between px-5 md:px-15 xl:px-30 py-10">
        <div className="relative lg:w-[45%] border-b border-[#800000] text-black">
            <select className="px-2 w-full outline-none appearance-none" title="Filter" value={timeline} onChange={handleFilter}>
              <option value="">All Events</option>
              <option value="1">Upcoming Events</option>
              <option value="2">Past Events</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <IoIosArrowDown size={25} />
            </div>
        </div>
        <div className="relative lg:w-[45%] border-b border-[#800000]">
          <select className="px-2 w-full outline-none appearance-none" title="Year" value={year} onChange={handleYear}>
            <option value="">Search By Year</option>
            {
              event_years && event_years.length > 0 && event_years.map((year, key) => (
                <option value={year} key={key}>{year}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <IoIosArrowDown size={25} />
          </div>
        </div>
      </div>
      {
        filteredEvents && filteredEvents.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5 md:px-15 xl:px-30 py-10">
            {
              filteredEvents.map((event, key) => (
                <EventCard key={key} event={event} activeEvent={activeEvent} keyIndex={key} handleEventClick={handleEventClick} />
              ))
            }
          </div>
        )
      }
    </main>
  );
}