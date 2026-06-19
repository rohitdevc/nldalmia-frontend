import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { InstagramFeed } from "@/types/api";
import SwiperNav from "./SwiperNav";

type PageProps = {
    instagram_feed: InstagramFeed[]
}

export default function InstagramFeedComp({instagram_feed}: PageProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const image_tag = ['IMAGE', 'CAROUSEL_ALBUM'];

    return (
        instagram_feed && instagram_feed.length > 0 && (
            <div className="w-full flex flex-col gap-5">
                <SwiperNav prev_class="instagram_slider_prev" next_class="instagram_slider_next" />
                <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}} navigation={{prevEl: '.instagram_slider_prev', nextEl: '.instagram_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 50 }, 1280: { slidesPerView: 3.5, spaceBetween: 50 } }}>
                {
                instagram_feed.map((instagram, key) => (
                    <SwiperSlide key={key}>
                        <div className="group w-full" key={key} title={instagram.instagram_caption}>
                            <Link href={instagram.instagram_permalink} target="_blank" className="block">
                            {
                                image_tag.includes(instagram.instagram_post_type) && (
                                <Image src={instagram.instagram_media_url} alt={instagram.instagram_caption} width={300} height={300} className="object-cover" />
                                )
                            }
                            {
                            instagram.instagram_post_type === 'VIDEO' && (
                                <video src={instagram.instagram_media_url} className="object-cover w-full h-full" muted loop playsInline autoPlay />
                                )
                            }
                            </Link>
                        </div>
                    </SwiperSlide>
                ))
                }
                </Swiper>
            </div>
        )
    )
}