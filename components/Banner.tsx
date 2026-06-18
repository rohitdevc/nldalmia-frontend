"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import parser from 'html-react-parser';
import nl2br from "nl2br";
import { FaPlayCircle } from "react-icons/fa";

type BannerInterface = {
    banner_image: string;
    banner_image_mobile: string;
    banner_caption?: string;
    banner_description?: string;
    banner_youtube_video_id?: string;
    banner_url?: string;
    banner_button_caption?: string;
}

export default function Banner({banner_image, banner_image_mobile, banner_caption, banner_description, banner_youtube_video_id, banner_url, banner_button_caption}: BannerInterface) {
    return (
        <div className="w-full h-screen relative text-white overflow-hidden">
            {
                banner_youtube_video_id ? (
                    <iframe className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none" src={`https://www.youtube.com/embed/${banner_youtube_video_id}?autoplay=1&mute=1&loop=1&playlist=${banner_youtube_video_id}&controls=0&showinfo=0&rel=0&modestbranding=1`} title={banner_caption} allow="autoplay"/>
                ) : banner_image && (
                    <>
                    <Image src={banner_image} fill alt="NL Dalmia" className="object-cover w-full h-full hidden md:block" />
                    <Image src={banner_image_mobile} fill alt="NL Dalmia" className="object-cover w-full h-full md:hidden" />
                    </>
                )
            }
            <div className="inset-0 bg-black/30 absolute top-0 z-1"></div>
            <div className="inset-0 pt-[200px] absolute top-0 z-2 flex flex-col gap-10 justify-center items-center text-center px-5 sm:px-10 md:px-15 xl:px-30">
                {
                    banner_caption && (
                        <h1 className="font-georgia text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-2/3 leading-normal">{parser(nl2br(banner_caption))}</h1>
                    )
                }
                {
                    banner_description && (
                        <p className="text-xs md:text-sm md:w-3xl leading-loose">{parser(nl2br(banner_description))}</p>
                    )
                }
                {
                    banner_url && banner_button_caption && (
                        <Link href={banner_url} className="px-3 py-1 bg-[#800000] text-white">
                            <span>{banner_button_caption}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}