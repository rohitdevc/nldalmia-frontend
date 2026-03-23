"use client"

import Link from "next/link";

import { useState } from "react";

import { MdArrowOutward } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import { Banner as BannerProps, IQAC, IQACCategories, IQACPOE, Ticker } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  iqac_categories: IQACCategories
  iqac_pdfs: IQAC[]
  iqac_poe: IQACPOE[]
};

export default function IQACsComponent({ticker, banner, iqac_categories, iqac_pdfs, iqac_poe}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

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
      <div className="w-full px-15 xl:px-30 py-10 relative">
        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 iqac_categories_slider_prev z-2">
          <BsArrowLeftShort size={20} />
        </span>
        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 lg:right-10 iqac_categories_slider_next z-2">
          <BsArrowRightShort size={20} />
        </span>
        <Swiper modules={[Navigation]} slidesPerView={3} spaceBetween={10} navigation={{prevEl: '.iqac_categories_slider_prev', nextEl: '.iqac_categories_slider_next'}} breakpoints={{640: {slidesPerView: 4}, 768: {slidesPerView: 5}, 1024: {slidesPerView: 6}, 1280: {slidesPerView: 8}}}>
          {
          iqac_categories.map((iqac_category, key) => (
            <SwiperSlide key={key} className="text-center lg:!w-fit">
              <div className="relative group h-7.5" onClick={() => updateActiveIQACCategoryKeyFunc(key)}>
                <span className="cursor-pointer">{iqac_category}</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeIQACCategoryKey === key ? 'scale-x-100': ''}`}></span>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="text-center !w-fit" key={iqac_categories.length}>
              <div className="relative group" onClick={() => updateActiveIQACCategoryKeyFunc(iqac_categories.length)}>
                <span className="cursor-pointer">Program Educational Objectives</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeIQACCategoryKey === iqac_categories.length ? 'scale-x-100': ''}`}></span>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {
        iqac_pdfs && iqac_pdfs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 pb-10">
          {
            iqac_pdfs.filter(iqac_pdf =>
              iqac_pdf.iqac_category_title === activeIQACCategoryName
            ).map((iqac_pdf, key) => iqac_pdf.iqac_pdf && (
              <Link className="w-full flex justify-between items-center py-5 border-b border-[#800000] last:border-b-0" href={iqac_pdf.iqac_pdf} target="_blank" key={key} title={iqac_pdf.iqac_title}>
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
      <Footer />
    </main>
    </>
  );
}