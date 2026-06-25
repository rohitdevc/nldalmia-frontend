import { Testimonials } from "@/types/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { useState } from "react";

import Image from "next/image";
import nl2br from "nl2br";
import parser from 'html-react-parser';

import { FiPlayCircle } from "react-icons/fi";

import SwiperNav from "./SwiperNav";

type Props = {
    testimonials: Testimonials[]
    onPlay: (videoId: string) => void;
}

export default function TestimonialSlider({testimonials, onPlay}: Props) {
    const [activeTestimonial, updateActiveTestimonial] = useState(-1);
    
    const handleTestimonialClick = (testimonial_id: number): React.MouseEventHandler<HTMLDivElement> => {
        return () => {
            if (window.matchMedia("(hover: none)").matches) {
            updateActiveTestimonial(testimonial_id);
            }
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <SwiperNav prev_class="testimonial_slider_prev" next_class="testimonial_slider_next" />
            <Swiper className="w-full" slidesPerView={1} loop={true} spaceBetween={0} modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} navigation={{prevEl: '.testimonial_slider_prev', nextEl: '.testimonial_slider_next'}} breakpoints={{640: {slidesPerView: 1.5, spaceBetween: 10}, 768: { slidesPerView: 1.85, spaceBetween: 25 }, 1024: { slidesPerView: 2, spaceBetween: 50 }, 1280: {slidesPerView: 3, spaceBetween: 20} }} >
              {
                testimonials.map((testimonial, key) => (
                  <SwiperSlide className="group relative !h-auto" title={testimonial.testimonial_name} key={key} onClick={handleTestimonialClick(key)}>
                    <div className="w-full h-full flex flex-1 border border-[#800000] bg-white">
                      <div className="flex flex-col gap-10 px-5 py-5">
                        <div className="rounded-full overflow-hidden w-30 h-30">
                        {
                          testimonial.testimonial_thumbnail && (
                          <Image src={testimonial.testimonial_thumbnail} alt={testimonial.testimonial_thumbnail_alt || `N L Dalmia`} width={200} height={200} className="object-cover w-full h-full" />
                          )
                        }
                        </div>
                        <h2 className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</h2>
                        <span className="mt-auto text-sm md:text-lg text-burgundy">
                            {parser(nl2br(testimonial.testimonial_designation))}
                            {
                                testimonial.testimonial_company_name && (
                                    <>
                                    <br />
                                    {testimonial.testimonial_company_name}
                                    </>
                                )
                            }
                        </span>
                      </div>
                      <div className={`absolute top-0 left-0 inset-0 flex flex-col justify-center px-5 py-5 bg-[#800000] text-white transform origin-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${activeTestimonial === key ? "opacity-100" : "opacity-0"}`}>
                        {
                          testimonial.testimonial_youtube_id ? (
                            <div className="mx-auto flex justify-center items-center gap-2 cursor-pointer w-full h-full" onClick={() => { if (testimonial.testimonial_youtube_id) { onPlay(testimonial.testimonial_youtube_id) }}}>
                              <FiPlayCircle size={20} />
                              <span className="text-sm">Play Video</span>
                            </div>
                          ) : (
                            <>
                            <p className="leading-loose text-sm md:text-base">{testimonial.testimonial_description}</p>
                            <div className="mt-auto flex flex-col gap-3">
                              <span className="font-georgia text-xl lg:text-2xl">{testimonial.testimonial_name}</span>
                              <span className="text-sm md:text-lg">{parser(nl2br(testimonial.testimonial_designation))}</span>
                            </div>
                            </>
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