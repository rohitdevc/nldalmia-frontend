"use client"

import Link from "next/link";
import Script from "next/script";

import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaPhone, FaCheck } from "react-icons/fa6";
import { isEmail, isEmpty, isMobilePhone, isLength } from 'validator';

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { useHeader } from '@/context/HeaderContext'

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import { Banner as BannerProps, IntroProps } from "@/types/api";
import { useRef, useEffect, useState } from "react";
import { EnquiryForm, EnquiryFormErrors } from "@/types/forms";

type PageProps = {
  banner: BannerProps
  introduction: IntroProps
  enquiry_reasons: string[]
};

export default function ContactUsComponent({ banner, introduction, enquiry_reasons }: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const [showLoader, updateLoader] = useState(false);

  const { setHeaderProps } = useHeader();

  const [ip, setIp] = useState("");
  const [errors, setErrors] = useState<EnquiryFormErrors>({});

  const [checked, setChecked] = useState(true);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setErrors({});
  }

  const [enquiryForm, setEnquiryForm] = useState<EnquiryForm>({
      enquiry_reason: '',
      enquiry_full_name: '',
      enquiry_email_id: '',
      enquiry_mobile_number: '',
      enquiry_city_name: '',
      enquiry_remarks: '',
      ip_address: ip,
      referer_url: ''
  });

  useEffect(() => {
      async function getIp() {
        const res = await fetch(basePath + "api/ip");
        const data = await res.json();
        setIp(data.ip);
      }

      setHeaderProps({
        showLoader
      })
  
      getIp();
  }, []);

  const enquiryReasonRef = useRef<HTMLSelectElement | null>(null);
  const enquiryFullNameRef = useRef<HTMLInputElement | null>(null);
  const enquiryEmailIDRef = useRef<HTMLInputElement | null>(null);
  const enquiryMobileNumberRef = useRef<HTMLInputElement | null>(null);  
  const enquiryCityNameRef = useRef<HTMLInputElement | null>(null);
  const enquiryRemarksRef = useRef<HTMLInputElement | null>(null);

  const handleEnquiryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setEnquiryForm(prev => ({ ...prev, [name]: value}));
    
    setErrors(prev => ({ ...prev, [name]: undefined}));
  }

  const refMap: Record<string, React.RefObject<HTMLInputElement | HTMLSelectElement | null>> = {
    enquiry_reason: enquiryReasonRef,
    enquiry_full_name: enquiryFullNameRef,
    enquiry_email_id: enquiryEmailIDRef,
    enquiry_mobile_number: enquiryMobileNumberRef,
    enquiry_city_name: enquiryCityNameRef,
    enquiry_remarks: enquiryRemarksRef
  };

  const enquiryFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isEmpty(enquiryForm.enquiry_reason)) {
            setErrors({enquiry_reason: 'Please select a reason'});
            enquiryReasonRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_full_name)) {
            setErrors({enquiry_full_name: 'Please enter your full name'});
            enquiryFullNameRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_email_id)) {
            setErrors({enquiry_email_id: 'Please enter your email address'});
            enquiryEmailIDRef.current?.focus();
            return;
        } else if(!isEmail(enquiryForm.enquiry_email_id)) {
            setErrors({enquiry_email_id: 'Please enter a valid email address'});
            enquiryEmailIDRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_mobile_number)) {
            setErrors({enquiry_mobile_number: 'Please enter your mobile number'});
            enquiryMobileNumberRef.current?.focus();
            return;
        } else if(!isLength(enquiryForm.enquiry_mobile_number, { min: 10, max: 10 })) {
            setErrors({enquiry_mobile_number: 'Please enter a valid mobile number'});
            enquiryMobileNumberRef.current?.focus();
            return;
        } else if(!isMobilePhone(enquiryForm.enquiry_mobile_number, 'en-IN')) {
            setErrors({enquiry_mobile_number: 'Please enter a valid mobile number'});
            enquiryMobileNumberRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_city_name)) {
            setErrors({enquiry_city_name: 'Please select your city name'});
            enquiryCityNameRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_remarks)) {
            setErrors({enquiry_remarks: 'Please select your graduation status'});
            enquiryRemarksRef.current?.focus();
            return;
        }

        if(!checked) {
          setErrors({enquiry_terms: 'You have not agreed to our terms and conditions'});
          return;
        }

        updateLoader(true);

        await new Promise(resolve => setTimeout(resolve, 0));

        enquiryForm.ip_address = ip;

        enquiryForm.referer_url = window.location.href;

        const response = await fetch(basePath + "api/contact-us/enquiry", {
          method: "POST",
          body: JSON.stringify(enquiryForm),
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
          setEnquiryForm({
              enquiry_reason: '',
              enquiry_full_name: '',
              enquiry_email_id: '',
              enquiry_mobile_number: '',
              enquiry_city_name: '',
              enquiry_remarks: '',
              ip_address: '',
              referer_url: window.location.href
          })

          if(!data.result) return false;

          alert(data.result.display_message);
        }
    }

  return (
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
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:justify-between px-5 md:px-15 xl:px-30 pb-10 text-burgundy">
        {/*
        <div className="npf_wgts w-full lg:w-[48%]" data-height="100%" data-w="fadeebfca2b2228b1b843986d291aa08"></div>
        
        <Script src="https://widgets.in5.nopaperforms.com/emwgts.js" strategy="afterInteractive" />
        */}
        
        <form id="enquiry_form" className="flex flex-col gap-10 w-full lg:w-[48%]" onSubmit={enquiryFormSubmit} autoComplete="off">
          <div className="relative">
            <select name="enquiry_reason" ref={enquiryReasonRef} onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_reason}>
              <option value="">Select A Reason For Enquiry</option>
              {
                enquiry_reasons && enquiry_reasons.length > 0 && enquiry_reasons.map((enquiry_reason, key) => (
                  <option value={enquiry_reason} key={key}>{enquiry_reason}</option>
                ))
              }
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <IoIosArrowDown size={25} />
            </div>
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="text-red h-1 pt-1">
              <span className={`text-xs transition-all duration-200 ${errors.enquiry_reason ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_reason}</span>
            </div>
          </div>
          <div className="relative">
            <input type="text" name="enquiry_full_name" placeholder="Enter Your Full Name" className="w-full" ref={enquiryFullNameRef} onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_full_name} />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="text-red h-1 pt-1">
              <span className={`text-xs transition-all duration-200 ${errors.enquiry_full_name ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_full_name}</span>
            </div>
          </div>
          <div className="relative">
            <input type="email" name="enquiry_email_id" placeholder="Enter Your Email Address" className="w-full" ref={enquiryEmailIDRef} onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_email_id} />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="text-red h-1 pt-1">
              <span className={`text-xs transition-all duration-200 ${errors.enquiry_email_id ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_email_id}</span>
            </div>
          </div>
          <div className="relative">
            <input type="tel" inputMode="numeric" name="enquiry_mobile_number" placeholder="Enter Your Mobile Number" className="w-full" ref={enquiryMobileNumberRef} onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_mobile_number} maxLength={10} />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="text-red h-1 pt-1">
              <span className={`text-xs transition-all duration-200 ${errors.enquiry_mobile_number ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_mobile_number}</span>
            </div>
          </div>
          <div className="relative">
            <input type="text" name="enquiry_city_name" placeholder="Enter Your City of Residence" className="w-full" ref={enquiryCityNameRef} onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_city_name} />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="text-red h-1 pt-1">
              <span className={`text-xs transition-all duration-200 ${errors.enquiry_city_name ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_city_name}</span>
            </div>
          </div>
          <div className="relative">
            <input type="text" name="enquiry_remarks" placeholder="Enter Your Remarks" className="w-full" ref={enquiryRemarksRef} onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_remarks} />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="text-red h-1 pt-1">
              <span className={`text-xs transition-all duration-200 ${errors.enquiry_remarks ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_remarks}</span>
            </div>
          </div>
          <label htmlFor="enquiry_terms" className="flex gap-2 items-start cursor-pointer">
            <div className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#800000] bg-white flex items-center justify-center transition-all duration-150">
              <input type="checkbox" id="enquiry_terms" className="peer sr-only" checked={checked} onChange={(e) => handleCheckbox(e)} />
              <FaCheck className="hidden peer-checked:block h-4 w-4 text-[#800000]" />
            </div>
            <span>I authorise N.L.Dalmia Institute of Management Studies and Research and its representatives to contact me with updates and notifications via email, SMS, WhatsApp and call. This will override the registry on DND/NDNC.</span>
          </label>
          <div className="text-red h-1 pt-1 -mt-4 mb-2">
            <span className={`text-xs transition-all duration-200 ${errors.enquiry_terms ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_terms}</span>
          </div>
          <button type="submit" className="cursor-pointer bg-[#800000] text-white w-25 py-1">Submit</button>
        </form>
        <div className="flex flex-col gap-10 w-full lg:w-[48%]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11819.740141891483!2d72.86741968343927!3d19.27176639693743!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b119eba09105%3A0xf92e0d09d89208e3!2sN.%20L.%20Dalmia%20College%20of%20Arts%2C%20Commerce%20%26%20Science!5e0!3m2!1sen!2sin!4v1771137798786!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 w-full h-100"></iframe>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <span className="w-15 h-15 border border-[#800000] flex justify-center items-center shrink-0">
                <PiMapPinAreaFill size={30} />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-georgia text-xl font-semibold">Address</h2>
                <p>N.L.Dalmia Institute of Management Studies & Research Srishti,<br />
                Sector 1, Mira Road (East),<br />
                Mumbai Metropolitan Region 401107,<br />
                Maharashtra, India</p>
              </div>
            </div>
            <div className="flex gap-5">
              <span className="w-15 h-15 border border-[#800000] flex justify-center items-center shrink-0">
                <IoMdMail size={30} />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-georgia text-xl font-semibold">Email Us</h2>
                <Link href="mailto:info.institute@nldalmia.edu.in">info.institute@nldalmia.edu.in</Link>
              </div>
            </div>
            <div className="flex gap-5">
              <span className="w-15 h-15 border border-[#800000] flex justify-center items-center shrink-0">
                <FaPhone size={30} />
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-georgia text-xl font-semibold">Call Us</h2>
                <Link href="tel:+916389222555">+91 6389222555</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}