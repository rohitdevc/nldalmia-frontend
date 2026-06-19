"use client"

import Link from "next/link";

import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Banner from "@/components/Banner";

import "swiper/css";
import "swiper/css/navigation";

import { MdArrowOutward } from "react-icons/md";

import { Banner as BannerProps, IndustrialVisits } from "@/types/api";


type PageProps = {
  banner: BannerProps
  industrial_visits: IndustrialVisits[]
};

import { useHeader } from "@/context/HeaderContext";
import SwiperNavAbsolute from "../SwiperNavAbsolute";

export default function InstitutionalPublicationsComponent({ banner, industrial_visits}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader()

  useEffect(() => {
      setHeaderProps({})
  }, [])

  let industrial_visit_years: number[] = [];

  industrial_visits.forEach((industrial_visit) => {
    if(industrial_visit.industrial_visit_date && !industrial_visit_years.includes(new Date(industrial_visit.industrial_visit_date).getFullYear())) {
      industrial_visit_years.push(new Date(industrial_visit.industrial_visit_date).getFullYear());
    }
  })

  const filtered_industrial_visit_years = industrial_visit_years.filter(
    (industrial_visit_year) =>
      industrial_visits.some(
        (industrial_visit) =>
          new Date(industrial_visit.industrial_visit_date).getFullYear() === industrial_visit_year
      )
  );

  industrial_visit_years = filtered_industrial_visit_years;

  const [activeIndustrialVisitYearKey, updateActiveIndustrialVisitYearKey] = useState(0);
  const [activeIndustrialVisitYearName, updateActiveIndustrialVisitYearName] = useState(industrial_visit_years[0]);

  const updateActiveIndustrialVisitYearKeyFunc = (keyCount: number) => {
    updateActiveIndustrialVisitYearKey(keyCount);
    updateActiveIndustrialVisitYearName(industrial_visit_years[keyCount] ? industrial_visit_years[keyCount] : 0);
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
      <div className="w-full px-15 xl:px-20 2xl:px-30 py-10 relative">
        <SwiperNavAbsolute prev_class="industrial_visit_years_slider_prev" next_class="industrial_visit_years_slider_next" />
        <Swiper className="w-full" modules={[Navigation]}  navigation={{prevEl: '.industrial_visit_years_slider_prev', nextEl: '.industrial_visit_years_slider_next'}} breakpoints={{0: {slidesPerView: 3}, 768: {slidesPerView: industrial_visit_years.length}}}>
          {
          industrial_visit_years.map((industrial_visit_year, key) => (
            <SwiperSlide key={key}>
              <div className="relative group h-7.5 flex justify-center items-center cursor-pointer" onClick={() => updateActiveIndustrialVisitYearKeyFunc(key)}>
                <span>{industrial_visit_year}</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeIndustrialVisitYearKey === key ? 'scale-x-100': ''}`}></span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {
        industrial_visits && industrial_visits.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-20 2xl:px-30 pb-10">
          {
            industrial_visits.filter(industrial_visit =>
              industrial_visit.industrial_visit_date && new Date(industrial_visit.industrial_visit_date).getFullYear() === activeIndustrialVisitYearName
            ).map((industrial_visit, key) => (
              <Link className={`w-full flex flex-col lg:flex-row sm:justify-between lg:items-center gap-5 py-5 border-b border-[#800000] last:border-b-0 ${!industrial_visit.industrial_visit_report_pdf ? 'pointer-events-none' : ''}`} href={industrial_visit.industrial_visit_report_pdf || `#`} target={`${industrial_visit.industrial_visit_report_pdf ? '_blank' : ''}`} key={key} title={industrial_visit.industrial_visit_title}>
                <span className="font-georgia text-xl lg:max-w-2xl xl:max-w-4xl">{industrial_visit.industrial_visit_title} - {dayjs(industrial_visit.industrial_visit_date).format('Do MMMM, YYYY')}</span>
                {
                  industrial_visit.industrial_visit_report_pdf && (
                  <span className="text-burgundy flex gap-2 items-center font-semibold">
                    <span className="relative">
                      <span>Download PDF</span>
                      <span className="absolute inset-0 left-0 top-6 w-full h-[0.5px] bg-[#800000]"></span>
                    </span>
                    <MdArrowOutward size={20} />
                  </span>
                )
                }
              </Link>
            ))
          }
        </div>
      )
      }
    </main>
  );
}