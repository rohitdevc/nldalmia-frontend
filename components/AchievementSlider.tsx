import { LifeAtNLDAchievements } from "@/types/api";

import nl2br from "nl2br";
import parser from 'html-react-parser';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SwiperNav from "./SwiperNav";

type AchievementProps = {
    achievements: LifeAtNLDAchievements[]
}

export default function AchievementSlider({achievements} : AchievementProps){
    return (
    <div className="w-full flex flex-col gap-5">
        <SwiperNav prev_class="achievement_slider_prev" next_class="achievement_slider_next" />
        <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={0} modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} navigation={{prevEl: '.achievement_slider_prev', nextEl: '.achievement_slider_next'}} >
            {
                achievements.map((achievement, key) => (
                <SwiperSlide key={key}>
                <div className="w-full h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-20 py-10" style={{backgroundImage: `url(${achievement.achievement_image})`}} title={achievement.achievement_image_alt}>
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