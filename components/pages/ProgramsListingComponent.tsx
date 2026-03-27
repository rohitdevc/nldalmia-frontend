"use client"

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

import ProgramBlock from "../ProgramBlock";
import parser, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import nl2br from "nl2br";

import { IoMdCheckmarkCircleOutline, IoIosArrowDown } from "react-icons/io";
import { Ticker, Banner as BannerProps, IntroProps, ProgramsBlocks, ProgramListing } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  program_blocks: ProgramsBlocks[]
  scholarship_introduction: IntroProps
  programs: ProgramListing[]
};

export default function ProgramsListingComponent({ticker, banner, introduction, program_blocks, scholarship_introduction, programs}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const options: HTMLReactParserOptions  = {
    replace: (domNode: any) => {
      if (domNode.name === "ul") {
        return (
          <ul className="flex flex-col gap-3">
            {domToReact(domNode.children as any, options)}
          </ul>
        );
      }

      if (domNode.name === "li") {
        return (
          <li className="flex items-center gap-1">
            <IoMdCheckmarkCircleOutline size={15} />
            {domToReact(domNode.children as any, options)}
          </li>
        );
      }
    },
  };

  let firstProgramSet: ProgramListing | null = null;
  let secondProgramSet: ProgramListing[] = [];
  let thirdProgramSet: ProgramListing[] = [];

  if(programs.length > 0) {
    firstProgramSet = programs[0];
  }

  if(programs.length > 1) {
    secondProgramSet = programs.slice(1, 3);
  }

  if(programs.length > 3) {
    thirdProgramSet = programs.slice(3);
  }

  const career_paths: string[] = [];

  programs.forEach((program) => {
    if(program.program_career_paths && Array.isArray(program.program_career_paths) && program.program_career_paths.length > 0) {
      program.program_career_paths.forEach((program_career_path) => {
        if(!career_paths.includes(program_career_path)) {
          career_paths.push(program_career_path);
        }
      })
    }
  })

  const preferred_durations = [
    '2 Years',
    '3 Years',
    '4 Years'
  ]

  const eligibilties = [
    'CAT',
    'XAT',
    'GMAT'
  ]

  const specializations = [
    'Option 1',
    'Option 2',
    'Option 3'
  ]

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
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description} />
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20">
        {
          programs && programs.length && (
            <>
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="relative">
                <select className="px-2" title="Career Path">
                  <option value="">Select Your Career Path</option>
                  {
                    career_paths && career_paths.length > 0 && career_paths.map((career_path, key) => (
                      <option value={career_path} key={key}>{career_path}</option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
              <div className="relative">
                <select className="px-2" title="Preferred Duration">
                  <option value="">Select Your Preferred Duration</option>
                  {
                    preferred_durations && preferred_durations.length > 0 && preferred_durations.map((preferred_duration, key) => (
                      <option value={preferred_duration} key={key}>{preferred_duration}</option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
              <div className="relative">
                <select className="px-2" title="Specialization">
                  <option value="">Select Specialization</option>
                  {
                    specializations && specializations.length > 0 && specializations.map((specialization, key) => (
                      <option value={specialization} key={key}>{specialization}</option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
              <div className="relative">
                <select className="px-2" title="Eligibility">
                  <option value="">Eligibility</option>
                  {
                     eligibilties && eligibilties.length > 0 && eligibilties.map((eligibilty, key) => (
                      <option value={eligibilty} key={key}>{eligibilty}</option>
                    ))
                  }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <IoIosArrowDown size={25} />
                </div>
                <span className="w-full absolute left-0 -bottom-1 h-[0.5px] bg-[#800000]"></span>
              </div>
            </form>
            {
              firstProgramSet && (
                <ProgramBlock program={firstProgramSet} index={0} />
              )
            }
            {
              program_blocks && program_blocks.length > 0 && (
              <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${program_blocks[0].program_block_image})`}}>
                  <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
                  <div className="flex flex-col relative w-full h-full justify-center xl:items-end">
                    <div className="flex flex-col gap-8 program_block">
                      <p className="font-georgia leading-normal lg:leading-snug text-2xl lg:text-4xl">{program_blocks[0].program_block_title}</p>
                      <p className="text-xl">{program_blocks[0].program_block_caption}</p>
                      {
                        parser(program_blocks[0].program_block_description, options)
                      }
                      {
                        program_blocks[0].program_block_application_link && (
                          <Link href={program_blocks[0].program_block_application_link} target="_blank" className="bg-[#800000] text-white text-center py-2 w-25">Apply Now</Link>
                        )
                      }
                    </div>
                  </div>
              </div>
            )
            }
            {
              secondProgramSet && secondProgramSet.length > 0 && secondProgramSet.map((program, key) => (
                <ProgramBlock program={program} key={key} index={(key + 1)} />
              ))
            }
            {
              program_blocks && program_blocks.length > 1 && (
              <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${program_blocks[1].program_block_image})`}}>
                  <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
                  <div className="flex flex-col relative w-full h-full justify-center">
                    <div className="flex flex-col gap-5">
                      <p className="font-georgia leading-normal lg:leading-snug text-2xl lg:text-4xl">{program_blocks[1].program_block_title}</p>
                      <p className="text-xl">{program_blocks[1].program_block_caption}</p>
                      {
                        parser(program_blocks[1].program_block_description, options)
                      }
                      {
                        program_blocks[1].program_block_application_link && (
                          <Link href={program_blocks[1].program_block_application_link} target="_blank" className="bg-[#800000] text-white text-center py-2 w-25">Apply Now</Link>
                        )
                      }
                    </div>
                  </div>
              </div>
              )
            }
            {
              thirdProgramSet && thirdProgramSet.length > 0 && thirdProgramSet.map((program, key) => (
                <ProgramBlock program={program} key={key} index={(key + 1)} />
              ))
            }
            </>
          )
        }
      </div>
      {
        scholarship_introduction && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
          <Intro
          introTitle={scholarship_introduction.intro_title}
          introCaption={scholarship_introduction.intro_caption} />
          <div className="flex flex-col md:flex-row gap-10 md:mt-10">
              <div className="w-full lg:w-[40%] overflow-hidden relative cursor-pointer">
                {
                  scholarship_introduction.intro_image && (
                    <Image src={scholarship_introduction.intro_image} width={800} height={750} alt={scholarship_introduction.intro_title} className="object-cover w-full h-full" />
                  )
                }
              </div>
              <div className="w-full lg:w-[60%] flex flex-col gap-5">
                {
                  scholarship_introduction.intro_description && (
                    <p className="text-[#4E4E4E] text-sm leading-loose">{parser(nl2br(scholarship_introduction.intro_description))}</p>
                  )
                }
                {
                  scholarship_introduction.intro_link && (
                    <Link href={scholarship_introduction.intro_link} className="bg-[#800000] text-white text-center py-2 w-25">Scholarship</Link>
                  )
                }
              </div>
            </div>
        </div>
        )
      }
      
      <Footer />
    </main>
    </>
  );
}