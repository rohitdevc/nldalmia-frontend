"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlayCircle } from "react-icons/fi";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Event } from '@/types/api';

type PageProps = {
  event: Event
}

export default function EventDetails({event}: PageProps) {
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

  const rounds = [
    {
      round_title: 'Round 1: Quiz Competition',
      round_description: 'Mode: Online\r\n20 MCQs.\r\nDuration 20 mins',
      round_thumbnail: 'round-1.png'
    },
    {
      round_title: 'Round 2: Business Use Case',
      round_description: 'Mode: Offline\r\n20 MCQs.\r\nDuration 20 mins',
      round_thumbnail: 'round-2.png'
    },
    {
      round_title: 'Round 1: Quiz Competition',
      round_description: 'Mode: Online\r\n20 MCQs.\r\nDuration 20 mins',
      round_thumbnail: 'round-1.png'
    }
  ]

  const financial_partners = [
      {
        id: 1,
        financial_partner_name: 'IDFC First Bank',
        financial_partner_logo: 'idfc.png',
        financial_partner_url: 'https://www.idfcfirst.bank.in/'
      },
      {
        id: 2,
        financial_partner_name: 'Axis Bank',
        financial_partner_logo: 'axis.png',
        financial_partner_url: 'https://www.axis.bank.in/'
      },
      {
        id: 3,
        financial_partner_name: 'ICICI Bank iSmart Education Loans',
        financial_partner_logo: 'icici-i-smart.jpg',
        financial_partner_url: 'https://www.icici.bank.in/personal-banking/loans/education-loan'
      },
      {
        id: 4,
        financial_partner_name: 'Credila',
        financial_partner_logo: 'credila.jpg',
        financial_partner_url: 'https://www.credila.com/'
      },
      {
        id: 5,
        financial_partner_name: 'TATA Capital',
        financial_partner_logo: 'tata-capital.jpg',
        financial_partner_url: 'https://www.tatacapital.com/'
      }
  ]

  const testimonials = [
    {
      id: 1,
      testimonial_name: 'Ankita Mishra',
      testimonial_thumbnail: 'ankita-mishra.png',
      testimonial_designation: 'HR Business Partner',
      testimonial_company_name: 'Amazon Development Centre India Ltd',
      testimonial_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      testimonial_name: 'Rebuen D\'Souza',
      testimonial_thumbnail: 'reuben-dsouza.png',
      testimonial_designation: 'Senior Manager - Human Resources',
      testimonial_company_name: 'UPL Limited',
      testimonial_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      testimonial_name: 'Ankita Mishra',
      testimonial_thumbnail: 'ankita-mishra.png',
      testimonial_designation: 'HR Business Partner',
      testimonial_company_name: 'Amazon Development Centre India Ltd',
      testimonial_content: '',
      testimonial_youtube_video_id: 'loSuQcjtLYA'
    }
  ]

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeTestimonial, updateActiveTestimonial] = useState(0);
  
  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

  const faq_categories = [
    {
      id: 1,
      faq_category_title: 'Admissions',
    },
    {
      id: 2,
      faq_category_title: 'Academics'
    }
  ]

  const faqs = [
    {
      id: 1,
      faq_category_title: 'Admissions',
      faq_question: 'Are N. L. Dalmia Centre of Distance and Online Management Studies Programmes approved by any Government Body?',
      faq_answer: 'Yes, Online Learning and Online Distance Learning (ODL) (refer programme list on website) offered by N. L. Dalmia Centre of Distance and Online Management Studies are approved by All India Council for Technical Education (AICTE).'
    },
    {
      id: 2,
      faq_category_title: 'Admissions',
      faq_question: 'What are the eligibility criteria?',
      faq_answer: 'Bachelor\'s degree holder / Graduate in any discipline from a recognised University.'
    },
    {
      id: 3,
      faq_category_title: 'Academics',
      faq_question: 'Will you give the Study Material?',
      faq_answer: 'For Online Learning the students are given access to e-study material through a state-of-the-art e-learning platform. After admission is confirmed, students are provided with the study material, which consists of e-books, videos, case studies etc. In case, students want printed books, he/she has to pay ₹-3000/- extra to acquire them. Also, students will get access to the Institute’s e-library with a remote access facility.'
    },
  ]

  type FAQ = {
    id: number,
    faq_category_title: string,
    faq_question: string,
    faq_answer: string
  }

  const faqs_data: Record<string, FAQ[]> = {};

  faqs.forEach((faq) => {
    if (!faqs_data[faq.faq_category_title]) {
      faqs_data[faq.faq_category_title] = [];
    }

    faqs_data[faq.faq_category_title].push(faq);
  })

  const [activeFAQCategory, updateActiveFAQCategory] = useState(faq_categories.length > 0 ? faq_categories[0].faq_category_title : '');
  const [openFAQ, toggleFAQAccordian] = useState(0);

  const FAQs = useRef<HTMLDivElement | null>(null);

  const updateActiveFAQCategoryFunc = (faq_category_title: string): void => {
    updateActiveFAQCategory(faq_category_title);
    toggleFAQAccordian(0);
    scrollWithOffset(FAQs);
  }

  return (
    <>
    <Header eventRegistrationURL="https://www.nldalmia.in/" />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={event.banner_image}
      banner_caption={event.banner_image_caption}
      banner_description={event.banner_image_description}
      />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Event Overview" introCaption="Where The Brightest Minds Meet Real-World Challenges" introDescription="DeCodeX 2025 is the flagship hackathon organized by the MetrixX Committee of N.L.Da.mia. This intense, overnight 24-hour business analytics challenge invites India’s sharpest young mind to decode a real world case study under pressure. Participants will leverage analytic tools, domain insights and pure critical thinking to generate actionable insights for high stakes business scenarios. The event stimulates real consulting enviorments and reward precision, logic and storytelling" />
          <div className="w-full lg:max-h-130">
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
                    <p className="text-[#020202] w-50">{milestone.milestone_caption}</p>
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
          <div className="flex flex-col lg:flex-row md:gap-5">
            <ul className="lg:w-[25%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center lg:justify-start lg:items-start">
              {
                schedule_itineraries.map((schedule_itinerary, key) => (
                  <li className={`group cursor-pointer transition-all duration-300 ${activeDate === (schedule_itinerary.schedule_itinerary_date.toString()) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveDateFunc(schedule_itinerary.schedule_itinerary_date.toString())}>
                    <span className="relative">
                      <span>Day {(key.toString().length) === 1 ? '0' : ''}{(key + 1)}: {dayjs(schedule_itinerary.schedule_itinerary_date).format('Do MMMM, YYYY')}</span>
                      <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeDate === (schedule_itinerary.schedule_itinerary_date.toString()) ? 'scale-x-100' : ''}`}></span>
                    </span>
                  </li>
                ))
              }
            </ul>
            <div className="lg:w-[75%] lg:border-l-[0.5px] border-[#800000]" ref={ScheduleTieUpContent}>
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
                                          <li key={index}>{line}</li>
                                        )
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
      {
        rounds && rounds.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro introTitle="Competition Rounds" introCaption="Two Competition Round - One Goal" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {
                rounds.map((round, key) => (
                  <div key={key}>
                    <Image src={`${basePath}images/events/${round.round_thumbnail}`} alt={round.round_title} width={600} height={450} className="w-full" />
                    <div className="flex flex-col gap-5 bg-[#FFCC33] justify-center items-center text-center py-5 px-5 lg:px-10">
                      <h2 className="font-georgia text-xl">{round.round_title}</h2>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-between w-full text-[#4E4E4E]">
                        {
                        round.round_description?.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                          <span key={index}>{line}</span>
                        )
                          )
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      )
      }
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Workshop" introCaption="Lights, Camera, Action" introDescription="DeCodeX 2025 is the flagship hackathon organized by the MetrixX Committee of N.L.Da.mia. This intense, overnight 24-hour business analytics challenge invites India’s sharpest young mind to decode a real world case study under pressure. Participants will leverage analytic tools, domain insights and pure critical thinking to generate actionable insights for high stakes business scenarios. The event stimulates real consulting enviorments and reward precision, logic and storytelling" />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer workshop_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer workshop_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.workshop_slider_prev', nextEl: '.workshop_slider_next'}} >
            {
              [...Array(5)].map((_, i) => (
              <SwiperSlide className="w-full" key={i}>
                <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${basePath}images/careers/intro-img.png)`}}></div>
              </SwiperSlide>
            ))
            }
          </Swiper>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro introTitle="Prizes & Rewards" introCaption="Because Great Mind Deserves Great Rewards" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut." />
          {
        milestones && milestones.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center items-center bg-[#FFCC33] py-10">
          {
            milestones.map((milestone, key) => (
              <>
              <div className="flex flex-col gap-5 items-center text-center" key={key}>
                <h2 className="text-4xl text-[#7F1518]">{milestone.milestone_title}</h2>
                <p className="text-[#020202] w-50">{milestone.milestone_caption}</p>
              </div>
              {
                ((key + 1) !== milestones.length) && (
                  <>
                  <span className="h-10 w-[0.5px] bg-[#4E4E4E] hidden lg:block"></span>
                  <span className="w-10 h-[0.5px] bg-[#4E4E4E] lg:hidden"></span>
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
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro introCaption="Decodex 2025: Powered By Industry Leaders" introDescription="We partner with the leading financial institutions to support students with education loans on competitive terms" />
          {
            financial_partners && financial_partners.length && (
            <div className="w-full">
              <div className="flex gap-3 mb-5">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer sponsored_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer sponsored_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
              <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.sponsored_slider_prev', nextEl: '.sponsored_slider_next'}} breakpoints={{640: {slidesPerView: 2, spaceBetween: 30}, 768: {slidesPerView: 3, spaceBetween: 30}, 1024: {slidesPerView: 4, spaceBetween: 100}}}>
                {
                  financial_partners.map((financial_partner, key) => (
                    <SwiperSlide className="flex flex-col gap-5 justify-center items-center text-center" key={key}>
                      <div className="border-[0.5px] border-[#D2A6A6] flex justify-center items-center min-h-45">
                        <Image src={`${basePath}images/admissions/${financial_partner.financial_partner_logo}`} alt={financial_partner.financial_partner_name} width={100} height={60} className="w-30" />
                      </div>
                      <h2 className="font-georgia text-lg">{financial_partner.financial_partner_name}</h2>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            )
          }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Decodex 2024" introCaption="Decodex Isn’t Just A Competition. It’s About Transformation." introDescription="See why participants love us" />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer workshop_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer workshop_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.workshop_slider_prev', nextEl: '.workshop_slider_next'}} >
            {
              [...Array(5)].map((_, i) => (
              <SwiperSlide className="w-full" key={i}>
                <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${basePath}images/careers/intro-img.png)`}}></div>
              </SwiperSlide>
            ))
            }
          </Swiper>
      </div>
      {
        testimonials && testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Voices Of Success" introCaption="Join The Legacy Of Excellence & Let Your Success <br /> Story Begin Here." introDescription="Hear from our alumni and current students as they share their journey of transformation, Learning and success." />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer testimonial_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer testimonial_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full" slidesPerView={1} spaceBetween={75} modules={[Navigation]} navigation={{prevEl: '.testimonial_slider_prev', nextEl: '.testimonial_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 100 }, 1024: { slidesPerView: 3.5, spaceBetween: 100 } }} >
            {
              testimonials.map((testimonial, key) => (
                <SwiperSlide className="group relative w-full md:!w-90 border border-[#800000] bg-white" title={testimonial.testimonial_name} key={key} onClick={handleTestimonialClick(testimonial.id)}>
                  <div className="w-full h-full flex flex-col gap-10 px-5 py-5">
                    <Image src={`${basePath}images/home/testimonials/${testimonial.testimonial_thumbnail}`} alt={testimonial.testimonial_name} width={200} height={200} className="rounded-full w-30 h-30" />
                    <h2 className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</h2>
                    <div className="mt-auto flex flex-col gap-3 text-burgundy">
                      <span className="text-sm md:text-lg">{testimonial.testimonial_designation}</span>
                      <span className="text-sm md:text-lg">{testimonial.testimonial_company_name}</span>
                    </div>
                  </div>
                  <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeTestimonial === testimonial.id ? "scale-y-100" : "scale-y-0"}`}>
                    {
                      testimonial.testimonial_youtube_video_id ? (
                        <div className="mx-auto flex justify-center items-center gap-2 cursor-pointer w-full h-full" onClick={() => videoPopupRef.current?.open(testimonial.testimonial_youtube_video_id)}>
                          <FiPlayCircle size={20} />
                          <span className="text-sm">Play Video</span>
                        </div>
                      ) : (
                        <>
                        <p className="leading-loose">{testimonial.testimonial_content}</p>
                        <div className="mt-auto flex flex-col gap-3">
                          <span className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</span>
                          <span className="text-sm md:text-lg">{testimonial.testimonial_designation}</span>
                          <span className="text-sm md:text-lg">{testimonial.testimonial_company_name}</span>
                        </div>
                        </>
                      )
                    }
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      )}
      {
        faq_categories && faq_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Queries" introCaption="Got Questions? We’ve Got Answers" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." />
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  faq_categories.map((faq_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeFAQCategory === (faq_category.faq_category_title) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveFAQCategoryFunc(faq_category.faq_category_title)}>
                      <span className="relative">
                        {faq_category.faq_category_title}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeFAQCategory === (faq_category.faq_category_title) ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={FAQs}>
                {
                    faq_categories.map((faq_category, key) => (
                    <div className={`w-full ${activeFAQCategory === faq_category.faq_category_title ? '' : 'hidden'}`} key={key}>
                      {
                        faqs_data[faq_category.faq_category_title].map((faqs, faq_key) => (
                          <div className={`w-full py-5 ${faqs_data[faq_category.faq_category_title].length !== (faq_key + 1) ? 'border-b' : '' } border-[#800000] `} key={faq_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleFAQAccordian(faq_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{faqs.faq_question}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openFAQ === faq_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openFAQ === faq_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  <p className="text-sm">{faqs.faq_answer}</p>
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
          )
      }
      <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20 mt-5" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
            <h3 className="font-georgia leading-relaxed text-center text-2xl lg:text-5xl">Bring Your Best. The Clock Is Ticking!</h3>
            <Link href="" className="flex items-center gap-2 px-3 py-1 bg-[#800000]" target="_blank">Register Now</Link>
          </div>
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}