import { EventSliders } from "@/types/api"
import { FaPlayCircle } from "react-icons/fa";
import { useRef } from "react";
import { YTVideoPopupHandle } from "./YouTubeVideo";

type Props = {
    event_slider: EventSliders
}

export default function EventSlide({event_slider}: Props) {
    const videoPopupRef = useRef<YTVideoPopupHandle>(null);
    
    return (
        <div className="w-full h-[300px] lg:h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 py-10 cursor-pointer" style={{backgroundImage: `url(${event_slider.event_slider_image || `https://img.youtube.com/vi_webp/${event_slider.event_slider_video}/0.webp`})`}} onClick={() => videoPopupRef.current?.open(event_slider.event_slider_video)}>
            {
                event_slider.event_slider_video && (
                <FaPlayCircle size={35} className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                )
            }
        </div>
    )
}