import { IntroProps } from "@/types/api";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

import { useRef } from "react";

import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

import nl2br from 'nl2br';
import parser from 'html-react-parser';

type Props = {
    introduction: IntroProps
}

export default function IntroWithVideo({introduction}: Props) {
    const videoPopupRef = useRef<YTVideoPopupHandle>(null);

    return (
        <>
        <div className="flex flex-col lg:flex-row gap-10 py-5 items-center">
          <div className="w-full lg:w-[40%] overflow-hidden relative cursor-pointer md:h-40 lg:h-full" onClick={() => videoPopupRef.current?.open(introduction.intro_video_id)}>
          {
            introduction.intro_image && (
            <Image src={introduction.intro_image} width={800} height={400} alt={introduction.intro_image_alt || `N. L Dalmia`} className="object-cover w-full h-full" />
            )
          }
          {
            introduction.intro_video_id && (
              <FaPlayCircle size={35} className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
            )
          } 
          </div>
          <div className="w-full lg:w-[60%] flex flex-col gap-5">
            <p className="text-[#4E4E4E] text-sm leading-loose">{parser(nl2br(introduction.intro_description))}</p>
          </div>
        </div>
        <YTVideoPopUp ref={videoPopupRef} />
        </>
    )
}