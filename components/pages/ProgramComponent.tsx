"use client"

import Image from "next/image";
import Link from "next/link";

import { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";
import scrollWithOffset from "../scrollWithOffset";

import "swiper/css";
import "swiper/css/navigation";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function ProgramComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);
  
  useEffect(() => {
      const wrappers = document.querySelectorAll(".responsive-table");
      if (!wrappers.length) return;

      wrappers.forEach((wrapper) => {
        const table = wrapper.querySelector("table");
        if (!table) return;
        
        const headers = Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent.trim());
        
        table.querySelectorAll("tbody tr").forEach((tr) => {
          Array.from(tr.children).forEach((td, index) => {
            if (headers[index]) {
              td.setAttribute("data-label", headers[index]);
            }
          });
        });
      })
  }, []);

  const sliderOne = [
    {
      slider_caption: 'Slider',
      slider_image: 'slider.png'
    },
    {
      slider_caption: 'Slider',
      slider_image: 'slider.png'
    },
    {
      slider_caption: 'Slider',
      slider_image: 'slider.png'
    },
    {
      slider_caption: 'Slider',
      slider_image: 'slider.png'
    },
    {
      slider_caption: 'Slider',
      slider_image: 'slider.png'
    }
  ]

  const international_universities = [
    {
      id: 1,
      international_university_name: 'UNIVERSITY OF WISCONSIN-PARKSIDE, USA',
      international_university_country_name: 'USA',
      international_university_logo: 'university-of-wisconsin-parkside-usa-105920102.webp',
      international_university_description: 'Type of Collaboration: Dual degree <br /><br /> Highlight: Earn a globally recognised MBA Degree from EDC Paris alongside your NLDIMSR qualification'
    },
    {
      id: 2,
      international_university_name: 'California State University, San Bernardino',
      international_university_country_name: 'USA',
      international_university_logo: 'california-state-university-san-bernardino-493391455.webp',
      international_university_description: 'Type of Collaboration: Academic Exchange + Immersion<br /><br /> Highlight: Participate in international faculty sessions and cultural exchange programs in Southeast Asia'
    },
    {
      id: 3,
      international_university_name: 'University of Winnipeg, Canada',
      international_university_country_name: 'Canada',
      international_university_logo: 'university-of-winnipeg-canada-795010290.webp',
      international_university_description: 'Type of Collaboration: Dual degree <br /><br /> Highlight: Earn a globally recognised MBA Degree from EDC Paris alongside your NLDIMSR qualification'
    },
    {
      id: 4,
      international_university_name: 'University of Westminster, UK',
      international_university_country_name: 'United Kingdom',
      international_university_logo: 'university-of-winnipeg-canada-795010290.webp',
      international_university_description: 'Type of Collaboration: Academic Exchange + Immersion<br /><br /> Highlight: Participate in international faculty sessions and cultural exchange programs in Southeast Asia'
    },
    {
      id: 5,
      international_university_name: 'Tongmyong University, South Korea',
      international_university_country_name: 'South Korea',
      international_university_logo: 'tongmyong-university-south-korea-631307373.webp',
      international_university_description: 'Type of Collaboration: Dual degree <br /><br /> Highlight: Earn a globally recognised MBA Degree from EDC Paris alongside your NLDIMSR qualification'
    },
    {
      id: 6,
      international_university_name: 'Northern University, Bangladesh',
      international_university_country_name: 'Bangladesh',
      international_university_logo: 'northern-university-bangladesh-434910236.webp',
      international_university_description: 'Type of Collaboration: Academic Exchange + Immersion<br /><br /> Highlight: Participate in international faculty sessions and cultural exchange programs in Southeast Asia'
    }
  ]
  
  const program_outcomes = [
    {
      program_outcome_caption: 'Develop A Global Mindset',
      program_outcome_description: 'Gain the ability to understand, adapt and lead in diverse cultural and business environments through exposure to international curriculum and faculty.'
    },
    {
      program_outcome_caption: 'Build Critical Thinking And Analytical Skills',
      program_outcome_description: 'Enhance your decision-making abilities using data, logic and structured problem-solving methodologies essential for business strategy.'
    },
    {
      program_outcome_caption: 'Home Leadership & Team Building',
      program_outcome_description: 'Learn to manage and motivate cross-functional teams with strong interpersonal, communication and conflicts-resolution skills.'
    },
    {
      program_outcome_caption: 'Develop A Global Mindset',
      program_outcome_description: 'Gain the ability to understand, adapt and lead in diverse cultural and business environments through exposure to international curriculum and faculty.'
    },
  ]

  const admission_categories = [
    {
      id: 1,
      admission_category_title: 'Eligibility',
    },
    {
      id: 2,
      admission_category_title: 'Admission Process'
    }
  ]

  const admission_process = [
    {
      id: 1,
      admission_category_title: 'Eligibility',
      admission_process_title: 'Eligibility',
      admission_description: 'A Bachelor’s Degree in any discipline from a recognised university with minimum 50% aggregate marks (45% for reserved categories)<br /><br />Candidates appearing for their final year exams may also apply<br /><br />Valid score in any one of the accepted entrance exams: CAT, XAT, GMAT, CMAT, MH-CET'
    },
    {
      id: 2,
      admission_category_title: 'Eligibility',
      admission_process_title: 'Admission Process',
      admission_description: 'A Bachelor’s Degree in any discipline from a recognised university with minimum 50% aggregate marks (45% for reserved categories)<br /><br />Candidates appearing for their final year exams may also apply<br /><br />Valid score in any one of the accepted entrance exams: CAT, XAT, GMAT, CMAT, MH-CET'
    },
    {
      id: 3,
      admission_category_title: 'Admission Process',
      admission_process_title: 'Admission Process',
      admission_description: 'A Bachelor’s Degree in any discipline from a recognised university with minimum 50% aggregate marks (45% for reserved categories)<br /><br />Candidates appearing for their final year exams may also apply<br /><br />Valid score in any one of the accepted entrance exams: CAT, XAT, GMAT, CMAT, MH-CET'
    },
  ]

  type AdmissionProcess = {
    id: number,
    admission_category_title: string,
    admission_process_title: string,
    admission_description: string
  }

  const admission_process_data: Record<string, AdmissionProcess[]> = {};

  admission_process.forEach((international_university) => {
    if (!admission_process_data[international_university.admission_category_title]) {
      admission_process_data[international_university.admission_category_title] = [];
    }

    admission_process_data[international_university.admission_category_title].push(international_university);
  })

  const [activeAdmissionCategory, updateActiveAdmissionCategory] = useState(admission_categories.length > 0 ? admission_categories[0].admission_category_title : '');
  const [openAdmissionProcess, toggleAdmissionProcessAccordian] = useState(0);

  const ApplicationProcess = useRef<HTMLDivElement | null>(null);

  const updateActiveAdmissionCategoryFunc = (admission_category_title: string): void => {
    updateActiveAdmissionCategory(admission_category_title);
    toggleAdmissionProcessAccordian(0);
    scrollWithOffset(ApplicationProcess);
  }

  const testimonials = [
    {
      testimonial_name: 'Mrs. Ritika Sood',
      testimonial_thumbnail: 'seema-saini.png',
      testimonial_content: '“NLDIMSR gave me the confidence to navigate boardrooms across the globe”',
      testimonial_designation: 'Vice President - Investment Banking, JPMorgan Chase, Mumbai',
      testimonial_about: 'With a background in engineering, Ritika joined the PGDM Finance program to pivot into investment banking. The rigorous curriculum, supportive faculty and real world case simulations helped her build both technical and soft skills-eventually landing a coveted role at JPMorgan. She now leads key M&A mandates in the APAC region'
    },
    {
      testimonial_name: 'Mrs. Ritika Sood',
      testimonial_thumbnail: 'seema-saini.png',
      testimonial_content: '“NLDIMSR gave me the confidence to navigate boardrooms across the globe”',
      testimonial_designation: 'Vice President - Investment Banking, JPMorgan Chase, Mumbai',
      testimonial_about: 'With a background in engineering, Ritika joined the PGDM Finance program to pivot into investment banking. The rigorous curriculum, supportive faculty and real world case simulations helped her build both technical and soft skills-eventually landing a coveted role at JPMorgan. She now leads key M&A mandates in the APAC region'
    },
    {
      testimonial_name: 'Mrs. Ritika Sood',
      testimonial_thumbnail: 'seema-saini.png',
      testimonial_content: '“NLDIMSR gave me the confidence to navigate boardrooms across the globe”',
      testimonial_designation: 'Vice President - Investment Banking, JPMorgan Chase, Mumbai',
      testimonial_about: 'With a background in engineering, Ritika joined the PGDM Finance program to pivot into investment banking. The rigorous curriculum, supportive faculty and real world case simulations helped her build both technical and soft skills-eventually landing a coveted role at JPMorgan. She now leads key M&A mandates in the APAC region'
    },
    {
      testimonial_name: 'Mrs. Ritika Sood',
      testimonial_thumbnail: 'seema-saini.png',
      testimonial_content: '“NLDIMSR gave me the confidence to navigate boardrooms across the globe”',
      testimonial_designation: 'Vice President - Investment Banking, JPMorgan Chase, Mumbai',
      testimonial_about: 'With a background in engineering, Ritika joined the PGDM Finance program to pivot into investment banking. The rigorous curriculum, supportive faculty and real world case simulations helped her build both technical and soft skills-eventually landing a coveted role at JPMorgan. She now leads key M&A mandates in the APAC region'
    },
    {
      testimonial_name: 'Mrs. Ritika Sood',
      testimonial_thumbnail: 'seema-saini.png',
      testimonial_content: '“NLDIMSR gave me the confidence to navigate boardrooms across the globe”',
      testimonial_designation: 'Vice President - Investment Banking, JPMorgan Chase, Mumbai',
      testimonial_about: 'With a background in engineering, Ritika joined the PGDM Finance program to pivot into investment banking. The rigorous curriculum, supportive faculty and real world case simulations helped her build both technical and soft skills-eventually landing a coveted role at JPMorgan. She now leads key M&A mandates in the APAC region'
    }
  ]

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Global MBA:<br />A Dual Continent Advantage" />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro introTitle="About The Program" introCaption="Global Expertise Meets Local Relevance" introDescription="Offered in collaboration with renowned international academic partners, the program begins in Mumbai and culminates abroad-preparing students to lead in global business environments. With an emphasis on practical exposure, international curriculum and cross cultural learning, this program unlocks global career opportunities while ensuring a strong foundation in core management principles." />
        {
          sliderOne && sliderOne.length > 0 && (
            <>
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full sm:h-[35vh] lg:h-[65vh] xl:h-[70vh]" slidesPerView={1} spaceBetween={0} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}}>
              {
                sliderOne.map((slider, key) => (
                  <SwiperSlide className="w-full" title={slider.slider_caption} key={key}>
                    <Image src={`${basePath}images/programs/${slider.slider_image}`} alt={slider.slider_caption} width={1920} height={1080} className="object-cover w-full" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            </>
        )
        }
        <div className="flex flex-col md:flex-row gap-10 md:mt-10">
          <div className="w-full md:w-[60%] flex flex-col gap-5">
            <h2 className="font-georgia text-2xl lg:text-4xl">Program Highlights</h2>
            <ul className="flex flex-col gap-5 text-[#4E4E4E] list-disc list-inside">
              <li>Dual-campus learning: Begin in Mumbai, complete abroad with partner universities globally accepted curriculum designed in collaboration with international faculty.</li>
              <li>1+1 structure offering postgraduate degrees from both institutions.</li>
              <li>Opportunity to specialise in global markets, finance, marketing and more.</li>
              <li>Cultural immersion and global networking through international campus life.</li>
              <li>Access to worldwide placement support and alumni network.</li>
            </ul>
          </div>
          <div className="w-full md:w-[40%] relative cursor-pointer md:h-40 lg:h-full aspect-[800/400]" onClick={() => videoPopupRef.current?.open('loSuQcjtLYA')}>
            <Image src={`${basePath}images/about-us/intro-img.png`} width={800} height={400} alt="NL Dalmia Intro" className="w-full" />
            <FaPlayCircle size={35} className="absolute inset-0 m-auto text-white" />
          </div>
        </div>
      </div>
      <div className="w-full px-5 lg:px-30 flex flex-col gap-5 py-10">
        <CenterIntro introTitle="Celebrating Brilliance. Honoring Achievement." introCaption="A Balanced, Credit Based <br /> Learning Approach" introDescription="The PGDM Finance program consists of 130 credits spread across core courses, specialisations, electives, industry projects, skill developments and value-added programs. From financial theory to corporate strategy and digital finance tools-the curriculum ensures well-rounded expertise." />
        <div className="responsive-table">
          <table className="w-full table-fixed text-[#4E4E4E] text-center my-5">
            <thead>
              <tr>
                <th>Year</th>
                <th>Location</th>
                <th>Focus Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Year 1</td>
                <td>NLDMSR, Mumbai</td>
                <td>Core Management Fundamentals India Business Context</td>
              </tr>
              <tr>
                <td>Year 2</td>
                <td>Partner University (Abroad)</td>
                <td>Global Business Specialisation Advanced Module Capstone Projects</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full px-5 lg:px-30 py-5 flex flex-col gap-5">
        <CenterIntro introCaption="Our International Partners" introDescription="We partner with leading institutions to support students with the highest quality of education" />
        {
          international_universities && international_universities.length > 0 && (
            <>
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer international_partner_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer international_partner_next">
                  <BsArrowRightShort size={20} />
                </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={25} navigation={{prevEl: '.international_partner_prev', nextEl: '.international_partner_next'}} breakpoints={{640: {slidesPerView: 1.5}, 768: {slidesPerView: 2}, 1024: {slidesPerView: 2}, 1280: {slidesPerView: 3}}}>
              {
                international_universities.map((international_partner, key) => (
                  <SwiperSlide className="w-full border-[0.5px] border-[#800000] px-5 py-5 bg-white" title={international_partner.international_university_name} key={key}>
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-5 justify-center items-center h-20">
                        <Image src={`${basePath}images/about-us/university/${international_partner.international_university_logo}`} alt={international_partner.international_university_name} width={100} height={100} className="object-cover w-20" />
                        <h2 className="font-georgia text-lg">{international_partner.international_university_name}</h2>
                      </div>
                      <div className="flex flex-col gap-5">
                        <h3>Country: {international_partner.international_university_country_name}</h3>
                        <p className="h-30 overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(international_partner.international_university_description))}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            </>
        )
        }
      </div>
      <div className="w-full px-5 lg:px-30 py-5 flex flex-col gap-5">
        <CenterIntro introCaption="Program Outcomes" />
        {
          program_outcomes && program_outcomes.length > 0 && (
            <>
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_outcome_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_outcome_next">
                  <BsArrowRightShort size={20} />
                </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={20} navigation={{prevEl: '.program_outcome_prev', nextEl: '.program_outcome_next'}} breakpoints={{640: {slidesPerView: 2}, 768: {slidesPerView: 2.5}, 1024: {slidesPerView: 3}}}>
              {
                program_outcomes.map((program_outcome, key) => (
                  <SwiperSlide className="w-full bg-[#FFCC33] py-5 px-4" title={program_outcome.program_outcome_caption} key={key}>
                    <div className="flex flex-col gap-10 text-center">
                      <h3 className="text-xl font-georgia h-8">{program_outcome.program_outcome_caption}</h3>
                      <p className="text-[#4E4E4E] h-25">{parser(nl2br(program_outcome.program_outcome_description))}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            </>
        )
        }
      </div>
      <div className="w-full relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-15 lg:gap-25 py-20 relative w-full h-full">
            <h3 className="text-2xl lg:text-4xl font-georgia">Program Advantages & Benefits</h3>
            <div className="flex flex-col gap-5 mt-auto lg:items-end">
              <div className="flex flex-col gap-10 lg:w-1/2">
                <div className="flex flex-col gap-3">
                  <h2 className="font-georgia text-xl lg:text-2xl">Proven Track Record Of Excellence</h2>
                  <p className="leading-snug text-sm md:text-md">Among the top-ranked finance programs in India with consistently high placement rates and alumni in leading MNC’s</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-georgia text-xl lg:text-2xl">Mentorship & Industry Connect</h2>
                  <p className="leading-snug text-sm md:text-md">Network with CXOs, engage with alumni and learn through guests lectures by industry veterans.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-georgia text-xl lg:text-2xl">Career Ready From Campus To Corporate</h2>
                  <p className="leading-snug text-sm md:text-md">Extensive corporate engagement prepares students for real world financial decision making from strategy room to boardrooms</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      {
          admission_categories && admission_categories.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-10 flex flex-col gap-5">
            <CenterIntro introTitle="For Over Three Decades" introCaption="Understand Who Can Apply And How To Get Started With Your Application" introDescription="Find out if your quality for the program and understand the complete admission workflow-from application submission to interviews and final selection" />  
            <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  admission_categories.map((admission_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeAdmissionCategory === (admission_category.admission_category_title) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveAdmissionCategoryFunc(admission_category.admission_category_title)}>
                      <span className="relative">
                        {admission_category.admission_category_title}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={ApplicationProcess}>
                {
                    admission_categories.map((admission_category, key) => (
                    <div className={`w-full ${activeAdmissionCategory === admission_category.admission_category_title ? '' : 'hidden'}`} key={key}>
                      {
                        admission_process_data[admission_category.admission_category_title].map((admission_process, university_key) => (
                          <div className={`w-full py-5 ${admission_process_data[admission_category.admission_category_title].length !== (university_key + 1) ? 'border-b' : '' } border-[#800000] `} key={university_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAdmissionProcessAccordian(university_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{admission_process.admission_process_title}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAdmissionProcess === university_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAdmissionProcess === university_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  {parser(nl2br(admission_process.admission_description))}
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
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5">
        <Intro introCaption="Experience Learning Beyond The Classroom" introDescription="Explore our world-class campus equipped with Bloomberg terminals, interactive classrooms, innovation zones and more-fostering the perfect setting for your financial journey" />
        {
          sliderOne && sliderOne.length > 0 && (
            <>
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full sm:h-[35vh] lg:h-[65vh] xl:h-[70vh]" slidesPerView={1} spaceBetween={0} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}}>
              {
                sliderOne.map((slider, key) => (
                  <SwiperSlide className="w-full" title={slider.slider_caption} key={key}>
                    <Image src={`${basePath}images/programs/${slider.slider_image}`} alt={slider.slider_caption} width={1920} height={1080} className="object-cover w-full" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            </>
        )
        }
      </div>
      {
        testimonials && testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5">
          <Intro introTitle="Voices Of Success" introCaption="Join The Legacy Of Excellence & Let Your Success Story Begin Here." introDescription="Hear from our alumni and current students as they share their journey of transformation, Learning and success." />
          <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer testimonial_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer testimonial_slider_next">
                <BsArrowRightShort size={20} />
              </span>
          </div>
          <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={0} navigation={{prevEl: '.testimonial_slider_prev', nextEl: '.testimonial_slider_next'}}>
            {
              testimonials.map((testimonial, key) => (
                <SwiperSlide key={key} className="w-full bg-[#FFCC33] py-5 lg:py-10 px-5 lg:px-10">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="md:w-[30%] lg:w-[20%] flex justify-center">
                      <Image src={`${basePath}images/programs/${testimonial.testimonial_thumbnail}`} alt={testimonial.testimonial_name} width={200} height={300} className="object-cover" />
                    </div>
                    <div className="md:w-[70%] lg:w-[80%] flex flex-col gap-10 mt-auto">
                      <p className="text-[#4E4E4E] leading-loose text-sm lg:text-lg">{testimonial.testimonial_about}</p>
                      <div className="flex flex-col gap-2 font-semibold text-center md:text-left">
                        <h3 className="text-lg lg:text-2xl">{testimonial.testimonial_content}</h3>
                        <span>- {testimonial.testimonial_name}</span>
                        <span className="text-sm lg:text-md">{testimonial.testimonial_designation}</span>
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
      <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
            <h3 className="text-2xl lg:text-4xl font-georgia">Your Career In Finance Begins Here</h3>
            <p>Limited seats for the 2025-27 batch. Applications open</p>
            <ul className="flex gap-5">
              <li>
                <Link href="" className="bg-[#800000] px-5 py-2">Apply Now</Link>
              </li>
              <li>
                <Link href="" className="bg-[#800000] px-5 py-2">Contact Us</Link>
              </li>
            </ul>
          </div>
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}