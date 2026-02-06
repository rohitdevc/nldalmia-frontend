"use client"
import Image from "next/image";
import { useRef } from "react";

import VimeoVideoPopUp, { VimeoVideoPopupHandle } from "@/app/components/VimeoVideo";

import { FaPlayCircle } from "react-icons/fa";

export default function Banner() {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const videoPopupRef = useRef<VimeoVideoPopupHandle>(null);

    return (
        <>
        <div className="w-full h-screen relative text-white">
            <Image src={`${basePath}images/home/banner.jpeg`} fill alt="NL Dalmia" className="object-cover" />
            <div className="inset-0 bg-black/30 absolute top-0 z-1"></div>
            <div className="inset-0 pt-[200px] absolute top-0 z-2 flex flex-col gap-10 justify-center items-center text-center px-5">
                <h2 className="font-georgia text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-1/2">25+ Years Of Pioneering Management Education</h2>
                <p className="text-xs md:text-sm md:w-3xl">We blend rich tradition with cutting edge education to cultivate tomorrow's leaders. We stand as a beacon of quality education, producing globally competent professionals committed to making a difference.</p>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#800000] cursor-pointer" onClick={() => videoPopupRef.current?.open('1159526203')}>
                    <FaPlayCircle />
                    <span>Play Video</span>
                </div>
            </div>
        </div>
        <VimeoVideoPopUp ref={videoPopupRef} />
        </>
    )
}