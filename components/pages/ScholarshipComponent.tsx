"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import parser from 'html-react-parser';
import nl2br from "nl2br";

import { MdArrowOutward } from "react-icons/md";
import { Ticker, Banner as BannerProps, IntroProps, Reports } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  scholarship_merit: IntroProps
  scholarship_inclusivity: IntroProps
  scholarship_second_year: IntroProps
  reports_introduction: IntroProps
  reports: Reports[]
};

export default function ScholarshipComponent({ticker, banner, introduction, scholarship_merit, scholarship_inclusivity, scholarship_second_year, reports_introduction, reports}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;
  
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

  return (
    <>
    <Header ticker_api={ticker} />
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
          introduction.intro_image && (
            <div className="w-full">
              <Image src={introduction.intro_image} alt="Scholarship" width={1920} height={900} className="object-cover w-full h-full" />
            </div>
          )
        }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro
          introCaption={scholarship_merit.intro_title}
          introDescription={scholarship_merit.intro_caption} />
          {
            scholarship_merit.intro_description && (
              <div className="responsive-table">
                {parser(scholarship_merit.intro_description)}
              </div>
            )
          }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro
          introCaption={scholarship_inclusivity.intro_title}
          introDescription={scholarship_inclusivity.intro_caption} />
          {
            scholarship_inclusivity.intro_description && (
              <div className="responsive-table">
                {parser(scholarship_inclusivity.intro_description)}
              </div>
            )
          }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro
          introCaption={scholarship_second_year.intro_title}/>
          {
            scholarship_second_year.intro_description &&  (
              <div className="responsive-table">
                {parser(scholarship_second_year.intro_description)}
              </div>
            )
          }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={reports_introduction.intro_title}
        introCaption={reports_introduction.intro_caption}
        />
        <div className="flex flex-col lg:flex-row gap-10">
          {
            reports_introduction.intro_image && (
              <div className="w-full lg:w-400">
                <Image src={reports_introduction.intro_image} alt={reports_introduction.intro_title} width={500} height={300} className="object-cover" />
              </div>
            )
          }
          <div className="flex flex-col gap-5">
            {
              reports_introduction.intro_description && (
                <p className="text-[#4E4E4E] leading-loose">{parser(nl2br(reports_introduction.intro_description))}</p>
              )
            }
            {
              reports && reports.length > 0 && (
              <ul className="flex flex-col gap-3 text-burgundy">
                {
                  reports.map((report, key) => report.report_pdf_file && (
                    <li key={key}>
                      <Link href={report.report_pdf_file} target="_blank" className="flex gap-1 items-center">{report.report_title} <MdArrowOutward size={15} /></Link>
                    </li>

                  ))
                }
              </ul>
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}