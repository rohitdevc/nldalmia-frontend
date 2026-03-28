"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { Faculty } from '@/types/api';

type PageProps = {
  faculty: Faculty
}

export default function FacultyDetails({ faculty}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const [openAccordian, toggleAccordian] = useState(0);

  useEffect(() => {
      const wrappers = document.querySelectorAll(".faculty_description");
      if (!wrappers.length) return;
  
      wrappers.forEach((wrapper) => {
        const headings = wrapper.querySelectorAll("h4");
        const paragraphs = wrapper.querySelectorAll("p");
        const lists = wrapper.querySelectorAll("ul");
  
        headings.forEach((h4) => {
          h4.classList.add(
            "font-georgia"
          );
        });

        paragraphs.forEach((p) => {
          p.classList.add(
            "text-[#4E4E4E]",
            "text-sm",
            "leading-loose"
          );
        });

        lists.forEach((ul) => {
          ul.classList.add(
            "list-disc",
            "list-inside"
          );
        });
      })
  }, []);

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <div className="w-full px-5 lg:px-30 flex flex-col gap-5 pt-45 bg-[#FFCC33] text-black">
        <Link className="flex items-center gap-1 font-semibold" href={`${basePath}faculty`}>
          <RiArrowLeftSLine size={35} />
          <span>Back</span>
        </Link>
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FFCC33] py-5 lg:py-0 lg:pb-5">
          <div className="w-60 h-100 overflow-hidden rounded-full lg:-mb-15 z-5">
            {
              faculty.faculty_thumbnail && (
                <Image src={faculty.faculty_thumbnail} alt={faculty.faculty_name} width={300} height={300} className="w-full h-full object-cover" />
              )
            }
          </div>
          <div className="flex flex-col gap-5">
              <h2 className="font-georgia text-xl">{faculty.faculty_name}</h2>
              <h3 className="font-georgia text-xl">{parser(nl2br(faculty.faculty_designation))}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                  faculty.faculty_areas_of_expertise && (
                    <div className="flex flex-col gap-2">
                      <h3 className="font-georgia text-sm">Areas Of Expertise</h3>
                      <p className="text-[#4E4E4E]">{faculty.faculty_areas_of_expertise}</p>
                  </div>
                  )
                }
                {
                  faculty.faculty_email_address && (
                    <div className="flex flex-col gap-2">
                      <h3 className="font-georgia text-sm">Email</h3>
                      <p className="text-[#4E4E4E]"><Link href={`mailto:${faculty.faculty_email_address}`}>{faculty.faculty_email_address}</Link></p>
                  </div>
                  )
                }
                {
                  faculty.faculty_courses && (
                    <div className="flex flex-col gap-2">
                      <h3 className="font-georgia text-sm">Courses</h3>
                      <p className="text-[#4E4E4E]">{faculty.faculty_courses}</p>
                    </div>
                  )
                }
                {
                  faculty.faculty_linkedin_url && (
                    <div className="flex flex-col gap-2">
                      <h3 className="font-georgia text-sm">Linked In</h3>
                      <p className="text-[#4E4E4E]"><Link href={faculty.faculty_linkedin_url} target="_blank">{faculty.faculty_linkedin_url}</Link></p>
                    </div>
                  )
                }
              </div>
          </div>
        </div>
      </div>
      {
        faculty.faculty_accordians && faculty.faculty_accordians.length > 0 && (
          <div className="flex flex-col gap-4 px-5 lg:px-20 py-5 lg:py-15 z-1">
            {
              faculty.faculty_accordians.map((faculty_accordian, key) => (
              <div className={`w-full py-5 ${(key + 1 != faculty.faculty_accordians.length) ? 'border-b' : '' } border-[#800000]`} key={key}>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row justify-between gap-5 w-full cursor-pointer" onClick={() => toggleAccordian(key)}>
                    <div className="flex gap-5 justify-center items-center">
                      <h2 className="font-georgia text-xl">{faculty_accordian.faculty_accordian_caption}</h2>
                    </div>
                    <IoIosArrowDown size={20} className={`transition-all duration-300 ${openAccordian === key ? "rotate-180" : ''}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-5 ${openAccordian === key ? "max-h-[fit-content] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="text-[#4E4E4E] faculty_description">
                      {
                        faculty_accordian.faculty_accordian_description && (
                          parser(faculty_accordian.faculty_accordian_description)
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
            }
        </div>
        )
      }
    </main>
  );
}