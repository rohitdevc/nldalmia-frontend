"use client"

import Link from "next/link";

import { useState, useEffect } from "react";

import { MdArrowOutward } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Banner from "@/components/Banner";

import "swiper/css";
import "swiper/css/navigation";

import { Banner as BannerProps, IQAC, IQACCategories, IQACPOE } from "@/types/api";

type PageProps = {
  banner: BannerProps
  iqac_categories: IQACCategories
  iqac_pdfs: IQAC[]
  iqac_poe: IQACPOE[]
};

import { useHeader } from "@/context/HeaderContext";
import SwiperNavAbsolute from "../SwiperNavAbsolute";

export default function IQACsComponent({ banner, iqac_categories, iqac_pdfs, iqac_poe}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader()

  useEffect(() => {
      setHeaderProps({})
  }, [])

  const filtered_iqac_categories = iqac_categories.filter(
    (category) =>
      iqac_pdfs.some(
        (iqac_pdf) =>
          iqac_pdf.iqac_category_title === category
      )
  );

  iqac_categories = filtered_iqac_categories;

  const [activeIQACCategoryKey, updateActiveIQACCategoryKey] = useState(0);
  const [activeIQACCategoryName, updateActiveIQACCategoryName] = useState(iqac_categories[0]);

  const updateActiveIQACCategoryKeyFunc = (keyCount: number) => {
    updateActiveIQACCategoryKey(keyCount);
    updateActiveIQACCategoryName(iqac_categories[keyCount] ? iqac_categories[keyCount] : 'POE');
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
      <div className="w-full px-15 xl:px-30 py-10 relative">
        <SwiperNavAbsolute prev_class="iqac_categories_slider_prev" next_class="iqac_categories_slider_next" />
        <Swiper className="iqac_categories" modules={[Navigation]} slidesPerView="auto" spaceBetween={30} navigation={{prevEl: '.iqac_categories_slider_prev', nextEl: '.iqac_categories_slider_next'}}>
          {
          iqac_categories.map((iqac_category, key) => (
            <SwiperSlide key={key} className="!w-auto">
              <div className="relative group h-7.5 whitespace-nowrap" onClick={() => updateActiveIQACCategoryKeyFunc(key)}>
                <span className="cursor-pointer">{iqac_category}</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeIQACCategoryKey === key ? 'scale-x-100': ''}`}></span>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="!w-auto">
              <div className="relative group h-7.5 whitespace-nowrap" onClick={() => updateActiveIQACCategoryKeyFunc(iqac_categories.length)}>
                <span className="cursor-pointer">Program Educational Objectives</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeIQACCategoryKey === iqac_categories.length ? 'scale-x-100': ''}`}></span>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {
        iqac_pdfs && iqac_pdfs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-30 pb-10">
          {
            iqac_pdfs.filter(iqac_pdf =>
              iqac_pdf.iqac_category_title === activeIQACCategoryName
            ).map((iqac_pdf, key) => iqac_pdf.iqac_pdf && (
              <Link className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0 py-5 border-b border-[#800000] last:border-b-0" href={iqac_pdf.iqac_pdf} target="_blank" key={key} title={iqac_pdf.iqac_title}>
                <span className="font-georgia text-xl">{iqac_pdf.iqac_title}</span>
                <span className="text-burgundy flex gap-2 items-center font-semibold">
                  <span className="relative">
                    <span>Download PDF</span>
                    <span className="absolute inset-0 left-0 top-6 w-full h-[0.5px] bg-[#800000]"></span>
                  </span>
                  <MdArrowOutward size={20} /></span>
              </Link>
            ))
          }
          {
            activeIQACCategoryName === "POE" && iqac_poe && iqac_poe.length > 0 && iqac_poe.map((iqac_poe_row, key) => (
              <div className="w-full flex flex-col gap-5 py-5 border-b border-[#800000] last:border-b-0" key={key}>
                <h2 className="font-georgia text-xl">PEO {(key + 1)}</h2>
                <p className="text-sm leading-loose">{iqac_poe_row.poe_title}</p>
              </div>
            ))
          }
        </div>
      )
      }
    </main>
  );
}