"use client"

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import truncate from "truncate";

import { useState, useEffect, useRef } from "react";

import { MdArrowOutward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin, FaSquareXTwitter  } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import { useServerCountdown } from "@/hooks/useServerCountdown";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';
import { Ticker, Banner as BannerProps, IntroProps, WallOfFame, Slider, AlumniQuotes, AlumniMeet, AlumniConnect, AlumniHallOfFame, AlumniTestimonials, AlumniEvents } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  wall_of_fame: WallOfFame[]
  slider: Slider[]
  alumni_meet: AlumniMeet[]
  alumni_quotes: AlumniQuotes[]
  alumni_connect_introduction: IntroProps
  alumni_connect: AlumniConnect[]
  alumni_global: IntroProps
  alumni_hall_of_fame_introduction: IntroProps
  alumni_hall_of_fame: AlumniHallOfFame[]
  alumni_testimonials_introduction: IntroProps
  alumni_testimonials: AlumniTestimonials[]
  alumni_events_introduction: IntroProps
  alumni_events: AlumniEvents[]
  alumni_portal: IntroProps
};

export default function Alumni({ticker, banner, introduction, wall_of_fame, slider, alumni_meet, alumni_quotes, alumni_connect_introduction, alumni_connect, alumni_global, alumni_hall_of_fame_introduction, alumni_hall_of_fame, alumni_testimonials_introduction, alumni_testimonials, alumni_events_introduction, alumni_events, alumni_portal}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  useEffect(() => {
    const wrappers = document.querySelectorAll(".connect_description");
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      const headings = wrapper.querySelectorAll("h4");

      headings.forEach((h4) => {
        h4.classList.add(
          "font-georgia"
        );
      });
    })

    wrappers.forEach((wrapper) => {
      const paragraphs = wrapper.querySelectorAll("p");

      paragraphs.forEach((p) => {
        p.classList.add(
          "text-[#4E4E4E]",
          "text-sm",
          "leading-loose"
        );
      });
    })
  }, []);

  const [activeAlumniEvent, updateActiveAlumniEvent] = useState(-1);

  const handleAlumniEventClick = (alumni_event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveAlumniEvent(alumni_event_id);
      }
    }
  }

  const [showConnectAlumniPopUp, updateConnectAlumniPopUp] = useState(false);
  const [activeConnectAlumniIndex, setActiveConnectAlumniIndex] = useState(0);
  const popupConnectAlumniRef = useRef<SwiperCore | null>(null);

  const handleConnectAlumniClick = (index: number) => {
    setActiveConnectAlumniIndex(index);
    updateConnectAlumniPopUp(true);
    
    setTimeout(() => {
      popupConnectAlumniRef.current?.slideTo(index);
    }, 0);
  };

  const [showWallOfFamePopUp, updateWallOfFamePopUp] = useState(false);
  const [activeWallOfFameIndex, setActiveWallOfFameIndex] = useState(0);
  const popupWallOfFameRef = useRef<SwiperCore | null>(null);

  const handleWallOfFameClick = (index: number) => {
    setActiveWallOfFameIndex(index);
    updateWallOfFamePopUp(true);
    
    setTimeout(() => {
      popupWallOfFameRef.current?.slideTo(index);
    }, 0);
  };

  return (
    <>
    <Header ticker_api={ticker} alumniPage={true} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description}
        />
        {
          wall_of_fame && wall_of_fame.length > 0 && (
          <div className="w-full relative">
            <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 left-4 wall_of_fame_slider_prev z-2">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 right-4 wall_of_fame_slider_next z-2">
              <BsArrowRightShort size={20} />
            </span>
            <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.wall_of_fame_slider_prev', nextEl: '.wall_of_fame_slider_next'}} className="text-white">
              {
              wall_of_fame.map((wall_of_fame_row, key) => (
                <SwiperSlide key={key}>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 lg:gap-15 px-10 lg:px-15 bg-[#800000] items-center">
                    <div className="lg:w-75 mt-auto">
                      {
                        wall_of_fame_row.wall_of_fame_thumbnail && (
                          <Image src={wall_of_fame_row.wall_of_fame_thumbnail} width={320} height={360} alt={wall_of_fame_row.wall_of_fame_name} className="object-cover" />
                        )
                      }
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5 py-7 w-full text-sm">
                      <h2 className="font-georgia text-xl">{wall_of_fame_row.wall_of_fame_name}</h2>
                      <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:gap-7 xl:gap-20">
                        { wall_of_fame_row.wall_of_fame_company_name && (
                          <li>Company – {wall_of_fame_row.wall_of_fame_company_name}</li>
                        )}
                        { wall_of_fame_row.wall_of_fame_designation && (
                        <li>Designation – {wall_of_fame_row.wall_of_fame_designation}</li>
                        )}
                        { wall_of_fame_row.wall_of_fame_batch_year && (
                        <li>Batch - {wall_of_fame_row.wall_of_fame_batch_year}</li>
                        )}
                      </ul>
                      <p className="leading-relaxed sm:leading-loose">{parser(nl2br(wall_of_fame_row.wall_of_fame_description))}</p>
                      <span className="w-30 text-center text-burgundy bg-white py-1 text-sm cursor-pointer hidden">View More</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
        }
        {
          slider && slider.length > 0 && (
          <div className="w-full relative">
            <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 left-4 events_slider_prev z-2">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 right-4 events_slider_next z-2">
              <BsArrowRightShort size={20} />
            </span>
            <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.events_slider_prev', nextEl: '.events_slider_next'}}>
              {
              slider.map((slider_row, key) => (
                <SwiperSlide key={key}>
                  <div className="flex flex-col lg:flex-row gap-15 px-15 border">
                    <div className="flex flex-col gap-5 py-7 w-full">
                      <h2 className="font-georgia text-xl">{slider_row.slider_caption}</h2>
                      <p className="leading-relaxed lg:leading-loose text-[#4E4E4E]">{parser(nl2br(slider_row.slider_description))}</p>
                      <span className="w-30 text-center text-burgundy bg-white py-1 text-sm cursor-pointer hidden">View More</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          )
        }
        <div className="w-full lg:flex gap-0 lg:justify-between">
          {
            alumni_meet && alumni_meet.length > 0 && (
            <div className="w-full mb-10 lg:mb-0 lg:w-[48%] relative">
              <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 left-4 alumni_meet_slider_prev z-2">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 right-4 alumni_meet_slider_next z-2">
                <BsArrowRightShort size={20} />
              </span>
              <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.alumni_meet_slider_prev', nextEl: '.alumni_meet_slider_next'}} className="text-white">
                {
                alumni_meet.map((alumni_meet_row, key) => (
                  <SwiperSlide key={key}>
                    <div className="flex flex-col lg:flex-row gap-15 px-15 bg-[#800000] lg:h-85 xl:h-75">
                      <div className="flex flex-col gap-5 py-7 w-full">
                        <h2 className="font-georgia text-xl">Alumni Chapter Meet</h2>
                        <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:gap-7 xl:gap-20">
                          <li>{alumni_meet_row.meet_caption}</li>
                          <li>{dayjs.utc(new Date(alumni_meet_row.meet_date)).format('Do MMMM, YYYY')}</li>
                        </ul>
                        <p className="leading-relaxed lg:leading-loose overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(alumni_meet_row.meet_description))}</p>
                        {
                          alumni_meet_row.meet_link && (
                          <Link href={alumni_meet_row.meet_link} className="w-30 text-center text-burgundy bg-white py-1 text-sm cursor-pointer">Register Now</Link>
                          )
                        }
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            )
          }
          {
            alumni_quotes && alumni_quotes.length > 0 && (
            <div className="w-full lg:w-[48%] relative">
              <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 left-4 testimonial_slider_prev z-2">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 right-4 testimonial_slider_next z-2">
                <BsArrowRightShort size={20} />
              </span>
              <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.testimonial_slider_prev', nextEl: '.testimonial_slider_next'}}>
                {
                alumni_quotes.map((alumni_quote, key) => (
                  <SwiperSlide key={key}>
                    <div className="flex flex-col sm:flex-row gap-10 px-5 bg-white border items-center lg:h-85 xl:h-75">
                      <div className="w-50 lg:w-75 lg:mt-auto">
                        {
                          alumni_quote.quote_thumbnail && (
                          <Image src={alumni_quote.quote_thumbnail} width={320} height={360} alt={alumni_quote.quote_name} className="object-cover" />
                          )
                        }
                      </div>
                      <div className="flex flex-col gap-5 py-7 w-full">
                        <p className="font-georgia text-xl">{alumni_quote.quote_text}</p>
                        <h3>{dayjs.utc(new Date(alumni_quote.quote_date)).format('Do MMMM, YYYY')}</h3>
                        <h4>{alumni_quote.quote_name}</h4>
                        {
                          (alumni_quote.quote_link || alumni_quote.quote_pdf) && (
                          <Link href={alumni_quote.quote_link || alumni_quote.quote_pdf} className="w-30 text-center text-white bg-[#800000] py-1 text-sm mt-auto">View More</Link>
                          )
                        }
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            )
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={alumni_connect_introduction.intro_title}
        introCaption={alumni_connect_introduction.intro_caption}
        introDescription={alumni_connect_introduction.intro_description} />
        {
          alumni_connect && alumni_connect.length > 0 && (
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_connect_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_connect_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.alumni_connect_slider_prev', nextEl: '.alumni_connect_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                alumni_connect.map((alumni_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      {
                        alumni_row.connect_thumbnail && (
                        <Image src={alumni_row.connect_thumbnail} alt={alumni_row.connect_name} width={150} height={150} className="w-30" />
                        )
                      }
                      <h2 className="text-xl font-georgia lg:h-10">{alumni_row.connect_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(alumni_row.connect_designation))}</p>
                    </div>
                    <span className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center cursor-pointer" onClick={() => handleConnectAlumniClick(key)}>View Profile <MdArrowOutward size={20} /></span>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          )
        }
      </div>
      {
        alumni_global && (
        <div className="w-full relative text-black" title={alumni_global.intro_title}>
          {
            alumni_global.intro_image && (
            <Image src={alumni_global.intro_image} alt={alumni_global.intro_title} width={1920} height={1080} className="w-full" />
            )
          }
          <div className="lg:absolute inset-0 flex justify-center text-center px-5 lg:py-15">
            <p className="leading-loose mt-auto w-3xl">{alumni_global.intro_description}</p>
          </div>
        </div>
        )
      }
      {
        alumni_hall_of_fame && alumni_hall_of_fame.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={alumni_hall_of_fame_introduction.intro_title}
          introCaption={alumni_hall_of_fame_introduction.intro_caption}
          introDescription={alumni_hall_of_fame_introduction.intro_description} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_hall_of_fame_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_hall_of_fame_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.alumni_hall_of_fame_slider_prev', nextEl: '.alumni_hall_of_fame_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                alumni_hall_of_fame.map((alumni_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      {
                        alumni_row.hall_of_fame_thumbnail && (
                        <Image src={alumni_row.hall_of_fame_thumbnail} alt={alumni_row.hall_of_fame_name} width={150} height={150} className="w-30" />
                        )
                      }
                      <h2 className="text-xl font-georgia lg:h-10">{alumni_row.hall_of_fame_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(alumni_row.hall_of_fame_designation))}</p>
                    </div>
                    <span className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center cursor-pointer" onClick={() => handleWallOfFameClick(key)}>View Profile <MdArrowOutward size={20} /></span>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      {
        alumni_testimonials && alumni_testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={alumni_testimonials_introduction.intro_title}
          introCaption={alumni_testimonials_introduction.intro_caption}
          introDescription={alumni_testimonials_introduction.intro_description}
          />
          <div className="w-full">
            <div className="flex gap-3 mb-5">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_testimonial_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_testimonial_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} navigation={{prevEl: '.alumni_testimonial_slider_prev', nextEl: '.alumni_testimonial_slider_next'}}>
              {
              alumni_testimonials.map((alumni_testimonial, key) => (
                <SwiperSlide key={key}>
                  <div className="flex flex-col sm:flex-row gap-10 px-5 py-5 bg-white border">
                    <div className="sm:w-75 sm:h-50 lg:h-60">
                      {
                        alumni_testimonial.testimonial_thumbnail && (
                          <Image src={alumni_testimonial.testimonial_thumbnail} alt={alumni_testimonial.testimonial_name} width={400} height={400} className="object-cover w-full h-full" />
                        )
                      }
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                      <p className="text-[#4E4E4E] leading-loose">{parser(nl2br(alumni_testimonial.testimonial_bio))}</p>
                      <h2 className="font-georgia">{alumni_testimonial.testimonial_content}</h2>
                      <h3>- {alumni_testimonial.testimonial_name}</h3>
                      <h4>{alumni_testimonial.testimonial_designation}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )
      }
      {
        alumni_events && alumni_events.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={alumni_events_introduction.intro_title}
          introCaption={alumni_events_introduction.intro_caption}
          introDescription={alumni_events_introduction.intro_description} />
          <div className="w-full">
              <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_event_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_event_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
              
              <Swiper className="w-full mt-10" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.alumni_event_slider_prev', nextEl: '.alumni_event_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 20 }, 1080: { slidesPerView: 3, spaceBetween: 20 } }} >
                {
                  alumni_events.map((alumni_event, key) => {
                    const startDate = new Date(alumni_event.event_start_date);
                    
                    const nowValid = !!startDate && new Date(startDate).getTime() > Date.now();
                    
                    const countdown = useServerCountdown(new Date(startDate));

                    return (
                    <SwiperSlide title={alumni_event.event_title} key={key} onClick={handleAlumniEventClick(key)}>
                      <div className="group border-[0.5px] border-[#800000] text-white relative overflow-hidden">
                        <div className="flex py-7 px-5 transition-all duration-300 h-100 bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${alumni_event.event_thumbnail})`}}>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"></div>
                          <h2 className="font-georgia text-lg mt-auto relative">{alumni_event.event_title}</h2>
                        </div>

                        <div className={`absolute top-0 left-0 inset-0 flex flex-col gap-5 py-10 px-5 justify-center items-center text-center transition-all duration-300 bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeAlumniEvent === key ? "scale-y-100" : "scale-y-0"}`}>
                          <h2 className="text-xl">{alumni_event.event_title}</h2>
                          <h3>{dayjs(startDate).format('Do MMMM, YYYY')}</h3>
                          {
                            alumni_event.event_description && (
                            <p className="leading-loose">{parser(nl2br(truncate(alumni_event.event_description, 225)))}</p>
                          )
                          }
                          {startDate && nowValid && countdown && (
                              <span className="text-3xl">
                                  {countdown.days ? `${countdown.days}d ` : ""}
                                  {countdown.hours ? `${countdown.hours}h ` : ""}
                                  {countdown.minutes ? `${countdown.minutes}m ` : ""}
                                  {countdown.seconds}s
                              </span>
                          )}
                          <ul className="flex gap-5">
                            {
                              alumni_event.event_link && (
                                <li>
                                  <Link href={alumni_event.event_link} target="_blank" className="py-2 px-2 text-sm bg-white text-[#800000]">Apply Now</Link>
                                </li>
                              )
                            }
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>
            </div>
        </div>
        )
      }
      {
        alumni_portal && (
        <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20 mt-5" style={{backgroundImage: `url(${alumni_portal.intro_image})`}}>
            <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
            <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
              <h3 className="font-georgia leading-relaxed text-center text-2xl lg:text-5xl lg:w-3xl">{alumni_portal.intro_title}</h3>
              <p className="leading-loose lg:w-3xl">{alumni_portal.intro_description}</p>
              {
                alumni_portal.intro_link && (
                <Link href={alumni_portal.intro_link} className="flex items-center gap-2 px-3 py-1 bg-[#800000]" target="_blank">Login</Link>
              )
              }
            </div>
        </div>
      )
      }
      {
        alumni_connect && alumni_connect.length > 0 && (
        <div className={`fixed top-0 w-full h-screen bg-white z-10 overflow-scroll transform transition-all duration-300 ease-in-out ${showConnectAlumniPopUp ? 'translate-y-0 opacity-100': 'translate-y-full opacity-0'}`}>
          <div className="relative py-15 px-5 md:px-15 xl:px-30">
            <IoMdClose size={40} className="absolute top-0 right-0 lg:top-5 lg:right-5 cursor-pointer" onClick={() => updateConnectAlumniPopUp(false)}/>
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_connect_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_connect_slider_prev">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <div className="py-5 lg:py-10">
              <Swiper modules={[Navigation]} className="border-[0.5px] border-[#D6ACAC]" initialSlide={activeConnectAlumniIndex} onSwiper={(swiper) => (popupConnectAlumniRef.current = swiper)} slidesPerView={1} spaceBetween={0} autoHeight={false} navigation={{prevEl: '.alumni_connect_slider_prev', nextEl: '.alumni_connect_slider_prev'}}>
                {
                  alumni_connect.map((alumni_row, key) => (
                    <SwiperSlide key={key}>
                      <div className="flex flex-col">
                          <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FFCC33] px-5 py-5 lg:py-0 lg:px-20 lg:pt-10 lg:pb-5">
                              <div className="w-sm h-100 overflow-hidden rounded-full lg:-mb-15 z-5">
                                  {
                                      alumni_row.connect_thumbnail && (
                                          <Image src={alumni_row.connect_thumbnail} alt={alumni_row.connect_name} width={300} height={300} className="w-full h-full object-cover" />
                                      )
                                  }
                              </div>
                              <div className="flex flex-col gap-5">
                                  <h2 className="font-georgia text-xl">{alumni_row.connect_name}</h2>
                                  <h3 className="font-georgia text-xl">{alumni_row.connect_designation}</h3>
                                  <h3 className="font-georgia text-xl">{alumni_row.connect_degree_year}</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                      {
                                          alumni_row.connect_areas_of_expertise && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Areas Of Expertise</h3>
                                              <p className="text-[#4E4E4E]">{alumni_row.connect_areas_of_expertise}</p>
                                          </div>
                                          )
                                      }
                                      {
                                          alumni_row.connect_email_address && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Email</h3>
                                              <p className="text-[#4E4E4E]"><Link href={`mailto:${alumni_row.connect_email_address}`}>{alumni_row.connect_email_address}</Link></p>
                                          </div>
                                          )
                                      }
                                      {
                                          alumni_row.connect_courses && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Courses</h3>
                                              <p className="text-[#4E4E4E]">{alumni_row.connect_courses}</p>
                                          </div>
                                          )
                                      }
                                      {
                                          alumni_row.connect_phone_number && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Phone</h3>
                                              <p className="text-[#4E4E4E]"><Link href={`tel:${alumni_row.connect_phone_number.replace(/\s+/g, '')}`}>{alumni_row.connect_phone_number}</Link></p>
                                          </div>
                                          )
                                      }
                                  </div>
                                  <ul className="flex gap-7 text-[#4E4E4E]">
                                      {
                                          alumni_row.connect_linked_in_url && (
                                          <li>
                                              <Link href={alumni_row.connect_linked_in_url} target="_blank"><FaLinkedin size={30} /></Link>
                                          </li>
                                          )
                                      }
                                      {
                                          alumni_row.connect_instagram_url && (
                                          <li>
                                              <Link href={alumni_row.connect_instagram_url} target="_blank"><AiFillInstagram size={30} /></Link>
                                          </li>
                                          )
                                      }
                                      {
                                          alumni_row.connect_twitter_url && (
                                          <li>
                                              <Link href={alumni_row.connect_twitter_url} target="_blank"><FaSquareXTwitter size={30} /></Link>
                                          </li>
                                          )
                                      }
                                  </ul>
                              </div>
                          </div>
                          {
                            alumni_row.connect_description && (
                            <div className="flex flex-col gap-4 bg-white px-5 lg:px-20 py-5 lg:py-15 z-1 connect_description">
                                {
                                    parser(alumni_row.connect_description)
                                }
                            </div>
                          )
                          }
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      )
      }
      {
        alumni_hall_of_fame && alumni_hall_of_fame.length > 0 && (
        <div className={`fixed top-0 w-full h-screen bg-white z-10 overflow-scroll transform transition-all duration-300 ease-in-out ${showWallOfFamePopUp ? 'translate-y-0 opacity-100': 'translate-y-full opacity-0'}`}>
          <div className="relative py-15 px-5 md:px-15 xl:px-30">
            <IoMdClose size={40} className="absolute top-0 right-0 lg:top-5 lg:right-5 cursor-pointer" onClick={() => updateConnectAlumniPopUp(false)}/>
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_connect_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_connect_slider_prev">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <div className="py-5 lg:py-10">
              <Swiper modules={[Navigation]} className="border-[0.5px] border-[#D6ACAC]" initialSlide={activeWallOfFameIndex} onSwiper={(swiper) => (popupConnectAlumniRef.current = swiper)} slidesPerView={1} spaceBetween={0} autoHeight={false} navigation={{prevEl: '.alumni_connect_slider_prev', nextEl: '.alumni_connect_slider_prev'}}>
                {
                  alumni_hall_of_fame.map((alumni_row, key) => (
                    <SwiperSlide key={key}>
                      <div className="flex flex-col">
                          <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FFCC33] px-5 py-5 lg:py-0 lg:px-20 lg:pt-10 lg:pb-5">
                              <div className="w-sm h-100 overflow-hidden rounded-full lg:-mb-15 z-5">
                                  {
                                      alumni_row.hall_of_fame_thumbnail && (
                                          <Image src={alumni_row.hall_of_fame_thumbnail} alt={alumni_row.hall_of_fame_name} width={300} height={300} className="w-full h-full object-cover" />
                                      )
                                  }
                              </div>
                              <div className="flex flex-col gap-5">
                                  <h2 className="font-georgia text-xl">{alumni_row.hall_of_fame_name}</h2>
                                  <h3 className="font-georgia text-xl">{alumni_row.hall_of_fame_designation}</h3>
                                  <h3 className="font-georgia text-xl">{alumni_row.hall_of_fame_degree_year}</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                      {
                                          alumni_row.hall_of_fame_areas_of_expertise && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Areas Of Expertise</h3>
                                              <p className="text-[#4E4E4E]">{alumni_row.hall_of_fame_areas_of_expertise}</p>
                                          </div>
                                          )
                                      }
                                      {
                                          alumni_row.hall_of_fame_email_address && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Email</h3>
                                              <p className="text-[#4E4E4E]"><Link href={`mailto:${alumni_row.hall_of_fame_email_address}`}>{alumni_row.hall_of_fame_email_address}</Link></p>
                                          </div>
                                          )
                                      }
                                      {
                                          alumni_row.hall_of_fame_courses && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Courses</h3>
                                              <p className="text-[#4E4E4E]">{alumni_row.hall_of_fame_courses}</p>
                                          </div>
                                          )
                                      }
                                      {
                                          alumni_row.hall_of_fame_phone_number && (
                                          <div className="flex flex-col gap-2">
                                              <h3 className="font-georgia text-sm">Phone</h3>
                                              <p className="text-[#4E4E4E]"><Link href={`tel:${alumni_row.hall_of_fame_phone_number}`}>{alumni_row.hall_of_fame_phone_number}</Link></p>
                                          </div>
                                          )
                                      }
                                  </div>
                                  <ul className="flex gap-7 text-[#4E4E4E]">
                                      {
                                          alumni_row.hall_of_fame_linked_in_url && (
                                          <li>
                                              <Link href={alumni_row.hall_of_fame_linked_in_url} target="_blank"><FaLinkedin size={30} /></Link>
                                          </li>
                                          )
                                      }
                                      {
                                          alumni_row.hall_of_fame_instagram_url && (
                                          <li>
                                              <Link href={alumni_row.hall_of_fame_instagram_url} target="_blank"><AiFillInstagram size={30} /></Link>
                                          </li>
                                          )
                                      }
                                      {
                                          alumni_row.hall_of_fame_twitter_url && (
                                          <li>
                                              <Link href={alumni_row.hall_of_fame_twitter_url} target="_blank"><FaSquareXTwitter size={30} /></Link>
                                          </li>
                                          )
                                      }
                                  </ul>
                              </div>
                          </div>
                          {
                            alumni_row.hall_of_fame_description && (
                            <div className="flex flex-col gap-4 bg-white px-5 lg:px-20 py-5 lg:py-15 z-1 connect_description">
                                {
                                    parser(alumni_row.hall_of_fame_description)
                                }
                            </div>
                            )
                          }
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
        )
      }
      <Footer />
    </main>
    </>
  );
}