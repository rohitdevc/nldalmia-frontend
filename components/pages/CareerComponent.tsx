"use client"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { IoMdClose } from "react-icons/io";

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

import { Banner as BannerProps } from "@/types/api";

type PageProps = {
  banner: BannerProps;
};

export default function CareerComponent({banner}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const [showVacancyPopUp, updateVacancyPopUp] = useState(false);

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
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Events" introCaption="We Are More Than Just An Institute - We’re A Community Of Passionate Educators, Researchers And Professionals Driven To Create Meaningful Impact." introDescription="With a legacy of academic excellence, dynamic leadership and a progressive environment, we welcome individuals who aspire to make a difference in the world of education." />
        <div className="w-full">
          <Image src={`${basePath}images/careers/careers.png`} alt="Careers" width={1920} height={900} className="object-cover" />
        </div>
        <CenterIntro introTitle="Lorem Ipsum" introCaption="Our Values" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea." />
        {
          values && values.length > 0 && ( 
          <div className="flex flex-wrap gap-10 lg:gap-25 justify-center items-center text-center lg:px-10 text-[#4E4E4E]">
            {
              values.map((value, key) => (
                <div className="flex flex-col gap-5 items-center w-35" key={key}>
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
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center bg-[#FFCC33] px-5 md:px-15 lg:px-30 py-10">
          {
            milestones.map((milestone, key) => (
              <>
              <div className="flex flex-col gap-5 items-center text-center" key={key}>
                <h2 className="text-3xl">{milestone.milestone_title}</h2>
                <p className="text-[#4E4E4E] text-sm">{milestone.milestone_caption}</p>
              </div>
              {
                ((key + 1) !== milestones.length) && (
                  <>
                  <span className="h-10 w-[0.5px] bg-[#4E4E4E] hidden lg:block"></span>
                  <span className="w-10 h-[0.5px] bg-[#4E4E4E] lg:hidden"></span>
                  </>
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
              <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${basePath}images/careers/intro-img.png)`}}>
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
                    <span className="text-burgundy bg-white border-[0.5px] border-[#800000] px-3 py-1 cursor-pointer" onClick={() => updateVacancyPopUp(true)}>View Job Details</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-5">
        <Intro introTitle="Application Process" introCaption="How To Apply" introDescription="Please follow steps below to successfully submit your application" />
        <div className="flex flex-col lg:flex-row gap-10 py-5">
          <div className="flex flex-col py-7 px-10 gap-3 bg-[#FFCC33] items-center text-center">
            <h2 className="font-georgia text-xl">Browse Open Positions</h2>
            <p className="text-[#4E4E4E] leading-loose">Browse through the latest openings across academic and administrative departments and find a role where your expertise can make a real impact. Can’t find a role that matches your profile? Reach out to us at <Link href="mailto:careers@nldalmia.edu.in" className="text-[#5D71E2]">careers@nldalmia.edu.in</Link></p>
          </div>
          <div className="flex flex-col py-7 px-10 gap-3 bg-[#FFCC33] items-center text-center">
            <h2 className="font-georgia text-xl">Submit Your Resume & Cover Letter</h2>
            <p className="text-[#4E4E4E] leading-loose">Browse through the latest openings across academic and administrative departments and find a role where your expertise can make a real impact. Can’t find a role that matches your profile? Reach out to us at <Link href="mailto:careers@nldalmia.edu.in" className="text-[#5D71E2]">careers@nldalmia.edu.in</Link></p>
          </div>
        </div>
      </div>
      <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20 mt-5" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center">
            <h3 className="font-georgia leading-relaxed text-center text-2xl lg:text-4xl lg:w-3xl">Enhance Your Leadership Skills With Our PGDM Programs</h3>
            <Link href="" className="flex items-center gap-2 px-3 py-1 bg-[#800000]" target="_blank">Apply Now</Link>
          </div>
      </div> 
      <div className={`fixed top-0 w-full h-screen bg-white z-10 overflow-scroll transform transition-all duration-300 ease-in-out ${showVacancyPopUp ? 'translate-y-0 opacity-100': 'translate-y-full opacity-0'}`}>
        <div className="relative flex justify-center items-center py-10">
          <IoMdClose size={40} className="absolute top-0 right-0 lg:top-5 lg:right-5 cursor-pointer" onClick={() => updateVacancyPopUp(false)}/>
          <div className="flex flex-col gap-4 p-5 lg:p-10 border-[0.5px] border-[#D6ACAC] mx-5 lg:mx-0 lg:w-4xl">
            <h2 className="font-georgia text-lg">Assistant Professor - Finance</h2>
            <h3 className="font-georgia text-lg">Department - PGDM, Full Time</h3>
            <h3 className="font-georgia text-lg">6+ Years Of Academic Or Teaching Experience</h3>
            <h4 className="font-georgia ">Job Summary</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">N. L. Dalmia Institute Of Management Studies & Research is seeking a highly motivated and qualified individual for the role of Assistant Professor - Finance. The ideal candidate will bring a strong academic background, research expertise and a passion for teaching the next generation of business leaders.</p>
            <h4 className="font-georgia ">Key Responsibility</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">Deliver engaging lectures in core and advanced finance subjects (e.g Corporate Finance, Financial Markets, Investment Analysis). Guide students on academic projects, dissertations and internships. Participate actively in curriculum development and periodic syllabus reviews.</p>
            <h4 className="font-georgia ">Qualification</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">Ph.D. (or nearing completion) in finance or related discipline from a recognized university or institute. UGC NET/SET qualified (preferred). Minimum 3 years of teaching and or relevant industry experience.</p>
            <h4 className="font-georgia ">How To Apply</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">Interested candidates are requested to submit their resume, cover letter and list of publications (careers@nldalmia.edu.in) with the subject line - “Applicatio - Assistant Professor - Finance”</p>
            <Link href="" className="text-white bg-[#800000] border-[0.5px] border-[#800000] w-25 text-center py-1 text-sm">Apply Now</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}