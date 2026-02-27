"use client"

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import { useState, useRef } from "react";

import { MdArrowOutward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';

export default function LifeAtNLD() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const eventsList = useRef<HTMLDivElement>(null);

  type Event = {
    id: number;
    event_name: string;
    event_description: string;
    event_date: Date;
    event_link: string;
    event_thumbnail: string;
  }

  type EventTimeline = {
    id: number;
    event_timeline_title: string;
    events?: Event[]
  }

  const event_timelines: EventTimeline[] = [
    {
      id: 1,
      event_timeline_title: 'Upcoming Events',
      events: []
    },
    {
      id: 2,
      event_timeline_title: 'Past Events',
      events: []
    }
  ]

  const events = [
    {
      id: 1,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2027-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 2,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2026-12-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
    {
      id: 3,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 4,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
    {
      id: 5,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 6,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
  ]

  events.forEach((event) => {
    if(event.event_date >= new Date()) {
      event_timelines[0].events?.push(event);
    } else {
      event_timelines[1].events?.push(event);
    }
  })

  const [activeEventTimeline, updateActiveEventTimeline] = useState(1);
  const [activeEvent, updateActiveEvent] = useState(0);

  const updateActiveEventTimelineFunc = (event_timeline_id: number): void => {
    updateActiveEventTimeline(event_timeline_id);
    updateActiveEvent(0);

    if(eventsList.current) {
      const offset = 200;
      const elementTop = eventsList.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const handleEventClick = (event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveEvent(event_id);
      }
    }
  }

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Life@ NLDIMSR Where Rigorous Academics Meet A Vibrant, Enriching Campus Experience"/>
      {
        event_timelines && event_timelines.length > 0 && (
      <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
        <CenterIntro introTitle="Events" introCaption="Campus Buzz: Events That Define Us" introDescription="From national sympoisums and speaker series to cultural tests and student-led workshops-there’s always something happening at NLDIMSR" />
        <div className="flex flex-col lg:flex-row gap-5 md:justify-between">
          <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-100 gap-5 text-burgundy">
            {
              event_timelines.map((event_timeline, key) => (
                <li className={`cursor-pointer transition-all duration-300 ${activeEventTimeline === event_timeline.id ? 'text-xl font-medium' : ''}`} key={key} onClick={() => updateActiveEventTimelineFunc(event_timeline.id)}>
                  <span className="relative">
                    {event_timeline.event_timeline_title}
                    <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 ${activeEventTimeline === event_timeline.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
                  </span>
                </li>
              ))
            }
          </ul>
          {
              event_timelines && event_timelines.length > 0 && event_timelines.map((event_timeline) => 
                activeEventTimeline === event_timeline.id && event_timeline.events && event_timeline.events.length > 0 && (
                <div className="w-full lg:w-[75%] flex flex-col gap-5 text-white" ref={eventsList} key={event_timeline.id}>
                  <div className="grid grid-cols-2 gap-2 sm:gap-5 md:gap-10">
                    {
                      event_timeline.events.map((event, key) => (
                        <div className="group w-full h-50 md:!h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/events/${event.event_thumbnail})`}} onClick={handleEventClick(event.id)} key={key} title={event.event_name}>
                          <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                          
                          <div className="relative h-full w-full flex flex-col">
                            <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                              <span className="bg-[#800000] text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(event.event_date).format('MMMM YYYY')}</span>
                            </div>
                            <div className="mt-auto px-2 lg:px-5 pb-2 lg:pb-10">
                              <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                            </div>
                          </div>

                          <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeEvent === event.id ? "scale-y-100" : "scale-y-0"}`}>
                            <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                              <span className="bg-white text-burgundy text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(event.event_date).format('MMMM YYYY')}</span>
                            </div>
                            <div className="px-2 lg:px-5 pb-2 lg:pb-5 flex flex-col gap-2 h-full">
                              <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                              <div className="w-full h-[105px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">
                                <p className="lg:leading-relaxed text-sm">{parser(nl2br(event.event_description))}</p>
                              </div>
                              <ul className="flex gap-5 mt-auto text-xs lg:text-sm">
                                <li><Link href={event.event_link} className="underline">Learn More</Link></li>
                                <li><Link href={event.event_link} className="underline">View Report</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                )
            )
          }
          </div>
      </div>
        )
      }
      <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
        <CenterIntro introTitle="Our Achivements" introCaption="Student Achievements" />
        <div className="flex gap-3">
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_prev">
            <BsArrowLeftShort size={20} />
          </span>
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_next">
            <BsArrowRightShort size={20} />
          </span>
        </div>
        <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.achievement_slider_prev', nextEl: '.achievement_slider_next'}} >
          {
            [...Array(5)].map((_, i) => (
            <SwiperSlide className="w-full">
              <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-20 py-10" style={{backgroundImage: `url(${basePath}images/careers/intro-img.png)`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"></div>
                <div className="flex flex-col gap-5 relative mt-auto">
                  <h2 className="font-georgia text-2xl">DecodeX 2025 Edition</h2>
                  <p className="leading-loose text-sm">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
                </div>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
        <CenterIntro introTitle="Student Clubs" introCaption="Where Passion Finds Purpose: Student Club" introDescription="Clubs at NLDIMSR go beyond extracurriculars-they foster leadership, collaboration and real world problem solving" />
      </div>
      <Footer />
    </main>
    </>
  );
}