"use client"

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useState, useRef, useEffect } from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";
import InstagramFeedComp from "@/components/InstagramFeedComp";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import nl2br from "nl2br";
import parser from 'html-react-parser';
import { Banner as BannerProps, Events, FounderQuote, InstagramFeed, InstitutionalPublications, IntroProps, LifeAtNLDAchievements, LifeAtNLDGallery, LifeAtNLDInsideNLD, LifeAtNLDStudentClubs } from "@/types/api";

type PageProps = {
  banner: BannerProps
  introduction: IntroProps
  events: Events[]
  achievements_introduction: IntroProps
  achievements: LifeAtNLDAchievements[]
  student_club_introduction: IntroProps
  student_clubs: LifeAtNLDStudentClubs[]
  gallery: LifeAtNLDGallery[]
  founder_quote: FounderQuote
  instagram_introduction: IntroProps
  inside_nld_introduction: IntroProps
  inside_nld: LifeAtNLDInsideNLD[]
  magazines_introduction: IntroProps
  magazines: InstitutionalPublications[]
  instagram_feed: InstagramFeed[]
};

export default function LifeAtNLD({ banner, introduction, events, achievements_introduction, achievements, student_club_introduction, student_clubs, gallery, founder_quote, instagram_introduction, inside_nld_introduction, inside_nld, magazines_introduction, magazines, instagram_feed}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const eventsList = useRef<HTMLDivElement>(null);

  type EventTimeline = {
    event_timeline_title: string;
    events?: Events[]
  }

  let event_timelines: EventTimeline[] = [
    {
      event_timeline_title: 'Upcoming Events',
      events: []
    },
    {
      event_timeline_title: 'Past Events',
      events: []
    }
  ]

  events.forEach((event) => {
    if(new Date(event.event_end_date) >= new Date()) {
      event_timelines[0].events?.push(event);
    } else {
      event_timelines[1].events?.push(event);
    }
  })

  event_timelines = event_timelines.filter(
    (timeline) => timeline.events && timeline.events.length > 0
  );

  const [activeEventTimeline, updateActiveEventTimeline] = useState(0);
  const [activeEvent, updateActiveEvent] = useState(-1);

  const updateActiveEventTimelineFunc = (event_timeline_id: number): void => {
    updateActiveEventTimeline(event_timeline_id);
    updateActiveEvent(-1);

    if(eventsList.current) {
      const offset = 200;
      const elementTop = eventsList.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  const handleEventClick = (event_id: number): React.MouseEventHandler<HTMLDivElement> => {
    return () => {
      if (window.matchMedia("(hover: none)").matches) {
        updateActiveEvent(event_id);
      }
    }
  }

  useEffect(() => {
      const wrappers = document.querySelectorAll(".student_club");
      if (!wrappers.length) return;
  
      wrappers.forEach((wrapper) => {
        const headings = wrapper.querySelectorAll("h3");
        const lists = wrapper.querySelectorAll("ul");
  
        headings.forEach((h3) => {
          h3.classList.add(
            "font-georgia"
          );
        });

        lists.forEach((ul) => {
          ul.classList.add(
            "text-[#4E4E4E]",
            "flex",
            "flex-col",
            "lg:flex-row",
            "gap-5",
            "list-disc",
            "list-inside"
          );
        });
      })
  }, []);

  const holistic_learnings: string[] = [];

  inside_nld.forEach((inside_nld_row) => {
    if(!holistic_learnings.includes(inside_nld_row.inside_nld_tab_title)) {
      holistic_learnings.push(inside_nld_row.inside_nld_tab_title);
    }
  })

  const [activeHolisticLearningTab, updateActiveHolisticLearningTab] = useState(0);

  const HolisticLearnings = useRef<HTMLDivElement>(null);

  const updateActiveHolisticLearningTabFunc = (holistic_learning_tab_id: number): void => {
    updateActiveHolisticLearningTab(holistic_learning_tab_id);

    if(HolisticLearnings.current) {
      const offset = 200;
      const elementTop = HolisticLearnings.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      {
        event_timelines && event_timelines.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
          <CenterIntro
          introTitle={introduction.intro_title}
          introCaption={introduction.intro_caption}
          introDescription={introduction.intro_description} />
          <div className="flex flex-col lg:flex-row gap-5 md:justify-between">
            <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-5 text-burgundy">
              {
                event_timelines.map((event_timeline, key) => (
                  <li className={`cursor-pointer transition-all duration-300 ${activeEventTimeline === key ? 'text-xl font-medium' : ''}`} key={key} onClick={() => updateActiveEventTimelineFunc(key)}>
                    <span className="relative">
                      {event_timeline.event_timeline_title}
                      <span className={`absolute w-full h-[0.1rem] -bottom-1 left-0 bg-[#800000] transform origin-center transition-transform duration-300 ${activeEventTimeline === key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                    </span>
                  </li>
                ))
              }
            </ul>
            {
              event_timelines && event_timelines.length > 0 && event_timelines.map((event_timeline, key) => 
                  activeEventTimeline === key && event_timeline.events && event_timeline.events.length > 0 && (
                  <div className="w-full lg:w-[75%] flex flex-col gap-5 text-white" ref={eventsList} key={key}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 md:gap-10 lg:gap-5">
                      {
                        event_timeline.events.map((event, sub_key) => (
                          <div className="group w-full h-75 xl:h-100 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: `url(${event.event_thumbnail})`}} onClick={handleEventClick(sub_key)} key={sub_key} title={event.event_name}>
                            <div className="absolute top-0 left-0 inset-0 bg-black/30"></div>
                            
                            <div className="relative h-full w-full flex flex-col">
                              <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                                <span className="bg-[#800000] text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(event.event_start_date).format('MMMM YYYY')}</span>
                              </div>
                              <div className="mt-auto px-2 lg:px-5 pb-2 lg:pb-10">
                                <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                              </div>
                            </div>

                            <div className={`absolute top-0 left-0 inset-0 flex flex-col bg-[#800000] transform origin-center transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${activeEvent === sub_key ? "scale-y-100" : "scale-y-0"}`}>
                              <div className="flex justify-end mt-2 mr-2 lg:mt-4 lg:mr-4">
                                <span className="bg-white text-burgundy text-[10px] lg:text-xs px-1 py-1 lg:px-3 lg:py-2">{dayjs.utc(event.event_start_date).format('MMMM YYYY')}</span>
                              </div>
                              <div className="px-2 lg:px-5 pb-2 lg:pb-5 flex flex-col gap-2 h-full">
                                <h2 className="text-sm lg:text-2xl font-georgia">{event.event_name}</h2>
                                <div className="w-full h-[105px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 hover:scrollbar-thumb-white/70">
                                  <p className="lg:leading-relaxed text-sm">{parser(nl2br(event.event_description))}</p>
                                </div>
                                <ul className="flex gap-5 mt-auto text-xs lg:text-sm">
                                  {
                                    event.event_registration_link && (
                                      <li><Link href={event.event_registration_link} className="underline" target="_blank">Learn More</Link></li>
                                    )
                                  }
                                  {
                                    event.event_report && (
                                      <li><Link href={event.event_report} className="underline" target="_blank">View Report</Link></li>
                                    )
                                  }
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  )
              )
            }
            </div>
        </div>
        )
      }
      {
        achievements && achievements.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
          <CenterIntro
          introTitle={achievements_introduction.intro_title}
          introCaption={achievements_introduction.intro_caption}
          introDescription={achievements_introduction.intro_description}
          />
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
              achievements.map((achievement, key) => (
              <SwiperSlide key={key}>
                <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-20 py-10" style={{backgroundImage: `url(${achievement.achievement_image})`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"></div>
                  <div className="flex flex-col gap-5 relative mt-auto">
                    <h2 className="font-georgia text-2xl">{achievement.achievement_caption}</h2>
                    {
                      achievement.achievement_description && (
                        <p className="leading-loose text-sm">{parser(nl2br(achievement.achievement_description))}</p>
                      )
                    }
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
        student_clubs && student_clubs.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
          <CenterIntro
          introTitle={student_club_introduction.intro_title}
          introCaption={student_club_introduction.intro_caption}
          introDescription={student_club_introduction.intro_description} />
          <div className="flex gap-3">
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer student_club_slider_prev">
              <BsArrowLeftShort size={20} />
            </span>
            <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer student_club_slider_next">
              <BsArrowRightShort size={20} />
            </span>
          </div>
          <Swiper className="w-full border-[0.5px] border-[#DFC0C0]" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: '.student_club_slider_prev', nextEl: '.student_club_slider_next'}} >
            {
              student_clubs.map((student_club, key) => (
              <SwiperSlide key={key}>
                <div className="w-full flex flex-col md:flex-row">
                  <div className="md:w-sm">
                    {
                      student_club.student_club_image && (
                        <Image src={`${student_club.student_club_image}`} alt={student_club.student_club_title} width={300} height={300} className="object-cover w-full h-full" />
                      )
                    }
                  </div>
                  <div className="flex flex-col gap-5 p-5 md:p-10">
                    <div className="flex flex-col gap-3">
                      <h2 className="font-georgia text-xl">{student_club.student_club_title}</h2>
                      <p className="text-sm leading-loose text-[#4E4E4E]">{student_club.student_club_caption}</p>
                    </div>
                    {
                      student_club.student_club_description && (
                      <div className="flex flex-col gap-3 text-sm student_club">
                        {parser(student_club.student_club_description)}
                      </div>
                    )
                    }
                    {
                      student_club.student_club_social_media && (
                        <div className="flex flex-col gap-3 text-sm">
                          <h3 className="font-georgia">Follow Us</h3>
                          <span>{student_club.student_club_social_media}</span>
                        </div>
                      )
                    }
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
        gallery && gallery.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-5 lg:w-1/2">
          {
            gallery[0].gallery_image && (
            <div className="w-full h-100 lg:h-125">
              <Image src={gallery[0].gallery_image} width={900} height={900} alt={gallery[0].gallery_caption} className="object-cover w-full h-full" />  
            </div>
            )}
            {
              gallery[1].gallery_image && (
              <div className="w-full h-100">
                <Image src={gallery[1].gallery_image} width={900} height={550} alt={gallery[1].gallery_caption} className="object-cover w-full h-full" />
              </div>
            )}
            {
              gallery[2].gallery_image && (
              <div className="w-full h-100">
                <Image src={gallery[2].gallery_image} width={900} height={550} alt={gallery[2].gallery_caption} className="object-cover w-full h-full" />
            </div>
            )}
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2">
          {
            gallery[3].gallery_image && (
              <div className="w-full h-100">
                <Image src={gallery[3].gallery_image} width={900} height={550} alt={gallery[3].gallery_caption} className="object-cover w-full h-full" />
              </div>
            )
          }
          {
            gallery[4].gallery_image && (
            <div className="w-full h-100">
              <Image src={gallery[4].gallery_image} width={900} height={550} alt={gallery[4].gallery_caption} className="object-cover w-full h-full" />
            </div>
            )
          }
          {
            founder_quote && (
              <div className="w-full lg:min-h-125 bg-[#800000] text-white flex flex-col gap-5 p-4 lg:p-7">
                {
                  founder_quote.founder_quote_title && (
                    <h2 className="font-georgia text-2xl lg:text-3xl leading-relaxed">{parser(nl2br(founder_quote.founder_quote_title))}</h2>
                  )
                }
                {
                  founder_quote.founder_bio && (
                    <p className="leading-relaxed lg:leading-loose text-sm">{parser(nl2br(founder_quote.founder_bio))}</p>
                  )
                }
                <div className="flex flex-col gap-3 mt-auto">
                  <h3 className="text-xl">{founder_quote.founder_quote}</h3>
                  <p className="leading-loose text-sm">{founder_quote.founder_name}</p>
                </div>
              </div>
              )
            }
          </div>
        </div>
        )
      }
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={instagram_introduction.intro_title}
          introCaption={instagram_introduction.intro_caption}
          introDescription={instagram_introduction.intro_description}
          />
          <InstagramFeedComp instagram_feed={instagram_feed} />
      </div>
      {
        inside_nld && inside_nld.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
          <CenterIntro
          introTitle={inside_nld_introduction.intro_title}
          introCaption={inside_nld_introduction.intro_caption}
          introDescription={inside_nld_introduction.intro_description} />
          <ul className="flex flex-col sm:flex-row gap-7 text-burgundy justify-center items-center">
            {
              holistic_learnings.map((holistic_learning_tab, key) => (
                <li className={`group relative cursor-pointer transition-all duration-300 ${key === activeHolisticLearningTab ? 'text-burgundy text-2xl font-normal': 'text-[#4E4E4E] text-lg'}`} key={key} onClick={() => updateActiveHolisticLearningTabFunc(key)}>
                  <span>{holistic_learning_tab}</span>
                  <span className={`absolute left-0 -bottom-1 bg-[#800000] h-[0.5px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${key === activeHolisticLearningTab ? 'scale-x-100': ''} `}></span>
                </li>
              ))
            }
          </ul>
          <div className="w-full" ref={HolisticLearnings}>
          {
              holistic_learnings.map((holistic_learning_tab, key) => (
              <div className={`w-full ${key === activeHolisticLearningTab ? 'block' : 'hidden'}`} key={key}>
                <div className="flex gap-3 mb-5">
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer holistic_learning_${key}slider_prev`}>
                    <BsArrowLeftShort size={20} />
                  </span>
                  <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer holistic_learning_${key}slider_next`}>
                    <BsArrowRightShort size={20} />
                  </span>
                </div>
                <Swiper className="w-full" slidesPerView={1} spaceBetween={0} modules={[Navigation]} navigation={{prevEl: `.holistic_learning_${key}slider_prev`, nextEl: `.holistic_learning_${key}slider_next`}} >
                  {
                    inside_nld.map((inside_nld_row, sub_key) => (
                    <SwiperSlide key={sub_key}>
                      <div className="w-full flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2 lg:order-2">
                          {
                            inside_nld_row.inside_nld_image && (
                              <Image src={inside_nld_row.inside_nld_image} alt={inside_nld_row.inside_nld_caption} width={500} height={300} className="object-cover w-full h-full" />
                            )
                          }
                        </div>
                        <div className={`flex flex-col gap-5 px-5 py-10 w-full lg:w-1/2 ${(sub_key % 2) ? 'bg-[#FFCC33]': 'bg-[#800000] text-white'}`}>
                          <h2 className="font-georgia text-lg">{inside_nld_row.inside_nld_caption}</h2>
                          {
                            inside_nld_row.inside_nld_description && (
                              <p className="text-sm leading-loose">{parser(nl2br(inside_nld_row.inside_nld_description))}</p>
                            )
                          }
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                  }
                </Swiper>
              </div>
          ))}
          </div>
        </div>
        )
      }
      {
        magazines && magazines.length > 0 && (
        <div className="w-full px-5 lg:px-30 py-5 lg:py-10 flex flex-col gap-5">
          <CenterIntro
          introTitle={magazines_introduction.intro_title}
          introCaption={magazines_introduction.intro_caption}
          introDescription={magazines_introduction.intro_description} />
          <div className="flex justify-center items-center">
            <Link href={`${basePath}institutional-publications`} className="bg-[#800000] text-white px-2 py-2">View All Institutional Publications</Link>
          </div>
          <div className={`w-full`}>
            <div className="flex gap-3 mb-5">
              <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer magazine_slider_prev`}>
                <BsArrowLeftShort size={20} />
              </span>
              <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer magazine_slider_next`}>
                <BsArrowRightShort size={20} />
              </span>
            </div>
            <Swiper className="w-full" slidesPerView={2} spaceBetween={10} modules={[Navigation]} navigation={{prevEl: `.magazine_slider_prev`, nextEl: `.magazine_slider_next`}} breakpoints={{768: {slidesPerView: 2.5, spaceBetween: 50}, 1024: {slidesPerView: 3, spaceBetween: 50}}} >
              {
                magazines.map((magazine, key) => magazine.institutional_publication_pdf && (
                <SwiperSlide key={key} title={magazine.institutional_publication_title} >
                  <div className="w-full flex flex-col lg:flex-row">
                    <Link className="w-full" href={magazine.institutional_publication_pdf} target="_blank">
                      <Image src={magazine.institutional_publication_thumbnail} alt={magazine.institutional_publication_title} width={500} height={300} className="object-cover w-full h-full" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))
              }
            </Swiper>
          </div>
        </div>
        )
      }
    </main>
  );
}