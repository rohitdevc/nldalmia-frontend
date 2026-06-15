"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { IoIosArrowDown } from "react-icons/io";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";
import IntroWithVideo from "../IntroWithVideo";

import { MdArrowOutward } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { Banner as BannerProps, IntroProps, MSRCaseStudies, MSRContribution, MSRGallery, MSRImpact, MSRReport, MSRSDGGoals, MSRTestimonials, MSRVerticals } from "@/types/api";
import { useHeader } from "@/context/HeaderContext";
import CenterIntro from "../CenterIntro";
import { ImpactCard } from "../ImpactCard";
import SwiperNav from "../SwiperNav";
import { FiPlayCircle } from "react-icons/fi";

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
  case_studys_intro: IntroProps
  case_studys: MSRTestimonials[]
  contribution_intro: IntroProps
  contribution: MSRContribution[]
};

export default function MSRComponent({banner, introduction, verticals_intro, verticals, impact, case_studies_intro, case_studies, sdg_goals_intro, sdg_goals, gallery_intro, gallery, reports_intro, reports, case_studys_intro, case_studys, contribution_intro, contribution}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader();

  useEffect(() => {
      setHeaderProps({})
  }, [])

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeCaseStudy, updateActiveCaseStudy] = useState(-1);
    
  const handleCaseStudyClick = (case_study_id: number): React.MouseEventHandler<HTMLDivElement> => {
      return () => {
          if (window.matchMedia("(hover: none)").matches) {
            updateActiveCaseStudy(case_study_id);
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
      <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 sm:py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        />
        <IntroWithVideo introduction={introduction} />
      </div>
      {
        verticals && verticals.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 sm:py-10">
          <Intro
          introTitle={verticals_intro.intro_title}
          introCaption={verticals_intro.intro_caption}
          introDescription={verticals_intro.intro_description}
          />
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
          <div className="w-full flex flex-col gap-10 px-5 sm:px-10 md:px-15 xl:px-20 py-5 sm:py-10">
            <CenterIntro
            introCaption="Impact Dashboard"
            />
            <div className="flex flex-wrap gap-10 justify-center items-center">
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
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 py-5 sm:py-10">
            <Intro
            introTitle={case_studies_intro.intro_title}
            introCaption={case_studies_intro.intro_caption}
            introDescription={case_studies_intro.intro_description}
            />
            <div className="w-full flex flex-col gap-5 lg:gap-10">
              <SwiperNav prev_class="case_studies_slider_prev" next_class="case_studies_slider_next" />
              <Swiper modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.case_studies_slider_prev', nextEl: '.case_studies_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 2}, 1280: {slidesPerView: 3.5, spaceBetween: 30}}}>
                {
                  case_studies.map((case_study, key) => (
                    <SwiperSlide className="group relative !h-auto" title={case_study.case_study_title} key={key} onClick={handleCaseStudyClick(key)}>
                    <div className="w-full h-full flex flex-1 border border-[#800000] bg-[#FFCC33] min-h-90">
                      <div className="flex flex-col gap-5 px-5 py-5 mt-auto">
                        <h2 className="font-georgia text-xl lg:text-2xl">{case_study.case_study_title}</h2>
                        <p className="text-sm md:text-base text-burgundy">{parser(nl2br(case_study.case_study_preview))}</p>
                      </div>
                      {
                        case_study.case_study_youtube_id && (
                          <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeCaseStudy === key ? "scale-y-100" : "scale-y-0"}`}>
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
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
  );
}