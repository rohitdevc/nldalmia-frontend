"use client"

import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";


import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import Intro from "@/app/components/Intro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/app/components/YouTubeVideo";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProgramBlock from "../ProgramBlock";



export default function ProgramsListingComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  type Program = {
    id: number;
    program_name: string;
    program_tagline: string;
    program_thumbnail: string;
    program_description: string;
    program_highlights?: string[];
    program_career_paths?: string[];
    program_link: string;
  }

  const programs = [
    {
      id: 1,
      program_name: 'PGDM - Post Graduate Diploma In Management',
      program_tagline: 'Empowering Future Business Leaders',
      program_thumbnail: 'pgdm.png',
      program_description: 'The two-year full-time PGDM program at NLDIMSR is designed to equip students with industry - relevant skills and knowledge. The curriculum integrates best practices to ensure students are prepared for dynamic business environment.',
      program_highlights: [
        'A well-rounded, full time 2-year program fostering leadership, strategic thinking and cross functional expertise.',
        'AICTE approved, NBA accredited and AIU recognised - offerings equivalence to MBA.',
        'Industry-integrated curriculum with live projects, case studies and stimulation-based learning, dual specialization options across marketing, HR, Finance, Operations and Business Analytics.',
        'Extensive corporate exposure through gust lectures, conclaves and summer internships, holistic development with emphasis on communication, ethics and entrepreneurial thinking.'
      ],
      program_career_paths: [
        'Business Consultant',
        'Brand Manager',
        'HR Business Partner',
        'Product Manager',
        'Operation Analyst',
        'Strategy Associate'
      ],
      program_link: 'https://www.nldalmia.in'
    },
    {
      id: 2,
      program_name: 'PGDM - Finance',
      program_tagline: 'Shaping Financial Visionaries',
      program_thumbnail: 'pgdm-finance.png',
      program_description: 'Designed for aspiring finance professionals, this program delivers rigorous training in corporate finance, equity research, investment banking and financial markets with access to tools like the Bloomberg terminal.',
      program_highlights: [
        'Specialised full-time PGDM focused exclusively on finance and capital markets.',
        'Curriculum covers investment banking, risk management, equity research, fintech, portfolio management and more.',
        'Access to Bloomberg lab and financial analytics tools for real-time market insights and stimulations.',
        'Advanced courses in financial modelling, mergers and acquisition and global strategies.',
        'Strong industry connect through finance conclaves, guests sessions from CXOs and alumni mentorship.',
        'Highly regarded by BFSI recruiters for producing job ready finance professionals'
      ],
      program_career_paths: [
        'Investment Banking Analyst',
        'Equity Research Associates',
        'Risk and Compliance Manager',
        'Credit Analyst',
        'Treasury Manager',
        'Wealth Advisor'
      ],
      program_link: 'https://www.nldalmia.in'
    },
    {
      id: 3,
      program_name: 'PGDM in Business Analytics',
      program_tagline: 'Transforming Data into Strategic Decision',
      program_thumbnail: 'pgdm.png',
      program_description: 'Built for data-driven problem solvers, this program combines analytics tools, business acumen and AI/ML concepts to prepare students for high-growth analytical roles in business consulting',
      program_highlights: [
        'Future-centric full time PGDM bridging data science with business strategy.',
        'Hands-on training in python, R, Tableau, Power BI, Excel and SQL across all semesters.',
        'Core modules in data-driven decision making predictive modelling, machine learning and AI for business',
        'Real-world industry projects and capstones in collaboration with analytics firms',
        'Cross-disciplinary focus on marketing analytics, HR analytics, financial analytics and more'
      ],
      program_career_paths: [
        'Business Analyst',
        'Data Analyst',
        'Analytics Consultant',
        'BI Developer',
        'Product Analyst',
        'Strategy & Research Analyst'
      ],
      program_link: 'https://www.nldalmia.in'
    },
  ]

  let firstProgramSet: Program | null = null;
  let secondProgramSet: Program[] = [];
  let thirdProgramSet: Program[] = [];

  if(programs.length > 0) {
    firstProgramSet = programs[0];
  }

  if(programs.length > 1) {
    secondProgramSet = programs.slice(1, 3);
  }

  if(programs.length > 3) {
    thirdProgramSet = programs.slice(3);
  }

  const career_paths: string[] = [];

  programs.forEach((program) => {
    if(program.program_career_paths && Array.isArray(program.program_career_paths) && program.program_career_paths.length > 0) {
      program.program_career_paths.forEach((program_career_path) => {
        if(!career_paths.includes(program_career_path)) {
          career_paths.push(program_career_path);
        }
      })
    }
  })

  const preferred_durations = [
    '2 Years',
    '3 Years',
    '4 Years'
  ]

  const eligibilties = [
    'CAT',
    'XAT',
    'GMAT'
  ]

  const specializations = [
    'Option 1',
    'Option 2',
    'Option 3'
  ]

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Shape Your Future With A <br /> Globally Relevant PGDM"
      banner_description="Explore our full-time AICTE-approved programs designed to build strategic, analytical and leadership <br /> capabilities-equipping your for tomorrow’s dynamic business world." />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro introTitle="About The Program" introCaption="Find The Right Program For Your Ambition" introDescription="Whether you’re passionate about finance, business strategy or data-driven decision-making discover which program align with your career aspirations" />
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        {
          programs && programs.length && (
            <>
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="relative">
                <select className="w-full px-2" title="Career Path">
                  <option value="">Select Your Career Path</option>
                  {
                    career_paths && career_paths.length > 0 && career_paths.map((career_path, key) => (
                      <option value={career_path} key={key}>{career_path}</option>
                    ))
                  }
                </select>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
              <div className="relative">
                <select className="w-full px-2" title="Preferred Duration">
                  <option value="">Select Your Preferred Duration</option>
                  {
                    preferred_durations && preferred_durations.length > 0 && preferred_durations.map((preferred_duration, key) => (
                      <option value={preferred_duration} key={key}>{preferred_duration}</option>
                    ))
                  }
                </select>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
              <div className="relative">
                <select className="w-full px-2" title="Specialization">
                  <option value="">Select Specialization</option>
                  {
                    specializations && specializations.length > 0 && specializations.map((specialization, key) => (
                      <option value={specialization} key={key}>{specialization}</option>
                    ))
                  }
                </select>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
              <div className="relative">
                <select className="w-full px-2" title="Eligibility">
                  <option value="">Eligibility</option>
                  {
                     eligibilties && eligibilties.length > 0 && eligibilties.map((eligibilty, key) => (
                      <option value={eligibilty} key={key}>{eligibilty}</option>
                    ))
                  }
                </select>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
            </form>
            {
              firstProgramSet && (
                <ProgramBlock program={firstProgramSet} index={0} />
              )
            }
            {
              secondProgramSet && secondProgramSet.length > 0 && secondProgramSet.map((program, key) => (
                <ProgramBlock program={program} index={(key + 1)} />
              ))
            }
            {
              thirdProgramSet && thirdProgramSet.length > 0 && thirdProgramSet.map((program, key) => (
                <ProgramBlock program={program} index={(key + 1)} />
              ))
            }
            </>
          )
        }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro introTitle="Scholarship" introCaption="Where Merit Meets Opportunity" />
        <div className="flex flex-col lg:flex-row gap-10 md:mt-10">
            <div className="w-full lg:w-[40%] overflow-hidden relative cursor-pointer">
              <Image src={`${basePath}images/programs/scholarship.png`} width={800} height={750} alt="NL Dalmia Scholarship" className="object-cover" />
            </div>
            <div className="w-full lg:w-[60%] flex flex-col gap-5">
              <p className="text-[#4E4E4E] text-sm leading-loose">At N.L. Dalmia Institute Of Management Studies and Research, we believe academic brilliance and potential should never be limited by financial constraints. Our scholarship programs reward high achivers, encourage inclusivity and enable deserving student to access world class education.
              <br />
              <br />
              The NLDIMSR Scholarship Program is designed to recognise merit, promote diversity and support students from economically or socially disadvantaged backgrounds. With both merit based and inclusivity based scholarships, we aim to build an ecosystem where every deserving candidate has the chance to excel.</p>
              <Link href="" className="bg-[#800000] text-white text-center py-2 w-25">Scholarship</Link>
            </div>
          </div>
      </div>
      
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}