"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

export default function CareerComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const values = [
    {
      value_title: 'Be Honorable',
      value_icon: 'honour-medal.png'
    },
    {
      value_title: 'Create An Impact',
      value_icon: 'bullseye.png'
    },
    {
      value_title: 'Keep Getting Better',
      value_icon: 'performance.png'
    },
    {
      value_title: 'Create An Impact',
      value_icon: 'bullseye.png'
    },
    {
      value_title: 'Keep Getting Better',
      value_icon: 'performance.png'
    }
  ]

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
  ]

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Join Our Mission To Shape The Future Of Management Education"
      banner_description="Discover a fulfilling career where excellence, innovation and purpose come together"/>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Events" introCaption="We Are More Than Just An Institute - We’re A Community Of Passionate Educators, Researchers And Professionals Driven To Create Meaningful Impact." introDescription="With a legacy of academic excellence, dynamic leadership and a progressive environment, we welcome individuals who aspire to make a difference in the world of education." />
        <div className="w-full">
          <Image src={`${basePath}images/careers/careers.png`} alt="Careers" width={1920} height={900} className="object-cover" />
        </div>
        <CenterIntro introTitle="Lorem Ipsum" introCaption="Our Values" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea." />
        {
          values && values.length > 0 && ( 
          <div className="flex flex-wrap gap-25 justify-center items-center text-center lg:px-10 text-[#4E4E4E]">
            {
              values.map((value, key) => (
                <div className="flex flex-col gap-5 items-center" key={key}>
                  <Image src={`${basePath}images/careers/${value.value_icon}`} alt={value.value_title} width={110} height={110} className="w-20" />
                  <h2 className="font-georgia text-xl">{value.value_title}</h2>
                </div>
              ))
            }
          </div>
        )
        }
      </div>
      {
        milestones && milestones.length > 0 && (
      <div className="w-full px-5 md:px-15 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-[#FFCC33] px-5 md:px-15 lg:px-30 py-10">
          {
            milestones.map((milestone, key) => (
              <>
              <div className="flex flex-col gap-5 items-center" key={key}>
                <h2 className="text-3xl">{milestone.milestone_title}</h2>
                <p className="text-[#4E4E4E] text-sm">{milestone.milestone_caption}</p>
              </div>
              {
                ((key + 1) !== milestones.length) && (
                  <span className="h-10 w-[0.5px] bg-[#4E4E4E]"></span>
                )
              }
              </>
            ))
          }
        </div>
      </div>
      )
      }
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-5">
        <Intro introTitle="Our Achivements" introCaption="A Culture That Inspires Growth" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem." />
        <div className="flex gap-3">
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_prev">
            <BsArrowLeftShort size={20} />
          </span>
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_next">
            <BsArrowRightShort size={20} />
          </span>
        </div>
        <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.achievement_slider_prev', nextEl: '.achievement_slider_next'}} >
          {
            [...Array(5)].map((_, i) => (
            <SwiperSlide className="w-full">
              <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-10 py-10" style={{backgroundImage: `url(${basePath}images/careers/intro-img.png)`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"></div>
                <div className="flex flex-col gap-5 relative mt-auto">
                  <h2 className="font-georgia text-2xl">Collaborative Environment</h2>
                  <p>Where innovation and academia come together.</p>
                </div>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-5">
        <Intro introTitle="Student Clubs" introCaption="Current Openings" />
        <div className="flex gap-3">
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer vacancies_slider_prev">
            <BsArrowLeftShort size={20} />
          </span>
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer vacancies_slider_next">
            <BsArrowRightShort size={20} />
          </span>
        </div>
        <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.vacancies_slider_prev', nextEl: '.vacancies_slider_next'}} breakpoints={{640: {slidesPerView: 2, spaceBetween: 30}, 1024: {slidesPerView: 3, spaceBetween: 30}}} >
          {
            [...Array(5)].map((_, i) => (
            <SwiperSlide className="w-full">
              <div className="w-full flex flex-col items-center text-center gap-3 py-7 px-5 border-1 border-[#E6CDCD]">
                <h2 className="font-georgia text-lg">Assistant Professor - Finance</h2>
                <h3 className="font-georgia text-lg">Department: PGDM</h3>
                <h3 className="font-georgia text-lg">NLDIMSR Institute, Mira Road</h3>
                <h3 className="font-georgia text-lg">6+ Years Of Academic Experience</h3>
                <p className="leading-loose text-sm">Teach core finance subjects, guide student projects, and contribute to research. Preference for candidates with fintech or data-driven finance expertise.</p>
                <ul className="flex gap-5 mt-5 text-sm">
                  <li>
                    <Link href="" className="text-white bg-[#800000] px-2 py-1">Apply Now</Link>
                  </li>
                  <li>
                    <Link href="" className="text-burgundy bg-white border-[0.5px] border-[#800000] px-3 py-1">View Job Details</Link>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      <Footer />
    </main>
    </>
  );
}