"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useRef } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlayCircle } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import scrollWithOffset from "@/components/scrollWithOffset";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Faculty } from '@/types/api';

type PageProps = {
  faculty: Faculty
}

export default function FacultyDetails({faculty}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const [openAccordian, toggleAccordian] = useState(1);

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <div className="w-full px-5 lg:px-30 flex flex-col gap-5 pt-45 bg-[#FFCC33] text-black">
        <Link className="flex items-center gap-1 font-semibold" href={`${basePath}faculty`}>
          <RiArrowLeftSLine size={35} />
          <span>Back</span>
        </Link>
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FFCC33] py-5 lg:py-0 lg:pb-5">
          <div className="w-sm h-100 overflow-hidden rounded-full lg:-mb-15 z-5">
              <Image src={`${basePath}images/about-us/management/seema-saini.png`} alt="Prof. Dr. Seema Saini" width={300} height={300} className="w-full h-full object-cover" />                          
          </div>
          <div className="flex flex-col gap-5">
              <h2 className="font-georgia text-xl">Prof. Dr. Seema Saini</h2>
              <h3 className="font-georgia text-xl">CEO & Acting Director, N. L. Dalmia Educational Society</h3>
              <h3 className="font-georgia text-xl">PGDM-Marketing, Class of 2011</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="flex flex-col gap-2">
                  <h3 className="font-georgia text-sm">Areas Of Expertise</h3>
                  <p className="text-[#4E4E4E]">Strategy, Innovation, Entrepreneurship</p>
              </div>
              <div className="flex flex-col gap-2">
                  <h3 className="font-georgia text-sm">Email</h3>
                  <p className="text-[#4E4E4E]"><Link href="mailto:seemasaini@nldalmia.in">seemasaini@nldalmia.in</Link></p>
              </div>
              <div className="flex flex-col gap-2">
                  <h3 className="font-georgia text-sm">Courses</h3>
                  <p className="text-[#4E4E4E]">Entrepreneurship and innovation strategy, Strategy in Innovation Ecosystems</p>
              </div>
              <div className="flex flex-col gap-2">
                  <h3 className="font-georgia text-sm">Linked In</h3>
                  <p className="text-[#4E4E4E]"><Link href="https://www.linkedin.com" target="_blank">https://www.linkedin.com</Link></p>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-5 lg:px-20 py-5 lg:py-15 z-1">
          <div className={`w-full py-5 border-b border-[#800000] `}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAccordian(1)}>
                <div className="flex gap-5 justify-center items-center">
                  <h2 className="font-georgia text-xl">Bio</h2>
                </div>
                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAccordian === 1 ? "rotate-180" : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAccordian === 1 ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="text-[#4E4E4E] university_description">
                  <p className="text-[#4E4E4E] text-sm leading-loose">Dr. Seema Saini is the CEO and Acting Director of N. L. Dalmia Educational Society, which encompasses three leading institutions: N. L. Dalmia Institute of Management Studies and Research, N. L. Dalmia High School, and N. L. Dalmia College of Arts, Commerce & Science. With over 30 years of experience in the field of education, she is a visionary academic leader committed to innovation, excellence, and community development. Under her leadership, the society undertakes extensive CSR efforts, including the sustainable upliftment of Kondgaon Village.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-full py-5 border-b border-[#800000] `}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAccordian(2)}>
                <div className="flex gap-5 justify-center items-center">
                  <h2 className="font-georgia text-xl">Qualifications</h2>
                </div>
                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAccordian === 2 ? "rotate-180" : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAccordian === 2 ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="text-[#4E4E4E] university_description">
                  <ul className="flex flex-col gap-0 text-[#4E4E4E] text-sm list-disc list-inside">
                    <li>Ph.D. in Economics, University of Mumbai</li>
                    <li>Master’s in Economics, University of Mumbai</li>
                    <li>Master’s in Human Resource Development, Xavier University, Cincinnati, USA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-full py-5 border-b border-[#800000] `}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAccordian(3)}>
                <div className="flex gap-5 justify-center items-center">
                  <h2 className="font-georgia text-xl">Experience</h2>
                </div>
                <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAccordian === 3 ? "rotate-180" : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAccordian === 3 ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="text-[#4E4E4E] university_description">
                  <ul className="text-[#4E4E4E] text-sm list-disc list-inside">
                    <li>Ph.D. in Economics, University of Mumbai</li>
                    <li>Master’s in Economics, University of Mumbai</li>
                    <li>Master’s in Human Resource Development, Xavier University, Cincinnati, USA</li>
                  </ul>
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