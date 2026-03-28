"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import { useHeader } from '@/context/HeaderContext'

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

type EventScheduleItem = {
  event_schedule_caption: string;
  event_schedule_time: string;
  event_schedule_description: string;
};

type EventScheduleDay = {
  event_schedule_date: string;
  event_schedule_data: EventScheduleItem[];
};

type ItineraryItem = {
  schedule_itinerary_caption: string;
  schedule_itinerary_description: string;
};

type ItineraryGroup = {
  schedule_itinerary_name: string;
  schedule_itinerary: ItineraryItem[];
};

type TransformedSchedule = {
  id: number;
  schedule_itinerary_date: Date;
  schedule_itinerary_timeline: ItineraryGroup[];
};

function transformSchedule(data: EventScheduleDay[]): TransformedSchedule[] {
  return data.map((day, index) => {
    const grouped: Record<string, ItineraryItem[]> = {};

    day.event_schedule_data.forEach((item) => {
      const key = item.event_schedule_caption;

      if (!grouped[key]) {
        grouped[key] = [];
      }

      grouped[key].push({
        schedule_itinerary_caption: item.event_schedule_time,
        schedule_itinerary_description: item.event_schedule_description
      });
    });

    const timeline: ItineraryGroup[] = Object.keys(grouped).map((key) => ({
      schedule_itinerary_name: key,
      schedule_itinerary: grouped[key]
    }));

    return {
      id: index + 1,
      schedule_itinerary_date: new Date(day.event_schedule_date),
      schedule_itinerary_timeline: timeline
    };
  });
}

