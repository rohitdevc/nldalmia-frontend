"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { Banner as BannerProps, IntroProps, CareersOurValues, CareerMilestones, CareersAchievements, CareersVacancies, CareersApplication } from "@/types/api";

type PageProps = {
  banner: BannerProps,
  introduction: IntroProps
  careers_our_values_introduction: IntroProps
  careers_our_values: CareersOurValues[]
  careers_milestones: CareerMilestones[]
  careers_achievements_introduction: IntroProps
  careers_achievements: CareersAchievements[]
  careers_vacancies_introduction: IntroProps
  careers_vacancies: CareersVacancies[],
  careers_application_introduction: IntroProps
  applications: CareersApplication[]
  careers_program_application: IntroProps
};

export default function CareerComponent({banner, introduction, careers_our_values_introduction, careers_our_values, careers_milestones, careers_achievements_introduction, careers_achievements, careers_vacancies_introduction, careers_vacancies, careers_application_introduction, applications, careers_program_application}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const [showVacancyPopUp, updateVacancyPopUp] = useState(false);
  const [jobTitle, updateJobTitle] = useState('');
  const [jobDepartment, updateJobDepartment] = useState('');
  const [jobExperience, updateJobExperience] = useState('');
  const [jobDescription, updateJobDescription] = useState('');

  const updateVacancyPopUpFunc = (key: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if(careers_vacancies[key]) {
        const career_vacancy = careers_vacancies[key];

        updateJobTitle(career_vacancy.vacancy_title);
        updateJobDepartment(career_vacancy.vacancy_department);
        updateJobExperience(career_vacancy.vacancy_experience_required);
        updateJobDescription(career_vacancy.vacancy_description);

        updateVacancyPopUp(true);
      }
    }
  }

  useEffect(() => {
    const wrappers = document.querySelectorAll(".job_description");
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      const headings = wrapper.querySelectorAll("h4");
      const paragraphs = wrapper.querySelectorAll("p");

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
    })
  }, [jobDescription]);

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description}
        />
        {
          introduction.intro_image && (
          <div className="w-full">
            <Image src={introduction.intro_image} alt={introduction.intro_title} width={1920} height={900} className="object-cover" />
          </div>
        )
        }
        <CenterIntro
        introTitle={careers_our_values_introduction.intro_title}
        introCaption={careers_our_values_introduction.intro_caption}
        introDescription={careers_our_values_introduction.intro_description}
        />
        {
          careers_our_values && careers_our_values.length > 0 && ( 
          <div className="flex flex-wrap gap-10 lg:gap-25 justify-center items-center text-center lg:px-10 text-[#4E4E4E]">
            {
              careers_our_values.map((value, key) => value.our_value_icon && (
                <div className="flex flex-col gap-5 items-center w-35" key={key}>
                  <Image src={value.our_value_icon} alt={value.our_value_title} width={110} height={110} className="w-20" />
                  <h2 className="font-georgia text-xl">{value.our_value_title}</h2>
                </div>
              ))
            }
          </div>
        )
        }
      </div>
      {
        careers_milestones && careers_milestones.length > 0 && (
        <div className="w-full px-5 md:px-15 py-10">
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center bg-[#FFCC33] px-5 md:px-15 lg:px-30 py-10">
            {
              careers_milestones.map((milestone, key) => (
                <>
                <div className="flex flex-col gap-5 items-center text-center" key={key}>
                  <h2 className="text-3xl">{milestone.milestone_title}</h2>
                  <p className="text-[#4E4E4E] text-sm">{milestone.milestone_description}</p>
                </div>
                {
                  ((key + 1) !== careers_milestones.length) && (
                    <>
                    <span className="h-10 w-[0.5px] bg-[#4E4E4E] hidden lg:block"></span>
                    <span className="w-10 h-[0.5px] bg-[#4E4E4E] lg:hidden"></span>
                    </>
                  )
                }
                </>
              ))
            }
          </div>
        </div>
      )
      }
      {
        careers_achievements && careers_achievements.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-5">
          <Intro
          introTitle={careers_achievements_introduction.intro_title}
          introCaption={careers_achievements_introduction.intro_caption}
          introDescription={careers_achievements_introduction.intro_description} />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer achievement_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.achievement_slider_prev', nextEl: '.achievement_slider_next'}} >
            {
              careers_achievements.map((careers_achievement, key) => (
              <SwiperSlide key={key}>
                <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10" style={{backgroundImage: `url(${careers_achievement.achievement_image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"></div>
                  <div className="flex flex-col gap-5 relative mt-auto">
                    <h2 className="font-georgia text-2xl">{careers_achievement.achievement_title}</h2>
                    <p>{careers_achievement.achievement_caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        )
      }
      {
        careers_vacancies && careers_vacancies.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-5">
          <Intro
          introTitle={careers_vacancies_introduction.intro_title}
          introCaption={careers_vacancies_introduction.intro_caption}
          introDescription={careers_vacancies_introduction.intro_description}
          />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer vacancies_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer vacancies_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.vacancies_slider_prev', nextEl: '.vacancies_slider_next'}} breakpoints={{640: {slidesPerView: 2, spaceBetween: 30}, 1024: {slidesPerView: 3, spaceBetween: 30}}} >
            {
              careers_vacancies.map((careers_vacancy, key) => (
              <SwiperSlide key={key}>
                <div className="w-full flex flex-col items-center text-center gap-3 py-7 px-5 border-1 border-[#E6CDCD]">
                  <h2 className="font-georgia text-lg">{careers_vacancy.vacancy_title}</h2>
                  <h3 className="font-georgia text-lg">{careers_vacancy.vacancy_department}</h3>
                  <h3 className="font-georgia text-lg">{careers_vacancy.vacancy_location}</h3>
                  <h3 className="font-georgia text-lg">{careers_vacancy.vacancy_experience_required}</h3>
                  {
                    careers_vacancy.vacancy_preview && (
                      <p className="leading-loose text-sm">{parser(nl2br(careers_vacancy.vacancy_preview))}</p>
                    )
                  }
                  <ul className="flex gap-5 mt-5 text-sm">
                    <li>
                      <Link href={`mailto:hr@nldalmia.edu.in?subject=${encodeURIComponent(`Application for vacancy of ${careers_vacancy.vacancy_title}`)}`} className="text-white bg-[#800000] px-2 py-1">Apply Now</Link>
                    </li>
                    <li>
                      <span className="text-burgundy bg-white border-[0.5px] border-[#800000] px-3 py-1 cursor-pointer" onClick={updateVacancyPopUpFunc(key)}>View Job Details</span>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
        )
      }
      {
        applications && applications.length > 0 && (
        <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-5">
          <Intro
          introTitle={careers_application_introduction.intro_title}
          introCaption={careers_application_introduction.intro_caption}
          introDescription={careers_application_introduction.intro_description}
          />
          <div className="flex flex-col lg:flex-row gap-10 py-5">
            {
              applications.map((application, key) => (
              <div className="flex flex-col py-7 px-10 gap-3 bg-[#FFCC33] items-center text-center" key={key}>
                <h2 className="font-georgia text-xl">{application.application_title}</h2>
                <p className="text-[#4E4E4E] leading-loose">{parser(nl2br(application.application_description))}</p>
              </div>
            ))
            }
          </div>
        </div>
        )
      }
      {
        careers_program_application && (
        <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20 mt-5" style={{backgroundImage: `url(${careers_program_application.intro_image})`}}>
            <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
            <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center">
              <h3 className="font-georgia leading-relaxed text-center text-2xl lg:text-4xl lg:w-3xl">{careers_program_application.intro_title}</h3>
              {
                careers_program_application.intro_link && (
                <Link href={careers_program_application.intro_link} className="flex items-center gap-2 px-3 py-1 bg-[#800000]" target="_blank">Apply Now</Link>
                )
              }
            </div>
        </div>
      )
      }
      <div className={`fixed top-0 w-full h-screen bg-white z-10 overflow-scroll transform transition-all duration-300 ease-in-out ${showVacancyPopUp ? 'translate-y-0 opacity-100': 'translate-y-full opacity-0'}`}>
        <div className="relative flex justify-center items-center py-10">
          <IoMdClose size={40} className="absolute top-0 right-0 lg:top-5 lg:right-5 cursor-pointer" onClick={() => updateVacancyPopUp(false)}/>
          <div className="flex flex-col gap-4 p-5 lg:p-10 border-[0.5px] border-[#D6ACAC] mx-5 lg:mx-0 lg:w-4xl job_description">
            <h2 className="font-georgia text-lg">{jobTitle}</h2>
            <h3 className="font-georgia text-lg">{jobDepartment}</h3>
            <h3 className="font-georgia text-lg">{jobExperience}</h3>
            {parser(jobDescription)}
            <Link href={`mailto:hr@nldalmia.edu.in?subject=${encodeURIComponent(`Application for vacancy of ${jobTitle}`)}`} className="text-white bg-[#800000] border-[0.5px] border-[#800000] w-25 text-center py-1 text-sm">Apply Now</Link>
          </div>
        </div>
      </div>
    </main>
  );
}