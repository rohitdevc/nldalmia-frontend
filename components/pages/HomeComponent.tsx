"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Multiselect from 'multiselect-react-dropdown';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import { MdArrowOutward } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import nl2br from 'nl2br';
import parser from 'html-react-parser';
import InstagramFeedComp from "@/components/InstagramFeedComp";
import { Banner as BannerProps, CareerFinderProps, CareerPathProps, HomeAwards, HomeBlog, HomeEvents, Media, HomeTestimonials, IntroProps, PlacementPartners, ProgramsProps, Ticker, VideoSection, InstagramFeed } from "@/types/api";

type PageProps = {
  ticker: Ticker,
  banner: BannerProps;
  introduction: IntroProps;
  career_finder: CareerFinderProps
  career_paths: CareerPathProps
  program_introduction: IntroProps
  programs: ProgramsProps[]
  video: VideoSection,
  placement_partners_introduction: IntroProps
  placement_partners: PlacementPartners[]
  testimonials_introduction: IntroProps
  testimonials: HomeTestimonials[]
  events_introduction: IntroProps
  events: HomeEvents[]
  awards_introduction: IntroProps
  awards: HomeAwards[]
  media_introduction: IntroProps
  media: Media[]
  blog_introduction: IntroProps
  blogs: HomeBlog[]
  instagram_introduction: IntroProps
  instagram_feed: InstagramFeed[]
};

