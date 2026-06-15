import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

type Props = {
    prev_class: string
    next_class: string
}

export default function SwiperNavAbsolute({prev_class, next_class}: Props) {
    return (
        <div className="w-full">
            <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 left-5 lg:left-10 ${prev_class} z-2`}>
                <BsArrowLeftShort size={20} />
            </span>
            <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 lg:right-10 ${next_class} z-2`}>
                <BsArrowRightShort size={20} />
            </span>
        </div>
    )
}