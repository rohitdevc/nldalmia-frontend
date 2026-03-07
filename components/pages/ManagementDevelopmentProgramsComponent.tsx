"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { FiPlayCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

export default function ManagementDevelopmentProgramsComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeTestimonial, updateActiveTestimonial] = useState(0);
  
  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

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

  const programs = [
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    },
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    },
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    },
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    },
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    },
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    },
    {
      program_title: 'Strategic Marketing for Managers',
      program_description: 'Customer-centric strategies, segmentation and digital go-to-market.'
    }
  ]

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Empowering Professionals.<br/>Enabling Progress."
      banner_description="Management Development Programs (MDPs) at N. L. Dalmia Institute of Management Studies & Research — practical, industry-aligned short programs to upskill leaders, managers and high-potential teams."
      banner_url={`${basePath}programs`}
      banner_button_caption="Explore Our Programs"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introCaption="Overview" introDescription="Conduct focused, industry-relevant short-term programs (MDPs) that translate academic insights into practical skills and measurable outcomes for working professionals. We design programs to accelerate leadership capability and functional excellence." />
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:items-center justify-between">
          <div className="lg:w-[35%] flex flex-col gap-5">
            <h2 className="font-georgia text-xl lg:text-3xl">Why choose N. L. Dalmia?</h2>
            <ul className="flex flex-col gap-4 text-sm list-disc list-inside text-[#4E4E4E]">
              <li>Strong industry-connect & practitioner faculty</li>
              <li>Customisable programs aligned to organisational KPIs</li>
              <li>Validated pedagogy — case-based, experiential, simulation-led</li>
              <li>Proven alumni outcomes across finance, marketing, HR & analytics</li>
            </ul>
          </div>
          <div className="lg:w-[65%] sm:h-90">
            <Image src={`${basePath}images/about-us/intro-img.png`} alt="MDP" width={600} height={350} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro introCaption="Types of MDP" introDescription="Conduct focused, industry-relevant short-term programs (MDPs) that translate academic insights into practical skills and measurable outcomes for working professionals. We design programs to accelerate leadership capability and functional excellence." />
        <form className="flex flex-col md:flex-row justify-center items-center lg:justify-between gap-10 md:gap-5 lg:gap-10">
          <div className="relative w-sm">
            <select name="mdp_filter_topic">
              <option value="">Search By Topic</option>
              <option value="0-3 Years">0-3 Years</option>
              <option value="4-8 Years">4-8 Years</option>
              <option value="9+ Years">9+ Years</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <IoIosArrowDown size={25} />
            </div>
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative w-sm">
            <select name="mdp_filter_duration">
              <option value="">Duration</option>
              <option value="1 Day">1 Day</option>
              <option value="2-3 Days">2-3 Days</option>
              <option value="1 Week">1 Week</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <IoIosArrowDown size={25} />
            </div>
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative w-sm">
            <select name="mdp_filter_mode">
              <option value="">Mode</option>
              <option value="Online">Online</option>
              <option value="In-person">In-person</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <IoIosArrowDown size={25} />
            </div>
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
        </form>
        <div className="flex gap-3">
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_prev">
            <BsArrowLeftShort size={20} />
          </span>
          <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_next">
            <BsArrowRightShort size={20} />
          </span>
        </div>
        
        <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}} breakpoints={{640: { slidesPerView: 2, spaceBetween: 10 }, 1024: { slidesPerView: 3, spaceBetween: 50 } }} >
          {
            programs.map((program, key) => (
              <SwiperSlide key={key} className="group">
                <div className="bg-white flex flex-col gap-5 justify-center items-center text-center transition-all duration-300 px-5 py-10 border-[0.5px] border-[#800000] group-hover:bg-[#800000]">
                  <h2 className="font-georgia text-xl group-hover:text-white">{program.program_title}</h2>
                  <p className="leading-loose group-hover:text-white">{program.program_description}</p>
                  <ul className="flex gap-5">
                    <li>
                      <Link href="" className="bg-[#800000] text-white px-2 py-2 text-sm group-hover:bg-white group-hover:!text-[#800000]">Know More</Link>
                    </li>
                    <li>
                      <Link href="" className="bg-white text-burgundy px-2 py-2 text-sm group-hover:bg-[#800000] group-hover:!text-white border-[0.5px] border-burgundy group-hover:border-white">Apply Now</Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
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
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeFAQCategory === (faq_category.faq_category_title) ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] md:border-l-[0.5px] border-[#800000]" ref={FAQs}>
                {
                    faq_categories.map((faq_category, key) => (
                    <div className={`w-full ${activeFAQCategory === faq_category.faq_category_title ? '' : 'hidden'}`} key={key}>
                      {
                        faqs_data[faq_category.faq_category_title].map((faqs, faq_key) => (
                          <div className={`w-full py-5 ${faqs_data[faq_category.faq_category_title].length !== (faq_key + 1) ? 'border-b' : '' } border-[#800000] `} key={faq_key}>
                            <div className="flex flex-col gap-3 md:px-10">
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
      <div className="w-full bg-[#FFCC33] flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <h3 className="font-georgia text-3xl">Enquire Now</h3>
        <p className="text-[#4E4E4E] text-sm leading-loose">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        <button className="cursor-pointer bg-[#800000] text-white px-3 py-1 w-fit">Enquire Now</button>
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}