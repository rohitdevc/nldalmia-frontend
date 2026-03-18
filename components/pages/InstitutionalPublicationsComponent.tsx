"use client"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import nl2br from 'nl2br';
import parser from 'html-react-parser';
import { Banner as BannerProps, Ticker } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
};

export default function InstitutionalPublicationsComponent({ticker, banner}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const institutional_publication_categories = [
    {
      institutional_publication_name: 'Goonj',
      institutional_publication_description: 'Goonj is a newsletter published by the students which covers details of all the events, conclaves, conferences, guest lectures which has happened in the institute.'
    },
    {
      institutional_publication_name: 'Delta',
      institutional_publication_description: 'It is a Finance Magazine published by the students of the Finance Department. Articles are invited based on a relevant theme pertaining to Finance.'
    },
    {
      institutional_publication_name: 'Markx',
      institutional_publication_description: 'It is a Marketing Magazine published by the students of the Marketing Department. Articles are invited based on a relevant theme pertaining to Marketing.'
    },
    {
      institutional_publication_name: 'Shunya',
      institutional_publication_description: 'It is a newsletter published by Business Analytics students, featuring articles on data analytics, guest lectures, and technical workshops.'
    },
    {
      institutional_publication_name: 'Episteme',
      institutional_publication_description: 'It is a HR Magazine published by the students of the HR Department. Articles are invited based on a relevant theme pertaining to HR.'
    },
    {
      institutional_publication_name: 'Sparssh',
      institutional_publication_description: 'It is a MSR Magazine published by the MSR Committee members. Articles are invited based on a particular theme pertaining to Social Responsibility.'
    },
    {
      institutional_publication_name: 'Udyamee',
      institutional_publication_description: 'It is a Magazine published by students of E-Cell. Articles are invited pertaining to Entrepreneurship.'
    },
    {
      institutional_publication_name: 'GEM',
      institutional_publication_description: 'It is a General Management Magazine published by the students of the General Management Committee. Articles are invited based on a relevant theme pertaining to General Management.'
    },
    {
      institutional_publication_name: 'Alumni Newsletter',
      institutional_publication_description: ''
    }
  ]

  const [activeInstitutionalPublicationCategoryKey, updateActiveInstitutionalPublicationCategoryKey] = useState(0);
  const [activeInstitutionalPublicationName, updateActiveInstitutionalPublicationName] = useState("");

  const updateActiveInstitutionalPublicationCategoryKeyFunc = (keyCount: number) => {
    updateActiveInstitutionalPublicationCategoryKey(keyCount);
    updateActiveInstitutionalPublicationName(institutional_publication_categories[keyCount]?.institutional_publication_name);
    updateActiveMagazine(0);
  }

  const institutional_publications = [
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Goonj',
      institutional_publication_title: 'Edition: August 2025',
      institutional_publication_thumbnail: 'Goonj-August1.png',
      institutional_publication_pdf: 'Goonj-August-2025-Edition.pdf'
    },
    {
      institutional_publication_category_title: 'Delta',
      institutional_publication_title: 'Volume: 30\r\nEdition: November 2024',
      institutional_publication_thumbnail: 'Delta.png',
      institutional_publication_pdf: 'Delta-Volume-30.pdf'
    },
    {
      institutional_publication_category_title: 'Delta',
      institutional_publication_title: 'Volume: 30\r\nEdition: November 2024',
      institutional_publication_thumbnail: 'Delta.png',
      institutional_publication_pdf: 'Delta-Volume-30.pdf'
    },
    {
      institutional_publication_category_title: 'Delta',
      institutional_publication_title: 'Volume: 30\r\nEdition: November 2024',
      institutional_publication_thumbnail: 'Delta.png',
      institutional_publication_pdf: 'Delta-Volume-30.pdf'
    },
    {
      institutional_publication_category_title: 'Delta',
      institutional_publication_title: 'Volume: 30\r\nEdition: November 2024',
      institutional_publication_thumbnail: 'Delta.png',
      institutional_publication_pdf: 'Delta-Volume-30.pdf'
    },
    {
      institutional_publication_category_title: 'Delta',
      institutional_publication_title: 'Volume: 30\r\nEdition: November 2024',
      institutional_publication_thumbnail: 'Delta.png',
      institutional_publication_pdf: 'Delta-Volume-30.pdf'
    },
    {
      institutional_publication_category_title: 'Delta',
      institutional_publication_title: 'Volume: 30\r\nEdition: November 2024',
      institutional_publication_thumbnail: 'Delta.png',
      institutional_publication_pdf: 'Delta-Volume-30.pdf'
    }
  ]

  const [activeMagazine, updateActiveMagazine] = useState(0);

  const handleMagazineClick = (magazine_key: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveMagazine(magazine_key);
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
      <div className="w-full px-10 md:px-15 xl:px-30 py-10 relative">
        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 institutional_publication_categories_slider_prev z-2">
          <BsArrowLeftShort size={20} />
        </span>
        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-5 lg:right-10 institutional_publication_categories_slider_next z-2">
          <BsArrowRightShort size={20} />
        </span>
        <Swiper modules={[Navigation]} slidesPerView={3} spaceBetween={0} navigation={{prevEl: '.institutional_publication_categories_slider_prev', nextEl: '.institutional_publication_categories_slider_next'}} breakpoints={{640: {slidesPerView: 4}, 768: {slidesPerView: 5}, 1024: {slidesPerView: 6}, 1280: {slidesPerView: 8}}}>
          {
          institutional_publication_categories.map((institutional_publication_category, key) => (
            <SwiperSlide key={key} className="text-center lg:!w-40">
              <div className="relative group h-7.5" onClick={() => updateActiveInstitutionalPublicationCategoryKeyFunc(key)}>
                <span className="cursor-pointer">{institutional_publication_category.institutional_publication_name}</span>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100 ${activeInstitutionalPublicationCategoryKey === key ? 'scale-x-100': ''}`}></span>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="text-center !w-40" key={institutional_publication_categories.length}>
              <div className="relative group h-7.5">
                <Link href="http://nldinnovision.com/index.php/nldimsr" target="_blank">Innovation Journal</Link>
                <span className={`w-full h-[0.5px] bg-[#800000] absolute inset-0 left-0 top-7 origin-center duration-300 transition-transform scale-x-0 group-hover:scale-x-100`}></span>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 pb-10">
        <p className="text-[#4E4E4E] leading-loose text-sm text-center">{institutional_publication_categories[activeInstitutionalPublicationCategoryKey]?.institutional_publication_description}</p>
        {
          institutional_publications && institutional_publications.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 text-white">
            {
              institutional_publications.filter(institutional_publication => 
                institutional_publication.institutional_publication_category_title === activeInstitutionalPublicationName
              ).map((institutional_publication, key) => (
                <div className="group relative" key={key} title={institutional_publication.institutional_publication_title} onClick={handleMagazineClick(key)}>
                  <Image src={`${basePath}images/magazines/${institutional_publication.institutional_publication_thumbnail}`} alt={institutional_publication.institutional_publication_title} width={500} height={300} className="w-full" />
                  <div className={`absolute inset-0 bg-[#800000] left-0 top-0 transition-all duration-300 scale-y-0 group-hover:scale-y-100 ${key === activeMagazine ? 'scale-y-100': ''} flex flex-col gap-3 justify-center items-center text-center`}>
                    <h2 className="font-georgia text-lg lg:text-xl">{parser(nl2br(institutional_publication.institutional_publication_title))}</h2>
                    <Link href={`${basePath}pdfs/${institutional_publication.institutional_publication_pdf}`} target="_blank" className="text-burgundy bg-white text-sm px-2 py-1">Download</Link>
                  </div>
                </div>
              ))
            }
          </div>
          )
        }
      </div>
      <Footer />
    </main>
    </>
  );
}