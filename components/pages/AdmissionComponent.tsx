"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef, useMemo } from "react";

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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AdmissionProgramSlider } from "../AdmissionProgramSlider";

export default function AdmissionComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const admission_programs = [
    {
      id: 1,
      program_name: 'Post Graduate In Diploma Management (PGDM)',
      program_description: 'The program follows a trimester system and emphasis real-world application, critical thinking and industry immersion through live projects, internships and capstone cases.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-12-31 20:00:00+05:30'),
      program_link: basePath + 'pgdm'
    },
    {
      id: 2,
      program_name: 'Global MBA in Collaboration With Industry Partners',
      program_description: 'With s curriculum aligned to international standards, the program blends strategic management with global exposure through academic alliances, global case studies and expert sessions.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-09-24 20:00:00+05:30'),
      program_link: basePath + 'global-mba'
    },
    {
      id: 3,
      program_name: 'Post Graduate In Diploma Management (PGDM)',
      program_description: 'The program follows a trimester system and emphasis real-world application, critical thinking and industry immersion through live projects, internships and capstone cases.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-11-15 20:00:00+05:30'),
      program_link: basePath + 'pgdm'
    },
    {
      id: 4,
      program_name: 'Global MBA in Collaboration With Industry Partners',
      program_description: 'With s curriculum aligned to international standards, the program blends strategic management with global exposure through academic alliances, global case studies and expert sessions.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-06-07 20:00:00+05:30'),
      program_link: basePath + 'pgdm'
    }
  ]

  return (
    <>
    <Header admissionPage={true} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Your Journey At NLDIMSR"
      banner_description="Join one of India’s most respected management institutes and take the first step towards a future in business leadership and innovation"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="About The Program" introCaption="Open Admission" introDescription="Applications are now open for our AICTE-approved PGDM programs, recognised as MBA equivalent bu AIU. Explore specializations, benefits from a dynamic learning environment, and position yourself for a high-impact career." />
        {
          admission_programs && admission_programs.length > 0 && (
          <div className="w-full">
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full mt-10" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 20 } }} >
              {
                admission_programs.map((admission_program, key) => {
                  return (
                  <SwiperSlide className="group border-[0.5px] border-[#800000]" title={admission_program.program_name} key={key}>
                    <AdmissionProgramSlider program={admission_program} />
                  </SwiperSlide>
                )
              })
              }
            </Swiper>
          </div>
        )
        }
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}