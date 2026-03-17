"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import VimeoVideoPopUp, { VimeoVideoPopupHandle } from "@/components/VimeoVideo";

import parser from 'html-react-parser';
import nl2br from "nl2br";
import { FaPlayCircle } from "react-icons/fa";

type BannerInterface = {
    banner_image: string;
    banner_caption?: string;
    banner_description?: string;
    banner_vimeo_video_id?: string;
    banner_url?: string;
    banner_button_caption?: string;
}

export default function Banner({banner_image, banner_caption, banner_description, banner_vimeo_video_id, banner_url, banner_button_caption}: BannerInterface) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const videoPopupRef = useRef<VimeoVideoPopupHandle>(null);

    return (
        <>
        <div className="w-full h-screen relative text-white">
            {banner_image && (
            <Image src={banner_image} fill alt="NL Dalmia" className="object-cover" />
            )}
            <div className="inset-0 bg-black/30 absolute top-0 z-1"></div>
            <div className="inset-0 pt-[200px] absolute top-0 z-2 flex flex-col gap-10 justify-center items-center text-center">
                {
                    banner_caption && (
                        <h2 className="font-georgia text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-2/3 leading-normal">{parser(nl2br(banner_caption))}</h2>
                    )
                }
                {
                    banner_description && (
                        <p className="text-xs md:text-sm md:w-3xl leading-loose">{parser(nl2br(banner_description))}</p>
                    )
                }
                {
                    banner_vimeo_video_id && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#800000] cursor-pointer" onClick={() => videoPopupRef.current?.open(banner_vimeo_video_id)}>
                            <FaPlayCircle />
                            <span>Play Video</span>
                        </div>
                    )
                }
                {
                    banner_url && (
                        <Link href={banner_url} className="px-3 py-1 bg-[#800000] text-white">
                            <span>{banner_button_caption}</span>
                        </Link>
                    )
                }
            </div>
        </div>
        <VimeoVideoPopUp ref={videoPopupRef} />
        </>
    )
}