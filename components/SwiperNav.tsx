import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

type Props = {
    prev_class: string
    next_class: string
}

export default function SwiperNav({prev_class, next_class}: Props) {
    return (
        <div className="flex gap-3 text-burgundy">
            <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer ${prev_class}`}>
                <BsArrowLeftShort size={20} />
            </span>
            <span className={`w-5 h-5 border border-[#800000] flex items-center cursor-pointer ${next_class}`}>
                <BsArrowRightShort size={20} />
            </span>
        </div>
    )
}