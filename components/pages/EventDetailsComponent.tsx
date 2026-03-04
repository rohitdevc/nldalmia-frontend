"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { useServerCountdown } from "@/hooks/useServerCountdown";

export default function EventDetails({event_url_slug = ""}) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const milestones = [
    {
      milestone_title: '5,100+',
      milestone_caption: 'Total Registrations'
    },
    {
      milestone_title: '20,000+',
      milestone_caption: 'Social Media Impressions'
    },
    {
      milestone_title: '1,900+',
      milestone_caption: 'Participants from colleges across India'
    },
    {
      milestone_title: '50+',
      milestone_caption: 'Internship offers made post the DecodeX 2024 Event'
    },
  ]

  const schedule_itineraries = [
    {
      id: 1,
      schedule_itinerary_date: new Date('2026-02-14'),
      schedule_itinerary_timeline: [
        {
          schedule_itinerary_name: 'Morning Schedule',
          schedule_itinerary: [
          {
            schedule_itinerary_caption: '8:00 am – 10:00 am',
            schedule_itinerary_description: 'Registration and Breakfast\r\nThe venue opens for participants check-in, networking and refreshments.'
          },
          {
            schedule_itinerary_caption: '10:00 am – 11:00 am',
            schedule_itinerary_description: 'Opening ceremony\r\nBriefing & and commencement of Case studies'
          },
          {
            schedule_itinerary_caption: '11:00 am – 12:00 pm',
            schedule_itinerary_description: 'Decoding the case studies (Workshop)\r\nGain insights and strategies to analyse and solve case studies effectively in this workshop.'
          }
        ]
      },
      {
          schedule_itinerary_name: 'Afternoon Schedule',
          schedule_itinerary: [
          {
            schedule_itinerary_caption: '1:30 PM - 3:00 PM',
            schedule_itinerary_description: 'Networking lunch break\r\nCasual networking with judges, mentors and industry representatives'
          },
          {
            schedule_itinerary_caption: '3:00 PM - 4:00 PM',
            schedule_itinerary_description: 'Bloomberg Skills Training\r\nEnhance your analytics skills with hands-on training on Bloomberg\'s powerful tools'
          },
          {
            schedule_itinerary_caption: '4:00 PM – 4:30 PM',
            schedule_itinerary_description: 'High Tea\r\nBrainstorm on case studies and defining their problem-solving approach\r\nMentors are available for consultation'
          }
        ]
      },
      {
          schedule_itinerary_name: 'Evening Schedule',
          schedule_itinerary: [
          {
            schedule_itinerary_caption: '7:00 PM – 9:30 PM',
            schedule_itinerary_description: 'DJ Night\r\nAn evening of refined rhythms and captivating beats at our DJ Night'
          },
          {
            schedule_itinerary_caption: '9:30 PM ONWARDS',
            schedule_itinerary_description: 'Overnight case study'
          }
        ]
      }
    ]
    },
    {
      id: 2,
      schedule_itinerary_date: new Date('2026-02-15'),
      schedule_itinerary_timeline: [
        {
          schedule_itinerary_name: 'Morning Schedule',
          schedule_itinerary: [
          {
            schedule_itinerary_caption: '8:00 am – 10:00 am',
            schedule_itinerary_description: 'Registration and Breakfast\r\nThe venue opens for participants check-in, networking and refreshments.'
          },
          {
            schedule_itinerary_caption: '10:00 am – 11:00 am',
            schedule_itinerary_description: 'Opening ceremony\r\nBriefing & and commencement of Case studies'
          },
          {
            schedule_itinerary_caption: '11:00 am – 12:00 pm',
            schedule_itinerary_description: 'Decoding the case studies (Workshop)\r\nGain insights and strategies to analyse and solve case studies effectively in this workshop.'
          }
        ]
      },
      {
          schedule_itinerary_name: 'Afternoon Schedule',
          schedule_itinerary: [
          {
            schedule_itinerary_caption: '1:30 PM - 3:00 PM',
            schedule_itinerary_description: 'Networking lunch break\r\nCasual networking with judges, mentors and industry representatives'
          },
          {
            schedule_itinerary_caption: '3:00 PM - 4:00 PM',
            schedule_itinerary_description: 'Bloomberg Skills Training\r\nEnhance your analytics skills with hands-on training on Bloomberg\'s powerful tools'
          },
          {
            schedule_itinerary_caption: '4:00 PM – 4:30 PM',
            schedule_itinerary_description: 'High Tea\r\nBrainstorm on case studies and defining their problem-solving approach\r\nMentors are available for consultation'
          }
        ]
      },
      {
          schedule_itinerary_name: 'Evening Schedule',
          schedule_itinerary: [
          {
            schedule_itinerary_caption: '7:00 PM – 9:30 PM',
            schedule_itinerary_description: 'DJ Night\r\nAn evening of refined rhythms and captivating beats at our DJ Night'
          },
          {
            schedule_itinerary_caption: '9:30 PM ONWARDS',
            schedule_itinerary_description: 'Overnight case study'
          }
        ]
      }
    ]
    }
  ]

  const schedule_dates: string[] = [];

  schedule_itineraries.forEach((schedule_itinerary) => {
    schedule_dates.push(schedule_itinerary.schedule_itinerary_date.toString());
  })

  const [activeDate, updateActiveDate] = useState(schedule_dates.length > 0 ? schedule_dates[0] : '');
  const [openItinerary, toggleItineraryAccordian] = useState(0);

  const ScheduleTieUpContent = useRef<HTMLDivElement | null>(null);

  const updateActiveDateFunc = (schedule_date_name: string): void => {
    updateActiveDate(schedule_date_name);
    toggleItineraryAccordian(0);
    scrollWithOffset(ScheduleTieUpContent);
  }

  return (
    <>
    <Header eventRegistrationURL="https://www.nldalmia.in/" />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="DeCodeX 2025 - The Business Analytics Hackathon Crack The Code. Conquer The Clock"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Event Overview" introCaption="Where The Brightest Minds Meet Real-World Challenges" introDescription="DeCodeX 2025 is the flagship hackathon organized by the MetrixX Committee of N.L.Da.mia. This intense, overnight 24-hour business analytics challenge invites India’s sharpest young mind to decode a real world case study under pressure. Participants will leverage analytic tools, domain insights and pure critical thinking to generate actionable insights for high stakes business scenarios. The event stimulates real consulting enviorments and reward precision, logic and storytelling" />
          <div className="w-full h-130">
            <Image src={`${basePath}images/events/intro.png`} alt="Event" width={1920} height={600} className="object-cover" />
          </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro introTitle="Lorem Ipsum" introCaption="Last Year Number Speak For Themselves" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." />
          {
            milestones && milestones.length > 0 && (
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-center py-5">
              {
                milestones.map((milestone, key) => (
                  <>
                  <div className="flex flex-col gap-5 items-center text-center" key={key}>
                    <h2 className="text-4xl text-burgundy">{milestone.milestone_title}</h2>
                    <p className="text-[#020202]">{milestone.milestone_caption}</p>
                  </div>
                  {
                    ((key + 1) !== milestones.length) && (
                      <>
                      <span className="h-15 w-[0.5px] bg-[#4E4E4E] hidden lg:block"></span>
                      <span className="w-15 h-[0.5px] bg-[#4E4E4E] lg:hidden"></span>
                      </>
                    )
                  }
                  </>
                ))
              }
            </div>
          )
          }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro introTitle="Event Overview" introCaption="This Year We’re Making It Even Bigger. Are You Ready?" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." />
          <div className="flex flex-col md:flex-row md:gap-5">
            <ul className="md:w-[25%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
              {
                schedule_itineraries.map((schedule_itinerary, key) => (
                  <li className={`group cursor-pointer transition-all duration-300 ${activeDate === (schedule_itinerary.schedule_itinerary_date.toString()) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveDateFunc(schedule_itinerary.schedule_itinerary_date.toString())}>
                    <span className="relative">
                      <span>Day {(key.toString().length) === 1 ? '0' : ''}{(key + 1)}: {dayjs(schedule_itinerary.schedule_itinerary_date).format('Do MMMM, YYYY')}</span>
                      <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
                    </span>
                  </li>
                ))
              }
            </ul>
            <div className="md:w-[75%] lg:border-l-[0.5px] border-[#800000]" ref={ScheduleTieUpContent}>
              {
                  schedule_itineraries.map((schedule_itinerary, key) => (
                  <div className={`w-full ${activeDate === schedule_itinerary.schedule_itinerary_date.toString() ? '' : 'hidden'}`} key={key}>
                    {
                      schedule_itinerary.schedule_itinerary_timeline.map((schedule_itinerary_timeline_row, itinerary_key) => (
                        <div className={`w-full py-5 ${schedule_itinerary.schedule_itinerary_timeline.length !== (itinerary_key + 1) ? 'border-b' : '' } border-[#800000] `} key={itinerary_key}>
                          <div className="flex flex-col gap-3 lg:px-10">
                            <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleItineraryAccordian(itinerary_key)}>
                              <h2 className="font-georgia text-xl">{schedule_itinerary_timeline_row.schedule_itinerary_name}</h2>
                              <IoIosArrowDown size={20} className={`transition-all duration-300 ${openItinerary === itinerary_key ? "rotate-180" : ''}`} />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-10 ${openItinerary === itinerary_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                              <div className="flex flex-col gap-5">
                                {
                                  schedule_itinerary_timeline_row.schedule_itinerary && schedule_itinerary_timeline_row.schedule_itinerary.length > 0 && schedule_itinerary_timeline_row.schedule_itinerary.map((schedule_itinerary_row, schedule_itinerary_row_key) => (
                                    <div className="flex flex-col gap-3" key={schedule_itinerary_row_key}>
                                      <span className="font-georgia text-xl">{parser(nl2br(schedule_itinerary_row.schedule_itinerary_caption))}</span>
                                      <ul className="list-disc list-inside text-sm">
                                        {schedule_itinerary_row.schedule_itinerary_description?.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                                          <li key={index}>{parser(line)}</li>)
                                          )
                                        }
                                      </ul>
                                    </div>
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Competition Rounds" introCaption="Two Competition Round - One Goal" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed." />
          
      </div>
      <Footer />
    </main>
    </>
  );
}