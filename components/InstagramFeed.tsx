import Image from "next/image";
import Link from "next/link";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function InstagramFeed() {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const instagram_feed = [
        {
          id: 1,
          instagram_feed_thumbnail: 'ig-thumbnail.png',
          instagram_feed_caption: 'Congratulations',
          instagram_feed_type: 'IMAGE',
          instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
        },
        {
          id: 2,
          instagram_feed_thumbnail: 'ig-thumbnail.png',
          instagram_feed_caption: 'Congratulations',
          instagram_feed_type: 'IMAGE',
          instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
        },
        {
          id: 3,
          instagram_feed_thumbnail: 'ig-thumbnail.png',
          instagram_feed_caption: 'Congratulations',
          instagram_feed_type: 'IMAGE',
          instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
        },
        {
          id: 4,
          instagram_feed_thumbnail: 'ig-thumbnail.png',
          instagram_feed_caption: 'Congratulations',
          instagram_feed_type: 'IMAGE',
          instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/'
        },
        {
          id: 5,
          instagram_feed_thumbnail: 'ig-thumbnail.png',
          instagram_feed_caption: 'Congratulations',
          instagram_feed_type: 'IMAGE',
          instagram_feed_link: 'https://www.instagram.com/nldalmiainstitute/',
          instagram_feed_video: ''
        }
      ]
    
    const instagram_allowed_types = ['IMAGE', 'VIDEO'];

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
                    instagram_allowed_types.includes(instagram.instagram_feed_type) && (
                    <SwiperSlide key={key}>
                        <div className="group w-full" key={key} title={instagram.instagram_feed_caption}>
                        <Link href={instagram.instagram_feed_link} target="_blank">
                        {
                            instagram.instagram_feed_type === 'IMAGE' && (
                            <Image src={`${basePath}images/home/${instagram.instagram_feed_thumbnail}`} alt={instagram.instagram_feed_caption} width={300} height={300} className="object-cover" />
                            )
                        }
                        {
                        instagram.instagram_feed_type === 'VIDEO' && (
                            <video src={`${basePath}videos/home/${instagram.instagram_feed_video}`} className="object-cover w-full h-full" muted loop playsInline autoPlay />
                            )
                        }
                        </Link>
                        </div>
                    </SwiperSlide>
                    )
                ))
                }
                </Swiper>
            </div>
        )
    )
}