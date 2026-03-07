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

export default function PlacementsComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const placement_tabs = [
    {
      id: 1,
      placement_tab_title: 'Final Placement'
    },
    {
      id: 2,
      placement_tab_title: 'Summer Internship'
    }
  ]

  const [activePlacementTab, updateActivePlacementTab] = useState(1);

  const PlacementTabs = useRef<HTMLDivElement>(null);

  const updateActivePlacementTabFunc = (placement_tab_tab_id: number): void => {
    updateActivePlacementTab(placement_tab_tab_id);

    if(PlacementTabs.current) {
      const offset = 200;
      const elementTop = PlacementTabs.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const milestones = [
    {
      milestone_title: '24.46 LPA',
      milestone_caption: 'Highest Placement Package For 2024/25 Batch'
    },
    {
      milestone_title: '25+',
      milestone_caption: 'Years of Excellence'
    },
    {
      milestone_title: '100+',
      milestone_caption: 'Faculty & Staff'
    },
    {
      milestone_title: '24.46 LPA',
      milestone_caption: 'Highest Placement Package For 2024/25 Batch'
    },
    {
      milestone_title: '25+',
      milestone_caption: 'Years of Excellence'
    },
    {
      milestone_title: '100+',
      milestone_caption: 'Faculty & Staff'
    },
    {
      milestone_title: '24.46 LPA',
      milestone_caption: 'Highest Placement Package For 2024/25 Batch'
    },
  ]

  const partners = [
    {
      id: 1,
      partner_name: 'Deutsche Bank',
      partner_logo: 'deutsche-bank.png'
    },
    {
      id: 1,
      partner_name: 'Motilal Oswal',
      partner_logo: 'motilal-oswal.png'
    },
    {
      id: 1,
      partner_name: 'Abbott',
      partner_logo: 'abbott.png'
    },
    {
      id: 1,
      partner_name: 'Aditya Birla Group',
      partner_logo: 'aditya-birla-group.png'
    },
    {
      id: 1,
      partner_name: 'Bloomberg',
      partner_logo: 'bloomberg.png'
    },
  ]
  
  const testimonials = [
    {
      id: 1,
      testimonial_name: 'Ankita Mishra',
      testimonial_thumbnail: 'ankita-mishra.png',
      testimonial_designation: 'HR Business Partner',
      testimonial_company_name: 'Amazon Development Centre India Ltd',
      testimonial_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      testimonial_name: 'Rebuen D\'Souza',
      testimonial_thumbnail: 'reuben-dsouza.png',
      testimonial_designation: 'Senior Manager - Human Resources',
      testimonial_company_name: 'UPL Limited',
      testimonial_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      testimonial_name: 'Ankita Mishra',
      testimonial_thumbnail: 'ankita-mishra.png',
      testimonial_designation: 'HR Business Partner',
      testimonial_company_name: 'Amazon Development Centre India Ltd',
      testimonial_content: '',
      testimonial_youtube_video_id: 'loSuQcjtLYA'
    },
    {
      id: 4,
      testimonial_name: 'Rebuen D\'Souza',
      testimonial_thumbnail: 'reuben-dsouza.png',
      testimonial_designation: 'Senior Manager - Human Resources',
      testimonial_company_name: 'UPL Limited',
      testimonial_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeTestimonial, updateActiveTestimonial] = useState(0);

  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

  const feature_categories = [
    {
      id: 1,
      feature_category_title: 'Overall',
    },
    {
      id: 2,
      feature_category_title: 'Business Analytics'
    },
    {
      id: 3,
      feature_category_title: 'Finance'
    },
    {
      id: 4,
      feature_category_title: 'Marketing'
    },
    {
      id: 5,
      feature_category_title: 'Human Resource'
    }
  ]

  const features = [
    {
      id: 1,
      feature_category_title: 'Overall',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 2,
      feature_category_title: 'Overall',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 3,
      feature_category_title: 'Overall',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 4,
      feature_category_title: 'Business Analytics',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 5,
      feature_category_title: 'Business Analytics',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 6,
      feature_category_title: 'Business Analytics',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 7,
      feature_category_title: 'Finance',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 8,
      feature_category_title: 'Finance',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 9,
      feature_category_title: 'Finance',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 10,
      feature_category_title: 'Marketing',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 11,
      feature_category_title: 'Marketing',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 12,
      feature_category_title: 'Marketing',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 13,
      feature_category_title: 'Human Resource',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 14,
      feature_category_title: 'Human Resource',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
    {
      id: 15,
      feature_category_title: 'Human Resource',
      feature_caption: 'Overall Batch Profile 2024/25',
      feature_description: '<div><img src="/images/placements/BA-Batch-Profile-indd5-scaled.jpg" /></div>'
    },
  ]

  type Feature = {
    id: number,
    feature_category_title: string,
    feature_caption: string,
    feature_description: string
  }

  const features_data: Record<string, Feature[]> = {};

  features.forEach((feature) => {
    if (!features_data[feature.feature_category_title]) {
      features_data[feature.feature_category_title] = [];
    }

    features_data[feature.feature_category_title].push(feature);
  })

  const [activeFeatureCategory, updateActiveFeatureCategory] = useState(feature_categories.length > 0 ? feature_categories[0].feature_category_title : '');
  const [openFeature, toggleFeatureAccordian] = useState(0);

  const Features = useRef<HTMLDivElement | null>(null);

  const updateActiveFeatureCategoryFunc = (feature_category_title: string): void => {
    updateActiveFeatureCategory(feature_category_title);
    toggleFeatureAccordian(0);
    scrollWithOffset(Features);
  }

  const contacts = [
    {
      contact_name: 'Pooja Rasal',
      contact_designation: 'Chairperson- Corporate Relations',
      contact_phone_number: '+91 9869526143',
      contact_email_address: 'pooja.rasal@nldalmia.edu.in'
    },
    {
      contact_name: 'Krishant Sharma',
      contact_designation: 'Sr. Executive - Corporate Relations',
      contact_phone_number: '+91 9820217755',
      contact_email_address: 'krishant.sharma@nldalmia.edu.in'
    },
    {
      contact_name: 'Prachi Mahimkar',
      contact_designation: 'Administrative Executive - Corporate Relations',
      contact_phone_number: '+91 9892834246',
      contact_email_address: 'prachi.mahimkar@nldalmia.edu.in'
    }
  ]

  return (
    <>
    <Header placementsPage={true} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Your Career Begins Here"
      banner_description="Empowering future leaders with industry ready skills and 100% placement opportunities at top global and Indian firms."/>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introCaption="Placement Success That Speaks For Itself" introDescription="NLDIMSR’s legacy of excellence is reflected in its 100% placement track record. Our dedicated placement cell collaborates with leading organisations across sectors to ensure students find the right opportunities aligned with their aspirations. From global consulting firms to fast growing startups, our recruiters trust the talent we nurture." />
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
            [...Array(5)].map((_, i) => (
            <SwiperSlide className="w-full" key={i}>
              <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${basePath}images/careers/intro-img.png)`}}></div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro introCaption="Corporate Engagement"></CenterIntro>
        <div className="flex flex-wrap gap-5 lg:gap-10 justify-center items-center">
          {
            [...Array(5)].map((_, i) => (
              <div className="flex flex-col gap-5 items-center text-center w-75 lg:w-80">
                <Image src={`${basePath}images/placements/speaker.png`} alt="Guest Lecture Competitions & Webinars" width={100} height={100} className="w-20"/>
                <h2 className="font-georgia text-burgundy text-xl">Guest Lecture Competitions & Webinars</h2>
                <p className="text-[#4E4E4E] text-sm">Seniors leaders share industry insights and knowledge through guest lectures</p>
              </div>
              ))
          }
        </div>
        <ul className="flex flex-col sm:flex-row gap-7 py-5 text-burgundy justify-center items-center">
          {
            placement_tabs.map((placement_tab_tab, key) => (
              <li className={`group relative cursor-pointer transition-all duration-300 ${placement_tab_tab.id === activePlacementTab ? 'text-burgundy text-2xl font-normal': 'text-[#4E4E4E] text-lg'}`} key={key} onClick={() => updateActivePlacementTabFunc(placement_tab_tab.id)}>
                <span>{placement_tab_tab.placement_tab_title}</span>
                <span className={`absolute left-0 -bottom-1 bg-[#800000] h-[0.5px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${placement_tab_tab.id === activePlacementTab ? 'scale-x-100': ''} `}></span>
              </li>
            ))
          }
        </ul>
        <div className="w-full" ref={PlacementTabs}>
          {
              placement_tabs.map((placement_tab_tab, key) => (
              <div className={`w-full ${placement_tab_tab.id === activePlacementTab ? 'block' : 'hidden'}`} key={key}>
                <div className="flex gap-3 mb-5">
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer placement_tab_${placement_tab_tab.id}slider_prev`}>
                    <BsArrowLeftShort size={20} />
                  </span>
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer placement_tab_${placement_tab_tab.id}slider_next`}>
                    <BsArrowRightShort size={20} />
                  </span>
                </div>
                <Swiper className="w-full bg-[#FFCC33]" slidesPerView={1} spaceBetween={0} loop={true} modules={[Navigation]} navigation={{prevEl: `.placement_tab_${placement_tab_tab.id}slider_prev`, nextEl: `.placement_tab_${placement_tab_tab.id}slider_next`}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 3}, 1024: {slidesPerView: 4}}} >
                  {
                    milestones.map((milestone, key) => (
                    <SwiperSlide>
                      <div className="flex gap-5 justify-center items-center py-7 px-5 relative">
                        <div className="flex flex-col gap-5 items-center text-center" key={key}>
                          <h2 className="text-3xl">{milestone.milestone_title}</h2>
                          <p className="text-[#4E4E4E] text-sm min-h-10">{milestone.milestone_caption}</p>
                        </div>
                        <span className="h-10 w-[0.5px] bg-[#4E4E4E] hidden sm:block absolute right-0 top-1/2 -translate-y-1/2"></span>
                      </div>
                    </SwiperSlide>
                  ))
                  }
                </Swiper>
              </div>
          ))}
          </div>
      </div>
      {
        partners && partners.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
            <Intro introCaption="Our Trusted Recruiters" introDescription="Our recruiting partners represent the best in business - a blend of established brands and emerging leaders. Click on any partner to explore hiring trends, offered roles and past engagement with our institute." />
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
                partners.map((partner, key) => (
                  <SwiperSlide className="rounded-full overflow-hidden border border-[#800000] !w-30 sm:!w-50" title={partner.partner_name} key={key}>
                    <Image src={`${basePath}images/home/partners/${partner.partner_logo}`} alt={partner.partner_name} width={300} height={300} className="object-cover w-full" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          )
      }
      {
        feature_categories && feature_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introCaption="A Balanced, Credit Based Learning Approach" introDescription="The PGDM Finance program consists of 130 credits spread across core courses, specialisations, electives, industry projects, skill development and value added programs. From financial theory to corporate strategy and digital finance tools - the curriculum ensures well rounded expertise." />
          <div className="flex flex-col lg:flex-row lg:gap-5 lg:gap-10">
              <ul className="lg:w-[20%] flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center lg:justify-start lg:items-start">
                {
                  feature_categories.map((feature_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeFeatureCategory === (feature_category.feature_category_title) ? 'text-2xl' : 'text-lg text-[#4E4E4E]'}`} key={key} onClick={() => updateActiveFeatureCategoryFunc(feature_category.feature_category_title)}>
                      <span className="relative">
                        {feature_category.feature_category_title}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeFeatureCategory === (feature_category.feature_category_title) ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="lg:w-[80%] lg:border-l-[0.5px] border-[#DCBABA]" ref={Features}>
                {
                    feature_categories.map((feature_category, key) => (
                    <div className={`w-full ${activeFeatureCategory === feature_category.feature_category_title ? '' : 'hidden'}`} key={key}>
                      {
                        features_data[feature_category.feature_category_title].map((features, feature_key) => (
                          <div className={`w-full py-5 ${features_data[feature_category.feature_category_title].length !== (feature_key + 1) ? 'border-b' : '' } border-[#DCBABA] `} key={feature_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleFeatureAccordian(feature_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{features.feature_caption}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openFeature === feature_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openFeature === feature_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  {parser(features.feature_description)}
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
                <SwiperSlide className="group relative w-full md:!w-90 border border-[#800000] bg-white" title={testimonial.testimonial_name} key={key} onClick={handleTestimonialClick(testimonial.id)}>
                  <div className="w-full h-full flex flex-col gap-10 px-5 py-5">
                    <Image src={`${basePath}images/home/testimonials/${testimonial.testimonial_thumbnail}`} alt={testimonial.testimonial_name} width={200} height={200} className="rounded-full w-30 h-30" />
                    <h2 className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</h2>
                    <div className="mt-auto flex flex-col gap-3 text-burgundy">
                      <span className="text-sm md:text-lg">{testimonial.testimonial_designation}</span>
                      <span className="text-sm md:text-lg">{testimonial.testimonial_company_name}</span>
                    </div>
                  </div>
                  <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeTestimonial === testimonial.id ? "scale-y-100" : "scale-y-0"}`}>
                    {
                      testimonial.testimonial_youtube_video_id ? (
                        <div className="mx-auto flex justify-center items-center gap-2 cursor-pointer w-full h-full" onClick={() => videoPopupRef.current?.open(testimonial.testimonial_youtube_video_id)}>
                          <FiPlayCircle size={20} />
                          <span className="text-sm">Play Video</span>
                        </div>
                      ) : (
                        <>
                        <p className="leading-loose">{testimonial.testimonial_content}</p>
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
            <p className="text-2xl md:text-4xl font-georgia w-full lg:w-4xl">Contact Us</p>
            <p className=" leading-loose">Looking to hire industry ready, skilled professionals? Connect with our placement cell to explore recruitment opportunities at NLDIMSR.</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10">
            {
              contacts.map((contact, key) => (
                <>
                <div className="flex flex-col gap-2" key={key}>
                  <h2 className="font-georgia text-xl">{contact.contact_name}</h2>
                  <h3>{contact.contact_designation}</h3>
                  <span className="flex gap-2 items-center">
                    <FaPhone size={15} />
                    <Link href={`tel:${contact.contact_phone_number}`}>{contact.contact_phone_number}</Link>
                  </span>
                  <span className="flex gap-2 items-center">
                    <IoMdMail size={15} />
                    <Link href={`mailto:${contact.contact_email_address}`}>{contact.contact_email_address}</Link>
                  </span>
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