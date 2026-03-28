"use client"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Banner from "@/components/Banner";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import nl2br from 'nl2br';
import parser from 'html-react-parser';
import { Banner as BannerProps, InstitutionalPublicationCategories, InstitutionalPublications } from "@/types/api";

type PageProps = {
  banner: BannerProps
  institutional_publications_categories: InstitutionalPublicationCategories[]
  institutional_publications: InstitutionalPublications[]
};

export default function InstitutionalPublicationsComponent({ banner, institutional_publications_categories, institutional_publications}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const filtered_institutional_publications_categories = institutional_publications_categories.filter(
    (category) =>
      institutional_publications.some(
        (publication) =>
          publication.institutional_publication_category_title === category.institutional_publication_category_title
      )
  );

  institutional_publications_categories = filtered_institutional_publications_categories;

  const [activeInstitutionalPublicationCategoryKey, updateActiveInstitutionalPublicationCategoryKey] = useState(0);
  const [activeInstitutionalPublicationName, updateActiveInstitutionalPublicationName] = useState(institutional_publications_categories[0]?.institutional_publication_category_title);

  const updateActiveInstitutionalPublicationCategoryKeyFunc = (keyCount: number) => {
    updateActiveInstitutionalPublicationCategoryKey(keyCount);
    updateActiveInstitutionalPublicationName(institutional_publications_categories[keyCount]?.institutional_publication_category_title);
    updateActiveMagazine(-1);
  }

  const [activeMagazine, updateActiveMagazine] = useState(-1);

  const handleMagazineClick = (magazine_key: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveMagazine(magazine_key);
      }
    }
  }

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full px-10 md:px-15 xl:px-30 py-10 relative">
        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 institutional_publications_categories_slider_prev z-2">
          <BsArrowLeftShort size={20} />
        </span>
        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 lg:right-10 institutional_publications_categories_slider_next z-2">
          <BsArrowRightShort size={20} />
        </span>
        <Swiper modules={[Navigation]} slidesPerView={3} spaceBetween={0} navigation={{prevEl: '.institutional_publications_categories_slider_prev', nextEl: '.institutional_publications_categories_slider_next'}} breakpoints={{640: {slidesPerView: 4}, 768: {slidesPerView: 5}, 1024: {slidesPerView: 6}, 1280: {slidesPerView: 8}}}>
          {
          institutional_publications_categories.map((institutional_publication_category, key) => (
            <SwiperSlide key={key} className="text-center lg:!w-40">
              <div className="relative group h-7.5" onClick={() => updateActiveInstitutionalPublicationCategoryKeyFunc(key)}>
                <span className="cursor-pointer">{institutional_publication_category.institutional_publication_category_title}</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeInstitutionalPublicationCategoryKey === key ? 'scale-x-100': ''}`}></span>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="text-center !w-40" key={institutional_publications_categories.length}>
              <div className="relative group h-7.5">
                <Link href="http://nldinnovision.com/index.php/nldimsr" target="_blank">Innovation Journal</Link>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100`}></span>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 pb-10">
        <p className="text-[#4E4E4E] leading-loose text-sm text-center">{institutional_publications_categories[activeInstitutionalPublicationCategoryKey]?.institutional_publication_description}</p>
        {
          institutional_publications && institutional_publications.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 text-white">
            {
              institutional_publications.filter(institutional_publication => 
                institutional_publication.institutional_publication_category_title === activeInstitutionalPublicationName
              ).map((institutional_publication, key) => (
                <div className="group relative" key={key} title={institutional_publication.institutional_publication_title} onClick={handleMagazineClick(key)}>
                  <div className="w-full h-100">
                  {
                    institutional_publication.institutional_publication_thumbnail && (
                      <Image src={institutional_publication.institutional_publication_thumbnail} alt={institutional_publication.institutional_publication_title} width={500} height={300} className="object-cover w-full h-full" />
                    )
                  }
                  </div>
                  <div className={`absolute inset-0 bg-[#800000] left-0 top-0 transition-all duration-300 scale-y-0 group-hover:scale-y-100 ${key === activeMagazine ? 'scale-y-100': ''} flex flex-col gap-3 justify-center items-center text-center`}>
                    {
                      institutional_publication.institutional_publication_title && (
                        <h2 className="font-georgia text-lg lg:text-xl">{parser(nl2br(institutional_publication.institutional_publication_title))}</h2>
                      )
                    }
                    {
                      institutional_publication.institutional_publication_pdf && (
                        <Link href={institutional_publication.institutional_publication_pdf} target="_blank" className="text-burgundy bg-white text-sm px-2 py-1">Download</Link>   
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
          )
        }
      </div>
    </main>
  );
}