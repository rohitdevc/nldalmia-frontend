"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Multiselect from 'multiselect-react-dropdown';
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import { MdArrowOutward } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

export default function HomeComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const careetPaths = [
    {
      id: 1,
      name: 'Finance'
    },
    {
      id: 2,
      name: 'Marketing'
    },
    {
      id: 3,
      name: 'Human Resources'
    },
    {
      id: 4,
      name: 'Digital Markerting'
    }
  ]

  const program_categories = [
    {
      id: 1,
      program_category_name: 'Full Time Programs'
    },
    {
      id: 2,
      program_category_name: 'Online Learning'
    },
    {
      id: 3,
      program_category_name: 'Open Distance Learning'
    },
    {
      id: 4,
      program_category_name: 'Ph.D Programs'
    },
    {
      id: 5,
      program_category_name: 'Executive PGDM'
    },
    {
      id: 6,
      program_category_name: 'Global MBA'
    },
    {
      id: 7,
      program_category_name: 'Bloomberg Research Analyst'
    }
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
    }
  ]

  const event_categories = [
    {
      id: 1,
      event_category_name: 'Cultural Committee'
    },
    {
      id: 2,
      event_category_name: 'Finance Forums'
    },
    {
      id: 3,
      event_category_name: 'Industry Conclaves'
    },
    {
      id: 4,
      event_category_name: 'Marketing'
    }
  ]

  type Event = {
    id: number;
    event_name: string;
    event_description: string;
    event_date: Date;
    event_link: string;
    event_thumbnail: string;
  }

  const events = [
    {
      id: 1,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 2,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
    {
      id: 3,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 4,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
    {
      id: 5,
      event_name: 'Akarshan 2022',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2022-06-09'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 6,
      event_name: 'Howzzat',
      event_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      event_date: new Date('2024-02-24'),
      event_link: 'https://www.nldalmia.in/',
      event_thumbnail: 'howzzat.png'
    },
  ]

  const chunkedEvents: Event[][] = [];
  for (let i = 0; i < events.length; i += 4) {
    chunkedEvents.push(events.slice(i, i + 4));
  }

  const awards = [
    {
      id: 1,
      award_name: 'INS Hamla',
      award_year: '2023',
      award_thumbnail: 'ins-hamla.png'
    },
    {
      id: 2,
      award_name: 'Best Green Campus',
      award_year: '2021',
      award_thumbnail: 'best-green-campus.png'
    },
    {
      id: 3,
      award_name: 'Education Today',
      award_year: '2024',
      award_thumbnail: 'education-today.png'
    },
    {
      id: 4,
      award_name: 'Best Education Brands',
      award_year: '2019',
      award_thumbnail: 'best-education-brands.png'
    },
    {
      id: 5,
      award_name: 'INS Hamla',
      award_year: '2023',
      award_thumbnail: 'ins-hamla.png'
    }
  ]

  const eventsList = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      id: 1,
      achievement_name: 'NLDIMSR\'s Annual Management Summit: Bridging Academia and Industry.',
      achievement_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      achievement_date: new Date('2022-06-09'),
      achievement_link: 'https://www.nldalmia.in/',
      achievement_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 2,
      achievement_name: 'NLDIMSR\'s Annual Management Summit: Bridging Academia and Industry.',
      achievement_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      achievement_date: new Date('2024-02-24'),
      achievement_link: 'https://www.nldalmia.in/',
      achievement_thumbnail: 'howzzat.png'
    },
    {
      id: 3,
      achievement_name: 'NLDIMSR\'s Annual Management Summit: Bridging Academia and Industry.',
      achievement_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      achievement_date: new Date('2022-06-09'),
      achievement_link: 'https://www.nldalmia.in/',
      achievement_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 4,
      achievement_name: 'NLDIMSR\'s Annual Management Summit: Bridging Academia and Industry.',
      achievement_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      achievement_date: new Date('2024-02-24'),
      achievement_link: 'https://www.nldalmia.in/',
      achievement_thumbnail: 'howzzat.png'
    },
    {
      id: 5,
      achievement_name: 'NLDIMSR\'s Annual Management Summit: Bridging Academia and Industry.',
      achievement_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      achievement_date: new Date('2022-06-09'),
      achievement_link: 'https://www.nldalmia.in/',
      achievement_thumbnail: 'akarshan-2022.png'
    },
    {
      id: 6,
      achievement_name: 'NLDIMSR\'s Annual Management Summit: Bridging Academia and Industry.',
      achievement_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      achievement_date: new Date('2024-02-24'),
      achievement_link: 'https://www.nldalmia.in/',
      achievement_thumbnail: 'howzzat.png'
    },
  ]

  const blogs = [
    {
      id: 1,
      blog_title: 'Leadership In The Digital Age: Insights From N. L. Dalmia’s Curriculum',
      blog_date: new Date('2024-02-10'),
      blog_preview: 'Understanding Leadership in the Digital Age The digital revolution has completely transformed the way businesses operate,',
      blog_author: 'Prof. Radhika Iyer',
      blog_link: 'https://www.nldalmia.in/',
      blog_thumbnail: 'blog-thumbnail.png'
    },
    {
      id: 2,
      blog_title: 'Leadership In The Digital Age: Insights From N. L. Dalmia’s Curriculum',
      blog_date: new Date('2024-02-10'),
      blog_preview: 'Understanding Leadership in the Digital Age The digital revolution has completely transformed the way businesses operate,',
      blog_author: 'Prof. Radhika Iyer',
      blog_link: 'https://www.nldalmia.in/',
      blog_thumbnail: 'blog-thumbnail.png'
    },
    {
      id: 3,
      blog_title: 'Leadership In The Digital Age: Insights From N. L. Dalmia’s Curriculum',
      blog_date: new Date('2024-02-10'),
      blog_preview: 'Understanding Leadership in the Digital Age The digital revolution has completely transformed the way businesses operate,',
      blog_author: 'Prof. Radhika Iyer',
      blog_link: 'https://www.nldalmia.in/',
      blog_thumbnail: 'blog-thumbnail.png'
    },
    {
      id: 4,
      blog_title: 'Leadership In The Digital Age: Insights From N. L. Dalmia’s Curriculum',
      blog_date: new Date('2024-02-10'),
      blog_preview: 'Understanding Leadership in the Digital Age The digital revolution has completely transformed the way businesses operate,',
      blog_author: 'Prof. Radhika Iyer',
      blog_link: 'https://www.nldalmia.in/',
      blog_thumbnail: 'blog-thumbnail.png'
    },
    {
      id: 5,
      blog_title: 'Leadership In The Digital Age: Insights From N. L. Dalmia’s Curriculum',
      blog_date: new Date('2024-02-10'),
      blog_preview: 'Understanding Leadership in the Digital Age The digital revolution has completely transformed the way businesses operate,',
      blog_author: 'Prof. Radhika Iyer',
      blog_link: 'https://www.nldalmia.in/',
      blog_thumbnail: 'blog-thumbnail.png'
    },
    {
      id: 6,
      blog_title: 'Leadership In The Digital Age: Insights From N. L. Dalmia’s Curriculum',
      blog_date: new Date('2024-02-10'),
      blog_preview: 'Understanding Leadership in the Digital Age The digital revolution has completely transformed the way businesses operate,',
      blog_author: 'Prof. Radhika Iyer',
      blog_link: 'https://www.nldalmia.in/',
      blog_thumbnail: 'blog-thumbnail.png'
    }
  ]

  const instagram_feed = [
    {
      id: 1,
      instagram_feed_thumbnail: 'ig-thumbnail.png',
      instagram_feed_caption: 'Congratulations',
      instagram_feed_type: 'IMAGE',
      instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
    },
    {
      id: 2,
      instagram_feed_thumbnail: 'ig-thumbnail.png',
      instagram_feed_caption: 'Congratulations',
      instagram_feed_type: 'IMAGE',
      instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
    },
    {
      id: 3,
      instagram_feed_thumbnail: 'ig-thumbnail.png',
      instagram_feed_caption: 'Congratulations',
      instagram_feed_type: 'IMAGE',
      instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
    },
    {
      id: 4,
      instagram_feed_thumbnail: 'ig-thumbnail.png',
      instagram_feed_caption: 'Congratulations',
      instagram_feed_type: 'IMAGE',
      instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
    },
    {
      id: 5,
      instagram_feed_thumbnail: 'ig-thumbnail.png',
      instagram_feed_caption: 'Congratulations',
      instagram_feed_type: 'IMAGE',
      instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/',
      instagram_feed_video: ''
    }
  ]

  const instagram_allowed_types = ['IMAGE', 'VIDEO'];

  const [activeEventCategory, updateActiveEventCategory] = useState(1);
  const [activeEvent, updateActiveEvent] = useState(0);

  const updateActiveEventCategoryFunc = (event_category_id: number): void => {
    updateActiveEventCategory(event_category_id);
    updateActiveEvent(0);

    if(eventsList.current) {
      const offset = 200;
      const elementTop = eventsList.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const handleEventClick = (event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveEvent(event_id);
      }
    }
  }

  const [activeAchievement, updateActiveAchievement] = useState(0);

  const handleAchievementClick = (achievement_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveAchievement(achievement_id);
      }
    }
  }

  const [activeBlog, updateActiveBlog] = useState(0);

  const handleBlogClick = (blog_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveBlog(blog_id);
      }
    }
  }

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const programsList = useRef<HTMLDivElement>(null);

  const [activeProgramCategory, updateActiveProgramCategory] = useState(1);

  const updateActiveProgramCategoryFunc = (program_category_id: number): void => {
    updateActiveProgramCategory(program_category_id);
    updateActiveProgram(0);

    if(programsList.current) {
      const offset = 200;
      const elementTop = programsList.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const [activeProgram, updateActiveProgram] = useState(0);

  const handleProgramClick = (program_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveProgram(program_id);
      }
    }
  }

  const [activeTestimonial, updateActiveTestimonial] = useState(0);

  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="25+ Years Of Pioneering Management Education"
      banner_description="We blend rich tradition with cutting edge education to cultivate tomorrow's leaders. We stand as a beacon of quality education, producing globally competent professionals committed to making a difference."
      banner_vimeo_video_id="1159526203" />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="For Over Three Decades" introCaption="Nldimsr has been at the froefront of <br /> management education, consistently ranked <br /> among the top business schools in the country" />
        <div className="flex flex-col md:flex-row gap-10 md:mt-10 lg:mt-20">
          <div className="w-full md:w-[40%] overflow-hidden">
            <Image src={`${basePath}images/home/intro-img.png`} width={800} height={750} alt="NL Dalmia Intro" className="object-cover" />
          </div>
          <div className="w-full md:w-[60%] flex flex-col gap-5">
            <p className="text-[#4E4E4E] text-sm leading-loose">With state-of-the-art infrastructure, a distinguished faculty, and industry- centric programs, we empower students to excel in an ever - changing global landscape. Our mission is to nuture thoughts leaders, innovators, and socially responsible professionals who shape the future with purpose and integrity.</p>
            <ul className="flex flex-wrap md:flex-row justify-between text-sm text-burgundy">
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href="" className="flex gap-1 items-center">About Us <MdArrowOutward size={15} /></Link>
              </li>
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href="" className="flex gap-1 items-center">Leadership <MdArrowOutward size={15} /></Link>
              </li>
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href="" className="flex gap-1 items-center">International Tie-Ups <MdArrowOutward size={15} /></Link>
              </li>
              <li className="w-1/2 lg:w-40 mt-2">
                <Link href="" className="flex gap-1 items-center">Program Outcomes <MdArrowOutward size={15} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`w-full lg:h-100 relative bg-cover bg-center bg-no-repeat text-white`} style={{backgroundImage: `url(${basePath}images/home/career-path.png)`}}>
        <div className="absolute top-0 inset-0 bg-black/30 z-0"></div>
        <form className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10 relative">
          <h2 className="text-xl md:text-2xl">Discover Your Perfect Course Fit By Aligning It With Your Career Expectations</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <h3 className="text-2xl md:text-3xl font-georgia">I'm Looking To Pursue A Career In</h3>
            <Multiselect className="career-paths text-sm text-burgundy" selectedValues={{}} options={careetPaths} displayValue="name" placeholder="Select your Career Paths" showCheckbox={true} />
          </div>
          <div className="flex gap-5">
            <input type="submit" value="Search Careers" className="bg-[#800000] py-2 w-35 text-sm cursor-pointer" />
            <input type="button" value="Clear All" className="underline cursor-pointer" />
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Our Academic Programs" introCaption="Empowering 10,000+ Leaders. Your Gateway To <br /> Excellence In Management Education" introDescription="We offer a comprehensive suite of programs designed to meet evolving demands" />
          <div className="flex flex-col lg:flex-row gap-5 md:justify-between">
            <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-100 gap-5 text-burgundy">
              {
                program_categories && program_categories.length > 0 && program_categories.map((program_category, key) => (
                  <li className={`cursor-pointer transition-all duration-300 ${activeProgramCategory === program_category.id ? 'text-xl font-medium' : ''}`} key={key} onClick={() => updateActiveProgramCategoryFunc(program_category.id)}>
                    <span className="relative">
                      {program_category.program_category_name}
                      <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 ${activeProgramCategory === program_category.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
                    </span>
                  </li>
                ))
              }
            </ul>
            {
                program_categories && program_categories.length > 0 && program_categories.map((program_category) => activeProgramCategory === program_category.id && (
                <div className={`max-w-full lg:max-w-5xl flex flex-wrap justify-center gap-5 text-white transition-opacity`} key={program_category.id} ref={programsList}>

                  <div className="group w-xs h-75 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/pgdm-in-ba.png)`}} onClick={handleProgramClick(1)}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-[#800000] text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-2xl font-georgia">PGDM in Business Analytics</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeProgram === 1 ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-white text-burgundy text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="px-5 flex flex-col gap-2 h-full">
                        <h2 className="text-2xl font-georgia min-h-15">PGDM in Business Analytics</h2>
                        <p className="leading-relaxed text-sm">
                          Best Suited For: Management Aspirants <br />
                          Duration: 2 Year Course <br /><br />
                          Holistic Development <br />
                          Real World Experience <br />
                          Industry Networking Opportunities
                        </p>
                        <ul className="flex mt-auto pb-5 gap-10 text-sm">
                          <li><Link href="" className="underline">Learn More</Link></li>
                          <li><Link href="" className="underline" target="_blank">Apply Now</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="group w-xs h-75 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/pgdm-in-finance.png)`}} onClick={handleProgramClick(2)}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-[#800000] text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-2xl font-georgia">PGDM in Finance</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeProgram === 2 ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-white text-burgundy text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="px-5 flex flex-col gap-2 h-full">
                        <h2 className="text-2xl font-georgia min-h-15">PGDM in Finance</h2>
                        <p className="leading-relaxed text-sm">
                          Best Suited For: Management Aspirants <br />
                          Duration: 2 Year Course <br /><br />
                          Holistic Development <br />
                          Real World Experience <br />
                          Industry Networking Opportunities
                        </p>
                        <ul className="flex mt-auto pb-5 gap-10 text-sm">
                          <li><Link href="" className="underline">Learn More</Link></li>
                          <li><Link href="" className="underline" target="_blank">Apply Now</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="group w-xs h-75 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/pgdm-in-ba.png)`}} onClick={handleProgramClick(3)}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-[#800000] text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-2xl font-georgia">PGDM in Business Analytics</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeProgram === 3 ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-white text-burgundy text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="px-5 flex flex-col gap-2 h-full">
                        <h2 className="text-2xl font-georgia min-h-15">PGDM in Business Analytics</h2>
                        <p className="leading-relaxed text-sm">
                          Best Suited For: Management Aspirants <br />
                          Duration: 2 Year Course <br /><br />
                          Holistic Development <br />
                          Real World Experience <br />
                          Industry Networking Opportunities
                        </p>
                        <ul className="flex mt-auto pb-5 gap-10 text-sm">
                          <li><Link href="" className="underline">Learn More</Link></li>
                          <li><Link href="" className="underline" target="_blank">Apply Now</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="group w-xs h-75 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/pgdm-in-ba.png)`}} onClick={handleProgramClick(4)}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-[#800000] text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-2xl font-georgia">PGDM in Business Analytics</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeProgram === 4 ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-white text-burgundy text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="px-5 flex flex-col gap-2 h-full">
                        <h2 className="text-2xl font-georgia min-h-15">PGDM in Business Analytics</h2>
                        <p className="leading-relaxed text-sm">
                          Best Suited For: Management Aspirants <br />
                          Duration: 2 Year Course <br /><br />
                          Holistic Development <br />
                          Real World Experience <br />
                          Industry Networking Opportunities
                        </p>
                        <ul className="flex mt-auto pb-5 gap-10 text-sm">
                          <li><Link href="" className="underline">Learn More</Link></li>
                          <li><Link href="" className="underline" target="_blank">Apply Now</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="group w-xs h-75 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/pgdm-in-ba.png)`}} onClick={handleProgramClick(5)}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-[#800000] text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-2xl font-georgia">PGDM in Business Analytics</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeProgram === 5 ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-2 mr-2">
                        <span className="bg-white text-burgundy text-xs px-3 py-2">{program_category.program_category_name}</span>
                      </div>
                      <div className="px-5 flex flex-col gap-2 h-full">
                        <h2 className="text-2xl font-georgia min-h-15">PGDM in Business Analytics</h2>
                        <p className="leading-relaxed text-sm">
                          Best Suited For: Management Aspirants <br />
                          Duration: 2 Year Course <br /><br />
                          Holistic Development <br />
                          Real World Experience <br />
                          Industry Networking Opportunities
                        </p>
                        <ul className="flex mt-auto pb-5 gap-10 text-sm">
                          <li><Link href="" className="underline">Learn More</Link></li>
                          <li><Link href="" className="underline" target="_blank">Apply Now</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>
              ))
              }
          </div>
      </div>
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
          partners && partners.length > 0 && (
            <div className="w-full px-5 lg:px-30 py-5 lg:py-20 flex flex-col gap-5">
              <CenterIntro introTitle="24.46 Lpa Highest Placement Package From Pgdm Program 2023" introCaption="Our Placement Partners Include Some Of The World's Most Prestigious Organizations Across Diverse Sectors Like Finance, Marketing, Consulting, It & More." />
              <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer partner_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer partner_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
              
              <Swiper className="w-full" slidesPerView={2} spaceBetween={50} loop={true} modules={[Navigation]} navigation={{prevEl: '.partner_slider_prev', nextEl: '.partner_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 75 }, 1024: { slidesPerView: 5, spaceBetween: 70 } }} >
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
        testimonials && testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Voices Of Success" introCaption="Join The Legacy Of Excellence & Let Your Success <br /> Story Begin Here." introDescription="Hear from our alumni and current students as they share their journey of transformation, Learning and success." />
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
                      <span className="text-sm md:text-md">{testimonial.testimonial_designation}</span>
                      <span className="text-sm md:text-md">{testimonial.testimonial_company_name}</span>
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
                          <span className="text-sm md:text-md">{testimonial.testimonial_designation}</span>
                          <span className="text-sm md:text-md">{testimonial.testimonial_company_name}</span>
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
        event_categories && event_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Go Beyond The Classroom" introCaption="We Believe That Learning Extends Beyond <br />Academics." introDescription="From national-level management fests and industry conclaves to cultural celebrations and CSR initiatives, every event is designed to inspire, engage and empower. These experiences enable our students build networks, showcase talent and gain insights from industry leaders." />
          <div className="flex flex-col lg:flex-row gap-5 md:justify-between">
              <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start lg:w-100 gap-5 text-burgundy">
                {
                  event_categories.map((event_category, key) => (
                    <li className={`cursor-pointer transition-all duration-300 ${activeEventCategory === event_category.id ? 'text-xl font-medium' : ''}`} key={key} onClick={() => updateActiveEventCategoryFunc(event_category.id)}>
                      <span className="relative">
                        {event_category.event_category_name}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 ${activeEventCategory === event_category.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              {
                  event_categories && event_categories.length > 0 && event_categories.map((event_category) => activeEventCategory === event_category.id && (
                  <>
                  {
                    chunkedEvents && chunkedEvents.length > 0 && (
                    <div className="w-full lg:w-[75%] flex flex-col gap-5" ref={eventsList}>
                      <div className="flex gap-3">
                        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer event_slider_prev">
                          <BsArrowLeftShort size={20} />
                        </span>
                        <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer event_slider_next">
                          <BsArrowRightShort size={20} />
                        </span>
                      </div>
                      <Swiper slidesPerView={1} spaceBetween={10} modules={[Navigation]} navigation={{prevEl: '.event_slider_prev', nextEl: '.event_slider_next'}} className={`max-w-full text-white transition-opacity`} key={event_category.id}>
                        {
                          chunkedEvents.map((groupEvents, slideIndex) => (
                            <SwiperSlide key={slideIndex}>
                              <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-5 md:gap-10 h-full">
                                {
                                  groupEvents && groupEvents.length > 0 && groupEvents.map((event, key) => (
                                    <div className="group w-full h-50 md:!h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/events/${event.event_thumbnail})`}} onClick={handleEventClick(event.id)} key={key} title={event.event_name}>
                                      <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                                      
                                      <div className="relative h-full w-full flex flex-col">
                                        <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                                          <span className="bg-[#800000] text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(event.event_date).format('MMMM YYYY')}</span>
                                        </div>
                                        <div className="mt-auto px-2 lg:px-5 pb-2 lg:pb-10">
                                          <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                                        </div>
                                      </div>

                                      <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeEvent === event.id ? "scale-y-100" : "scale-y-0"}`}>
                                        <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                                          <span className="bg-white text-burgundy text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(event.event_date).format('MMMM YYYY')}</span>
                                        </div>
                                        <div className="px-2 lg:px-5 pb-2 lg:pb-5 flex flex-col gap-2 h-full">
                                          <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                                          <div className="w-full h-[105px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">
                                            <p className="lg:leading-relaxed text-sm">{parser(nl2br(event.event_description))}</p>
                                          </div>
                                          <ul className="flex mt-auto text-xs lg:text-sm">
                                            <li><Link href={event.event_link} className="underline">Learn More</Link></li>
                                          </ul>
                                        </div>
                                      </div>

                                    </div>
                                  ))
                                }
                              </div>
                            </SwiperSlide>
                          ))
                        }
                      </Swiper>
                    </div>
                    )
                  }
                  </>
                ))
                }
            </div>
        </div>
      )
      }
      {
        awards && awards.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-5 lg:py-20 flex flex-col gap-5">
            <CenterIntro introTitle="Celebrating Brilliance. Honoring Achievement." introCaption="Where Ambition Meets Recognition. <br /> And The Impact Is Undeniable." introDescription="Awards at NLDIMSR are more than just accolades-they are testament to passion, innovation and exceptional performance. Each recognition is a reflection of our students relentless of excellence and their ability to drive change." />
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer award_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer award_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full" slidesPerView={2} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.award_slider_prev', nextEl: '.award_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 75 }, 1024: { slidesPerView: 5, spaceBetween: 70 } }} >
              {
                awards.map((award, key) => (
                  <SwiperSlide className="!w-35 sm:!w-50" title={award.award_name} key={key}>
                    <Image src={`${basePath}images/home/awards/${award.award_thumbnail}`} alt={award.award_name} width={300} height={300} className="object-cover w-full" />
                    <div className="flex flex-col gap-1 justify-center items-center text-center mt-5">
                      <h2 className="font-georgia text-sm lg:text-lg">{award.award_name}</h2>
                      <h3 className="text-[#4E4E4E] text-sm lg:text-lg">{award.award_year}</h3>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
      )}
      {
        achievements && achievements.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Where Insights Meets Innovation" introCaption="Students Achievements" introDescription="Stay informed and inspired with NLDIMSR's latest news, media features and thought leadership. From industry trends and academic achievements to our perspective on sharing the future of business education, this section brings you the stories that matters." />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.achievement_slider_prev', nextEl: '.achievement_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 50 }, 1280: { slidesPerView: 3, spaceBetween: 50 } }}>
          {
            achievements.map((achievement, key) => (
              <SwiperSlide key={key}>
                  <div className="group w-full !h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/events/${achievement.achievement_thumbnail})`}} onClick={handleAchievementClick(achievement.id)} key={key} title={achievement.achievement_name}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-[#800000] text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(achievement.achievement_date).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="mt-auto px-5 lg:px-5 pb-5 lg:pb-10">
                        <h2 className="text-sm lg:text-2xl font-georgia">{achievement.achievement_name}</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeAchievement === achievement.id ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-white text-burgundy text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(achievement.achievement_date).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="px-5 pb-5 lg:pb-10 mt-1 flex flex-col gap-2 h-full">
                        <h2 className="text-sm lg:text-2xl font-georgia">{achievement.achievement_name}</h2>
                        <p className="lg:leading-relaxed text-sm">{parser(nl2br(achievement.achievement_description))}</p>
                        {
                          achievement.achievement_link && (
                            <ul className="flex mt-auto text-sm">
                              <li><Link href={achievement.achievement_link} className="underline">Learn More</Link></li>
                            </ul>
                          )
                        }
                      </div>
                    </div>

                  </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
      )
      }
      {
        blogs && blogs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Media And Newsroom" introCaption="News About NLDIMSR" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam." />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer blog_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer blog_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.blog_slider_prev', nextEl: '.blog_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 50 }, 1280: { slidesPerView: 3, spaceBetween: 35 } }}>
          {
            blogs.map((blog, key) => (
              <SwiperSlide key={key}>
                  <div className="group w-full h-75 xl:!h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${basePath}images/home/blog/${blog.blog_thumbnail})`}} onClick={handleBlogClick(blog.id)} key={key} title={blog.blog_title}>
                    <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                    
                    <div className="relative h-full w-full flex flex-col">
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-[#800000] text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(blog.blog_date).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="mt-auto px-5 pb-10">
                        <h2 className="text-sm lg:text-2xl font-georgia">{blog.blog_title}</h2>
                      </div>
                    </div>

                    <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeBlog === blog.id ? "scale-y-100" : "scale-y-0"}`}>
                      <div className="flex justify-end mt-4 mr-4">
                        <span className="bg-white text-burgundy text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(blog.blog_date).format('Do MMM, YYYY')}</span>
                      </div>
                      <div className="px-5 pb-5 flex flex-col gap-2 h-full mt-1">
                        <h2 className="text-sm lg:text-2xl font-georgia">{blog.blog_title}</h2>
                        <div className="flex flex-col lg:flex-row flex-wrap gap-1 lg:gap-5 text-sm">
                          <span>{dayjs.utc(blog.blog_date).format('MMMM D, YYYY')}</span>
                          {
                            blog.blog_author && (
                              <>
                              <span className="hidden lg:block">|</span>
                              <span>Author: {blog.blog_author}</span>
                              </>
                            )
                          }
                        </div>
                        <p className="lg:leading-loose text-sm mt-auto flex">{parser(nl2br(blog.blog_preview))}</p>
                        <ul className="flex mt-auto text-sm">
                          <li><Link href={blog.blog_link} className="underline">Learn More</Link></li>
                        </ul>
                      </div>
                    </div>

                  </div>
              </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
      )
      }
      {
        instagram_feed && instagram_feed.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Inspiring Moments, Captured In Every Frame." introCaption="Because Every Post Tells A Story <br/> Worth Sharing." />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer instagram_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer instagram_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.instagram_slider_prev', nextEl: '.instagram_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 },768: { slidesPerView: 3, spaceBetween: 15 }, 1024: { slidesPerView: 3, spaceBetween: 50 }, 1280: { slidesPerView: 4, spaceBetween: 70 } }}>
          {
            instagram_feed.map((instagram, key) => (
              instagram_allowed_types.includes(instagram.instagram_feed_type) && (
                <SwiperSlide key={key}>
                  <div className="group w-full" key={key} title={instagram.instagram_feed_caption}>
                    <Link href={instagram.instagram_feed_link} target="_blank">
                    {
                      instagram.instagram_feed_type === 'IMAGE' && (
                        <Image src={`${basePath}images/home/${instagram.instagram_feed_thumbnail}`} alt={instagram.instagram_feed_caption} width={300} height={300} className="object-cover" />
                      )
                    }
                    {
                    instagram.instagram_feed_type === 'VIDEO' && (
                        <video src={`${basePath}videos/home/${instagram.instagram_feed_video}`} className="object-cover w-full h-full" muted loop playsInline autoPlay />
                      )
                    }
                    </Link>
                  </div>
              </SwiperSlide>
              )
            ))
          }
          </Swiper>
        </div>
      )
      }
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}