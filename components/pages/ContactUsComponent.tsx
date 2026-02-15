"use client"

import Link from "next/link";

import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaPhone, FaCheck } from "react-icons/fa6";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

export default function ContactUsComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const enquiry_reasons = ['General', 'Admissions'];

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Get In Touch With Us"
      banner_description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet."/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Let’s Talk" introCaption="Whether you’re a prospective student, parent Recruiter or academic partner - we’re here to help" introDescription="If you have any questions regarding programs, facilities or have requests or suggestions to make, feel free to give us a call or fill out the form below" />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:justify-between px-5 md:px-15 xl:px-30 pb-10 text-burgundy">
        <form id="enquiry_form" className="flex flex-col gap-10 w-full lg:w-[48%]">
          <div className="relative">
            <select name="enquiry_reason">
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
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative">
            <input type="text" name="enquiry_full_name" placeholder="Enter Your Full Name" className="w-full" />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative">
            <input type="email" name="enquiry_email_address" placeholder="Enter Your Email Address" className="w-full" />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative">
            <input type="tel" inputMode="numeric" name="enquiry_mobile_number" placeholder="Enter Your Mobile Number" className="w-full" />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative">
            <input type="text" name="enquiry_city_name" placeholder="Enter Your City of Residence" className="w-full" />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <div className="relative">
            <input type="text" name="enquiry_comments" placeholder="Enter Your Remarks" className="w-full" />
            <span className="w-full absolute left-0 top-8 h-[0.5px] bg-[#800000]"></span>
            <div className="error">
              <span></span>
            </div>
          </div>
          <label htmlFor="enquiry_terms" className="flex gap-2 items-start cursor-pointer">
            <div className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#800000] bg-white flex items-center justify-center transition-all duration-150">
              <input type="checkbox" id="enquiry_terms" className="peer sr-only" checked />
              <FaCheck className="hidden peer-checked:block h-4 w-4 text-[#800000]" />
            </div>
            <span>I authorise N.L.Dalmia Institute of Management Studies and Research and its representatives to contact me with updates and notifications via email, SMS, WhatsApp and call. This will override the registry on DND/NDNC.</span>
          </label>
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
      <Footer />
    </main>
    </>
  );
}