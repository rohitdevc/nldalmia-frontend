"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef, useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "../CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AdmissionProgramSlider } from "../AdmissionProgramSlider";

export default function AdmissionComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const admission_programs = [
    {
      id: 1,
      program_name: 'Post Graduate In Diploma Management (PGDM)',
      program_description: 'The program follows a trimester system and emphasis real-world application, critical thinking and industry immersion through live projects, internships and capstone cases.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-12-31 20:00:00+05:30'),
      program_link: basePath + 'pgdm'
    },
    {
      id: 2,
      program_name: 'Global MBA in Collaboration With Industry Partners',
      program_description: 'With s curriculum aligned to international standards, the program blends strategic management with global exposure through academic alliances, global case studies and expert sessions.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-09-24 20:00:00+05:30'),
      program_link: basePath + 'global-mba'
    },
    {
      id: 3,
      program_name: 'Post Graduate In Diploma Management (PGDM)',
      program_description: 'The program follows a trimester system and emphasis real-world application, critical thinking and industry immersion through live projects, internships and capstone cases.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-11-15 20:00:00+05:30'),
      program_link: basePath + 'pgdm'
    },
    {
      id: 4,
      program_name: 'Global MBA in Collaboration With Industry Partners',
      program_description: 'With s curriculum aligned to international standards, the program blends strategic management with global exposure through academic alliances, global case studies and expert sessions.',
      program_application_link: 'https://apply.nldalmia.in',
      program_admission_end_datetime: new Date('2026-06-07 20:00:00+05:30'),
      program_link: basePath + 'pgdm'
    }
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
  
    admission_process.forEach((admission_process_row) => {
      if (!admission_process_data[admission_process_row.admission_category_title]) {
        admission_process_data[admission_process_row.admission_category_title] = [];
      }
  
      admission_process_data[admission_process_row.admission_category_title].push(admission_process_row);
    })
  
    const [activeAdmissionCategory, updateActiveAdmissionCategory] = useState(admission_categories.length > 0 ? admission_categories[0].admission_category_title : '');
    const [openAdmissionProcess, toggleAdmissionProcessAccordian] = useState(0);
  
    const ApplicationProcess = useRef<HTMLDivElement | null>(null);
  
    const updateActiveAdmissionCategoryFunc = (admission_category_title: string): void => {
      updateActiveAdmissionCategory(admission_category_title);
      toggleAdmissionProcessAccordian(0);
      scrollWithOffset(ApplicationProcess);
    }

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

    const financial_partners = [
      {
        id: 1,
        financial_partner_name: 'IDFC First Bank',
        financial_partner_logo: 'idfc.png',
        financial_partner_url: 'https://www.idfcfirst.bank.in/'
      },
      {
        id: 2,
        financial_partner_name: 'Axis Bank',
        financial_partner_logo: 'axis.png',
        financial_partner_url: 'https://www.axis.bank.in/'
      },
      {
        id: 3,
        financial_partner_name: 'ICICI Bank iSmart Education Loans',
        financial_partner_logo: 'icici-i-smart.jpg',
        financial_partner_url: 'https://www.icici.bank.in/personal-banking/loans/education-loan'
      },
      {
        id: 4,
        financial_partner_name: 'Credila',
        financial_partner_logo: 'credila.jpg',
        financial_partner_url: 'https://www.credila.com/'
      },
      {
        id: 5,
        financial_partner_name: 'TATA Capital',
        financial_partner_logo: 'tata-capital.jpg',
        financial_partner_url: 'https://www.tatacapital.com/'
      }
    ]

    const faq_categories = [
      {
        id: 1,
        faq_category_title: 'Admissions',
      },
      {
        id: 2,
        faq_category_title: 'Academics'
      }
    ]
  
    const faqs = [
      {
        id: 1,
        faq_category_title: 'Admissions',
        faq_question: 'Are N. L. Dalmia Centre of Distance and Online Management Studies Programmes approved by any Government Body?',
        faq_answer: 'Yes, Online Learning and Online Distance Learning (ODL) (refer programme list on website) offered by N. L. Dalmia Centre of Distance and Online Management Studies are approved by All India Council for Technical Education (AICTE).'
      },
      {
        id: 2,
        faq_category_title: 'Admissions',
        faq_question: 'What are the eligibility criteria?',
        faq_answer: 'Bachelor\'s degree holder / Graduate in any discipline from a recognised University.'
      },
      {
        id: 3,
        faq_category_title: 'Academics',
        faq_question: 'Will you give the Study Material?',
        faq_answer: 'For Online Learning the students are given access to e-study material through a state-of-the-art e-learning platform. After admission is confirmed, students are provided with the study material, which consists of e-books, videos, case studies etc. In case, students want printed books, he/she has to pay ₹-3000/- extra to acquire them. Also, students will get access to the Institute’s e-library with a remote access facility.'
      },
    ]
  
    type FAQ = {
      id: number,
      faq_category_title: string,
      faq_question: string,
      faq_answer: string
    }
  
    const faqs_data: Record<string, FAQ[]> = {};
  
    faqs.forEach((faq) => {
      if (!faqs_data[faq.faq_category_title]) {
        faqs_data[faq.faq_category_title] = [];
      }
  
      faqs_data[faq.faq_category_title].push(faq);
    })
  
    const [activeFAQCategory, updateActiveFAQCategory] = useState(faq_categories.length > 0 ? faq_categories[0].faq_category_title : '');
    const [openFAQ, toggleFAQAccordian] = useState(0);
  
    const FAQs = useRef<HTMLDivElement | null>(null);
  
    const updateActiveFAQCategoryFunc = (faq_category_title: string): void => {
      updateActiveFAQCategory(faq_category_title);
      toggleFAQAccordian(0);
      scrollWithOffset(FAQs);
    }

  return (
    <>
    <Header admissionPage={true} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Your Journey At NLDIMSR"
      banner_description="Join one of India’s most respected management institutes and take the first step towards a future in business leadership and innovation"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="About The Program" introCaption="Open Admission" introDescription="Applications are now open for our AICTE-approved PGDM programs, recognised as MBA equivalent bu AIU. Explore specializations, benefits from a dynamic learning environment, and position yourself for a high-impact career." />
        {
          admission_programs && admission_programs.length > 0 && (
          <div className="w-full">
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full mt-10" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 20 } }} >
              {
                admission_programs.map((admission_program, key) => {
                  return (
                  <SwiperSlide className="group border-[0.5px] border-[#800000]" title={admission_program.program_name} key={key}>
                    <AdmissionProgramSlider program={admission_program} />
                  </SwiperSlide>
                )
              })
              }
            </Swiper>
          </div>
        )
        }
      </div>
      <div className="w-full relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-15 lg:gap-25 py-20 relative w-full h-full">
            <h3 className="text-2xl lg:text-4xl font-georgia">Whether You Want To Explore More Or Are Ready <br />To Begin Your Application, We’re Here To Help.</h3>
            <div className="flex flex-col gap-5 mt-auto lg:items-end">
              <div className="flex flex-col gap-10 lg:w-1/2">
                <div className="flex flex-col gap-5">
                  <h2 className="font-georgia text-xl lg:text-2xl">Connect With Our Admission Office</h2>
                  <p className="leading-snug text-sm md:text-md">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                  <ul className="flex gap-5">
                    <li>
                      <Link href="" className="bg-white text-burgundy px-5 py-2 text-sm md:text-md">PGDM Office</Link>
                    </li>
                    <li>
                      <Link href="" className="border border-white text-white px-5 py-2 text-sm md:text-md">Global MBA Office</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="font-georgia text-xl lg:text-2xl">Start Your Application Process</h2>
                  <p className="leading-snug text-sm md:text-md">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                  <ul className="flex gap-5">
                    <li>
                      <Link href="" className="bg-white text-burgundy px-5 py-2 text-sm md:text-md">Apply Now</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
      {
        admission_categories && admission_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="For Over Three Decades" introCaption="Understand Who Can Apply And How To Get Started With Your Application" introDescription="Find out if your quality for the program and understand the complete admission workflow-from application submission to interviews and final selection" />
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
                        admission_process_data[admission_category.admission_category_title].map((admission_process, admission_process_key) => (
                          <div className={`w-full py-5 ${admission_process_data[admission_category.admission_category_title].length !== (admission_process_key + 1) ? 'border-b' : '' } border-[#800000] `} key={admission_process_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAdmissionProcessAccordian(admission_process_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{admission_process.admission_process_title}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAdmissionProcess === admission_process_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAdmissionProcess === admission_process_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
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
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Scholarship" introCaption="Scholarships: Where Merit Meets Opportunity" introDescription="We offer a robust scholarship program that rewards excellence, promotes inclusivity and support deserving candidates. Scholarships are applicable for both years of the PGDM program and cannot be combined across categories." />
          <h2 className="font-georgia text-3xl">Merit Based Scholarships</h2>
          <div className="responsive-table">
            <table className="w-full table-fixed text-[#4E4E4E] text-center my-5">
              <thead>
                <tr>
                  <th>Scholarship</th>
                  <th>Fee Wavier</th>
                  <th>CAT</th>
                  <th>GMAT Score</th>
                  <th>CMAT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>100%</td>
                  <td>Rs. 8,25,000</td>
                  <td>&gt;99.00</td>
                  <td>785+</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>75%</td>
                  <td>Rs. 6,18,750</td>
                  <td>&gt;98-98.99</td>
                  <td>750-784+</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>Rs. 4,12,500</td>
                  <td>&gt;95-95.97</td>
                  <td>700-749+</td>
                  <td>&gt;99.00</td>
                </tr>
                <tr>
                  <td>25%</td>
                  <td>Rs. 2,06,250</td>
                  <td>&gt;92-94.99</td>
                  <td>675-699+</td>
                  <td>&gt;98.5-98.99</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Tuition Fees" introCaption="Fee Structure Table" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." />
          <h2 className="font-georgia text-3xl">Post Graduate Diploma In Management (PGDM)</h2>
          <div className="responsive-table">
            <table className="w-full table-fixed text-[#4E4E4E] text-center my-5">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Year 1</th>
                  <th>Year 2</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PGDM</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 16,50,000</td>
                </tr>
                <tr>
                  <td>PGDM-Finance</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 16,50,000</td>
                </tr>
                <tr>
                  <td>PGDM-Business Analytics</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 16,50,000</td>
                </tr>
                <tr>
                  <td>PGDM-Marketing</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 16,50,000</td>
                </tr>
                <tr>
                  <td>PGDM-Human Resource</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 8,25,000</td>
                  <td>Rs. 16,50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      {
        financial_partners && financial_partners.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-5 lg:py-20 flex flex-col gap-5">
            <CenterIntro introCaption="Access Made Easy" introDescription="We partner with the leading financial institutions to support students with education loans on competitive terms" />
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer financial_partner_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer financial_partner_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full" slidesPerView={2} spaceBetween={10} modules={[Navigation]} navigation={{prevEl: '.financial_partner_slider_prev', nextEl: '.financial_partner_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 75 }, 1024: { slidesPerView: 4, spaceBetween: 70 } }} >
              {
                financial_partners.map((financial_partner, key) => (
                  <SwiperSlide title={financial_partner.financial_partner_name} key={key}>
                    <div className="flex flex-col text-center gap-5">
                      <div className="border-[0.5px] border-[#800000] flex justify-center items-center h-50">
                        <Image src={`${basePath}images/admissions/${financial_partner.financial_partner_logo}`} alt={financial_partner.financial_partner_name} width={200} height={200} className="w-50" />
                      </div>
                      <h2 className="text-xl font-georgia">{financial_partner.financial_partner_name}</h2>
                      <Link href={financial_partner.financial_partner_url} target="_blank" className="flex gap-1 justify-center items-center">Know More <MdArrowOutward size={15} /></Link>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          )
      }
      {
        faq_categories && faq_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro introTitle="Queries" introCaption="Frequently Asked Questions" introDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat." />
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  faq_categories.map((faq_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeFAQCategory === (faq_category.faq_category_title) ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveFAQCategoryFunc(faq_category.faq_category_title)}>
                      <span className="relative">
                        {faq_category.faq_category_title}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={FAQs}>
                {
                    faq_categories.map((faq_category, key) => (
                    <div className={`w-full ${activeFAQCategory === faq_category.faq_category_title ? '' : 'hidden'}`} key={key}>
                      {
                        faqs_data[faq_category.faq_category_title].map((faqs, faq_key) => (
                          <div className={`w-full py-5 ${faqs_data[faq_category.faq_category_title].length !== (faq_key + 1) ? 'border-b' : '' } border-[#800000] `} key={faq_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleFAQAccordian(faq_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{faqs.faq_question}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openFAQ === faq_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openFAQ === faq_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  <p className="text-sm">{faqs.faq_answer}</p>
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
      <div className="w-full relative bg-cover bg-center bg-no-repeat text-white h-[75vh] flex justify-center items-center text-center" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <form className="flex flex-col gap-5 py-20 relative px-5 w-full lg:w-xl justify-center items-center text-center">
            <h3 className="text-2xl lg:text-4xl font-georgia">Get All The Details In One Place</h3>
            <p className="text-sm leading-loose">Explore course structure, curriculum, highlights, faculty insights, placements stats and everything you need to make an informed decision.</p>
            <input type="email" placeholder="Enter Your Email Address" className="w-xs lg:w-lg border-b py-2 border-white outline-none" />
            <button type="submit" className="bg-[#800000] px-2 py-2 cursor-pointer">Submit & Download</button>
          </form>
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}