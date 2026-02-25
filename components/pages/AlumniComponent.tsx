"use client"

import Image from "next/image";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

export default function Alumni() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Once A Dalmian, Always A Dalmian"
      banner_description="Our alumni are the pride of N.L.Dalmia, They’re trailblazer, entrepreneurs and industry leaders shaping the global business landscape. This page celebrate their journey, offers networking opportunities and invites every alumnus to stay connected"/>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Our Alumni" introCaption="Wall Of Fame" />
        
      </div>
      <Footer />
    </main>
    </>
  );
}