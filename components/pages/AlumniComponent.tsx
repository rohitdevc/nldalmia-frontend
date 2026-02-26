"use client"

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useState } from "react";

import { MdArrowOutward } from "react-icons/md";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import { useServerCountdown } from "@/hooks/useServerCountdown";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';

export default function Alumni() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const alumni_profiles = [
    {
      id: 1,
      alumni_profiles_name: 'Shri Shivkumar Dalmia',
      alumni_profiles_designation: 'Chairman, N.L. Dalmia Education society',
      alumni_profiles_profile: 'https://www.nldalmia.in/faculty/',
      alumni_profiles_image: 'seema-saini.png'
    },
    {
      id: 2,
      alumni_profiles_name: 'Prof. Dr. Seema Saini',
      alumni_profiles_designation: 'CEO, N.L. Dalmia Education society',
      alumni_profiles_profile: 'https://www.nldalmia.in/faculty/',
      alumni_profiles_image: 'seema-saini.png'
    },
    {
      id: 3,
      alumni_profiles_name: 'Shri Shivkumar Dalmia',
      alumni_profiles_designation: 'Chairman, N.L. Dalmia Education society',
      alumni_profiles_profile: 'https://www.nldalmia.in/faculty/',
      alumni_profiles_image: 'seema-saini.png'
    },
    {
      id: 4,
      alumni_profiles_name: 'Prof. Dr. Seema Saini',
      alumni_profiles_designation: 'CEO, N.L. Dalmia Education society',
      alumni_profiles_profile: 'https://www.nldalmia.in/faculty/',
      alumni_profiles_image: 'seema-saini.png'
    },
    {
      id: 5,
      alumni_profiles_name: 'Shri Shivkumar Dalmia',
      alumni_profiles_designation: 'Chairman, N.L. Dalmia Education society',
      alumni_profiles_profile: 'https://www.nldalmia.in/faculty/',
      alumni_profiles_image: 'seema-saini.png'
    }
  ]

  const alumni_events = [
    {
      id: 1,
      alumni_event_name: 'DecodeX 2025 Edition',
      alumni_event_thumbnail: 'DecodeX-2024.jpg',
      alumni_event_start_date: new Date('2026-12-31 21:00:00'),
      alumni_event_description: 'Get ready to decode complexity at DecodeX 2024, the flagship analytics hackathon hosted by the metrix committee at N.L.Dalmia Institute Of Management Studies & Research'
    },
    {
      id: 2,
      alumni_event_name: 'DecodeX 2025 Edition',
      alumni_event_thumbnail: 'DecodeX-2024.jpg',
      alumni_event_start_date: new Date('2026-12-31 21:00:00'),
      alumni_event_description: 'Get ready to decode complexity at DecodeX 2024, the flagship analytics hackathon hosted by the metrix committee at N.L.Dalmia Institute Of Management Studies & Research'
    },
    {
      id: 3,
      alumni_event_name: 'DecodeX 2025 Edition',
      alumni_event_thumbnail: 'DecodeX-2024.jpg',
      alumni_event_start_date: new Date('2026-12-31 21:00:00'),
      alumni_event_description: 'Get ready to decode complexity at DecodeX 2024, the flagship analytics hackathon hosted by the metrix committee at N.L.Dalmia Institute Of Management Studies & Research'
    },
    {
      id: 4,
      alumni_event_name: 'DecodeX 2025 Edition',
      alumni_event_thumbnail: 'DecodeX-2024.jpg',
      alumni_event_start_date: new Date('2026-12-31 21:00:00'),
      alumni_event_description: 'Get ready to decode complexity at DecodeX 2024, the flagship analytics hackathon hosted by the metrix committee at N.L.Dalmia Institute Of Management Studies & Research'
    },
    {
      id: 5,
      alumni_event_name: 'DecodeX 2025 Edition',
      alumni_event_thumbnail: 'DecodeX-2024.jpg',
      alumni_event_start_date: new Date('2026-12-31 21:00:00'),
      alumni_event_description: 'Get ready to decode complexity at DecodeX 2024, the flagship analytics hackathon hosted by the metrix committee at N.L.Dalmia Institute Of Management Studies & Research'
    }
  ]

  const [activeAlumniEvent, updateActiveAlumniEvent] = useState(0);

  const handleAlumniEventClick = (alumni_event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveAlumniEvent(alumni_event_id);
      }
    }
  }

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
        <div className="w-full relative">
          <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 left-4 wall_of_fame_slider_prev z-2">
            <BsArrowLeftShort size={20} />
          </span>
          <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 right-4 wall_of_fame_slider_next z-2">
            <BsArrowRightShort size={20} />
          </span>
          <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.wall_of_fame_slider_prev', nextEl: '.wall_of_fame_slider_next'}} className="text-white">
            {
            [...Array(3)].map((_, i) => (
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-15 px-10 lg:px-15 bg-[#800000]">
                  <div className="lg:w-75 mt-auto">
                    <Image src={`${basePath}images/alumni/Gaurav-removebg-preview.png`} width={320} height={360} alt="Gaurav Jain" className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-5 py-7 w-full text-sm">
                    <h2 className="font-georgia text-xl">Gaurav Jain</h2>
                    <ul className="flex flex-col lg:flex-row gap-5 lg:gap-20">
                      <li>Company – Avendus Capital Limited</li>
                      <li>Designation – Director</li>
                      <li>Batch - 2006 – 2008</li>
                    </ul>
                    <p className="leading-loose">Gaurav Jain is the Director- Institutional Equities at Avendus Spark Institutional Equities. Responsible for business development and strengthening existing business relations with clients across Asia, Domestic Insurance companies and AMCs. Initiated various proprietary services as part of investment assistance to clients; leading to scaling up of business with existing clients and instigating business with new clients.</p>
                    <span className="w-30 text-center text-burgundy bg-white py-1 text-sm cursor-pointer hidden">View More</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full relative">
          <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 left-4 events_slider_prev z-2">
            <BsArrowLeftShort size={20} />
          </span>
          <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 right-4 events_slider_next z-2">
            <BsArrowRightShort size={20} />
          </span>
          <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.events_slider_prev', nextEl: '.events_slider_next'}}>
            {
            [...Array(3)].map((_, i) => (
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row gap-15 px-15 border">
                  <div className="flex flex-col gap-5 py-7 w-full">
                    <h2 className="font-georgia text-xl">Events</h2>
                    <p className="leading-loose text-[#4E4E4E]">Gaurav Jain is the Director- Institutional Equities at Avendus Spark Institutional Equities. Responsible for business development and strengthening existing business relations with clients across Asia, Domestic Insurance companies and AMCs. Initiated various proprietary services as part of investment assistance to clients; leading to scaling up of business with existing clients and instigating business with new clients.</p>
                    <span className="w-30 text-center text-burgundy bg-white py-1 text-sm cursor-pointer hidden">View More</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-5 justify-between">
          <div className="w-1/2 relative">
            <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 left-4 alumni_meet_slider_prev z-2">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-white text-white flex items-center cursor-pointer absolute top-1/2 right-4 alumni_meet_slider_next z-2">
              <BsArrowRightShort size={20} />
            </span>
            <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.alumni_meet_slider_prev', nextEl: '.alumni_meet_slider_next'}} className="text-white">
              {
              [...Array(3)].map((_, i) => (
                <SwiperSlide>
                  <div className="flex flex-col lg:flex-row gap-15 px-15 bg-[#800000] h-75">
                    <div className="flex flex-col gap-5 py-7 w-full">
                      <h2 className="font-georgia text-xl">Alumni Chapter Meet</h2>
                      <ul className="flex gap-20">
                        <li>Uk Alumni Chapter Meet</li>
                        <li>24th January 2026</li>
                      </ul>
                      <p className="leading-loose overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">Something exciting is rolling your way! It’s time to relive memories, reconnect with old friends and create new stories that will be remembered for years to come.</p>
                      <Link href="" className="w-30 text-center text-burgundy bg-white py-1 text-sm cursor-pointer">Register Now</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-1/2 relative">
            <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 left-4 testimonial_slider_prev z-2">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] text-burgundy flex items-center cursor-pointer absolute top-1/2 right-4 testimonial_slider_next z-2">
              <BsArrowRightShort size={20} />
            </span>
            <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} loop={true} navigation={{prevEl: '.testimonial_slider_prev', nextEl: '.testimonial_slider_next'}}>
              {
              [...Array(3)].map((_, i) => (
                <SwiperSlide>
                  <div className="flex flex-col lg:flex-row gap-10 px-5 bg-white border h-75">
                    <div className="w-75 mt-auto">
                      <Image src={`${basePath}images/alumni/Gaurav-removebg-preview.png`} width={320} height={360} alt="Gaurav Jain" className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-5 py-7 w-full">
                      <p className="font-georgia text-xl">“From Ideas To Execution- Founders Mindset”</p>
                      <h3>12th December, 2025</h3>
                      <h4>Speaker- Munmun Desai (Founder Of Folo)</h4>
                      <Link href="" className="w-30 text-center text-white bg-[#800000] py-1 text-sm mt-auto">View More</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Our Alumni" introCaption="Connect With Alumni" introDescription="Explore the achievements of our distinguished alumni who are making an impact across industries-from finance and analytics to entrepreneurship and global leadership." />
        <div className="w-full flex flex-col gap-5">
            <div className="flex gap-3">
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_profiles_slider_prev">
                  <BsArrowLeftShort size={20} />
                </span>
                <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_profiles_slider_next">
                  <BsArrowRightShort size={20} />
                </span>
              </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.alumni_profiles_slider_prev', nextEl: '.alumni_profiles_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                alumni_profiles.map((alumni_profiles_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      <Image src={`${basePath}images/about-us/management/${alumni_profiles_row.alumni_profiles_image}`} alt={alumni_profiles_row.alumni_profiles_name} width={150} height={150} className="w-30" />
                      <h2 className="text-xl font-georgia lg:h-10">{alumni_profiles_row.alumni_profiles_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(alumni_profiles_row.alumni_profiles_designation))}</p>
                    </div>
                    <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={alumni_profiles_row.alumni_profiles_profile}>View Profile <MdArrowOutward size={20} /></Link>
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
      </div>
      <div className="w-full relative text-black">
        <Image src={`${basePath}images/alumni/alumni-worldwide.png`} alt="Worldwide" width={1920} height={1080} className="w-full" />
        <div className="absolute inset-0 flex justify-center text-center py-15">
          <p className="leading-loose mt-auto w-3xl">Our true legacy lies in our 9,000+ alumni who excel across various fields worldwide, from boardrooms to startups, academia to global enterprises.</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Our Alumni" introCaption="Hall Of Fame" introDescription="Explore the achievements of our distinguished alumni who are making an impact across industries-from finance to analytics to entrepreneurship and global leadership" />
        <div className="w-full flex flex-col gap-5">
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_profiles_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_profiles_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <Swiper modules={[Navigation]} className="w-full" slidesPerView={1} spaceBetween={30} autoHeight={false} navigation={{prevEl: '.alumni_profiles_slider_prev', nextEl: '.alumni_profiles_slider_next'}} breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}, 1280: {slidesPerView: 4}}}>
              {
                alumni_profiles.map((alumni_profiles_row, key) => (
                  <SwiperSlide className="border-[0.5px] border-[#800000] flex flex-col" key={key}>
                    <div className="flex flex-col gap-5 items-center p-5 text-center">
                      <Image src={`${basePath}images/about-us/management/${alumni_profiles_row.alumni_profiles_image}`} alt={alumni_profiles_row.alumni_profiles_name} width={150} height={150} className="w-30" />
                      <h2 className="text-xl font-georgia lg:h-10">{alumni_profiles_row.alumni_profiles_name}</h2>
                      <p className="text-burgundy leading-loose lg:h-20 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">{parser(nl2br(alumni_profiles_row.alumni_profiles_designation))}</p>
                    </div>
                    <Link className="w-full text-white bg-[#800000] py-1 block flex gap-2 justify-center items-center" href={alumni_profiles_row.alumni_profiles_profile}>View Profile <MdArrowOutward size={20} /></Link>
                    
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introCaption="Real Stories From Our Alumni-On How NLDIMSR Helped Them Chart Their Path, Face Challenges And Achieve Success In The World Of Business And Beyond" />
        <div className="w-full">
          <div className="flex gap-3 mb-5">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_testimonial_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_testimonial_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={0} navigation={{prevEl: '.alumni_testimonial_slider_prev', nextEl: '.alumni_testimonial_slider_next'}}>
            {
            [...Array(3)].map((_, i) => (
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row gap-10 px-5 py-5 bg-white border">
                  <div className="w-75 h-60 bg-[#800000]"></div>
                  <div className="flex flex-col gap-5 w-full">
                    <p className="text-[#4E4E4E] leading-loose">With a background in engineering, Ritika joined the PGDM Finance program to pivot into investment banking. The rigorous curriculum, supportive faculty and real world case simulations helped her build both technical and soft skills-eventually landing a coveted role at JPMorgan. She now leads key M&A mandates in the APAC region</p>
                    <h2 className="font-georgia">“NLDIMSR gave me the confidence to navigate boardrooms across the globe”</h2>
                    <h3>- Mrs. Ritika Sood</h3>
                    <h4>Vice President - Investment Banking, JPMorgan Chase, Mumbai</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Our Events" introCaption="Reunite, Reflect, Reconnect" introDescription="Join alumni networking events, regional meet-ups and guests sessions. Stay connected with fellow dalmians and grow your professional circle." />
        <div className="w-full">
            <div className="flex gap-3">
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_event_slider_prev">
                <BsArrowLeftShort size={20} />
              </span>
              <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer alumni_event_slider_next">
                <BsArrowRightShort size={20} />
              </span>
            </div>
            
            <Swiper className="w-full mt-10" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.alumni_event_slider_prev', nextEl: '.alumni_event_slider_next'}} breakpoints={{768: { slidesPerView: 2, spaceBetween: 20 }, 1080: { slidesPerView: 3, spaceBetween: 20 } }} >
              {
                alumni_events.map((alumni_event, key) => {
                  const startDate = alumni_event.alumni_event_start_date;
                  
                  const nowValid = !!startDate && new Date(startDate).getTime() > Date.now();
                  
                  const countdown = useServerCountdown(new Date(startDate));

                  return (
                  <SwiperSlide title={alumni_event.alumni_event_name} key={key} onClick={handleAlumniEventClick(alumni_event.id)}>
                    <div className="group border-[0.5px] border-[#800000] text-white relative overflow-hidden">
                      <div className="flex py-7 px-5 transition-all duration-300 h-100 bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${basePath}images/alumni/DecodeX-2024.jpg)`}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"></div>
                        <h2 className="font-helixa text-lg mt-auto relative">{alumni_event.alumni_event_name}</h2>
                      </div>

                      <div className={`absolute top-0 left-0 inset-0 flex flex-col gap-5 py-10 px-5 justify-center items-center text-center transition-all duration-300 bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeAlumniEvent === alumni_event.id ? "scale-y-100" : "scale-y-0"}`}>
                        <h2 className="text-xl">{alumni_event.alumni_event_name}</h2>
                        <h3>{dayjs(alumni_event.alumni_event_start_date).format('Do MMMM, YYYY')}</h3>
                        <p className="leading-loose">{parser(nl2br(alumni_event.alumni_event_description))}</p>
                        {startDate && nowValid && countdown && (
                            <span className="text-3xl">
                                {countdown.days ? `${countdown.days}d ` : ""}
                                {countdown.hours ? `${countdown.hours}h ` : ""}
                                {countdown.minutes ? `${countdown.minutes}m ` : ""}
                                {countdown.seconds}s
                            </span>
                        )}
                        <ul className="flex gap-5">
                            <li>
                                <Link href="" target="_blank" className="py-2 px-2 text-sm bg-white text-[#800000]">Apply Now</Link>
                            </li>
                            <li>
                                <Link href="" target="_blank" className="border py-2 px-2 text-sm border-white bg-[#800000]">View Program Details</Link>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
              }
            </Swiper>
          </div>
      </div>
      <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat text-white px-5 lg:px-20 mt-5" style={{backgroundImage: `url(${basePath}images/home/college-kids.png)`}}>
          <div className="absolute inset-0 top-0 left-0 bg-black/50"></div>
          <div className="flex flex-col gap-5 relative w-full h-full justify-center items-center text-center">
            <h3 className="font-georgia leading-relaxed text-center text-2xl lg:text-5xl lg:w-3xl">Join Our Alumni Portal</h3>
            <p className="leading-loose lg:w-3xl">Access exclusive alumni, job boards, updates and opportunities. Register or Login to reconnect with batchmates and extend your Damian journey</p>
            <Link href="" className="flex items-center gap-2 px-3 py-1 bg-[#800000]" target="_blank">Login</Link>
          </div>
      </div> 
      <Footer />
    </main>
    </>
  );
}