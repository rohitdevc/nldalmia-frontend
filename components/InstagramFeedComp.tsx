import Image from "next/image";
import Link from "next/link";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { InstagramFeed } from "@/types/api";

type PageProps = {
    instagram_feed: InstagramFeed[]
}

export default function InstagramFeedComp({instagram_feed}: PageProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const image_tag = ['IMAGE', 'CAROUSEL_ALBUM'];

    return (
        instagram_feed && instagram_feed.length > 0 && (
            <div className="w-full">
                <div className="flex gap-3 mb-5">
                    <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer instagram_slider_prev">
                        <BsArrowLeftShort size={20} />
                    </span>
                    <span className="w-5 h-5 border border-[#800000] flex items-center cursor-pointer instagram_slider_next">
                        <BsArrowRightShort size={20} />
                    </span>
                </div>
                <Swiper className="w-full text-white" slidesPerView={1} spaceBetween={40} loop={true} modules={[Navigation]} navigation={{prevEl: '.instagram_slider_prev', nextEl: '.instagram_slider_next'}} breakpoints={{480: { slidesPerView: 2, spaceBetween: 20 },768: { slidesPerView: 3, spaceBetween: 15 }, 1024: { slidesPerView: 3, spaceBetween: 50 }, 1280: { slidesPerView: 4, spaceBetween: 70 } }}>
                {
                instagram_feed.map((instagram, key) => (
                    <SwiperSlide key={key}>
                        <div className="group w-full" key={key} title={instagram.instagram_caption}>
                            <Link href={instagram.instagram_permalink} target="_blank" className="block h-70">
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