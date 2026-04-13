"use client"

import Link from "next/link";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Banner from "@/components/Banner";
import ResearchPublicationTabs from "@/components/ResearchPublicationTabs";

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { Banner as BannerProps, Reports } from "@/types/api";

type PageProps = {
  banner: BannerProps
  reports: Reports[]
};

export default function ReportsComponent({ banner, reports}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const report_years: number[] = [];

  reports.forEach((report) => {
    if(!report_years.includes(new Date(report.report_date).getFullYear())) {
      report_years.push(new Date(report.report_date).getFullYear());
    }
  })

  report_years.sort((a, b) => b - a);

  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setYear("");
  };
  
  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setSearch("");
  };

  const filteredReports = reports?.filter((report) => {
    if (search) {
      const q = search.toLowerCase();
      
      return (
        report.report_title.toLowerCase().includes(q) || report.report_authors.toLowerCase().includes(q) || new Date(report.report_date).getFullYear().toString().includes(q)
      );
    }
    
    if (year) {
      return new Date(report.report_date).getFullYear().toString() === year;
    }
    
    return true;
  });

  const page_name = "Reports";

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <ResearchPublicationTabs page_name={page_name}  />
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between px-5 md:px-15 xl:px-30 py-10">
        <div className="relative lg:w-[45%] border-b border-[#800000] text-black">
            <input type="search" placeholder="Search by title or author" className="peer py-2 focus:outline-none w-full placeholder-shown:pl-5 focus:pl-0 placeholder:text-black" value={search} onChange={handleSearch} />
            <CiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:hidden peer-not-placeholder-shown:hidden" size={18} />
        </div>
        <div className="relative lg:w-[45%] border-b border-[#800000]">
          <select className="px-2 w-full outline-none appearance-none" title="Year" value={year} onChange={handleYear}>
            <option value="">Search By Year</option>
            {
              report_years && report_years.length > 0 && report_years.map((year, key) => (
                <option value={year} key={key}>{year}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <IoIosArrowDown size={25} />
          </div>
        </div>
      </div>
      {
        filteredReports && filteredReports.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-5 lg:px-5 xl:px-30 py-10">
            {
              filteredReports.map((report, key) => {
                return (
                  <div className="flex flex-col gap-4 justify-center items-center text-center bg-white text-burgundy border-[0.5px] border-[#800000] py-5 px-3 group transition-all duration-300 hover:bg-[#800000] hover:!text-white" title={report.report_title} key={key}>
                    <h2 className="font-georgia text-xl">{parser(nl2br(report.report_title))}</h2>
                    <h3 className="font-georgia text-xl">{parser(nl2br(report.report_authors))}</h3>
                    {
                      report.report_description && (
                        <p className="leading-loose text-sm">{parser(nl2br(report.report_description))}</p>
                      )
                    }
                    {
                      report.report_link && (
                        <Link href={report.report_link} target="_blank" className="w-fit text-white bg-[#800000] px-3 py-1 group-hover:bg-white group-hover:text-[#800000]">View More</Link>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        )
      }
    </main>
  );
}