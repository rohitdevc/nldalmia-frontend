"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";
import parser from 'html-react-parser';

import { FiPlayCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";
import scrollWithOffset from "@/components/scrollWithOffset";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import { Ticker, Banner as BannerProps, IntroProps, Slider, PlacementCorporateEngagement, PlacementsTabs, PlacementRecruiters, PlacementFeatures, Testimonials, Contacts } from "@/types/api";
import nl2br from "nl2br";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  sliders: Slider[]
  corporate_engagements: PlacementCorporateEngagement[]
  placement_content: PlacementsTabs[]
  recruiters_introduction: IntroProps
  recruiters: PlacementRecruiters[]
  features_introduction: IntroProps
  placement_features: PlacementFeatures[]
  testimonials: Testimonials[]
  contacts_introduction: IntroProps
  contacts: Contacts[]
};

export default function PlacementsComponent({ticker, banner, introduction, sliders, corporate_engagements, placement_content, recruiters_introduction, recruiters, features_introduction, placement_features, testimonials, contacts_introduction, contacts}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const placement_tabs: string[] = [];

  const placement_content_data: Record<string, PlacementsTabs[]> = {};
    
  placement_content.forEach((placement_content_row) => {
    if (!placement_content_data[placement_content_row.tab_title]) {
      placement_content_data[placement_content_row.tab_title] = [];
    }

    if(!placement_tabs.includes(placement_content_row.tab_title)) {
      placement_tabs.push(placement_content_row.tab_title);
    }

    placement_content_data[placement_content_row.tab_title].push(placement_content_row);
  })

  const [activePlacementTab, updateActivePlacementTab] = useState(0);

  const PlacementTabs = useRef<HTMLDivElement>(null);

  const updateActivePlacementTabFunc = (placement_tab_id: number): void => {
    updateActivePlacementTab(placement_tab_id);

    if(PlacementTabs.current) {
      const offset = 200;
      const elementTop = PlacementTabs.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeTestimonial, updateActiveTestimonial] = useState(0);

  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

  const placement_features_tabs: string[] = [];
  const placement_features_data: Record<string, PlacementFeatures[]> = {};

  placement_features.forEach((feature) => {
    if (!placement_features_data[feature.feature_category_title]) {
      placement_features_data[feature.feature_category_title] = [];
    }

    if(!placement_features_tabs.includes(feature.feature_category_title)) {
      placement_features_tabs.push(feature.feature_category_title);
    }

    placement_features_data[feature.feature_category_title].push(feature);
  })

  const [activeFeatureCategory, updateActiveFeatureCategory] = useState(placement_features_tabs.length > 0 ? placement_features_tabs[0] : '');
  const [openFeature, toggleFeatureAccordian] = useState(0);

  const Features = useRef<HTMLDivElement | null>(null);

  const updateActiveFeatureCategoryFunc = (feature_category_title: string): void => {
    updateActiveFeatureCategory(feature_category_title);
    toggleFeatureAccordian(0);
    scrollWithOffset(Features);
  }

  return (
    <>
    <Header ticker_api={ticker} placementsPage={true} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      {
        sliders && sliders.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={introduction.intro_title}
          introCaption={introduction.intro_caption}
          introDescription={introduction.intro_description} />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer intro_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer intro_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.intro_slider_prev', nextEl: '.intro_slider_next'}} >
            {
              sliders.map((slider, key) => (
              <SwiperSlide key={key}>
                <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" title={slider.slider_caption} style={{backgroundImage: `url(${slider.slider_image})`}}></div>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        )
      }
      {
        corporate_engagements && corporate_engagements.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro introCaption="Corporate Engagement"></CenterIntro>
          <div className="flex flex-wrap gap-5 lg:gap-10 justify-center items-center">
            {
              corporate_engagements.map((corporate_engagement, key) => (
                <div className="flex flex-col gap-5 items-center text-center w-75 lg:w-80" key={key}>
                  <div className="w-20">
                    {
                      corporate_engagement.corporate_engagement_icon && (
                        <Image src={corporate_engagement.corporate_engagement_icon} alt={corporate_engagement.corporate_engagement_caption} width={100} height={100} className="object-cover w-full h-full"/>
                      )
                    }
                  </div>
                  <h2 className="font-georgia text-burgundy text-xl">{corporate_engagement.corporate_engagement_caption}</h2>
                  {
                    corporate_engagement.corporate_engagement_description && (
                      <p className="text-[#4E4E4E] text-sm">{parser(nl2br(corporate_engagement.corporate_engagement_description))}</p>
                    )
                  }
                </div>
                ))
            }
          </div>
        </div>
      )
      }
      {
        placement_tabs && placement_tabs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <ul className="flex flex-col sm:flex-row gap-7 py-5 text-burgundy justify-center items-center">
            {
              placement_tabs.map((placement_tab, key) => (
                <li className={`group relative cursor-pointer transition-all duration-300 ${key === activePlacementTab ? 'text-burgundy text-2xl font-normal': 'text-[#4E4E4E] text-lg'}`} key={key} onClick={() => updateActivePlacementTabFunc(key)}>
                  <span>{placement_tab}</span>
                  <span className={`absolute left-0 -bottom-1 bg-[#800000] h-[0.5px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${key === activePlacementTab ? 'scale-x-100': ''} `}></span>
                </li>
              ))
            }
          </ul>
          <div className="w-full" ref={PlacementTabs}>
            {
              placement_tabs.map((placement_tab, key) => (
                placement_content_data[placement_tab] && placement_content_data[placement_tab].length > 0 && (
                <div className={`w-full ${key === activePlacementTab ? 'block' : 'hidden'}`} key={key}>
                  <div className="flex gap-3 mb-5">
                    <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer placement_tab_${key}slider_prev`}>
                      <BsArrowLeftShort size={20} />
                    </span>
                    <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer placement_tab_${key}slider_next`}>
                      <BsArrowRightShort size={20} />
                    </span>
                  </div>
                  <Swiper className="w-full bg-[#FFCC33]" slidesPerView={1} spaceBetween={0} loop={true} modules={[Navigation]} navigation={{prevEl: `.placement_tab_${key}slider_prev`, nextEl: `.placement_tab_${key}slider_next`}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 3}, 1024: {slidesPerView: 4}}} >
                    {
                      placement_content_data[placement_tab].map((placement_content, sub_key) => (
                      <SwiperSlide key={sub_key}>
                        <div className="flex gap-5 justify-center items-center py-7 px-5 relative">
                          <div className="flex flex-col gap-5 items-center text-center">
                            <h2 className="text-3xl">{placement_content.tab_content_caption}</h2>
                            <p className="text-[#4E4E4E] text-sm min-h-10">{placement_content.tab_content_description}</p>
                          </div>
                          <span className="h-10 w-[0.5px] bg-[#4E4E4E] hidden sm:block absolute right-0 top-1/2 -translate-y-1/2"></span>
                        </div>
                      </SwiperSlide>
                    ))
                    }
                  </Swiper>
                </div>
              )
            ))
            }
          </div>
        </div>
      )}
      {
        recruiters && recruiters.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
            <Intro
            introTitle={recruiters_introduction.intro_title}
            introCaption={recruiters_introduction.intro_caption}
            introDescription={recruiters_introduction.intro_description}
            />
            <div className="flex gap-3 mb-5">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer partner_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer partner_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full" slidesPerView={2} spaceBetween={50} loop={true} modules={[Navigation]} navigation={{prevEl: '.partner_slider_prev', nextEl: '.partner_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 75 }, 1024: { slidesPerView: 4, spaceBetween: 150 } }} >
              {
                recruiters.map((recruiter, key) => recruiter.recruiter_logo && (
                  <SwiperSlide className="rounded-full overflow-hidden border border-[#800000] !w-30 sm:!w-50" title={recruiter.recruiter_caption} key={key}>
                    <Image src={recruiter.recruiter_logo} alt={recruiter.recruiter_caption} width={300} height={300} className="object-cover w-full" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          )
      }
      {
        placement_features_tabs && placement_features_tabs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={features_introduction.intro_title}
          introCaption={features_introduction.intro_caption}
          introDescription={features_introduction.intro_description} />
          <div className="flex flex-col lg:flex-row lg:gap-5 lg:gap-10">
              <ul className="lg:w-[20%] flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center lg:justify-start lg:items-start">
                {
                  placement_features_tabs.map((feature_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeFeatureCategory === feature_category ? 'text-2xl' : 'text-lg text-[#4E4E4E]'}`} key={key} onClick={() => updateActiveFeatureCategoryFunc(feature_category)}>
                      <span className="relative">
                        {feature_category}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeFeatureCategory === feature_category ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="lg:w-[80%] lg:border-l-[0.5px] border-[#DCBABA]" ref={Features}>
                {
                    placement_features_tabs.map((feature_category, key) => (
                    <div className={`w-full ${activeFeatureCategory === feature_category ? '' : 'hidden'}`} key={key}>
                      {
                        placement_features_data[feature_category].map((placement_feature, feature_key) => placement_feature.feature_image && (
                          <div className={`w-full py-5 ${placement_features_data[feature_category].length !== (feature_key + 1) ? 'border-b' : '' } border-[#DCBABA] `} key={feature_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleFeatureAccordian(feature_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{placement_feature.feature_caption}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openFeature === feature_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openFeature === feature_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="w-full text-[#4E4E4E]">
                                  <Image src={placement_feature.feature_image} alt={placement_feature.feature_caption} width="900" height={900} className="object-cover w-full h-full" />
                                </div>
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
        </div>
          )
      }
      {
        testimonials && testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
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
                    <div className="rounded-full w-30 h-30">
                      {
                        testimonial.testimonial_thumbnail && (
                          <Image src={testimonial.testimonial_thumbnail} alt={testimonial.testimonial_name} width={200} height={200} className="object-cover w-full h-full" />
                        )
                      }
                    </div>
                    <h2 className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</h2>
                    <div className="mt-auto flex flex-col gap-3 text-burgundy">
                      <span className="text-sm md:text-lg">{testimonial.testimonial_designation}</span>
                      <span className="text-sm md:text-lg">{testimonial.testimonial_company_name}</span>
                    </div>
                  </div>
                  <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeTestimonial === key ? "scale-y-100" : "scale-y-0"}`}>
                    {
                      testimonial.testimonial_youtube_video_id ? (
                        <div className="mx-auto flex justify-center items-center gap-2 cursor-pointer w-full h-full" onClick={() => videoPopupRef.current?.open(testimonial.testimonial_youtube_video_id)}>
                          <FiPlayCircle size={20} />
                          <span className="text-sm">Play Video</span>
                        </div>
                      ) : (
                        <>
                        {
                          testimonial.testimonial_bio && (
                            <p className="leading-loose">{parser(nl2br(testimonial.testimonial_bio))}</p>
                          )
                        }
                        <div className="mt-auto flex flex-col gap-3">
                          <span className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</span>
                          <span className="text-sm md:text-lg">{testimonial.testimonial_designation}</span>
                          <span className="text-sm md:text-lg">{testimonial.testimonial_company_name}</span>
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
        contacts && contacts.length > 0 && (
        <div className="w-full bg-[#FFCC33] flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <div className="flex flex-col gap-5">
            <p className="text-2xl md:text-4xl font-georgia w-full lg:w-4xl">{contacts_introduction.intro_caption}</p>
            <p className="leading-loose">{contacts_introduction.intro_description}</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10">
            {
              contacts.map((contact, key) => (
                <>
                <div className="flex flex-col gap-2" key={key}>
                  <h2 className="font-georgia text-xl">{contact.contact_name}</h2>
                  <h3>{contact.contact_designation}</h3>
                  {
                    contact.contact_phone_number && (
                      <span className="flex gap-2 items-center">
                        <FaPhone size={15} />
                        <Link href={`tel:${contact.contact_phone_number.replace(/\s+/g, '')}`}>{contact.contact_phone_number}</Link>
                      </span>
                    )
                  }
                  {
                    contact.contact_email_address && (
                      <span className="flex gap-2 items-center">
                        <IoMdMail size={15} />
                        <Link href={`mailto:${contact.contact_email_address}`}>{contact.contact_email_address}</Link>
                      </span>
                    )
                  }
                </div>
                <span className={`h-35 w-[0.5px] bg-[#800000] ${((key + 1) !== contacts.length) ? 'hidden lg:block' : 'hidden'}`}></span>
                </>
              ))
            }
          </div>
        </div>
      )
      }
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}