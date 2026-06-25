"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";
import IntroWithVideo from "../IntroWithVideo";

import { MdArrowOutward } from "react-icons/md";

import cliTruncate from 'cli-truncate';

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { Banner as BannerProps, IntroProps, MSRCaseStudies, MSRContribution, MSRGallery, MSRImpact, MSRReport, MSRSDGGoals, MSRTestimonials, MSRVerticals } from "@/types/api";
import { useHeader } from "@/context/HeaderContext";
import CenterIntro from "../CenterIntro";
import { ImpactCard } from "../ImpactCard";
import SwiperNav from "../SwiperNav";
import { FiPlayCircle } from "react-icons/fi";
import FullSlide from "../FullSlide";

type PageProps = {
  banner: BannerProps
  introduction: IntroProps
  verticals_intro: IntroProps
  verticals: MSRVerticals[]
  impact: MSRImpact[]
  case_studies_intro: IntroProps
  case_studies: MSRCaseStudies[]
  sdg_goals_intro: IntroProps
  sdg_goals: MSRSDGGoals[]
  gallery_intro: IntroProps
  gallery: MSRGallery[]
  reports_intro: IntroProps
  reports: MSRReport[]
  testimonials_intro: IntroProps
  testimonials: MSRTestimonials[]
  contribution_intro: IntroProps
  contribution: MSRContribution[]
};

