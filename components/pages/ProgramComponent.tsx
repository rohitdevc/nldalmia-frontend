"use client"

import Image from "next/image";
import Link from "next/link";

import { useRef, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import nl2br from 'nl2br';
import parser from 'html-react-parser';
import IndianStatesCities from "indian-states-cities-list";

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
import { FaPlayCircle, FaCheck } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { Ticker, Program } from "@/types/api";

type PageProps = {
  ticker: Ticker
  program: Program
}

export default function ProgramComponent({ticker, program}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);
  
  useEffect(() => {
      const wrappers = document.querySelectorAll(".responsive-table");
      if (!wrappers.length) return;

      wrappers.forEach((wrapper) => {
        const table = wrapper.querySelector("table");
        if (!table) return;

        table.classList.add(
          "w-full",
          "table-fixed",
          "text-[#4E4E4E]",
          "text-center",
          "my-5"
        );
        
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

  const program_admission_tabs: string[] = [];

  program.program_admissions.forEach((program_admission) => {
    if(!program_admission_tabs.includes(program_admission.program_admission_tab_title)) {
      program_admission_tabs.push(program_admission.program_admission_tab_title);
    }
  })

  const [activeAdmissionCategory, updateActiveAdmissionCategory] = useState(program_admission_tabs.length > 0 ? program_admission_tabs[0] : '');
  const [openAdmissionProcess, toggleAdmissionProcessAccordian] = useState(0);

  const ApplicationProcess = useRef<HTMLDivElement | null>(null);

  const updateActiveAdmissionCategoryFunc = (program_admission_tab: string): void => {
    updateActiveAdmissionCategory(program_admission_tab);
    toggleAdmissionProcessAccordian(0);
    scrollWithOffset(ApplicationProcess);
  }

  const [downloadBrochurePopUp, updateDownloadBrochurePopUp] = useState(false);
    
  const handleDownloadBrochure = () => {
    updateDownloadBrochurePopUp(true);
  };

  const [activeState, setActiveState] = useState<string>("");
  const [indian_cities, setIndianCities] = useState<string[]>([]);
  
  const indian_states = IndianStatesCities.INDIAN_STATES_AND_UT_ARRAY;

  const [checked, setChecked] = useState(true);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.selectedIndex - 1;
    const state = e.target.value;
    
    setActiveState(state);
    
    const stateKeys = Object.keys(IndianStatesCities.STATE_WISE_CITIES);
    const stateKey = stateKeys[index];
    
    const cities = stateKey
    ? IndianStatesCities.STATE_WISE_CITIES[stateKey].map((city: any) => city.value)
    : [];
    
    setIndianCities(cities);
  };

  return (
    <>
    <Header ticker_api={ticker} onDownloadBrochureClick={handleDownloadBrochure} programPage={true} programApplicationLink={program.program_application_link} programEligibilityFees={program.program_eligibility_and_fees} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={program.banner_image}
      banner_caption={program.banner_image_caption}
      banner_description={program.banner_image_description}
      />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro
        introTitle={program.program_name}
        introCaption={program.program_introduction_caption}
        introDescription={program.program_introduction_description} />
        {
          program.program_sliders && program.program_sliders.length > 0 && (
            <div className="w-full">
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
                  program.program_sliders.map((slider, key) => (
                    <SwiperSlide className="w-full" title={slider.program_slider_caption} key={key}>
                      <Image src={slider.program_slider_image} alt={slider.program_slider_caption} width={1920} height={1080} className="object-cover w-full" />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
        )
        }
        {
          program.program_highlights && program.program_highlights.length > 0 && (
          <div className="flex flex-col md:flex-row gap-10 md:mt-10">
            <div className="w-full md:w-[60%] flex flex-col gap-5">
              <h2 className="font-georgia text-2xl lg:text-4xl">Program Highlights</h2>
              <ul className="flex flex-col gap-5 text-[#4E4E4E] list-disc list-inside">
                {
                  program.program_highlights.map((program_highlight, key) => (
                  <li key={key}>{program_highlight}</li>
                ))
                }
              </ul>
            </div>
            {
              program.program_highlights_image && (
              <div className="w-full md:w-[40%] relative cursor-pointer md:h-40 lg:h-full aspect-[800/400]" onClick={() => videoPopupRef.current?.open(program.program_highlights_youtube_id)}>
                <Image src={program.program_highlights_image} width={800} height={400} alt={program.program_name} className="object-cover w-full h-full" />
                {
                  program.program_highlights_youtube_id && (
                    <FaPlayCircle size={35} className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                  )
                }
              </div>
            )
            }
          </div>
          )
        }
      </div>
      {
        program.program_credit_content && (
        <div className="w-full px-5 lg:px-30 flex flex-col gap-5 py-10">
          <CenterIntro
          introTitle={program.program_credit_title}
          introCaption={program.program_credit_caption}
          introDescription={program.program_credit_description} />
          <div className="responsive-table">
            {
              parser(program.program_credit_content)
            }
          </div>
        </div>
        )
      }
      {
        program.program_international_partners && program.program_international_partners.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 flex flex-col gap-5">
          <CenterIntro
          introCaption={program.program_international_partner_caption}
          introDescription={program.program_international_partner_description}
          />
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
                program.program_international_partners.map((international_partner, key) => (
                  <SwiperSlide className="w-full border-[0.5px] border-[#800000] px-5 py-5 bg-white" title={international_partner.program_international_partner_name} key={key}>
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-5 justify-center items-center h-20">
                        <Image src={international_partner.program_international_partner_logo} alt={international_partner.program_international_partner_name} width={100} height={100} className="object-cover w-20" />
                        <h2 className="font-georgia text-lg">{international_partner.program_international_partner_name}</h2>
                      </div>
                      <div className="flex flex-col gap-5">
                        {
                          international_partner.program_international_partner_country && (
                            <h3>Country: {international_partner.program_international_partner_country}</h3>
                          )
                        }
                        {
                          international_partner.program_international_partner_description && (
                            <p className="h-30 overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(international_partner.program_international_partner_description))}</p>
                          )
                        }
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
        program.program_outcomes && program.program_outcomes.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 flex flex-col gap-5">
          <CenterIntro introCaption="Program Outcomes" />
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
                program.program_outcomes.map((program_outcome, key) => (
                  <SwiperSlide className="w-full bg-[#FFCC33] py-5 px-4" title={program_outcome.program_outcome_caption} key={key}>
                    <div className="flex flex-col gap-10 text-center">
                      <h3 className="text-xl font-georgia h-8">{program_outcome.program_outcome_caption}</h3>
                      {
                        program_outcome.program_outcome_description && (
                          <p className="text-[#4E4E4E] h-25">{parser(nl2br(program_outcome.program_outcome_description))}</p>
                        )
                      }
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          )
      }
      {
        program.program_advantages && program.program_advantages.length > 0 && (
        <div className="w-full relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${program.program_advantage_image})`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-15 lg:gap-25 py-20 relative w-full h-full">
            <h3 className="text-2xl lg:text-4xl font-georgia">Program Advantages & Benefits</h3>
            <div className="flex flex-col gap-5 mt-auto lg:items-end">
              <div className="flex flex-col gap-10 lg:w-1/2">
              {
                program.program_advantages.map((program_advantage, key) => (
                  <div className="flex flex-col gap-3" key={key}>
                    <h2 className="font-georgia text-xl lg:text-2xl">{program_advantage.program_advantage_caption}</h2>
                    {
                      program_advantage.program_advantage_description && (
                        <p className="leading-snug text-sm md:text-lg">{parser(nl2br(program_advantage.program_advantage_description))}</p>   
                      )
                    }
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      )
      }
      {
          program.program_admissions && program.program_admissions.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-10 flex flex-col gap-5">
            <CenterIntro
            introTitle={program.program_application_title}
            introCaption={program.program_application_caption}
            introDescription={program.program_application_description} />  
            <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  program.program_admissions.map((program_admission, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeAdmissionCategory === program_admission.program_admission_tab_title ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveAdmissionCategoryFunc(program_admission.program_admission_tab_title)}>
                      <span className="relative">
                        {program_admission.program_admission_tab_title}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={ApplicationProcess}>
                {
                    program.program_admissions.map((program_admission, key) => (
                    <div className={`w-full ${activeAdmissionCategory === program_admission.program_admission_tab_title ? '' : 'hidden'}`} key={key}>
                      {
                        program_admission.program_admission_tabs.map((program_admission_tab, sub_key) => (
                          <div className={`w-full py-5 ${program_admission.program_admission_tabs.length !== (sub_key + 1) ? 'border-b' : '' } border-[#800000] `} key={sub_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAdmissionProcessAccordian(sub_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{program_admission_tab.program_admission_tab_content_caption}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAdmissionProcess === sub_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAdmissionProcess === sub_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  {parser(nl2br(program_admission_tab.program_admission_tab_content_description))}
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
        program.program_second_sliders && program.program_second_sliders.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5">
        <Intro
        introCaption={program.program_second_slider_caption}
        introDescription={program.program_second_slider_description} />
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
              program.program_second_sliders.map((slider, key) => (
                <SwiperSlide className="w-full" title={slider.program_slider_caption} key={key}>
                  <Image src={slider.program_slider_image} alt={slider.program_slider_caption} width={1920} height={1080} className="object-cover w-full" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        )
        }
      {
        program.program_testimonials && program.program_testimonials.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5">
          <Intro
          introTitle={program.program_testimonial_title}
          introCaption={program.program_testimonial_caption}
          introDescription={program.program_testimonial_description} />
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
              program.program_testimonials.map((testimonial, key) => (
                <SwiperSlide key={key} className="w-full bg-[#FFCC33] py-5 lg:py-10 px-5 lg:px-10">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="md:w-[30%] lg:w-[20%] flex justify-center">
                      {
                        testimonial.program_testimonial_image && (
                          <Image src={testimonial.program_testimonial_image} alt={testimonial.program_testimonial_name} width={200} height={300} className="object-cover w-full h-full" />
                        )
                      }
                    </div>
                    <div className="md:w-[70%] lg:w-[80%] flex flex-col gap-10 mt-auto">
                      {
                        testimonial.program_testimonial_about && (
                          <p className="text-[#4E4E4E] leading-loose text-sm lg:text-lg">{parser(nl2br(testimonial.program_testimonial_about))}</p>
                        )
                      }
                      <div className="flex flex-col gap-2 font-semibold text-center md:text-left">
                        {
                          testimonial.program_testimonial_content && (
                            <h3 className="text-lg lg:text-2xl">{parser(nl2br(testimonial.program_testimonial_content))}</h3>
                          )
                        }
                        <span>- {testimonial.program_testimonial_name}</span>
                        {
                          testimonial.program_testimonial_designation && (
                            <span className="text-sm lg:text-lg">{parser(nl2br(testimonial.program_testimonial_designation))}</span>
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
      <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${program.program_footer_section_image})`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
            <h3 className="text-2xl lg:text-4xl font-georgia">{program.program_footer_section_caption}</h3>
            <p>{parser(nl2br(program.program_footer_section_description))}</p>
            <ul className="flex gap-5">
              {
                program.program_application_link && (
                  <li>
                    <Link href={program.program_application_link} target="_blank" className="bg-[#800000] px-5 py-2">Apply Now</Link>
                  </li>
                )
              }
              <li>
                <Link href={`${basePath}contact-us`} className="bg-[#800000] px-5 py-2">Contact Us</Link>
              </li>
            </ul>
          </div>
      </div>
      <div className={`fixed top-0 left-0 bg-black/40 z-10 w-full h-screen flex justify-center md:items-center transition-all duration-300 ${downloadBrochurePopUp ? 'scale-y-100': 'scale-y-0'}`}>
        <div className="bg-white px-10 py-10 relative w-full lg:w-1/2">
        <IoMdClose size={40} className="absolute top-0 right-0 lg:top-5 lg:right-5 cursor-pointer" onClick={() => updateDownloadBrochurePopUp(false)}/>
          <form className="flex flex-col gap-5" autoComplete="off">
            <h2 className="font-georgia text-xl">Fill The Form To Download Brochure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full text-[#4E4E4E]">
              <div className="relative">
                <input type="text" name="download_brochure_name" className="border-b border-[#800000] py-1 w-full" placeholder="Enter Name" />
                <div className="error">
                  <span></span>
                </div>
              </div>
              <div className="relative">
                <input type="text" name="download_brochure_email_id" className="border-b border-[#800000] py-1 w-full" placeholder="Enter Email Address" />
                <div className="error">
                  <span></span>
                </div>
              </div>
              <div className="relative">
                <input type="tel" name="download_brochure_mobile_number" maxLength={10} className="border-b border-[#800000] py-1 w-full pr-20" placeholder="Enter Mobile Number" inputMode="numeric" />
                <span className="absolute right-0 underline text-burgundy cursor-pointer">Get OTP</span>
                <div className="error">
                  <span></span>
                </div>
              </div>
              <div className="relative">
                <input type="number" name="download_brochure_otp" min={0} maxLength={6} className="border-b border-[#800000] py-1 w-full appearance-none no-spinner" placeholder="Enter OTP" inputMode="numeric" />
                <div className="error">
                  <span></span>
                </div>
              </div>
              <div className="relative">
                <select name="download_brochure_state_name" className="border-b border-[#800000] py-2 w-full" value={activeState} onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {
                    indian_states && indian_states.length > 0 && indian_states.map((indian_state, key) => (
                      <option value={indian_state} key={key}>{indian_state}</option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 bottom-5 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <div className="error">
                  <span></span>
                </div>
              </div>
              <div className="relative">
                <select name="download_brochure_city_name" className="border-b border-[#800000] py-2 w-full" >
                  <option value="">Select City</option>
                  {
                    indian_cities && indian_cities.length > 0 && indian_cities.map((indian_city, key) => (
                      <option value={indian_city} key={key}>{indian_city}</option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 bottom-5 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <div className="error">
                  <span></span>
                </div>
              </div>
              <div className="relative">
                <select name="download_brochure_graduation_status" className="border-b border-[#800000] py-2 w-full" >
                  <option value="">Select Graduation Status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Last Year Of Graduation">In Last Year Of Graduation</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 bottom-5 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <div className="error">
                  <span></span>
                </div>
              </div>
            </div>
            <label htmlFor="download_brochure_terms" className="flex gap-2 items-start cursor-pointer">
              <div className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#800000] bg-white flex items-center justify-center transition-all duration-150">
                <input type="checkbox" id="download_brochure_terms" className="peer sr-only" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <FaCheck className="hidden peer-checked:block h-4 w-4 text-[#800000]" />
              </div>
              <p>I agree to receive information by signing up on N. L. Dalmia Institute of Management Studies and Research *</p>
            </label>
            
            <button type="submit" className="cursor-pointer text-white bg-[#800000] w-fit px-5 py-1">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}