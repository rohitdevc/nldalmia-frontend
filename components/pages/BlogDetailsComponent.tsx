"use client"

import Link from "next/link";
import Image from "next/image";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { MdArrowOutward } from "react-icons/md";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Ticker, Blog } from "@/types/api";

type PageProps = {
  ticker: Ticker,
  blog: Blog,
  blog_url_slug: string;
}

export default function BlogDetailsComponent({ticker, blog, blog_url_slug}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  return (
    <>
    <Header ticker_api={ticker} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <div className="pt-50 flex flex-col gap-10 justify-center text-center px-5 md:px-15 xl:px-30 py-5">
        <h1 className="font-georgia text-3xl lg:text-5xl">Building The Power Of Network With Alumni Connections At N. L. Dalmia Institute</h1>
        <Image src={`${basePath}images/blog/banner.png`} alt="Blog" width={1920} height={900} className="w-full border border-[#800000]" />
        <ul className="flex gap-2">
          <li>June 20, 2025</li>
          <li>|</li>
          <li>Author: Prof. Radhika Iyer</li>
        </ul>
      </div>
      <div className="px-5 md:px-15 xl:px-30 py-5 leading-loose">
        <p>Networking is the key to professional success. If you are a student seeking to begin your career or a working professional seeking new prospects your network is important. At N. L. Dalmia Institute alumni networks are a solid base for students to learn, develop and thrive in their chosen profession. A student’s path does not simply stop after graduating. It opens beyond school corridors into a larger universe of options. It is here that comes into operation the role of alumni relations. Alumni of N. L. Dalmia Institute are now established heads in premier corporations in industries positioning themselves well in a pool to act as resources for guidance as well as advancement through mentorship.</p>
        <p>1. Industry Experts as Mentors Alumni who have traversed the same corridors and battled the same issues are the best placed to mentor students. Interactive sessions workshops and individualised mentorships by the N. L. Dalmia Institute alumni ensure hands-on knowledge that enables students to successfully move from academia to industry. Being able to access a mentor with knowledge of the changing trends of the industry can go a long way in defining the career of a student. This individualised mentoring is what distinguishes N. L. Dalmia Institute of Management Studies and Research from other management schools.</p>
        <p>1. Industry Experts as Mentors Alumni who have traversed the same corridors and battled the same issues are the best placed to mentor students. Interactive sessions workshops and individualised mentorships by the N. L. Dalmia Institute alumni ensure hands-on knowledge that enables students to successfully move from academia to industry. Being able to access a mentor with knowledge of the changing trends of the industry can go a long way in defining the career of a student. This individualised mentoring is what distinguishes N. L. Dalmia Institute of Management Studies and Research from other management schools.</p>
      </div>
      <div className="flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <h2 className="font-georgia text-3xl">Related Blogs</h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
          <div className="flex flex-col gap-10 w-full lg:w-[55%]">
            {
            [...Array(2)].map((_, i) => (
              <div className="flex flex-col md:flex-row gap-7.5" key={i}>
                <div className="w-full md:w-175">
                  <Image src={`${basePath}images/blog/blog-1.png`} alt="Blog" width={600} height={600} className="object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-georgia text-lg">From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates</h2>
                  <ul className="flex gap-10 text-[#4E4E4E] text-sm">
                    <li>October 30, 2025</li>
                    <li>
                      <Link href={`/blog/mba`}>MBA</Link>
                    </li>
                  </ul>
                  <p className="text-[#4E4E4E] text-sm">You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.</p>
                  <Link href="/blog/mba/from-data-to-decisions" className="text-burgundy flex gap-1 items-center border-b w-fit text-sm">Learn More <MdArrowOutward size={15} /></Link>
                </div>
              </div>
            ))
          }
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-7.5 w-full lg:w-[45%]">
            <div className="w-full md:w-175 lg:w-full">
              <Image src={`${basePath}images/blog/blog-1.png`} alt="Blog" width={600} height={600} className="object-cover" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-georgia text-lg">From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates</h2>
              <ul className="flex gap-10 text-[#4E4E4E] text-sm">
                <li>October 30, 2025</li>
                <li>
                  <Link href={`/blog/mba`}>MBA</Link>
                </li>
              </ul>
              <p className="text-[#4E4E4E] text-sm">You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.</p>
              <Link href="/blog/mba/from-data-to-decisions" className="text-burgundy flex gap-1 items-center border-b w-fit text-sm">Learn More <MdArrowOutward size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}