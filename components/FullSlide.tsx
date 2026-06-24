import { FullSlideProps } from "@/types/api"
import { FaPlayCircle } from "react-icons/fa";

type Props = {
    slider: FullSlideProps
    onPlay: (videoId: string) => void;
}

export default function FullSlide({slider, onPlay}: Props) {
    return (
        <div className="w-full aspect-video sm:h-[300px] lg:h-[75vh] relative bg-cover bg-center bg-no-repeat flex px-5 lg:px-10 sm:py-10 cursor-pointer text-white" style={{backgroundImage: `url(${slider.slider_image || `https://img.youtube.com/vi_webp/${slider.slider_video}/0.webp`})`}} onClick={() => { if (slider.slider_video) { onPlay(slider.slider_video) }}}>
            {
                slider.slider_video && (
                <FaPlayCircle size={35} className="absolute z-20 inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                )
            }
            {
                slider.slider_caption && (
                    <>
                    <div className="absolute inset-0 bg-black/30"></div>
                    <p className="mt-auto relative">{slider.slider_caption}</p>
                    </>
                )
            }
        </div>
    )
}