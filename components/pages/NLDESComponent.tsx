"use client"

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
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
import { Banner as BannerProps } from "@/types/api";

type PageProps = {
  banner: BannerProps;
};

export default function NLDESComponent({banner}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const company_objectives = [
    {
      company_objective_title: 'Our Vision',
      company_objective_caption: 'To be a world class management institute'
    },
    {
      company_objective_title: 'Our Philosophy',
      company_objective_caption: 'At NLDES, education goes beyond academics. Our philosophy is rooted in holistic development, continuous innovation and a deep sense of responsibility towards society. We believe in empowering learners to think critically, act ethically and contribute meaningfully to the communities they serve.'
    }
  ]

  const [activeBlock, updateActiveBlock] = useState(-1);

  const handleBlockClick = (sequence: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveBlock(sequence);
      }
    }
  }

  const management_teams = [
    {
      id: 1,
      management_team_title: 'Founders & Trustees'
    },
    {
      id: 2,
      management_team_title: 'Leadership Teams'
    }
  ]

  const [activeManagementTeamTab, updateActiveManagementTeamTab] = useState(1);

  const ManagementTeams = useRef<HTMLDivElement>(null);

  const updateActiveManagementTeamTabFunc = (management_team_tab_id: number): void => {
    updateActiveManagementTeamTab(management_team_tab_id);

    if(ManagementTeams.current) {
      const offset = 200;
      const elementTop = ManagementTeams.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:items-center justify-between">
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h2 className="font-georgia text-xl lg:text-3xl">The Foundation Behind The Dalmia Institutions</h2>
            <p className="text-sm leading-loose text-[#707070]">Established with a vision to make quality education accessible and impactful, the N.L.Dalmia Education Society serves as the governing body for a diverse group of academic institutions spanning school educations, management studies and emerging learning formats. Guided by strong values, academic integrity and a commitment to excellence, the society continues to nurture institutions that prepares learner for a rapidly evolving world.</p>
            <ul className="flex flex-col gap-4 text-sm list-disc list-outside text-[#4E4E4E] px-4">
              <li>
                <div className="flex flex-col gap-2">
                  <span className="font-georgia font-bold">40+ Years Of Educational Legacy</span>
                  <span>Building institutions rooted in academic excellence and values.</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <span className="font-georgia font-bold">6+ Educational Institutions & Initiatives</span>
                  <span>Spanning school education, higher education, management studies and online.</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <span className="font-georgia font-bold">10,000+ Learner Impacted</span>
                  <span>Across multiple disciplines, programs and generations.</span>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <span className="font-georgia font-bold">500+ Faculty And Staff Member</span>
                  <span>Dedicated educators, researchers and academic professionals.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <Image src={`${basePath}images/about-us/intro-img.png`} alt="MDP" width={600} height={350} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro introTitle="Lorem Ipsum" introCaption="Vision & Educational Philosophy" introDescription="Hear from our alumni and current students as they share their journey of transformation, Learning and success." />
        <div className="flex flex-wrap gap-15 justify-center w-full">
          {
            company_objectives && company_objectives.length > 0 && company_objectives.map((company_objective, key) => (
              <div className="flex flex-col w-sm md:w-75 lg:w-sm text-center border-[0.5px] border-[#800000]" key={key}>
                <h2 className="font-georgia text-xl bg-[#FFCC33] w-full border-b-[0.5px] border-[#800000] py-2">{company_objective.company_objective_title}</h2>
                <p className="px-5 py-5 min-h-50 text-burgundy">{company_objective.company_objective_caption}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro introTitle="Lorem Ipsum" introCaption="At N.L.Dalmia Educational Society, Education Is A Lifelong Commitment To Learners, Institutions And Society At Large." introDescription="Each institution under NLDES is guided by a shared commitment to academic excellence while serving distinct learner needs and educational stages." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          {
            [...Array(8)].map((_, i) => (
              <div className="bg-no-repeat bg-cover bg-center flex justify-center px-5 pb-5 h-100 lg:h-80 relative group text-white" style={{backgroundImage: `url(${basePath}images/nldes/about.webp)`}} onClick={handleBlockClick(i)} key={i}>
                <div className="absolute inset-0 bg-black/30 left-0 top-0 z-0"></div>
                <h2 className="mt-auto font-georgia text-2xl relative">N. L. Dalmia Institute of Management Studies and Research</h2>
                <div className={`absolute inset-0 top-0 left-0 flex flex-col gap-5 bg-[#800000] transition-all duration-300 scale-y-0 group-hover:scale-y-100 px-5 py-5 ${activeBlock === i ? 'scale-y-100': ''}`}>
                  <h2 className="font-georgia text-2xl">N. L. Dalmia Institute of Management Studies and Research</h2>
                  <p className="text-sm leading-loose">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</p>
                  <Link href="" target="_blank" className="underline">Explore Institute</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <CenterIntro introTitle="Lorem Ipsum" introCaption="Management Team" introDescription="The society is guided by an experienced leadership team committed to upholding academic standards, institutional integrity and long term vision across all its institutions." />
        <ul className="flex flex-col sm:flex-row gap-7 text-burgundy justify-center items-center">
            {
              management_teams.map((management_team_tab, key) => (
                <li className={`group relative cursor-pointer transition-all duration-300 ${management_team_tab.id === activeManagementTeamTab ? 'text-burgundy text-2xl font-normal': 'text-[#4E4E4E] text-lg'}`} key={key} onClick={() => updateActiveManagementTeamTabFunc(management_team_tab.id)}>
                  <span>{management_team_tab.management_team_title}</span>
                  <span className={`absolute left-0 -bottom-1 bg-[#800000] h-[0.5px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${management_team_tab.id === activeManagementTeamTab ? 'scale-x-100': ''} `}></span>
                </li>
              ))
            }
          </ul>
          <div className="w-full" ref={ManagementTeams}>
          {
              management_teams.map((management_team_tab, key) => (
              <div className={`w-full ${management_team_tab.id === activeManagementTeamTab ? 'block' : 'hidden'}`} key={key}>
                <div className="flex gap-3 mb-5">
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_team_${management_team_tab.id}slider_prev`}>
                    <BsArrowLeftShort size={20} />
                  </span>
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer management_team_${management_team_tab.id}slider_next`}>
                    <BsArrowRightShort size={20} />
                  </span>
                </div>
                <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: `.management_team_${management_team_tab.id}slider_prev`, nextEl: `.management_team_${management_team_tab.id}slider_next`}} breakpoints={{768: {slidesPerView: 2, spaceBetween: 30}, 1024: {slidesPerView: 3, spaceBetween: 30}, 1280: {slidesPerView: 4, spaceBetween: 30}}} >
                  {
                    [...Array(5)].map((_, i) => (
                    <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col w-full" key={key}>
                      <div className="flex flex-col gap-2 items-center p-5 text-center">
                        <Image src={`${basePath}images/about-us/management/seema-saini.png`} alt="Prof. Dr. Seema Saini" width={150} height={150} className="w-30" />
                        <h2 className="text-xl font-georgia">Prof. Dr. Seema Saini</h2>
                        <p className="text-burgundy leading-loose">Chairman, N.L. Dalmia Education society</p>
                      </div>
                      <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href="">View Profile <MdArrowOutward size={20} /></Link>
                      
                    </SwiperSlide>
                  ))
                  }
                </Swiper>
              </div>
          ))}
          </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-15">
        <Intro introTitle="Lorem Ipsum" introCaption="Social Responsibility At NLDES" introDescription="Through meaningful initiatives led by the school, college and institute, the society actively contributes to education access, community development, sustainability and social well-being. Each institution drives impact aligned with its learners, resources and local communities together shaping responsible citizens and long term societal value." />
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
              [...Array(5)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="w-full flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2 lg:order-2">
                    <Image src={`${basePath}images/life-at-nld/holistic.png`} alt="Student Club" width={500} height={300} className="object-cover w-full h-full" />
                  </div>
                  <div className={`flex flex-col gap-5 px-5 py-10 w-full lg:w-1/2 bg-[#FFCC33]`}>
                    <h2 className="font-georgia text-lg">Lecture Halls - {i}</h2>
                    <p className="text-sm leading-loose">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-20 py-5">
        <Intro introTitle="Lorem Ipsum" introCaption="Careers Across Our Institutions" introDescription="NLDES offers diverse career opportunities across is school, college and institute- bringing together educators, administrators and professionals passionate about shaping the future of education. Explore role-specific opportunities within each institution and find where your expertise can make the greatest impact." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          {
            [...Array(8)].map((_, i) => (
              <div className="bg-no-repeat bg-cover bg-center flex justify-center px-5 pb-5 h-100 lg:h-80 relative group text-white" style={{backgroundImage: `url(${basePath}images/nldes/about.webp)`}} onClick={handleBlockClick(i)} key={i}>
                <div className="absolute inset-0 bg-black/30 left-0 top-0 z-0"></div>
                <h2 className="mt-auto font-georgia text-2xl relative">N. L. Dalmia Institute of Management Studies and Research</h2>
                <div className={`absolute inset-0 top-0 left-0 flex flex-col gap-5 bg-[#800000] transition-all duration-300 scale-y-0 group-hover:scale-y-100 px-5 py-5 ${activeBlock === i ? 'scale-y-100': ''}`}>
                  <h2 className="font-georgia text-2xl">N. L. Dalmia Institute of Management Studies and Research</h2>
                  <p className="text-sm leading-loose">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.</p>
                  <Link href="" target="_blank" className="underline">Explore Institute</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 md:px-20" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
            <h3 className="text-2xl lg:text-4xl font-georgia">Commitment Beyond Education</h3>
            <p className="text-sm leading-loose lg:w-3xl">NLDES actively contributes to community development through educational led social initiatives. From raker upliftment programs to health, hygiene and sustainability efforts, the society believes in creating impact beyond the classroom</p>
          </div>
      </div>
      <Footer />
    </main>
    </>
  );
}