"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FiPlayCircle } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import parser from 'html-react-parser';
import nl2br from "nl2br";

import { Banner as BannerProps, IntroProps, MDPPrograms, Testimonials, FAQs } from "@/types/api";

type PageProps = {
  banner: BannerProps
  introduction: IntroProps
  why_choose_introduction: IntroProps
  programs_introduction: IntroProps
  programs: MDPPrograms[]
  testimonial_introduction: IntroProps
  testimonials: Testimonials[]
  faqs_introduction: IntroProps
  faqs: FAQs[]
  enquiry: IntroProps
};

import { useHeader } from "@/context/HeaderContext";
import TestimonialSlider from "../TestimonialSlider";

export default function ManagementDevelopmentProgramsComponent({ banner, introduction, why_choose_introduction, programs_introduction, programs, testimonial_introduction, testimonials, faqs_introduction, faqs, enquiry}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader()

  useEffect(() => {
      setHeaderProps({
        MDPPage: programs.length ? true : false
      })
  }, [])

  useEffect(() => {
      const wrappers = document.querySelectorAll(".why_choose");
      if (!wrappers.length) return;
  
      wrappers.forEach((wrapper) => {
        const lists = wrapper.querySelectorAll("ul");

        lists.forEach((ul) => {
          ul.classList.add(
            "flex",
            "flex-col",
            "gap-4",
            "text-sm",
            "list-disc",
            "text-[#4E4E4E]",
            "list-inside"
          );
        });
      })
  }, []);

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const [activeTestimonial, updateActiveTestimonial] = useState(0);
  
  const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveTestimonial(testimonial_id);
      }
    }
  }

  const faq_categories: string[] = [];

  const faqs_data: Record<string, FAQs[]> = {};

  faqs.forEach((faq) => {
    if(!faq_categories.includes(faq.faq_category_title)) {
      faq_categories.push(faq.faq_category_title)
    }

    if (!faqs_data[faq.faq_category_title]) {
      faqs_data[faq.faq_category_title] = [];
    }

    faqs_data[faq.faq_category_title].push(faq);
  })

  const [activeFAQCategory, updateActiveFAQCategory] = useState(faq_categories.length > 0 ? faq_categories[0] : '');
  const [openFAQ, toggleFAQAccordian] = useState(0);

  const FAQs = useRef<HTMLDivElement | null>(null);

  const updateActiveFAQCategoryFunc = (faq_category_title: string): void => {
    updateActiveFAQCategory(faq_category_title);
    toggleFAQAccordian(0);
    scrollWithOffset(FAQs);
  }

  const programsRef = useRef<HTMLDivElement | null>(null);

  const program_durations: string[] = [];
    const program_modes: string[] = [];
  
    programs.forEach(program => {
      if(program.program_duration && !program_durations.includes(program.program_duration)) {
        program_durations.push(program.program_duration);
      }
  
      if(program.program_mode && !program_modes.includes(program.program_mode)) {
        program_modes.push(program.program_mode);
      }
    })
  
    const [filteredPrograms, setFilteredPrograms] = useState(programs);
    const [filterProgram, updateFilterProgram] = useState('');
    const [filterProgramDuration, updateFilterProgramDuration] = useState('');
    const [filterProgramMode, updateFilterProgramMode] = useState('');
  
    type ProgramFilterProps = {
      program_name?: string;
      program_duration?: string;
      program_mode?: string;
    }
  
    const program_filters = ({program_name, program_duration, program_mode}: ProgramFilterProps) => {
      let filtered = [...programs];
  
      if(program_name) {
        filtered = filtered.filter(x => x.program_name === program_name);
        updateFilterProgramDuration('');
        updateFilterProgramMode('');
      }
  
      if(program_duration) {
        filtered = filtered.filter(x => x.program_duration === program_duration);
        updateFilterProgram('');
      }
  
      if(program_mode) {
        filtered = filtered.filter(x => x.program_mode === program_mode);
        updateFilterProgram('');
      }
  
      setFilteredPrograms(filtered);
    }

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link}
      />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description} />
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:items-center justify-between">
          <div className="lg:w-[35%] flex flex-col gap-5 why_choose">
            <h2 className="font-georgia text-xl lg:text-3xl">{why_choose_introduction.intro_title}</h2>
            {
              why_choose_introduction.intro_description && parser(why_choose_introduction.intro_description)
            }
          </div>
          <div className="w-full lg:w-[65%] sm:h-90">
            {
              why_choose_introduction.intro_image && (
                <Image src={why_choose_introduction.intro_image} alt={why_choose_introduction.intro_image_alt} width={600} height={350} className="object-cover w-full h-full" />
              )
            }
          </div>
        </div>
      </div>
      {
        programs && programs.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10" ref={programsRef}>
          <CenterIntro
          introTitle={programs_introduction.intro_title}
          introCaption={programs_introduction.intro_caption}
          introDescription={programs_introduction.intro_description} />
          <div className="flex flex-col md:flex-row justify-center items-center lg:justify-between gap-10 md:gap-5 lg:gap-10">
            <div className="relative w-sm">
              <select className="appearance-none outline-none w-full" value={filterProgram} onChange={(e) => { updateFilterProgram(e.target.value); program_filters({program_name: e.target.value})} }>
                <option value="">Search By Topic</option>
                {
                  programs && programs.length > 0 && programs.map((program, key) => (
                    <option value={program.program_name} key={key}>{program.program_name}</option>
                  ))
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <IoIosArrowDown size={25} />
              </div>
              <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            </div>
            <div className="relative w-sm">
              <select className="appearance-none outline-none w-full" value={filterProgramDuration} onChange={(e) => {updateFilterProgramDuration(e.target.value); program_filters({program_duration: e.target.value})}}>
                <option value="">Duration</option>
                {
                  program_durations && program_durations.length > 0 && program_durations.map((program_duration, key) => (
                    <option value={program_duration} key={key}>{program_duration}</option>
                  ))
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <IoIosArrowDown size={25} />
              </div>
              <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            </div>
            <div className="relative w-sm">
              <select className="appearance-none outline-none w-full" value={filterProgramMode} onChange={(e) => {updateFilterProgramMode(e.target.value); program_filters({program_mode: e.target.value})}}>
                <option value="">Mode</option>
                {
                  program_modes && program_modes.length > 0 && program_modes.map((program_mode, key) => (
                    <option value={program_mode} key={key}>{program_mode}</option>
                  ))
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                <IoIosArrowDown size={25} />
              </div>
              <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer program_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          
          <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}} breakpoints={{640: { slidesPerView: 2, spaceBetween: 10 }, 1024: { slidesPerView: 3, spaceBetween: 50 } }} >
            {
              filteredPrograms.map((program, key) => (
                <SwiperSlide key={key} className="group">
                  <div className="bg-white flex flex-col gap-5 justify-center items-center text-center transition-all duration-300 px-5 py-10 border-[0.5px] border-[#800000] group-hover:bg-[#800000]">
                    <h2 className="font-georgia text-xl group-hover:text-white">{program.program_name}</h2>
                    <p className="leading-loose group-hover:text-white">{program.program_description}</p>
                    <ul className="flex gap-5">
                      {
                        program.program_pdf && (
                          <li>
                            <Link href={program.program_pdf} target="_blank" className="bg-[#800000] text-white px-2 py-2 text-sm group-hover:bg-white group-hover:!text-[#800000]">Know More</Link>
                          </li>
                        )
                      }
                      {
                        program.program_application_link && (
                          <li>
                            <Link href={program.program_application_link} target="_blank" className="bg-white text-burgundy px-2 py-2 text-sm group-hover:bg-[#800000] group-hover:!text-white border-[0.5px] border-burgundy group-hover:border-white">Apply Now</Link>
                          </li>
                        )
                      }
                    </ul>
                  </div>
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
          <Intro
          introTitle={testimonial_introduction.intro_title}
          introCaption={testimonial_introduction.intro_caption}
          introDescription={testimonial_introduction.intro_description} />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      )}
      {
        faq_categories && faq_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={faqs_introduction.intro_title}
          introCaption={faqs_introduction.intro_caption}
          introDescription={faqs_introduction.intro_description} />
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  faq_categories.map((faq_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeFAQCategory === faq_category ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveFAQCategoryFunc(faq_category)}>
                      <span className="relative">
                        {faq_category}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeFAQCategory === (faq_category) ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] md:border-l-[0.5px] border-[#800000]" ref={FAQs}>
                {
                    faq_categories.map((faq_category, key) => (
                    <div className={`w-full ${activeFAQCategory === faq_category ? '' : 'hidden'}`} key={key}>
                      {
                        faqs_data[faq_category].map((faqs, faq_key) => (
                          <div className={`w-full py-5 ${faqs_data[faq_category].length !== (faq_key + 1) ? 'border-b' : '' } border-[#800000] `} key={faq_key}>
                            <div className="flex flex-col gap-3 md:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleFAQAccordian(faq_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{faqs.faq_question}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openFAQ === faq_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openFAQ === faq_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  {
                                    faqs.faq_answer && (
                                      <p className="text-sm">{parser(nl2br(faqs.faq_answer))}</p>
                                    )
                                  }
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
        <h3 className="font-georgia text-3xl">{enquiry.intro_caption}</h3>
        {
          enquiry.intro_description && (
            <p className="text-[#4E4E4E] text-smeading-loose">{parser(nl2br(enquiry.intro_description))}</p>
          )
        }
        {
          enquiry.intro_link && (
            <Link href={enquiry.intro_link} className="cursor-pointer bg-[#800000] text-white px-3 py-1 w-fit">Enquire Now</Link>
          )
        }
      </div>
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
  );
}