export default function HomeComponent({ticker, banner, introduction, career_finder, career_paths, program_introduction, programs, video, placement_partners_introduction, placement_partners, testimonials_introduction, testimonials, events_introduction, events, awards_introduction, awards, media_introduction, media, blog_introduction, blogs, instagram_introduction, instagram_feed}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const program_categories = ['Programs'];

  const event_categories: string[] = [];

  events.forEach((event) => {
    if(!event_categories.includes(event.event_category_name)) {
      event_categories.push(event.event_category_name);
    }
  })

  const chunkedEvents: HomeEvents[][] = [];
  for (let i = 0; i < events.length; i += 4) {
    chunkedEvents.push(events.slice(i, i + 4));
  }

  const eventsList = useRef<HTMLDivElement>(null);

  const [activeEventCategory, updateActiveEventCategory] = useState(0);
  const [activeEvent, updateActiveEvent] = useState(-1);

  const updateActiveEventCategoryFunc = (event_category_id: number): void => {
    updateActiveEventCategory(event_category_id);
    updateActiveEvent(-1);

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

  const [activeMedia, updateActiveMedia] = useState(-1);

  const handleMediaClick = (media_row_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveMedia(media_row_id);
      }
    }
  }

  const [activeBlog, updateActiveBlog] = useState(-1);

  const handleBlogClick = (blog_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveBlog(blog_id);
      }
    }
  }

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const programsList = useRef<HTMLDivElement>(null);

  const [activeProgramCategory, updateActiveProgramCategory] = useState(0);

  const updateActiveProgramCategoryFunc = (program_category_id: number): void => {
    updateActiveProgramCategory(program_category_id);
    updateActiveProgram(-1);

    if(programsList.current) {
      const offset = 200;
      const elementTop = programsList.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const [activeProgram, updateActiveProgram] = useState(-1);

  const handleProgramClick = (program_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveProgram(program_id);
      }
    }
  }

  const [activeTestimonial, updateActiveTestimonial] = useState(-1);

  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
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
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        />
        <div className="flex flex-col md:flex-row gap-10 md:mt-10 lg:mt-20">
          <div className="w-full md:w-[40%] overflow-hidden">
            {
              introduction.intro_image &&  (
                <Image src={introduction.intro_image} width={800} height={750} alt={introduction.intro_title} className="object-cover w-full h-full" />
              )
            }
          </div>
          <div className="w-full md:w-[60%] flex flex-col gap-5">
            <p className="text-[#4E4E4E] text-sm leading-loose">{parser(nl2br(introduction.intro_description))}</p>
            <ul className="flex flex-wrap md:flex-row justify-between text-sm text-burgundy">
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href={`${basePath}about-us`} className="flex gap-1 items-center">About Us <MdArrowOutward size={15} /></Link>
              </li>
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href={`${basePath}about-us`} className="flex gap-1 items-center">Leadership <MdArrowOutward size={15} /></Link>
              </li>
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href={`${basePath}about-us#InternationalTieUps`} className="flex gap-1 items-center">International Tie-Ups <MdArrowOutward size={15} /></Link>
              </li>
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href={`${basePath}about-us`} className="flex gap-1 items-center">Program Outcomes <MdArrowOutward size={15} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`w-full lg:h-100 relative bg-cover bg-center bg-no-repeat text-white`} style={{backgroundImage: `url(${career_finder.career_finder_image})`}}>
        <div className="absolute top-0 inset-0 bg-black/30 z-0"></div>
        <form className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10 relative">
          <h2 className="text-xl md:text-2xl">{career_finder.career_finder_title}</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <h3 className="text-2xl md:text-3xl font-georgia">{career_finder.career_finder_caption}</h3>
            <Multiselect className="career-paths text-sm text-burgundy" selectedValues={{}} options={career_paths} displayValue="career_path_title" placeholder="Select your Career Paths" showCheckbox={true} />
          </div>
          <div className="flex gap-5">
            <input type="submit" value="Search Careers" className="bg-[#800000] py-2 w-35 text-sm cursor-pointer" />
            <input type="button" value="Clear All" className="underline cursor-pointer" />
          </div>
        </form>
      </div>
      {
        programs && programs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro
            introTitle={program_introduction.intro_title}
            introCaption={program_introduction.intro_caption}
            introDescription={program_introduction.intro_description}
            />
            <div className="flex flex-col lg:flex-row gap-5 md:justify-between">
              <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-fit gap-5 text-burgundy">
                {
                  program_categories && program_categories.length > 0 && program_categories.map((program_category, key) => (
                    <li className={`cursor-pointer transition-all duration-300 ${activeProgramCategory === key ? 'text-xl font-medium' : ''}`} key={key} onClick={() => updateActiveProgramCategoryFunc(key)}>
                      <span className="relative">
                        {program_category}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 ${activeProgramCategory === key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              {
                  program_categories && program_categories.length > 0 && program_categories.map((program_category, key) => activeProgramCategory === key && (
                  <div className={`max-w-full lg:max-w-5xl flex flex-wrap gap-5 text-white transition-opacity`} key={key} ref={programsList}>
                    {
                      programs.map((program, key) => (
                      <div className="group w-xs h-75 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${program.program_thumbnail})`}} onClick={handleProgramClick(key)} key={key}>
                        <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                        
                        <div className="relative h-full w-full flex flex-col">
                          <div className="flex justify-end mt-2 mr-2">
                            <span className="bg-[#800000] text-xs px-3 py-2">{program.program_type}</span>
                          </div>
                          <div className="mt-auto px-5 pb-10">
                            <h2 className="text-2xl font-georgia">{program.program_name}</h2>
                          </div>
                        </div>

                        <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeProgram === key ? "scale-y-100" : "scale-y-0"}`}>
                          <div className="flex justify-end mt-2 mr-2">
                            <span className="bg-white text-burgundy text-xs px-3 py-2">{program.program_type}</span>
                          </div>
                          <div className="px-5 flex flex-col gap-2 h-full">
                            <h2 className="text-2xl font-georgia min-h-15">{program.program_name}</h2>
                            <p className="leading-relaxed text-sm">{parser(nl2br(program.program_description))}</p>
                            <ul className="flex mt-auto pb-5 gap-10 text-sm">
                              {
                                program.program_link && (
                                <li><Link href={program.program_link} className="underline">Learn More</Link></li>
                                )
                              }
                              {
                                program.program_application_link && (
                                <li><Link href={program.program_application_link} className="underline" target="_blank">Apply Now</Link></li>
                                )
                              }
                            </ul>
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
      )
      }
      <div className="w-full h-screen relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20" style={{backgroundImage: `url(${video.video_background_image})`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-15 relative w-full h-full justify-center items-center">
            <p className="font-georgia leading-normal lg:leading-loose text-center text-2xl lg:text-4xl">{parser(nl2br(video.video_title))}</p>
            {
              video.video_id && (
            <div className="flex items-center gap-2 px-3 py-1 bg-[#800000] cursor-pointer" onClick={() => videoPopupRef.current?.open(video.video_id)}>
                <FaPlayCircle />
                <span>Play Video</span>
            </div>
            )
            }
          </div>
      </div>
      {
          placement_partners && placement_partners.length > 0 && (
            <div className="w-full px-5 lg:px-30 py-5 lg:py-20 flex flex-col gap-5">
              <CenterIntro
              introTitle={placement_partners_introduction.intro_title}
              introCaption={placement_partners_introduction.intro_caption}
              introDescription={placement_partners_introduction.intro_description} />
              <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer partner_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer partner_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
              
              <Swiper className="w-full" slidesPerView={2} spaceBetween={50} loop={true} modules={[Navigation]} navigation={{prevEl: '.partner_slider_prev', nextEl: '.partner_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 75 }, 1024: { slidesPerView: 5, spaceBetween: 70 } }} >
                {
                  placement_partners.map((placement_partner, key) => placement_partner.placement_partner_logo && (
                    <SwiperSlide className="rounded-full overflow-hidden border border-[#800000] !w-30 sm:!w-50" title={placement_partner.placement_partner_name} key={key}>
                      <Image src={placement_partner.placement_partner_logo} alt={placement_partner.placement_partner_name} width={300} height={300} className="object-cover w-full" />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
            )
      }
      {
        testimonials && testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={testimonials_introduction.intro_title}
          introCaption={testimonials_introduction.intro_caption}
          introDescription={testimonials_introduction.intro_description}
          />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer testimonial_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer testimonial_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full" slidesPerView={1} spaceBetween={75} modules={[Navigation]} navigation={{prevEl: '.testimonial_slider_prev', nextEl: '.testimonial_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 100 }, 1024: { slidesPerView: 3, spaceBetween: 100 } }} >
            {
              testimonials.map((testimonial, key) => (
                <SwiperSlide className="group relative w-full md:!w-90 border border-[#800000] bg-white" title={testimonial.testimonial_name} key={key} onClick={handleTestimonialClick(key)}>
                  <div className="w-full h-full flex flex-col gap-10 px-5 py-5">
                    {
                      testimonial.testimonial_thumbnail && (
                      <Image src={testimonial.testimonial_thumbnail} alt={testimonial.testimonial_name} width={200} height={200} className="rounded-full w-30 h-30" />
                      )
                    }
                    <h2 className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</h2>
                    <div className="mt-auto flex flex-col gap-3 text-burgundy">
                      <span className="text-sm md:text-lg">{parser(nl2br(testimonial.testimonial_designation))}</span>
                    </div>
                  </div>
                  <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeTestimonial === key ? "scale-y-100" : "scale-y-0"}`}>
                    {
                      testimonial.testimonial_youtube_id ? (
                        <div className="mx-auto flex justify-center items-center gap-2 cursor-pointer w-full h-full" onClick={() => videoPopupRef.current?.open(testimonial.testimonial_youtube_id)}>
                          <FiPlayCircle size={20} />
                          <span className="text-sm">Play Video</span>
                        </div>
                      ) : (
                        <>
                        <p className="leading-loose">{testimonial.testimonial_description}</p>
                        <div className="mt-auto flex flex-col gap-3">
                          <span className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</span>
                          <span className="text-sm md:text-lg">{parser(nl2br(testimonial.testimonial_designation))}</span>
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
        event_categories && event_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={events_introduction.intro_title}
          introCaption={events_introduction.intro_caption}
          introDescription={events_introduction.intro_description} />
          <div className="flex flex-col lg:flex-row gap-5 md:justify-between">
              <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-100 gap-5 text-burgundy">
                {
                  event_categories.map((event_category, key) => (
                    <li className={`cursor-pointer transition-all duration-300 ${activeEventCategory === key ? 'text-xl font-medium' : ''}`} key={key} onClick={() => updateActiveEventCategoryFunc(key)}>
                      <span className="relative">
                        {event_category}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 ${activeEventCategory === key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              {
                  event_categories && event_categories.length > 0 && event_categories.map((event_category, key) => activeEventCategory === key && (
                  <>
                  {
                    chunkedEvents && chunkedEvents.length > 0 && (
                    <div className="w-full lg:w-[75%] flex flex-col gap-5" key={key} ref={eventsList}>
                      <div className="flex gap-3">
                        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer event_slider_prev">
                          <BsArrowLeftShort size={20} />
                        </span>
                        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer event_slider_next">
                          <BsArrowRightShort size={20} />
                        </span>
                      </div>
                      <Swiper slidesPerView={1} spaceBetween={10} modules={[Navigation]} navigation={{prevEl: '.event_slider_prev', nextEl: '.event_slider_next'}} className={`max-w-full text-white transition-opacity`} key={key}>
                        {
                          chunkedEvents.map((groupEvents, slideIndex) => (
                            <SwiperSlide key={slideIndex}>
                              <div className={`grid grid-cols-2 ${(groupEvents.length > 2) ? 'grid-rows-2': 'grid-rows-1'} gap-2 sm:gap-5 md:gap-10 h-full`}>
                                {
                                  groupEvents && groupEvents.length > 0 && groupEvents.map((event, event_key) => (
                                    <div className="group w-full h-50 md:!h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${event.event_thumbnail})`}} onClick={handleEventClick(event_key)} key={event_key} title={event.event_name}>
                                      <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                                      
                                      <div className="relative h-full w-full flex flex-col">
                                        <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                                          <span className="bg-[#800000] text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(new Date(event.event_start_date)).format('MMMM YYYY')}</span>
                                        </div>
                                        <div className="mt-auto px-2 lg:px-5 pb-2 lg:pb-10">
                                          <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                                        </div>
                                      </div>

                                      <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeEvent === event_key ? "scale-y-100" : "scale-y-0"}`}>
                                        <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                                          <span className="bg-white text-burgundy text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(new Date(event.event_start_date)).format('MMMM YYYY')}</span>
                                        </div>
                                        <div className="px-2 lg:px-5 pb-2 lg:pb-5 flex flex-col gap-2 h-full">
                                          <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                                          <div className="w-full h-[105px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">
                                            <p className="lg:leading-relaxed text-sm">{parser(nl2br(event.event_description))}</p>
                                          </div>
                                          <ul className="flex mt-auto text-xs lg:text-sm">
                                            {
                                              event.event_url_slug && (
                                              <li><Link href={`${basePath}events/${event.event_url_slug}`} className="underline">Learn More</Link></li>
                                              )
                                            }
                                          </ul>
                                        </div>
                                      </div>

                                    </div>
                                  ))
                                }
                              </div>
                            </SwiperSlide>
                          ))
                        }
                      </Swiper>
                    </div>
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
        awards && awards.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-5 lg:py-20 flex flex-col gap-5">
            <CenterIntro
            introTitle={awards_introduction.intro_title}
            introCaption={awards_introduction.intro_caption}
            introDescription={awards_introduction.intro_description} />
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer award_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer award_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full" slidesPerView={2} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.award_slider_prev', nextEl: '.award_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 75 }, 1024: { slidesPerView: 5, spaceBetween: 70 } }} >
              {
                awards.map((award, key) => (
                  <SwiperSlide className="!w-35 sm:!w-50" title={award.award_name} key={key}>
                    {
                      award.award_thumbnail && (
                      <Image src={award.award_thumbnail} alt={award.award_name} width={300} height={300} className="object-cover w-full" />
                      )
                    }
                    <div className="flex flex-col gap-1 justify-center items-center text-center mt-5">
                      <h2 className="font-georgia text-sm lg:text-lg">{award.award_name}</h2>
                      <h3 className="text-[#4E4E4E] text-sm lg:text-lg">{award.award_year}</h3>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
      )}
      {
        media && media.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={media_introduction.intro_title}
          introCaption={media_introduction.intro_caption}
          introDescription={media_introduction.intro_description} />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer media_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer media_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.media_slider_prev', nextEl: '.media_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 50 }, 1280: { slidesPerView: 3, spaceBetween: 50 } }}>
          {
            media.map((media_row, key) => (
              <SwiperSlide key={key}>
                  <div className="group w-full !h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${media_row.media_thumbnail})`}} onClick={handleMediaClick(key)} key={key} title={media_row.media_title}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-[#800000] text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(new Date(media_row.media_published_date)).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="mt-auto px-5 lg:px-5 pb-5 lg:pb-10">
                        <h2 className="text-sm lg:text-2xl font-georgia">{media_row.media_title}</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeMedia === key ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-white text-burgundy text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(new Date(media_row.media_published_date)).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="px-5 pb-5 lg:pb-10 mt-1 flex flex-col gap-2 h-full">
                        <h2 className="text-sm lg:text-2xl font-georgia">{media_row.media_title}</h2>
                        <p className="lg:leading-relaxed text-sm">{parser(nl2br(media_row.media_preview))}</p>
                        {
                          (media_row.media_link || media_row.media_attachment || media_row.media_youtube_id) && (
                            <ul className="flex mt-auto text-sm">
                              <li>
                                {
                                  media_row.media_youtube_id ? (
                                    <span onClick={() => videoPopupRef.current?.open(media_row.media_youtube_id)} className="underline cursor-pointer">Learn More</span>
                                  ) : (
                                    <Link href={media_row.media_link || media_row.media_attachment} target="_blank" className="underline">Learn More</Link>
                                  )
                                }
                              </li>
                            </ul>
                          )
                        }
                      </div>
                    </div>

                  </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
      )
      }
      {
        blogs && blogs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={blog_introduction.intro_title}
          introCaption={blog_introduction.intro_caption}
          introDescription={blog_introduction.intro_description} />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer blog_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer blog_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.blog_slider_prev', nextEl: '.blog_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 50 }, 1280: { slidesPerView: 3, spaceBetween: 35 } }}>
          {
            blogs.map((blog, key) => (
              <SwiperSlide key={key}>
                  <div className="group w-full h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${blog.blog_thumbnail})`}} onClick={handleBlogClick(key)} key={key} title={blog.blog_title}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-[#800000] text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(new Date(blog.blog_published_date)).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-sm lg:text-2xl font-georgia">{blog.blog_title}</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeBlog === key ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-white text-burgundy text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(new Date(blog.blog_published_date)).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="px-5 pb-5 flex flex-col gap-2 h-full mt-1">
                        <h2 className="text-sm lg:text-2xl font-georgia">{blog.blog_title}</h2>
                        <div className="flex flex-col lg:flex-row flex-wrap gap-1 lg:gap-5 text-sm">
                          <span>{dayjs.utc(new Date(blog.blog_published_date)).format('MMMM D, YYYY')}</span>
                          {
                            blog.blog_author_name && (
                              <>
                              <span className="hidden lg:block">|</span>
                              <span>Author: {blog.blog_author_name}</span>
                              </>
                            )
                          }
                        </div>
                        <p className="lg:leading-loose text-sm mt-auto flex">{parser(nl2br(blog.blog_preview))}</p>
                        <ul className="flex mt-auto text-sm">
                          {
                            blog.blog_url_slug && (
                              <li><Link href={blog.blog_url_slug} className="underline">Learn More</Link></li>
                            )
                          }
                        </ul>
                      </div>
                    </div>

                  </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
      )
      }
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={instagram_introduction.intro_title}
        introCaption={instagram_introduction.intro_caption}
        introDescription={instagram_introduction.intro_description} />
        <InstagramFeedComp instagram_feed={instagram_feed} />
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}