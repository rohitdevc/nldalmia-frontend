"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { IoIosArrowDown } from "react-icons/io";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import { MdArrowOutward } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { Banner as BannerProps, FounderQuote, GoverningCouncil, InternationalUniversities, IntroProps, ManagementQuote, ManagingCouncil, Objectives, Ticker, Timeline, VideoSection } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  objectives: Objectives[]
  timeline: Timeline[]
  founder_quote: FounderQuote
  management_quotes: ManagementQuote[]
  managing_council_introduction: IntroProps
  managing_council: ManagingCouncil[]
  governing_council_introduction: IntroProps
  governing_council: GoverningCouncil[]
  video_section: VideoSection
  international_universities_introduction: IntroProps
  international_universities: InternationalUniversities[]
};

export default function AboutUsComponent({ticker, banner, introduction, objectives, timeline, founder_quote, management_quotes, managing_council_introduction, managing_council, governing_council_introduction, governing_council, video_section, international_universities_introduction, international_universities}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);
  
  const [activeYear, setActiveYear] = useState(0);
  const [yearSwiper, setYearSwiper] = useState<SwiperType | null>(null);
  const [contentSwiper, setContentSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (yearSwiper && contentSwiper) {
      yearSwiper.controller.control = contentSwiper;
      contentSwiper.controller.control = yearSwiper;
    }
  }, [yearSwiper, contentSwiper]);

  const international_countries: string[] = [];
  const international_universities_data: Record<string, InternationalUniversities[]> = {};

  international_universities.forEach((international_university) => {
    if(!international_countries.includes(international_university.international_university_country_name)) {
      international_countries.push(international_university.international_university_country_name);
    }
    
    if (!international_universities_data[international_university.international_university_country_name]) {
      international_universities_data[international_university.international_university_country_name] = [];
    }

    international_universities_data[international_university.international_university_country_name].push(international_university);
  })

  const [activeCountry, updateActiveCountry] = useState(international_countries.length > 0 ? international_countries[0] : '');
  const [openUniversity, toggleUniversityAccordian] = useState(0);

  const InternationalTieUpContent = useRef<HTMLDivElement | null>(null);

  const updateActiveCountryFunc = (international_country_name: string): void => {
    updateActiveCountry(international_country_name);
    toggleUniversityAccordian(0);
    scrollWithOffset(InternationalTieUpContent);
  }

  return (
    <>
    <Header ticker_api={ticker} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        />
        <div className="flex flex-col lg:flex-row gap-10 md:mt-10 xl:mt-20">
          <div className="w-full lg:w-[40%] overflow-hidden relative cursor-pointer md:h-40 lg:h-full aspect-[800/400]" onClick={() => videoPopupRef.current?.open(introduction.intro_video_id)}>
          {
            introduction.intro_image && (
            <Image src={introduction.intro_image} width={800} height={400} alt={introduction.intro_title} className="object-cover w-full h-full" />
            )
          }
          {
            introduction.intro_video_id && (
              <FaPlayCircle size={35} className="absolute inset-0 m-auto text-white" />
            )
          } 
          </div>
          <div className="w-full lg:w-[60%] flex flex-col gap-5">
            <p className="text-[#4E4E4E] text-sm leading-loose">{parser(nl2br(introduction.intro_description))}</p>
          </div>
        </div>
        {
          objectives && objectives.length > 0 && (
          <div className="flex flex-wrap gap-10 justify-center w-full">
            {
              objectives.map((objective, key) => (
                <div className="flex flex-col w-sm md:w-75 lg:w-sm text-center border-[0.5px] border-[#800000]" key={key}>
                  <h2 className="font-georgia text-xl bg-[#FFCC33] w-full border-b-[0.5px] border-[#800000] py-2">{objective.objective_caption}</h2>
                  <p className="px-5 py-5 min-h-50 text-burgundy">{parser(nl2br(objective.objective_description))}</p>
                </div>
              ))
            }
          </div>
          )
        }
      </div>
      {
        timeline && timeline.length > 0 && (
          <div className="w-full h-screen bg-cover bg-center relative text-white flex flex-col" style={{backgroundImage: `url(${timeline[activeYear]?.timeline_image})`}}>
            <div className="absolute inset-0 bg-black/35"></div>
            <Swiper slidesPerView={5} centeredSlides slideToClickedSlide watchSlidesProgress initialSlide={0} modules={[Controller, Navigation]} onSwiper={setYearSwiper} className="w-full lg:w-1/2 relative z-10 timeline_pagination_slider">
              {
                timeline.map((timeline_row, key) => (
                  <SwiperSlide className="py-10 lg:py-20 text-center cursor-pointer" key={key}>
                    <span className="text-xl opacity-75 transition-all duration-300">{timeline_row.timeline_year}</span>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Swiper modules={[Controller, Pagination]} slidesPerView={1} onSwiper={setContentSwiper} onSlideChange={(swiper) => setActiveYear(swiper.activeIndex)} className="w-full mt-auto relative">
              {
                timeline.map((timeline_row, key) => (
                  <SwiperSlide className="px-2 py-2 md:px-10 md:py-10 lg:px-50 lg:py-20 text-center" key={key}>
                    <div className="flex flex-col gap-10">
                      <h2 className="font-georgia text-2xl md:text-3xl lg:text-4xl">{timeline_row.timeline_year} - {timeline_row.timeline_caption}</h2>
                      <p className=" lg:text-lg leading-normal md:leading-loose">{timeline_row.timeline_description}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        )
      }
      {
        founder_quote && (
        <div className="w-full px-5 md:px-15 lg:px-20 py-10 bg-[#FFCC33] flex flex-col gap-10">
          <h2 className="text-2xl lg:text-4xl font-georgia">{founder_quote.founder_quote_title}</h2>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center items-center">
            <div className="w-80">
              {
                founder_quote.founder_image && (
                  <Image src={founder_quote.founder_image} width={800} height={750} alt="NL Dalmia Intro" className="object-cover w-full h-full" />
                )
              }
            </div>
            <div className="flex flex-col mt-auto gap-5 lg:gap-10 relative">
              <p className="text-burgundy leading-loose">{parser(nl2br(founder_quote.founder_bio))}</p>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl">{founder_quote.founder_quote}</h3>
                <h4 className="text-burgundy">{founder_quote.founder_name}</h4>
              </div>
            </div>
          </div>
        </div>
      )
      }
      {
        management_quotes && management_quotes.length > 0 && (
          <div className="w-full px-5 md:px-15 xl:px-20 py-10 flex flex-col gap-5 lg:gap-10">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_quote_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_quote_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.management_quote_slider_prev', nextEl: '.management_quote_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}>
              {
                management_quotes.map((management_quote, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col w-full" key={key}>
                    <div className="flex flex-col gap-2 items-center p-5 text-center">
                      <div className="w-30">
                        {
                          management_quote.management_thumbnail && (
                            <Image src={management_quote.management_thumbnail} alt={management_quote.management_caption} width={150} height={150} className="object-cover w-full h-full" />
                          )
                        }
                      </div>
                      <h2 className="text-xl font-georgia">{management_quote.management_caption}</h2>
                      <p className="text-burgundy leading-loose lg:h-40 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{management_quote.management_quote}</p>
                    </div>
                    {
                      management_quote.management_profile_link && (
                        <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={management_quote.management_profile_link}>View Profile <MdArrowOutward size={20} /></Link>
                      )
                    }
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        )
      }
      {
        managing_council && managing_council.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 lg:py-5">
          <Intro
          introTitle={managing_council_introduction.intro_title}
          introCaption={managing_council_introduction.intro_caption}
          introDescription={managing_council_introduction.intro_description} />
          <div className="w-full py-10 flex flex-col gap-5">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer managing_council_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer managing_council_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.managing_council_slider_prev', nextEl: '.managing_council_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                managing_council.map((managing_council_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      <div className="w-30">
                        {
                          managing_council_row.managing_council_thumbnail && (
                            <Image src={managing_council_row.managing_council_thumbnail} alt={managing_council_row.managing_council_name} width={150} height={150} className="object-cover w-full h-full" />
                          )
                        }
                      </div>
                      <h2 className="text-xl font-georgia lg:h-10">{managing_council_row.managing_council_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(managing_council_row.managing_council_designation))}</p>
                    </div>
                    {
                      managing_council_row.managing_council_profile_link && (
                        <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={managing_council_row.managing_council_profile_link}>View Profile <MdArrowOutward size={20} /></Link>
                      )
                    }
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      {
        governing_council && governing_council.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 lg:py-5">
          <Intro
          introTitle={governing_council_introduction.intro_title}
          introCaption={governing_council_introduction.intro_caption}
          introDescription={governing_council_introduction.intro_description} />
          <div className="w-full py-10 flex flex-col gap-5">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer governing_council_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer governing_council_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.governing_council_slider_prev', nextEl: '.governing_council_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                governing_council.map((governing_council_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      <div className="w-30">
                        {
                          governing_council_row.governing_council_thumbnail && (
                            <Image src={governing_council_row.governing_council_thumbnail} alt={governing_council_row.governing_council_name} width={150} height={150} className="object-cover w-full h-full" />
                          )
                        }
                      </div>
                      <h2 className="text-xl font-georgia lg:h-10">{governing_council_row.governing_council_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(governing_council_row.governing_council_designation))}</p>
                    </div>
                    {
                      governing_council_row.governing_council_profile_link && (
                        <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={governing_council_row.governing_council_profile_link}>View Profile <MdArrowOutward size={20} /></Link>
                      )
                    }
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      {
        video_section && (
        <div className="w-full h-screen relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20" style={{backgroundImage: `url(${video_section.video_background_image})`}} id="InternationalTieUps">
            <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
            <div className="flex flex-col gap-15 relative w-full h-full justify-center items-center">
              <p className="font-georgia leading-normal lg:leading-loose text-center text-2xl lg:text-4xl">{parser(nl2br(video_section.video_title))}</p>
              {
                video_section.video_id && (
                <div className="flex items-center gap-2 px-3 py-1 bg-[#800000] cursor-pointer" onClick={() => videoPopupRef.current?.open(video_section.video_id)}>
                    <FaPlayCircle />
                    <span>Play Video</span>
                </div>
                )
              }
            </div>
        </div>
        )
      }
      {
        international_countries && international_countries.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5 lg:py-15">
          <Intro
          introTitle={international_universities_introduction.intro_title}
          introCaption={international_universities_introduction.intro_caption}
          introDescription={international_universities_introduction.intro_description} />
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
            <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
              {
                international_countries.map((country_name, key) => (
                  <li className={`group cursor-pointer transition-all duration-300 ${activeCountry === (country_name) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveCountryFunc(country_name)}>
                    <span className="relative">
                      {country_name}
                      <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeCountry === (country_name) ? 'scale-x-100' : ''}`}></span>
                    </span>
                  </li>
                ))
              }
            </ul>
            <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={InternationalTieUpContent}>
              {
                  international_countries.map((country_name, key) => (
                  <div className={`w-full ${activeCountry === country_name ? '' : 'hidden'}`} key={key}>
                    {
                      international_universities_data[country_name].map((international_university, university_key) => (
                        <div className={`w-full py-5 ${international_universities_data[country_name].length !== (university_key + 1) ? 'border-b' : '' } border-[#800000] `} key={university_key}>
                          <div className="flex flex-col gap-3 lg:px-10">
                            <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleUniversityAccordian(university_key)}>
                              <div className="flex gap-5 justify-center items-center">
                                {
                                  international_university.international_university_logo && (
                                    <Image src={international_university.international_university_logo} alt={international_university.international_university_name} width={100} height={100} className={`transition-all duration-300 ${openUniversity === university_key ? "" : "hidden"}`} />
                                  )
                                }
                                <h2 className="font-georgia text-xl">{international_university.international_university_name}</h2>
                              </div>
                              <IoIosArrowDown size={20} className={`transition-all duration-300 ${openUniversity === university_key ? "rotate-180" : ''}`} />
                            </div>
                            <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openUniversity === university_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                              <p className="leading-loose">{parser(nl2br(international_university.international_university_caption))}</p>
                              <div className="text-[#4E4E4E] university_description">
                                {parser(international_university.international_university_description)}
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
      
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}