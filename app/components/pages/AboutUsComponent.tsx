"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { IoIosArrowDown } from "react-icons/io";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import Intro from "@/app/components/Intro";
import CenterIntro from "@/app/components/CenterIntro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/app/components/YouTubeVideo";

import { MdArrowOutward } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

export default function AboutUsComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const scrollWithOffset = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    
    const offset = 200;
    
    const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({ top, behavior: "smooth" });
  };

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const company_objectives = [
    {
      company_objective_title: 'Our Vision',
      company_objective_caption: 'To be a world class management institute'
    },
    {
      company_objective_title: 'Our Mission',
      company_objective_caption: 'To provide a value based Quality Management Education with a Global Outlook and a Social Conscience'
    },
    {
      company_objective_title: 'Our Values',
      company_objective_caption: 'We at N.L.Dalmia Institute of Management Studies and Research are committed to nurture, empower and enhance skills of future business leaders by providing value-based quality education.'
    },
  ]

  const timelines = [
    {
      id: 1,
      timeline_year: 2026,
      timeline_caption: 'Going Digital, Staying Personal',
      timeline_description: 'In a major leap forward N.L Dalmia received government approval to launch its open and distance learning and online learning programs. These UCG recognised offerings mark new chapter in accessible, flexible and career focused education - delivering the same academic rigour and institutional credibility to students across geographies especially working professionals and learners from tier 2 and 3 cities. The digital expansion reinforces the institute’s commitment to innovation while staying rooted in its value-driven academic philosophy.'
    },
    {
      id: 2,
      timeline_year: 2025,
      timeline_caption: 'Going Digital, Staying Personal',
      timeline_description: 'In a major leap forward N.L Dalmia received government approval to launch its open and distance learning and online learning programs. These UCG recognised offerings mark new chapter in accessible, flexible and career focused education - delivering the same academic rigour and institutional credibility to students across geographies especially working professionals and learners from tier 2 and 3 cities. The digital expansion reinforces the institute’s commitment to innovation while staying rooted in its value-driven academic philosophy.'
    },
    {
      id: 3,
      timeline_year: 2024,
      timeline_caption: 'Going Digital, Staying Personal',
      timeline_description: 'In a major leap forward N.L Dalmia received government approval to launch its open and distance learning and online learning programs. These UCG recognised offerings mark new chapter in accessible, flexible and career focused education - delivering the same academic rigour and institutional credibility to students across geographies especially working professionals and learners from tier 2 and 3 cities. The digital expansion reinforces the institute’s commitment to innovation while staying rooted in its value-driven academic philosophy.'
    },
    {
      id: 4,
      timeline_year: 2023,
      timeline_caption: 'Going Digital, Staying Personal',
      timeline_description: 'In a major leap forward N.L Dalmia received government approval to launch its open and distance learning and online learning programs. These UCG recognised offerings mark new chapter in accessible, flexible and career focused education - delivering the same academic rigour and institutional credibility to students across geographies especially working professionals and learners from tier 2 and 3 cities. The digital expansion reinforces the institute’s commitment to innovation while staying rooted in its value-driven academic philosophy.'
    },
    {
      id: 5,
      timeline_year: 2022,
      timeline_caption: 'Going Digital, Staying Personal',
      timeline_description: 'In a major leap forward N.L Dalmia received government approval to launch its open and distance learning and online learning programs. These UCG recognised offerings mark new chapter in accessible, flexible and career focused education - delivering the same academic rigour and institutional credibility to students across geographies especially working professionals and learners from tier 2 and 3 cities. The digital expansion reinforces the institute’s commitment to innovation while staying rooted in its value-driven academic philosophy.'
    },
    {
      id: 6,
      timeline_year: 2021,
      timeline_caption: 'Going Digital, Staying Personal',
      timeline_description: 'In a major leap forward N.L Dalmia received government approval to launch its open and distance learning and online learning programs. These UCG recognised offerings mark new chapter in accessible, flexible and career focused education - delivering the same academic rigour and institutional credibility to students across geographies especially working professionals and learners from tier 2 and 3 cities. The digital expansion reinforces the institute’s commitment to innovation while staying rooted in its value-driven academic philosophy.'
    },
  ]
  
  const [yearSwiper, setYearSwiper] = useState<SwiperType | null>(null);
  const [contentSwiper, setContentSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (yearSwiper && contentSwiper) {
      yearSwiper.controller.control = contentSwiper;
      contentSwiper.controller.control = yearSwiper;
    }
  }, [yearSwiper, contentSwiper]);

  const management_quotes = [
    {
      id: 1,
      management_name: 'Hon. Secretary Message',
      management_quote: 'N. L. Dalmia Institute of Management Studies and Research established in 1995, enjoys a stellar reputation in business and management circles.',
      management_profile: 'https://www.nldalmia.in/faculty/',
      management_image: 'seema-saini.png'
    },
    {
      id: 2,
      management_name: 'Vice President’s Message',
      management_quote: 'Our vision is based on the belief of continuously nurturing a rich learning environment by providing the best facilities, latest resources.',
      management_profile: 'https://www.nldalmia.in/faculty/',
      management_image: 'seema-saini.png'
    },
    {
      id: 3,
      management_name: 'CEO’s Message',
      management_quote: 'Our deep commitment to Management Education, balanced with social responsibility, ensures that students attain a first-hand understanding of the challenges faced by our economy at large and the community in particular.',
      management_profile: 'https://www.nldalmia.in/faculty/',
      management_image: 'seema-saini.png'
    }
  ]

  const managing_council = [
    {
      id: 1,
      managing_council_name: 'Shri Shivkumar Dalmia',
      managing_council_designation: 'Chairman, N.L. Dalmia Education society',
      managing_council_profile: 'https://www.nldalmia.in/faculty/',
      managing_council_image: 'seema-saini.png'
    },
    {
      id: 2,
      managing_council_name: 'Prof. Dr. Seema Saini',
      managing_council_designation: 'CEO, N.L. Dalmia Education society',
      managing_council_profile: 'https://www.nldalmia.in/faculty/',
      managing_council_image: 'seema-saini.png'
    },
    {
      id: 3,
      managing_council_name: 'Shri Shivkumar Dalmia',
      managing_council_designation: 'Chairman, N.L. Dalmia Education society',
      managing_council_profile: 'https://www.nldalmia.in/faculty/',
      managing_council_image: 'seema-saini.png'
    },
    {
      id: 4,
      managing_council_name: 'Prof. Dr. Seema Saini',
      managing_council_designation: 'CEO, N.L. Dalmia Education society',
      managing_council_profile: 'https://www.nldalmia.in/faculty/',
      managing_council_image: 'seema-saini.png'
    },
    {
      id: 5,
      managing_council_name: 'Shri Shivkumar Dalmia',
      managing_council_designation: 'Chairman, N.L. Dalmia Education society',
      managing_council_profile: 'https://www.nldalmia.in/faculty/',
      managing_council_image: 'seema-saini.png'
    }
  ]

  const governing_council = [
    {
      id: 1,
      governing_council_name: 'Shri Shivkumar Dalmia',
      governing_council_designation: 'Chairman, N.L. Dalmia Education society',
      governing_council_profile: 'https://www.nldalmia.in/faculty/',
      governing_council_image: 'seema-saini.png'
    },
    {
      id: 2,
      governing_council_name: 'Prof. Dr. Seema Saini',
      governing_council_designation: 'CEO, N.L. Dalmia Education society',
      governing_council_profile: 'https://www.nldalmia.in/faculty/',
      governing_council_image: 'seema-saini.png'
    },
    {
      id: 3,
      governing_council_name: 'Shri Shivkumar Dalmia',
      governing_council_designation: 'Chairman, N.L. Dalmia Education society',
      governing_council_profile: 'https://www.nldalmia.in/faculty/',
      governing_council_image: 'seema-saini.png'
    },
    {
      id: 4,
      governing_council_name: 'Prof. Dr. Seema Saini',
      governing_council_designation: 'CEO, N.L. Dalmia Education society',
      governing_council_profile: 'https://www.nldalmia.in/faculty/',
      governing_council_image: 'seema-saini.png'
    },
    {
      id: 5,
      governing_council_name: 'Shri Shivkumar Dalmia',
      governing_council_designation: 'Chairman, N.L. Dalmia Education society',
      governing_council_profile: 'https://www.nldalmia.in/faculty/',
      governing_council_image: 'seema-saini.png'
    }
  ]

  const international_universities = [
    {
      id: 1,
      international_university_name: 'UNIVERSITY OF WISCONSIN-PARKSIDE, USA',
      international_university_country_name: 'USA',
      international_university_logo: 'university-of-wisconsin-parkside-usa-105920102.webp',
      international_university_caption: 'The Institute has collaborated with University of Wisconsin-Parkside, USA for a 1+1 Global MBA program. A MOU has been signed to conduct the 11 months Foundation Program for University of Wisconsin-Parkside (UW-Parkside) which makes the student eligible for the 2nd year MBA program at UW-Parkside with specialization in Finance/Marketing/HR/Analytics/General Management/Global Supply Chain Management/Accounts/Project Management. The student can also opt for Dual Specialization in the 2nd Year.\nThe tie-up with University of Wisconsin-Parkside is in the area of: ',
      international_university_description: '<ul><li>Student Exchange Programs</li><li>Faculty Exchange Programs</li><li>Collaborative Research</li><li>Exchange of Publications</li><li>Training programs, Workshops, Seminars and Conferences.</li></ul>'
    },
    {
      id: 2,
      international_university_name: 'California State University, San Bernardino',
      international_university_country_name: 'USA',
      international_university_logo: 'california-state-university-san-bernardino-493391455.webp',
      international_university_caption: 'The tie-up with San Bernardino, USA is in the area of:',
      international_university_description: '<ul><li>Development of Articulated Credit Transfer for the MBA and other graduate programs</li><li>Development of Faculty and Student Exchange programs</li></ul>'
    },
    {
      id: 3,
      international_university_name: 'University of Winnipeg, Canada',
      international_university_country_name: 'Canada',
      international_university_logo: 'university-of-winnipeg-canada-795010290.webp',
      international_university_caption: 'The Institute has collaborated with University of Winnipeg Canada for the Master’s in Management Program in Technology, Innovation, Operations. A MOU has been signed to conduct the 11 months Foundation Program for University of Winnipeg, which makes the student eligible for the 2nd year MIM program at University of Winnipeg, Canada.\nThe tie-up with University of Winnipeg is in the area of',
      international_university_description: '<ul><li>Student Exchange Programs</li><li>Faculty Exchange Programs</li><li>Collaborative Research</li><li>Exchange of Publications</li><li>Training programs, workshops, seminars and conferences</li></ul>'
    },
    {
      id: 4,
      international_university_name: 'University of Westminster, UK',
      international_university_country_name: 'United Kingdom',
      international_university_logo: 'university-of-winnipeg-canada-795010290.webp',
      international_university_caption: 'The Institute has collaborated with University of Westminster, UK for a 1+1 Global MBA program. The tie-up with University of Westminster is in the area of',
      international_university_description: '<ul><li>Student Exchange Programs</li><li>Faculty Exchange Programs</li><li>Collaborative Research</li><li>Exchange of Publications</li><li>Training programs, workshops, seminars and conferences</li></ul>'
    },
    {
      id: 5,
      international_university_name: 'Tongmyong University, South Korea',
      international_university_country_name: 'South Korea',
      international_university_logo: 'tongmyong-university-south-korea-631307373.webp',
      international_university_caption: 'The tie-up with Tongmyong University, South Korea is in the area of:',
      international_university_description: '<ul><li>Student Exchange Programs</li><li>Faculty Exchange Programs</li><li>Joint Research Activities and Publications</li><li>Participation in Seminars and Academic Meetings</li><li>Exchange of Academic Materials</li><li>Special Short-Term Academic Programs</li><li>Academic Programs that may include arrangements such as dual degree, transfer arrangements, 1+1 (MBA programs), 2+2 (BBA) or 1+3 (BBA).</li><li>Establishing of Korean Language Center at NLDIMSR with assistance of Tongmyong University which includes Korean Language credit programs</li></ul>'
    },
    {
      id: 6,
      international_university_name: 'Northern University, Bangladesh',
      international_university_country_name: 'Bangladesh',
      international_university_logo: 'northern-university-bangladesh-434910236.webp',
      international_university_caption: 'The tie-up with NSU, Bangladesh is in the area of',
      international_university_description: '<ul><li>Student Exchange Programs</li><li>Faculty Exchange Programs</li><li>Collaborative Research</li><li>Exchange of Publications</li><li>Training programs, workshops, seminars and conferences</li></ul>'
    }
  ]

  type InternationalUniversity = {
    id: number,
    international_university_name: string,
    international_university_country_name: string,
    international_university_logo: string,
    international_university_caption: string,
    international_university_description: string
  }

  const international_countries: string[] = [];
  const international_universities_data: Record<string, InternationalUniversity[]> = {};

  international_universities.forEach((international_university) => {
    if(!international_countries.includes(international_university.international_university_country_name)) {
      international_countries.push(international_university.international_university_country_name);
    }
    
    if (!international_universities_data[international_university.international_university_country_name]) {
      international_universities_data[international_university.international_university_country_name] = [];
    }

    international_universities_data[international_university.international_university_country_name].push(international_university);
  })

  const [activeCountry, updateActiveCountry] = useState(international_countries.length > 0 ? international_countries[0] : '');
  const [openUniversity, toggleUniversityAccordian] = useState(0);

  const InternationalTieUpContent = useRef<HTMLDivElement | null>(null);

  const updateActiveCountryFunc = (international_country_name: string): void => {
    updateActiveCountry(international_country_name);
    toggleUniversityAccordian(0);
    scrollWithOffset(InternationalTieUpContent);
  }

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro introTitle="About Us" introCaption="NAAC - Accredited, Industry-Aligned, And Committed To Transformative Learning Experiences" />
        <div className="flex flex-col lg:flex-row gap-10 md:mt-10 xl:mt-20">
          <div className="w-full lg:w-[40%] overflow-hidden relative cursor-pointer" onClick={() => videoPopupRef.current?.open('loSuQcjtLYA')}>
            <Image src={`${basePath}images/about-us/intro-img.png`} width={800} height={750} alt="NL Dalmia Intro" className="object-cover" />
            <FaPlayCircle size={35} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
          <div className="w-full lg:w-[60%] flex flex-col gap-5">
            <p className="text-[#4E4E4E] text-sm leading-loose">For over 25 years, N.L.Dalmia Institute of Management Studies and Research has stood as a bacon of excellence in business education. As an autonomous, futures-forward institution, we blend academic rigour with industry relevance, ensuring our students graduate as agile, responsible leaders. Rooted in strong values and driven by innovation, our commitment extends beyond degrees- we shape career, characters and global perspective</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center w-full">
          {
            company_objectives && company_objectives.length > 0 && company_objectives.map((company_objective, key) => (
              <div className="flex flex-col w-sm md:w-75 lg:w-sm text-center border-[0.5px] border-[#800000]" key={key}>
                <h2 className="font-georgia text-xl bg-[#FFCC33] w-full border-b-[0.5px] border-[#800000] py-2">{company_objective.company_objective_title}</h2>
                <p className="px-5 py-5 min-h-50 text-burgundy">{company_objective.company_objective_caption}</p>
              </div>
            ))
          }
        </div>
      </div>
      {
        timelines && timelines.length > 0 && (
          <div className="w-full h-screen bg-cover bg-center relative text-white flex flex-col" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
            <div className="absolute inset-0 bg-black/35"></div>
            <Swiper slidesPerView={5} centeredSlides slideToClickedSlide watchSlidesProgress initialSlide={0} modules={[Controller, Navigation]} onSwiper={setYearSwiper} className="w-full lg:w-1/2 relative z-10 timeline_pagination_slider">
              {
                timelines.map((timeline, key) => (
                  <SwiperSlide className="py-10 lg:py-20 text-center cursor-pointer" key={key}>
                    <span className="text-xl opacity-75 transition-all duration-300">{timeline.timeline_year}</span>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Swiper modules={[Controller, Pagination]} slidesPerView={1} onSwiper={setContentSwiper} className="w-full mt-auto relative">
              {
                timelines.map((timeline, key) => (
                  <SwiperSlide className="px-2 py-2 md:px-10 md:py-10 lg:px-50 lg:py-20 text-center" key={key}>
                    <div className="flex flex-col gap-10">
                      <h2 className="font-georgia text-2xl md:text-3xl lg:text-4xl">{timeline.timeline_year} - {timeline.timeline_caption}</h2>
                      <p className="text-md lg:text-lg leading-normal md:leading-loose">{timeline.timeline_description}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        )
      }
      <div className="w-full px-5 md:px-15 lg:px-20 py-10 bg-[#FFCC33] flex flex-col gap-10">
        <h2 className="text-2xl lg:text-4xl font-georgia">Shri Niranjanlal Dalmia - Founder, Visionary, Guiding Light</h2>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center items-center">
          <Image src={`${basePath}images/home/intro-img.png`} width={800} height={750} alt="NL Dalmia Intro" className="object-cover w-80" />
          <div className="flex flex-col mt-auto gap-5 lg:gap-10 relative">
            <p className="text-burgundy leading-loose">In 1995, the Late Shri Niranjanlal Dalmia laid the foundation of the N.L.Dalmia Educational Society with a vision far beyond brick and mortar-to create a world class institute that would mature ethical, globally competent business leaders. Deeply rooted in his values of integrity, knowledge and social progress. N.L.Dalmia Institute of Management Studies and Research began its academic journey in 1997. Today, it stands tall among India’s top B-schools- a living treatment to his legacy of purposeful education.</p>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl">“Education is the noblest investment in a nation future.”</h3>
              <h4 className="text-burgundy">- Shri Niranjanlal Dalmia</h4>
            </div>
          </div>
        </div>
      </div>
      {
        management_quotes && management_quotes.length > 0 && (
          <div className="w-full px-5 md:px-15 xl:px-20 py-10 flex flex-col gap-5 lg:gap-10">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_quote_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_quote_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} navigation={{prevEl: '.management_quote_slider_prev', nextEl: '.management_quote_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}>
              {
                management_quotes.map((management_quote, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col w-full" key={key}>
                    <div className="flex flex-col gap-2 items-center p-5 text-center">
                      <Image src={`${basePath}images/about-us/management/${management_quote.management_image}`} alt={management_quote.management_name} width={150} height={150} className="w-30" />
                      <h2 className="text-xl font-georgia">{management_quote.management_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-40 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{management_quote.management_quote}</p>
                    </div>
                    <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={management_quote.management_profile}>View Profile <MdArrowOutward size={20} /></Link>
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        )
      }
      {
        managing_council && managing_council.length > 0 && (
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 lg:py-5">
        <Intro introTitle="Voices Of Success" introCaption="Managing Council" introDescription="Our governing council comprises distinguished leaders and dominant experts who provide strategic oversight, ensure academic excellence and uphold the institute’s commitment to ethics and innovation. Their collective experience anchors NLDIMSR’s mission of shaping future ready professionals." />
          <div className="w-full py-10 flex flex-col gap-5">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer managing_council_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer managing_council_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.managing_council_slider_prev', nextEl: '.managing_council_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                managing_council.map((managing_council_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      <Image src={`${basePath}images/about-us/management/${managing_council_row.managing_council_image}`} alt={managing_council_row.managing_council_name} width={150} height={150} className="w-30" />
                      <h2 className="text-xl font-georgia lg:h-10">{managing_council_row.managing_council_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(managing_council_row.managing_council_designation))}</p>
                    </div>
                    <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={managing_council_row.managing_council_profile}>View Profile <MdArrowOutward size={20} /></Link>
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      {
        governing_council && governing_council.length > 0 && (
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 lg:py-5">
        <Intro introTitle="Voices Of Success" introCaption="Governing Council" introDescription="The Academic Advisory Council brings together accomplished scholars and industry practitioners who guide our pedagogy, curriculum design and future academic roadmap. Their insights ensure our programs remains rigorous, relevant and globally competitive." />
          <div className="w-full py-10 flex flex-col gap-5">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer governing_council_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer governing_council_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.governing_council_slider_prev', nextEl: '.governing_council_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                governing_council.map((governing_council_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      <Image src={`${basePath}images/about-us/management/${governing_council_row.governing_council_image}`} alt={governing_council_row.governing_council_name} width={150} height={150} className="w-30" />
                      <h2 className="text-xl font-georgia lg:h-10">{governing_council_row.governing_council_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(governing_council_row.governing_council_designation))}</p>
                    </div>
                    <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={governing_council_row.governing_council_profile}>View Profile <MdArrowOutward size={20} /></Link>
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      <div className="w-full h-screen relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-15 relative w-full h-full justify-center items-center">
            <p className="font-georgia leading-normal lg:leading-loose text-center text-2xl lg:text-4xl">Our State Of-The-Art Campus Is Designed To Inspire Learning, Collaboration And Innovation. From Modern Classrooms & High-Tech Labs To Collaborative Workspaces & Vibrant Student Areas, Every Corner Reflects Our Commitment To Excellence.</p>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#800000] cursor-pointer" onClick={() => videoPopupRef.current?.open('loSuQcjtLYA')}>
                <FaPlayCircle />
                <span>Play Video</span>
            </div>
          </div>
      </div>
      {
        international_countries && international_countries.length > 0 && (
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5 lg:py-15">
        <Intro introTitle="International Tie-Ups" introCaption="Building Global Bridges" introDescription="NLDIMSR’S global collaborations with reputed universities and institutions enable student exchanges, joint programs and cross border academic enrichment. These alliances broaden perspectives and prepare students for a globally connected business world." />
        <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
          <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
            {
              international_countries.map((country_name, key) => (
                <li className={`group cursor-pointer transition-all duration-300 ${activeCountry === (country_name) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveCountryFunc(country_name)}>
                  <span className="relative">
                    {country_name}
                    <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
                  </span>
                </li>
              ))
            }
          </ul>
          <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={InternationalTieUpContent}>
            {
                international_countries.map((country_name, key) => (
                <div className={`w-full ${activeCountry === country_name ? '' : 'hidden'}`} key={key}>
                  {
                    international_universities_data[country_name].map((international_university, university_key) => (
                      <div className={`w-full py-5 ${international_universities_data[country_name].length !== (university_key + 1) ? 'border-b' : '' } border-[#800000] `} key={university_key}>
                        <div className="flex flex-col gap-3 lg:px-10">
                          <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleUniversityAccordian(university_key)}>
                            <div className="flex gap-5 justify-center items-center">
                              <Image src={`${basePath}images/about-us/university/${international_university.international_university_logo}`} alt={international_university.international_university_name} width={100} height={100} className={`transition-all duration-300 ${openUniversity === university_key ? "" : "hidden"}`} />
                              <h2 className="font-georgia text-xl">{international_university.international_university_name}</h2>
                            </div>
                            <IoIosArrowDown size={20} className={`transition-all duration-300 ${openUniversity === university_key ? "rotate-180" : ''}`} />
                          </div>
                          <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openUniversity === university_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                            <p className="leading-loose">{parser(nl2br(international_university.international_university_caption))}</p>
                            <div className="text-[#4E4E4E] university_description">
                              {parser(international_university.international_university_description)}
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
      
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}