export default function EventDetails({ event }: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader();

  useEffect(() => {
    setHeaderProps({
      eventRegistrationURL: event.event_registration_link
    })
  }, []);

  const schedule_itineraries = (event.event_schedules.length > 0) ? transformSchedule(event.event_schedules) : [];

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

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeTestimonial, updateActiveTestimonial] = useState(-1);
  
  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

  const [activeFAQCategory, updateActiveFAQCategory] = useState(event.event_faqs.length > 0 ? event.event_faqs[0].event_faq_tab_title : '');
  const [openFAQ, toggleFAQAccordian] = useState(0);

  const FAQs = useRef<HTMLDivElement | null>(null);

  const updateActiveFAQCategoryFunc = (event_faq_tab_title: string): void => {
    updateActiveFAQCategory(event_faq_tab_title);
    toggleFAQAccordian(0);
    scrollWithOffset(FAQs);
  }

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={event.banner_image}
      banner_caption={event.banner_image_caption}
      banner_description={event.banner_image_description}
      />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={event.event_name}
          introCaption={event.event_introduction_caption}
          introDescription={event.event_introduction_description} />
          {
            event.event_introduction_image && (
            <div className="w-full lg:max-h-130">
              <Image src={event.event_introduction_image} alt={event.event_name} width={1920} height={600} className="object-cover w-full h-full" />
            </div>
            )
          }
      </div>
      {
        event.event_milestones && event.event_milestones.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro
          introTitle={event.event_milestone_title}
          introCaption={event.event_milestone_caption}
          introDescription={event.event_milestone_description}
          />
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center py-5">
            {
              event.event_milestones.map((milestone, key) => (
                <>
                <div className="flex flex-col gap-5 items-center text-center" key={key}>
                  <h2 className="text-4xl text-burgundy">{milestone.event_milestone_caption}</h2>
                  <p className="text-[#020202] w-50">{milestone.event_milestone_description}</p>
                </div>
                {
                  ((key + 1) !== event.event_milestones.length) && (
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
        </div>
        )
      }
      {
        schedule_itineraries && schedule_itineraries.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro
          introCaption={event.event_schedule_caption}
          introDescription={event.event_schedule_description}
          />
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
      )}
      {
        event.event_competitions && event.event_competitions.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro
            introTitle={event.event_competition_title}
            introCaption={event.event_competition_caption}
            introDescription={event.event_competition_description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {
                event.event_competitions.map((round, key) => (
                  <div key={key}>
                    <Image src={round.event_competition_image} alt={round.event_competition_caption} width={600} height={450} className="w-full" />
                    <div className="flex flex-col gap-5 bg-[#FFCC33] justify-center items-center text-center py-5 px-5 lg:px-10">
                      <h2 className="font-georgia text-xl">{round.event_competition_caption}</h2>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-between w-full text-[#4E4E4E]">
                        {
                        round.event_competition_description?.split('\n').filter(line => line.trim() !== '').map((line, index) => (
                          <span key={index}>{line}</span>
                        ))
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      )}
      {
        event.event_sliders && event.event_sliders.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro
            introTitle={event.event_slider_title}
            introCaption={event.event_slider_caption}
            introDescription={event.event_slider_description}
            />
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
                event.event_sliders.map((event_slider, key) => (
                <SwiperSlide key={key} title={event_slider.event_slider_caption}>
                  <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${event_slider.event_slider_image})`}}></div>
                </SwiperSlide>
              ))
              }
            </Swiper>
        </div>
      )}
      {
      event.event_rewards && event.event_rewards.length > 0 && (
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro
        introTitle={event.event_reward_title}
        introCaption={event.event_reward_caption}
        introDescription={event.event_reward_description}
        />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center items-center bg-[#FFCC33] py-10">
          {
            event.event_rewards.map((reward, key) => (
              <>
              <div className="flex flex-col gap-5 items-center text-center" key={key}>
                <h2 className="text-4xl text-[#7F1518]">{reward.event_reward_caption}</h2>
                <p className="text-[#020202] w-50">{reward.event_reward_description}</p>
              </div>
              {
                ((key + 1) !== event.event_rewards.length) && (
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
      </div>
      )}
      {
      event.event_sponsers && event.event_sponsers.length && (
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro
          introCaption={event.event_sponser_caption}
          introDescription={event.event_sponser_description}
          />
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
                event.event_sponsers.map((event_sponser, key) => event_sponser.event_sponser_logo && (
                  <SwiperSlide className="flex flex-col gap-5 justify-center items-center text-center" title={event_sponser.event_sponser_name} key={key}>
                    <div className="border-[0.5px] border-[#D2A6A6] flex justify-center items-center min-h-45">
                      <Image src={event_sponser.event_sponser_logo} alt={event_sponser.event_sponser_name} width={100} height={60} className="w-30" />
                    </div>
                    <h2 className="font-georgia text-lg">{event_sponser.event_sponser_name}</h2>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
      </div>
      )}
      {
        event.event_second_sliders && event.event_second_sliders.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro
            introTitle={event.event_second_slider_title}
            introCaption={event.event_second_slider_caption}
            introDescription={event.event_second_slider_description}
            />
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
                event.event_second_sliders.map((event_slider, key) => (
                <SwiperSlide className="w-full" key={key} title={event_slider.event_slider_caption}>
                  <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${event_slider.event_slider_image})`}}></div>
                </SwiperSlide>
              ))
              }
            </Swiper>
        </div>
      )}
      {
        event.event_testimonials && event.event_testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={event.event_testimonial_title}
          introCaption={event.event_testimonial_caption}
          introDescription={event.event_testimonial_description} />
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
              event.event_testimonials.map((testimonial, key) => (
                <SwiperSlide className="group relative w-full md:!w-90 border border-[#800000] bg-white" title={testimonial.event_testimonial_name} key={key} onClick={handleTestimonialClick(key)}>
                  <div className="w-full h-full flex flex-col gap-10 px-5 py-5">
                    <Image src={testimonial.event_testimonial_image} alt={testimonial.event_testimonial_name} width={200} height={200} className="rounded-full w-30 h-30" />
                    <h2 className="font-georgia text-xl lg:text-2xl">{testimonial.event_testimonial_name}</h2>
                    <div className="mt-auto flex flex-col gap-3 text-burgundy">
                      <span className="text-sm md:text-lg">{parser(nl2br(testimonial.event_testimonial_designation))}</span>
                    </div>
                  </div>
                  <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeTestimonial === key ? "scale-y-100" : "scale-y-0"}`}>
                    <p className="leading-loose">{parser(nl2br(testimonial.event_testimonial_content))}</p>
                    <div className="mt-auto flex flex-col gap-3">
                      <span className="font-georgia text-xl lg:text-2xl">{testimonial.event_testimonial_name}</span>
                      <span className="text-sm md:text-lg">{parser(nl2br(testimonial.event_testimonial_designation))}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      )}
      {
        event.event_faqs && event.event_faqs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={event.event_faq_title}
          introCaption={event.event_faq_caption}
          introDescription={event.event_faq_description} />
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  event.event_faqs.map((event_faq, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeFAQCategory === event_faq.event_faq_tab_title ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveFAQCategoryFunc(event_faq.event_faq_tab_title)}>
                      <span className="relative">
                        {event_faq.event_faq_tab_title}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeFAQCategory === event_faq.event_faq_tab_title ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={FAQs}>
                {
                    event.event_faqs.map((event_faq, key) => (
                    <div className={`w-full ${activeFAQCategory === event_faq.event_faq_tab_title ? '' : 'hidden'}`} key={key}>
                      {
                        event_faq.event_faq_tabs && event_faq.event_faq_tabs.length > 0 && event_faq.event_faq_tabs.map((faq, faq_key) => (
                          <div className={`w-full py-5 ${event_faq.event_faq_tabs.length !== (faq_key + 1) ? 'border-b' : '' } border-[#800000] `} key={faq_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleFAQAccordian(faq_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{faq.event_faq_question}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openFAQ === faq_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openFAQ === faq_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  <p className="text-sm">{faq.event_faq_answer}</p>
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
      {
        event.event_footer_section_caption && (
        <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20 mt-5" style={{backgroundImage: `url(${event.event_footer_section_image})`}}>
            <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
            <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
              <h3 className="font-georgia leading-relaxed text-center text-2xl lg:text-5xl">{event.event_footer_section_caption}</h3>
              {
                event.event_registration_link &&  (
                <Link href={event.event_registration_link} className="flex items-center gap-2 px-3 py-1 bg-[#800000]" target="_blank">Register Now</Link>
                )
              }
            </div>
        </div>
      )
      }
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
  );
}