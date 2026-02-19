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
import CenterIntro from "@/components/CenterIntro";

export default function AwardsComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="In The Spotlight"
      banner_description="Discover how N.L.Dalmmia Institute Of Management Studies and Research makes headlines, earns recognition, and share its voice across platforms from newsrooms to industry reports"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro introTitle="Media And Newsroom" introCaption="At NLDIMSR, We Believe In Leading With Impact And It Shows In The Stories We Tell And The Stories Told About Us." introDescription="Celebrate the milestone that define our legacy-from institutional accolades to individual excellence across academia, innovation and leadership" />
      </div>
      <Footer />
    </main>
    </>
  );
}