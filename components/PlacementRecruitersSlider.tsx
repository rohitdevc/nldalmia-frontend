import { PlacementRecruiters } from "@/types/api"

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SwiperNav from "./SwiperNav";

type Props = {
    recruiters: PlacementRecruiters[]
}

export default function PlacementRecruitersSlider({recruiters}: Props) {
    return (
        <>
        <SwiperNav prev_class="partner_slider_prev" next_class="partner_slider_next" />
        <Swiper className="w-full" slidesPerView={1.5} spaceBetween={30} loop={true} modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} navigation={{prevEl: '.partner_slider_prev', nextEl: '.partner_slider_next'}} breakpoints={{624: { slidesPerView: 2, spaceBetween: 50}, 768: { slidesPerView: 3, spaceBetween: 75 }, 1024: {slidesPerView: 4}, 1280: { slidesPerView: 5, spaceBetween: 70 } }} >
            {
            recruiters.map((recruiter, key) => recruiter.recruiter_logo && (
                <SwiperSlide title={recruiter.recruiter_caption} key={key}>
                <div className="rounded-full overflow-hidden border border-[#800000] w-50 h-50 flex items-center p-1">
                    <Image src={recruiter.recruiter_logo} alt={recruiter.recruiter_logo_alt} width={300} height={300} className="object-cover w-full" />
                </div>
                </SwiperSlide>
            ))
            }
        </Swiper>
        </>
    )
}