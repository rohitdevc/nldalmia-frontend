"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import IndianStatesCities from "indian-states-cities-list";
import { isEmail, isEmpty } from 'validator';

import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AdmissionProgramSlider } from "../AdmissionProgramSlider";
import { AdmissionProcessInformation, AdmissionPrograms, Banner as BannerProps, FAQs, FinancialPartner, IntroProps, Ticker,  } from "@/types/api";
import { AdmissionDownloadBrochureFormErrors, AdmissionDownloadBrochure } from "@/types/forms";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  admission_programs: AdmissionPrograms[]
  admissions_process_introduction: IntroProps
  admission_process: AdmissionProcessInformation[]
  admissions_scholarship_introduction: IntroProps
  admissions_scholarship_table: IntroProps
  admissions_tuition_introduction: IntroProps
  admissions_tuition_table: IntroProps
  admissions_finance_introduction: IntroProps
  financial_assistance_partners: FinancialPartner[]
  admissions_faqs_introduction: IntroProps
  admissions_faqs: FAQs[]
  admissions_brochure_introduction: IntroProps
};

export default function AdmissionComponent({ticker, banner, introduction, admission_programs, admissions_process_introduction, admission_process, admissions_scholarship_introduction, admissions_scholarship_table, admissions_tuition_introduction, admissions_tuition_table, admissions_finance_introduction, financial_assistance_partners, admissions_faqs_introduction, admissions_faqs, admissions_brochure_introduction }: PageProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const [ip, setIp] = useState("");
    const [showLoader, updateLoader] = useState(false);
    const [errors, setErrors] = useState<AdmissionDownloadBrochureFormErrors>({});

    const [admissionDownloadBrochureForm, setAdmissionDownloadBrochureForm] = useState<AdmissionDownloadBrochure>({
      brochure_download_email_id: '',
      ip_address: ip
    });
    
    useEffect(() => {
      async function getIp() {
        const res = await fetch(basePath + "api/ip");
        const data = await res.json();
        setIp(data.ip);
      }

      getIp();
    }, []);

    const brochureDownloadEmailIDRef = useRef<HTMLInputElement | null>(null);

    const handleAdmissionDownloadBrochureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setAdmissionDownloadBrochureForm(prev => ({ ...prev, [name]: value}));
      
      setErrors(prev => ({ ...prev, [name]: undefined}));
    }

    const refMap: Record<string, React.RefObject<HTMLInputElement | null>> = {
      brochure_download_email_id: brochureDownloadEmailIDRef
    };

    const admissionDownloadBrochureSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isEmpty(admissionDownloadBrochureForm.brochure_download_email_id)) {
            setErrors({brochure_download_email_id: 'Please enter your email address'});
            brochureDownloadEmailIDRef.current?.focus();
            return;
        } else if(!isEmail(admissionDownloadBrochureForm.brochure_download_email_id)) {
            setErrors({brochure_download_email_id: 'Please enter a valid email address'});
            brochureDownloadEmailIDRef.current?.focus();
            return;
        }

        updateLoader(true);

        admissionDownloadBrochureForm.ip_address = ip;

        const response = await fetch(basePath + "api/admissions/download-brochure", {
          method: "POST",
          body: JSON.stringify(admissionDownloadBrochureForm),
          headers: {
            "Content-Type": "application/json"
          }
        })

        if (!response.ok) {
          updateLoader(false);

          const err = await response.json();

          if(err.error) {
            let error_response = JSON.parse(err.error);

            if(typeof error_response === "object" && error_response !== null && !Array.isArray(error_response)) {
              error_response = Object.values(error_response);

              const { path, msg } = error_response[0][0];

              const error_message = msg;
              const error_path = path;

              if(refMap[error_path]?.current) {
                
                refMap[error_path]?.current.focus();
              }
              setErrors({[error_path]: error_message});
            }

            return false;
          }
        }

        const data = await response.json();

        if(data.success) {
          updateLoader(false);

          setAdmissionDownloadBrochureForm({
              brochure_download_email_id: '',
              ip_address: ''
          })

          if(!data.result) return false;

          if(data.result.brochure_pdf_link) window.location.href = data.result.brochure_pdf_link;
        }
  }

    const [activeState, setActiveState] = useState<string>("");
    const [indian_cities, setIndianCities] = useState<string[]>([]);

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

    const indian_states = IndianStatesCities.INDIAN_STATES_AND_UT_ARRAY;

    const [checked, setChecked] = useState(true);

    const [downloadBrochurePopUp, updateDownloadBrochurePopUp] = useState(false);
    
    const handleDownloadBrochure = () => {
      updateDownloadBrochurePopUp(true);
    };

    const admission_categories: string[] = [];
  
    const admission_process_data: Record<string, AdmissionProcessInformation[]> = {};
  
    admission_process.forEach((admission_process_row) => {
      if (!admission_process_data[admission_process_row.information_category_title]) {
        admission_process_data[admission_process_row.information_category_title] = [];
      }

      if(!admission_categories.includes(admission_process_row.information_category_title)) {
        admission_categories.push(admission_process_row.information_category_title);
      }
  
      admission_process_data[admission_process_row.information_category_title].push(admission_process_row);
    })
  
    const [activeAdmissionCategory, updateActiveAdmissionCategory] = useState(admission_categories.length > 0 ? admission_categories[0] : '');
    const [openAdmissionProcess, toggleAdmissionProcessAccordian] = useState(0);
  
    const ApplicationProcess = useRef<HTMLDivElement | null>(null);
  
    const updateActiveAdmissionCategoryFunc = (information_category_title: string): void => {
      updateActiveAdmissionCategory(information_category_title);
      toggleAdmissionProcessAccordian(0);
      scrollWithOffset(ApplicationProcess);
    }

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

    const faq_categories: string[] = [];
  
    const faqs_data: Record<string, FAQs[]> = {};
  
    admissions_faqs.forEach((faq) => {
      if (!faqs_data[faq.faq_category_title]) {
        faqs_data[faq.faq_category_title] = [];
      }

      if(!faq_categories.includes(faq.faq_category_title)) {
        faq_categories.push(faq.faq_category_title);
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

  return (
    <>
    <Header ticker_api={ticker} admissionPage={true} onDownloadBrochureClick={handleDownloadBrochure} showLoader={showLoader} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description} />
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
            
            <Swiper className="w-full mt-10" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.program_slider_prev', nextEl: '.program_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 20 }, 1080: { slidesPerView: 3, spaceBetween: 20 } }} >
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
                  <p className="leading-snug text-sm md:text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                  <ul className="flex gap-5">
                    <li>
                      <Link href="" className="bg-white text-burgundy px-5 py-2 text-sm md:text-lg">PGDM Office</Link>
                    </li>
                    <li>
                      <Link href="" className="border border-white text-white px-5 py-2 text-sm md:text-lg">Global MBA Office</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className="font-georgia text-xl lg:text-2xl">Start Your Application Process</h2>
                  <p className="leading-snug text-sm md:text-lg">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                  <ul className="flex gap-5">
                    <li>
                      <Link href="" className="bg-white text-burgundy px-5 py-2 text-sm md:text-lg">Apply Now</Link>
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
          <Intro
          introTitle={admissions_process_introduction.intro_title}
          introCaption={admissions_process_introduction.intro_caption}
          introDescription={admissions_process_introduction.intro_description} />
          <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
              <ul className="md:w-[25%] lg:w-[20%] pr-5 flex flex-col gap-3 lg:gap-5 text-burgundy justify-center items-center md:justify-start md:items-start">
                {
                  admission_categories.map((admission_category, key) => (
                    <li className={`group cursor-pointer transition-all duration-300 ${activeAdmissionCategory === admission_category ? 'text-2xl' : 'text-lg'}`} key={key} onClick={() => updateActiveAdmissionCategoryFunc(admission_category)}>
                      <span className="relative">
                        {admission_category}
                        <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeAdmissionCategory === admission_category ? 'scale-x-100' : ''}`}></span>
                      </span>
                    </li>
                  ))
                }
              </ul>
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={ApplicationProcess}>
                {
                    admission_categories.map((admission_category, key) => (
                    <div className={`w-full ${activeAdmissionCategory === admission_category ? '' : 'hidden'}`} key={key}>
                      {
                        admission_process_data[admission_category].map((admission_process, admission_process_key) => (
                          <div className={`w-full py-5 ${admission_process_data[admission_category].length !== (admission_process_key + 1) ? 'border-b' : '' } border-[#800000] `} key={admission_process_key}>
                            <div className="flex flex-col gap-3 lg:px-10">
                              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAdmissionProcessAccordian(admission_process_key)}>
                                <div className="flex gap-5 justify-center items-center">
                                  <h2 className="font-georgia text-xl">{admission_process.information_caption}</h2>
                                </div>
                                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAdmissionProcess === admission_process_key ? "rotate-180" : ''}`} />
                              </div>
                              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAdmissionProcess === admission_process_key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="text-[#4E4E4E] university_description">
                                  {parser(admission_process.information_description)}
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
        admissions_scholarship_table && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro
            introTitle={admissions_scholarship_introduction.intro_title}
            introCaption={admissions_scholarship_introduction.intro_caption}
            introDescription={admissions_scholarship_introduction.intro_description} />
            <h2 className="font-georgia text-3xl">{admissions_scholarship_table.intro_caption}</h2>
            <div className="responsive-table">
              {parser(admissions_scholarship_table.intro_description)}
            </div>
        </div>
      )
      }
      {
        admissions_tuition_table && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
            <Intro
            introTitle={admissions_tuition_introduction.intro_title}
            introCaption={admissions_tuition_introduction.intro_caption}
            introDescription={admissions_tuition_introduction.intro_description} />
            <h2 className="font-georgia text-3xl">{admissions_tuition_table.intro_caption}</h2>
            <div className="responsive-table">
              {parser(admissions_tuition_table.intro_description)}
            </div>
        </div>
        )
      }
      {
        financial_assistance_partners && financial_assistance_partners.length > 0 && (
          <div className="w-full px-5 lg:px-30 py-5 md:px-15 flex flex-col gap-5">
            <CenterIntro
            introTitle={admissions_finance_introduction.intro_title}
            introCaption={admissions_finance_introduction.intro_caption}
            introDescription={admissions_finance_introduction.intro_description} />
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer financial_assistance_partner_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer financial_assistance_partner_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full" slidesPerView={2} spaceBetween={10} modules={[Navigation]} navigation={{prevEl: '.financial_assistance_partner_slider_prev', nextEl: '.financial_assistance_partner_slider_next'}} breakpoints={{768: { slidesPerView: 3, spaceBetween: 20 }, 1080: { slidesPerView: 4, spaceBetween: 20 } }} >
              {
                financial_assistance_partners.map((financial_assistance_partner, key) => (
                  <SwiperSlide title={financial_assistance_partner.partner_name} key={key}>
                    <div className="flex flex-col text-center gap-5">
                      <div className="border-[0.5px] border-[#800000] flex justify-center items-center h-50">
                        {
                          financial_assistance_partner.partner_logo && (
                            <Image src={financial_assistance_partner.partner_logo} alt={financial_assistance_partner.partner_name} width={200} height={200} className="w-50" />
                          )
                        }
                      </div>
                      <h2 className="text-xl font-georgia">{financial_assistance_partner.partner_name}</h2>
                      {
                        financial_assistance_partner.partner_pdf && (
                          <Link href={financial_assistance_partner.partner_pdf} target="_blank" className="flex gap-1 justify-center items-center">Know More <MdArrowOutward size={15} /></Link>
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
        faq_categories && faq_categories.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={admissions_faqs_introduction.intro_title}
          introCaption={admissions_faqs_introduction.intro_caption}
          introDescription={admissions_faqs_introduction.intro_description} />
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
              <div className="md:w-[75%] lg:w-[80%] lg:border-l-[0.5px] border-[#800000]" ref={FAQs}>
                {
                    faq_categories.map((faq_category, key) => (
                    <div className={`w-full ${activeFAQCategory === faq_category ? '' : 'hidden'}`} key={key}>
                      {
                        faqs_data[faq_category].map((faqs, faq_key) => (
                          <div className={`w-full py-5 ${faqs_data[faq_category].length !== (faq_key + 1) ? 'border-b' : '' } border-[#800000] `} key={faq_key}>
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
      {
        admissions_brochure_introduction && (
        <div className="w-full relative bg-cover bg-center bg-no-repeat text-white h-[75vh] flex justify-center items-center text-center" style={{backgroundImage: `url(${admissions_brochure_introduction.intro_image})`}}>
            <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
            <form className="flex flex-col gap-5 py-20 relative px-5 w-full lg:w-xl justify-center items-center text-center" autoComplete="off" onSubmit={admissionDownloadBrochureSubmit}>
              <h3 className="text-2xl lg:text-4xl font-georgia">{admissions_brochure_introduction.intro_title}</h3>
              <p className="text-sm leading-loose">{parser(nl2br(admissions_brochure_introduction.intro_description))}</p>
              <input type="email" name="brochure_download_email_id" placeholder="Enter Your Email Address" className="w-xs lg:w-lg border-b py-2 border-white outline-none" onChange={handleAdmissionDownloadBrochureChange} value={admissionDownloadBrochureForm.brochure_download_email_id} ref={brochureDownloadEmailIDRef} />
              <div className="text-white h-2">
                <span className={`text-xs transition-all duration-200 ${errors.brochure_download_email_id ? "opacity-100" : "opacity-0"}`}>{errors.brochure_download_email_id}</span>
              </div>
              <button type="submit" className="bg-[#800000] px-2 py-2 cursor-pointer">Submit & Download</button>
            </form>
        </div>
        )
      }
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
    </main>
    </>
  );
}