export default function MSRComponent({banner, introduction, verticals_intro, verticals, impact, case_studies_intro, case_studies, sdg_goals_intro, sdg_goals, gallery_intro, gallery, reports_intro, reports, testimonials_intro, testimonials, contribution_intro, contribution}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader();

  useEffect(() => {
      setHeaderProps({})
  }, [])

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeCaseStudy, updateActiveCaseStudy] = useState(-1);
  const [activeSDGGoal, updateActiveSDGGoal] = useState(-1);

  const handleCaseStudyClick = (case_study_id: number): React.MouseEventHandler<HTMLDivElement> => {
      return () => {
          if (window.matchMedia("(hover: none)").matches) {
            updateActiveCaseStudy(case_study_id);
          }
      }
  }

  const handleSDGGoalClick = (sdg_goal_id: number): React.MouseEventHandler<HTMLDivElement> => {
      return () => {
          if (window.matchMedia("(hover: none)").matches) {
            updateActiveSDGGoal(sdg_goal_id);
          }
      }
  }

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_image_mobile={banner.banner_image_mobile}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_youtube_video_id={banner.banner_youtube_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      {
        introduction && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
          <Intro
          introTitle={introduction.intro_title}
          introCaption={introduction.intro_caption}
          />
          <IntroWithVideo
          introduction={introduction}
          onPlay={(videoId) => videoPopupRef.current?.open(videoId)}
          />
        </div>
        )
      }
      {
        verticals && verticals.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
          {
            verticals_intro && (
            <Intro
            introTitle={verticals_intro.intro_title}
            introCaption={verticals_intro.intro_caption}
            introDescription={verticals_intro.intro_description}
            />
            )
          }
          <div className="w-full flex flex-col gap-5 lg:gap-10">
            <SwiperNav prev_class="vertical_slider_prev" next_class="vertical_slider_next" />
            <Swiper modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.vertical_slider_prev', nextEl: '.vertical_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 2}, 1280: {slidesPerView: 3, spaceBetween: 30}}}>
              {
                verticals.map((vertical, key) => (
                  <SwiperSlide className="!h-auto flex bg-[#FFCC33]" key={key}>
                    <div className="flex-1 flex flex-col gap-4 items-center py-10 px-5 text-center h-full">
                      <h2 className="text-xl font-georgia">{vertical.vertical_caption}</h2>
                      <p className="text-burgundy leading-loose">{vertical.vertical_description}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      )
      }
      {
        impact && impact.length > 0 && (
          <div className="w-full flex flex-col gap-10 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
            <CenterIntro
            introCaption="Impact Dashboard"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 justify-center items-center">
              {
                impact.map((impact_row, key) => (
                  <ImpactCard key={key} impact={impact_row} />
                ))
              }
            </div>
          </div>
        )
      }
      {
        case_studies && case_studies.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
            {
              case_studies_intro && (
              <Intro
              introTitle={case_studies_intro.intro_title}
              introCaption={case_studies_intro.intro_caption}
              introDescription={case_studies_intro.intro_description}
              />
              )
            }
            <div className="w-full flex flex-col gap-5 lg:gap-10">
              <SwiperNav prev_class="case_studies_slider_prev" next_class="case_studies_slider_next" />
              <Swiper modules={[Navigation, Autoplay]} loop={true} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.case_studies_slider_prev', nextEl: '.case_studies_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 3.5, spaceBetween: 30}}}>
                {
                  case_studies.map((case_study, key) => (
                    <SwiperSlide className="group" title={case_study.case_study_title} key={key} onClick={handleCaseStudyClick(key)}>
                    <div className="w-full border border-[#800000] bg-[#FFCC33] relative">
                      <div className="flex flex-col gap-5 px-5 py-5 mt-auto">
                        <h2 className="font-georgia text-xl lg:text-2xl">{case_study.case_study_title}</h2>
                        <p className="text-sm md:text-base text-burgundy">{parser(nl2br(case_study.case_study_preview))}</p>
                        {
                          (case_study.case_study_link || case_study.case_study_pdf) && (
                            <Link href={case_study.case_study_link || case_study.case_study_pdf} target="_blank" className="text-burgundy flex gap-3 items-center text-base lg:text-lg">View More <MdArrowOutward size={20} /></Link>
                          )
                        }
                      </div>
                      {
                        case_study.case_study_youtube_id && (
                          <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${activeCaseStudy === key ? "opacity-100" : "opacity-0"}`}>
                            <div className="mx-auto flex justify-center items-center gap-2 cursor-pointer w-full h-full" onClick={() => videoPopupRef.current?.open(case_study.case_study_youtube_id)}>
                              <FiPlayCircle size={20} />
                              <span className="text-sm">Play Video</span>
                            </div>
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
      )
      }
      {
        sdg_goals && sdg_goals.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
          {
            sdg_goals_intro && (
            <Intro
            introTitle={sdg_goals_intro.intro_title}
            introCaption={sdg_goals_intro.intro_caption}
            introDescription={sdg_goals_intro.intro_description}
            />
            )
          }
            <div className="w-full flex flex-col gap-5 lg:gap-10">
              <SwiperNav prev_class="sdg_goals_slider_prev" next_class="sdg_goals_slider_next" />
              <Swiper modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.sdg_goals_slider_prev', nextEl: '.sdg_goals_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 2}, 1280: {slidesPerView: 3, spaceBetween: 30}}}>
                {
                  sdg_goals.map((sdg_goal, key) => (
                    <SwiperSlide className="group relative !h-auto overflow-hidden text-white" title={sdg_goal.sdg_goal_title} key={key} onClick={handleSDGGoalClick(key)}>
                    <div className="w-full h-full flex flex-1 border border-[#800000] min-h-90 bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${sdg_goal.sdg_goal_image})`}}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/15 to-transparent"></div>
                        <div className="relative h-full w-full flex flex-col">
                          <div className="mt-auto px-5 lg:px-10 py-5 lg:py-10">
                            <h2 className="text-sm lg:text-2xl font-georgia">{sdg_goal.sdg_goal_title}</h2>
                          </div>
                        </div>

                        <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${activeSDGGoal === key ? "opacity-100" : "opacity-0"}`}>
                          <div className="px-5 lg:px-10 py-5 lg:py-10 flex flex-col gap-2 h-full">
                            <h2 className="text-sm lg:text-2xl font-georgia">{sdg_goal.sdg_goal_title}</h2>
                            <div className="text-base mt-auto flex flex-col gap-3">
                              {
                                sdg_goal.sdg_goal_caption && (
                                  <p className="lg:leading-relaxed">{parser(nl2br(cliTruncate(sdg_goal.sdg_goal_caption, 300)))}</p>
                                )
                              }
                              {
                                (sdg_goal.sdg_goal_link || sdg_goal.sdg_goal_pdf) && (
                                  <Link href={sdg_goal.sdg_goal_link || sdg_goal.sdg_goal_pdf} target="_blank" className="flex gap-3 items-center">View More <MdArrowOutward size={20} /></Link>
                                )
                              }
                            </div>
                          </div>
                        </div>
                    </div>
                  </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
        </div>
        )
      }
      {
        gallery && gallery.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
          {
            gallery_intro && (
            <Intro
            introTitle={gallery_intro.intro_title}
            introCaption={gallery_intro.intro_caption}
            introDescription={gallery_intro.intro_description}
            />
            )
          }
            <SwiperNav prev_class="gallery_slider_prev" next_class="gallery_slider_next" />
            <Swiper className="w-full" loop={true} slidesPerView={1} spaceBetween={0} modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} navigation={{prevEl: '.gallery_slider_prev', nextEl: '.gallery_slider_next'}} >
              {
                gallery.map((gallery_row, key) => (
                <SwiperSlide key={key} title={gallery_row.gallery_caption}>
                  <FullSlide slider={{
                    slider_caption: gallery_row.gallery_caption,
                    slider_image: gallery_row.gallery_image,
                    slider_video: gallery_row.gallery_youtube_id,
                    }}
                    onPlay={(videoId) => videoPopupRef.current?.open(videoId)}
                  />
                </SwiperSlide>
              ))
              }
            </Swiper>
        </div>
      )}
      {
        reports && reports.length > 0 && (
          <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
            {
              reports_intro && (
              <Intro
              introTitle={reports_intro.intro_title}
              introCaption={reports_intro.intro_caption}
              introDescription={reports_intro.intro_description}
              />
              )
            }
            <div className="w-full flex flex-col gap-5 lg:gap-10">
              <SwiperNav prev_class="report_slider_prev" next_class="report_slider_next" />
              <Swiper modules={[Navigation]} loop={true} className="w-full" slidesPerView={1} spaceBetween={0} navigation={{prevEl: '.report_slider_prev', nextEl: '.report_slider_next'}} breakpoints={{640: {slidesPerView: 2, spaceBetween: 20}, 1024: {slidesPerView: 3, spaceBetween: 20}, 1280: {slidesPerView: 4, spaceBetween: 30}}}>
                {
                  reports.map((report, key) => (
                    <SwiperSlide title={report.report_title} key={key}>
                      <div className="flex flex-col gap-5 text-center w-full">
                        <div className="border border-[#800000] aspect-square w-full">
                          {
                            report.report_image && (
                              <Image src={report.report_image} width={300} height={300} alt={report.report_title} className="object-cover w-full h-full" />
                            )
                          }
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                          <h2 className="font-georgia text-xl">{report.report_title}</h2>
                          {
                            report.report_pdf && (
                              <Link href={report.report_pdf} target="_blank" className="text-burgundy flex gap-2 items-center justify-center text-base font-semibold">View <MdArrowOutward size={20} /></Link>
                            )
                          }
                        </div>
                      </div>
                  </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        )
      }
      {
        testimonials && testimonials.length > 0 && (
          <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
            {
              testimonials_intro && (
              <Intro
              introTitle={testimonials_intro.intro_title}
              introCaption={testimonials_intro.intro_caption}
              introDescription={testimonials_intro.intro_description}
              />
            )
            }
            <div className="w-full flex flex-col gap-5 lg:gap-10">
              <SwiperNav prev_class="testimonials_slider_prev" next_class="testimonials_slider_next" />
              <Swiper modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.testimonials_slider_prev', nextEl: '.testimonials_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 2}, 1280: {slidesPerView: 3, spaceBetween: 30}}}>
                {
                  testimonials.map((testimonial, key) => (
                    <SwiperSlide className="!h-auto flex bg-white" key={key}>
                      <div className="flex-1 flex flex-col gap-4 items-center py-10 px-5 text-center h-full border border-[#800000]">
                        <p className="text-burgundy leading-loose italic">{testimonial.testimonial_description}</p>
                        <h2 className="text-lg font-georgia">- {testimonial.testimonial_name}</h2>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        )
      }
      {
        contribution && contribution.length > 0 && (
          <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 lg:py-10">
            {
              contribution_intro && (
              <Intro
              introTitle={contribution_intro.intro_title}
              introCaption={contribution_intro.intro_caption}
              introDescription={contribution_intro.intro_description}
              />
              )
            }
            <div className={`w-full flex flex-col gap-5`}>
              <SwiperNav prev_class={`contribution_slider_prev`} next_class={`contribution_slider_next`} />
              <Swiper className="w-full infra_content" slidesPerView={1} spaceBetween={0} autoHeight={true} loop={true} modules={[Navigation]} navigation={{prevEl: `.contribution_slider_prev`, nextEl: `.contribution_slider_next`}} >
                {
                  contribution.map((contribution_row, key) => (
                  <SwiperSlide key={key}>
                    <div className="w-full flex flex-col lg:flex-row">
                      {
                        contribution_row.contribution_image && (
                          <div className="w-full lg:w-1/2 max-h-75 lg:order-2">
                            <Image src={contribution_row.contribution_image} alt={contribution_row.contribution_image_alt} width={500} height={300} className="object-cover w-full h-full" />
                          </div>
                        )
                      }
                      <div className={`flex flex-col gap-5 px-5 lg:px-10 py-10 w-full ${contribution_row.contribution_image ? 'lg:w-1/2' : '' } ${(key % 2) ? 'bg-[#FFCC33]': 'bg-[#800000] text-white'}`}>
                        <h2 className="font-georgia text-xl">{contribution_row.contribution_caption}</h2>
                        <p className="text-base leading-loose">{parser(nl2br(contribution_row.contribution_description))}</p>
                        <Link className="mt-auto bg-[#FFCC33] text-burgundy text-base w-fit px-3 py-2" href="mailto:sparssh@nldalmia.in&subject=I Would Like to Be a Part of the Mission">Contribute</Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
                }
              </Swiper>
            </div>
          </div>
        )
      }
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
  );
}