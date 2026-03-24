"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MdArrowOutward } from "react-icons/md";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import nl2br from "nl2br";
import parser from 'html-react-parser';
import { Ticker, Banner as BannerProps, IntroProps, Objectives, Institutes, NLDESManagement, NLDESSocialResponsibility, NLDESCareers } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  objectives_introduction: IntroProps
  objectives: Objectives[]
  institutes_introduction: IntroProps
  institutes: Institutes[]
  management_introduction: IntroProps
  management: NLDESManagement[]
  social_responsibility_introduction: IntroProps
  social_responsibilities: NLDESSocialResponsibility[]
  careers_introduction: IntroProps
  careers: NLDESCareers[]
  footer: IntroProps
};

export default function NLDESComponent({ticker, banner, introduction, objectives_introduction, objectives, institutes_introduction, institutes, management_introduction, management, social_responsibility_introduction, social_responsibilities, careers_introduction, careers, footer}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const [activeBlock, updateActiveBlock] = useState(-1);

  const handleBlockClick = (sequence: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveBlock(sequence);
      }
    }
  }

  const management_categories: string[] = []
  const management_data: Record<string, NLDESManagement[]> = {};

  management.forEach((management_row) => {
    if(!management_categories.includes(management_row.management_category_title)) {
      management_categories.push(management_row.management_category_title);
    }

    if (!management_data[management_row.management_category_title]) {
      management_data[management_row.management_category_title] = [];
    }

    management_data[management_row.management_category_title].push(management_row);
  })

  const [activeManagementTeamTab, updateActiveManagementTeamTab] = useState(0);

  const ManagementTeams = useRef<HTMLDivElement>(null);

  const updateActiveManagementTeamTabFunc = (management_category_id: number): void => {
    updateActiveManagementTeamTab(management_category_id);

    if(ManagementTeams.current) {
      const offset = 200;
      const elementTop = ManagementTeams.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const wrappers = document.querySelectorAll(".nldes_description");
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      const lists = wrapper.querySelectorAll("ul");
      const list_inside = wrapper.querySelectorAll("li");
      const headings = wrapper.querySelectorAll("h3");

      lists.forEach((ul) => {
        ul.classList.add(
          "flex",
          "flex-col",
          "gap-4",
          "text-sm",
          "list-disc",
          "text-[#4E4E4E]",
          "px-4"
        );
      });

      list_inside.forEach((li) => {
        li.classList.add(
          "list-item",
          "flex",
          "flex-col",
          "gap-2"
        );
      });

      headings.forEach((h3) => {
        h3.classList.add(
          "font-georgia",
          "font-bold"
        );
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
      {
        introduction && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <div className="flex flex-col lg:flex-row gap-5 w-full lg:items-center justify-between">
            <div className="lg:w-1/2 flex flex-col gap-5">
              <h2 className="font-georgia text-xl lg:text-3xl">{introduction.intro_title}</h2>
              <p className="text-sm leading-loose text-[#707070]">{parser(nl2br(introduction.intro_caption))}</p>
              {
                introduction.intro_description && (
                  <div className="w-full nldes_description">
                    {parser(introduction.intro_description)}
                  </div>
              )}
            </div>
            <div className="lg:w-1/2">
              <Image src={`${basePath}images/about-us/intro-img.png`} alt="MDP" width={600} height={350} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
        )
      }
      {
        objectives && objectives.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <CenterIntro
          introTitle={objectives_introduction.intro_title}
          introCaption={objectives_introduction.intro_caption}
          introDescription={objectives_introduction.intro_description} />
          <div className="flex flex-wrap gap-15 justify-center w-full">
            {
              objectives.map((objective, key) => (
                <div className="flex flex-col w-sm md:w-75 lg:w-sm text-center border-[0.5px] border-[#800000]" key={key}>
                  <h2 className="font-georgia text-xl bg-[#FFCC33] w-full border-b-[0.5px] border-[#800000] py-2">{objective.objective_caption}</h2>
                  {
                    objective.objective_description && (
                      <p className="px-5 py-5 min-h-50 text-burgundy">{parser(nl2br(objective.objective_description))}</p>
                    )
                  }
                </div>
              ))
            }
          </div>
        </div>
      )
      }
      {
        institutes && institutes.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
          <Intro
          introTitle={institutes_introduction.intro_title}
          introCaption={institutes_introduction.intro_caption}
          introDescription={institutes_introduction.intro_description} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
            {
              institutes.map((institute, key) => (
                <div className="bg-no-repeat bg-cover bg-center flex justify-center px-5 pb-5 h-100 lg:h-80 relative group text-white" style={{backgroundImage: `url(${institute.institute_thumbnail})`}} onClick={handleBlockClick(key)} key={key}>
                  <div className="absolute inset-0 bg-black/30 left-0 top-0 z-0"></div>
                  <h2 className="mt-auto font-georgia text-2xl relative">{institute.institute_caption}</h2>
                  <div className={`absolute inset-0 top-0 left-0 flex flex-col gap-5 bg-[#800000] transition-all duration-300 scale-y-0 group-hover:scale-y-100 px-5 py-5 ${activeBlock === key ? 'scale-y-100': ''}`}>
                    <h2 className="font-georgia text-2xl">{institute.institute_caption}</h2>
                    {
                      institute.institute_description && (
                        <p className="text-sm leading-loose">{parser(nl2br(institute.institute_description))}</p>
                      )
                    }
                    {
                      institute.institute_link && (
                        <Link href={institute.institute_link} target="_blank" className="underline">Explore Institute</Link>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )
      }
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro
        introTitle={management_introduction.intro_title}
        introCaption={management_introduction.intro_caption}
        introDescription={management_introduction.intro_description} />
        <ul className="flex flex-col sm:flex-row gap-7 text-burgundy justify-center items-center">
            {
              management_categories.map((management_category, key) => (
                <li className={`group relative cursor-pointer transition-all duration-300 ${key === activeManagementTeamTab ? 'text-burgundy text-2xl font-normal': 'text-[#4E4E4E] text-lg'}`} key={key} onClick={() => updateActiveManagementTeamTabFunc(key)}>
                  <span>{management_category}</span>
                  <span className={`absolute left-0 -bottom-1 bg-[#800000] h-[0.5px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${key === activeManagementTeamTab ? 'scale-x-100': ''} `}></span>
                </li>
              ))
            }
          </ul>
          <div className="w-full" ref={ManagementTeams}>
          {
              management_categories.map((management_category, key) => (
              <div className={`w-full ${key === activeManagementTeamTab ? 'block' : 'hidden'}`} key={key}>
                <div className="flex gap-3 mb-5">
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_team_${key}slider_prev`}>
                    <BsArrowLeftShort size={20} />
                  </span>
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_team_${key}slider_next`}>
                    <BsArrowRightShort size={20} />
                  </span>
                </div>
                <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: `.management_team_${key}slider_prev`, nextEl: `.management_team_${key}slider_next`}} breakpoints={{768: {slidesPerView: 2, spaceBetween: 30}, 1024: {slidesPerView: 3, spaceBetween: 30}, 1280: {slidesPerView: 4, spaceBetween: 30}}} >
                  {
                    management_data[management_category].map((management_row, sub_key) => (
                    <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col w-full" key={sub_key}>
                      <div className="flex flex-col gap-2 items-center p-5 text-center">
                        <div className="w-30">
                          {
                            management_row.management_image && (
                              <Image src={management_row.management_image} alt={management_row.management_name} width={150} height={150} className="object-cover w-full h-full" />
                            )
                          }
                        </div>
                        <h2 className="text-xl font-georgia">{management_row.management_name}</h2>
                        {
                          management_row.management_designation && (
                            <p className="text-burgundy leading-loose">{parser(nl2br(management_row.management_designation))}</p>
                          )
                        }
                      </div>
                      {
                        management_row.management_link && (
                          <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={management_row.management_link}>View Profile <MdArrowOutward size={20} /></Link>
                        )
                      }
                    </SwiperSlide>
                  ))
                  }
                </Swiper>
              </div>
          ))}
          </div>
      </div>
      {
        social_responsibilities && social_responsibilities.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
          <Intro
          introTitle={social_responsibility_introduction.intro_title}
          introCaption={social_responsibility_introduction.intro_caption}
          introDescription={social_responsibility_introduction.intro_description} />
          <div className={`w-full`}>
            <div className="flex gap-3 mb-5">
              <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer social_responsibility_slider_prev`}>
                <BsArrowLeftShort size={20} />
              </span>
              <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer social_responsibility_slider_next`}>
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: `.social_responsibility_slider_prev`, nextEl: `.social_responsibility_slider_next`}} >
              {
                social_responsibilities.map((social_responsibility, key) => (
                <SwiperSlide key={key}>
                  <div className="w-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 lg:order-2">
                      {
                        social_responsibility.social_responsibility_image && (
                          <Image src={social_responsibility.social_responsibility_image} alt={social_responsibility.social_responsibility_caption} width={500} height={300} className="object-cover w-full h-full" />
                        )
                      }
                    </div>
                    <div className={`flex flex-col gap-5 px-5 py-10 w-full lg:w-1/2 bg-[#FFCC33]`}>
                      <h2 className="font-georgia text-lg">{social_responsibility.social_responsibility_caption}</h2>
                      {
                        social_responsibility.social_responsibility_description && (
                          <p className="text-sm leading-loose">{parser(nl2br(social_responsibility.social_responsibility_description))}</p>
                        )
                      }
                    </div>
                  </div>
                </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
      {
        careers && careers.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5">
          <Intro
          introTitle={careers_introduction.intro_title}
          introCaption={careers_introduction.intro_caption}
          introDescription={careers_introduction.intro_description} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
            {
              careers.map((career, key) => (
                <div className="bg-no-repeat bg-cover bg-center flex justify-center px-5 pb-5 h-100 lg:h-80 relative group text-white" style={{backgroundImage: `url(${career.career_thumbnail})`}} onClick={handleBlockClick(key)} key={key}>
                  <div className="absolute inset-0 bg-black/30 left-0 top-0 z-0"></div>
                  <h2 className="mt-auto font-georgia text-2xl relative">{career.career_caption}</h2>
                  <div className={`absolute inset-0 top-0 left-0 flex flex-col gap-5 bg-[#800000] transition-all duration-300 scale-y-0 group-hover:scale-y-100 px-5 py-5 ${activeBlock === key ? 'scale-y-100': ''}`}>
                    <h2 className="font-georgia text-2xl">{career.career_caption}</h2>
                    {
                      career.career_description && (
                        <p className="text-sm leading-loose">{parser(nl2br(career.career_description))}</p>
                      )
                    }
                    {
                      career.career_link && (
                        <Link href={career.career_link} target="_blank" className="underline">Explore Institute</Link>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        )
      }
      {
        footer && (
        <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${footer.intro_image})`}}>
            <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
            <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
              <h3 className="text-2xl lg:text-4xl font-georgia">{footer.intro_caption}</h3>
              {
                footer.intro_description && (
                  <p className="text-sm leading-loose lg:w-3xl">{parser(nl2br(footer.intro_description))}</p>
                )
              }
            </div>
        </div>
      )
      }
      <Footer />
    </main>
    </>
  );
}