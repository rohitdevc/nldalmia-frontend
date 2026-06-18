"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import parser from 'html-react-parser';
import nl2br from "nl2br";

import { MdArrowOutward } from "react-icons/md";
import { Banner as BannerProps, IntroProps, Reports } from "@/types/api";
import { useSanitizeTable } from "@/hooks/useSanitizeTable";

type PageProps = {
  banner: BannerProps
  introduction: IntroProps
  scholarship_merit: IntroProps
  scholarship_inclusivity: IntroProps
  scholarship_second_year: IntroProps
  reports_introduction: IntroProps
  reports: Reports[]
};

import { useHeader } from "@/context/HeaderContext";

export default function ScholarshipComponent({ banner, introduction, scholarship_merit, scholarship_inclusivity, scholarship_second_year, reports_introduction, reports}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const { setHeaderProps } = useHeader()

  useEffect(() => {
      setHeaderProps({})
  }, [])
  
  useSanitizeTable();

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
banner_image_mobile={banner.banner_image_mobile}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_youtube_video_id={banner.banner_youtube_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description} />
        {
          introduction.intro_image && (
            <div className="w-full">
              <Image src={introduction.intro_image} alt={introduction.intro_image_alt} width={1920} height={900} className="object-cover w-full h-full" />
            </div>
          )
        }
      </div>
      <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-30 py-5">
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
      <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-30 py-5">
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
      <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-30 py-5">
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
      <div className="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={reports_introduction.intro_title}
        introCaption={reports_introduction.intro_caption}
        />
        <div className="flex flex-col lg:flex-row gap-10">
          {
            reports_introduction.intro_image && (
              <div className="w-full lg:w-400">
                <Image src={reports_introduction.intro_image} alt={reports_introduction.intro_image_alt} width={500} height={300} className="object-cover w-full h-full" />
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
            <Link href="mailto:admissions@nldalmia.edu.in&Subject=Enquiry for Scholarships" className="w-fit px-3 py-2 text-white bg-[#800000]">Know More</Link>
          </div>
        </div>
      </div>
    </main>    
  );
}