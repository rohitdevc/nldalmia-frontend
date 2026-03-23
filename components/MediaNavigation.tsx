import { MediaCategoryListing } from "@/types/api";
import Link from "next/link";

type mediaNavProps = {
    activePage: string;
    media_categories: MediaCategoryListing[]
}

export default function MediaNavigation({activePage, media_categories}: mediaNavProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    return (
        <ul className="flex flex-col flex-wrap sm:flex-row gap-5 lg:gap-10 justify-center items-center py-5">
            <li className="group">
                <Link href={`${basePath}awards-and-achievements`} className="relative">
                    <span>Awards & Achievements</span>
                    <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === "awards-and-achievements" ? 'scale-x-100' : ''}`}></span>
                </Link>
            </li>
            {
                media_categories && media_categories.length > 0 && media_categories.map((media_category, key) => (
                    <li className="group" key={key}>
                        <Link href={`${basePath}media/${media_category.media_category_url_slug}`} className="relative">
                            <span>{media_category.media_category_title}</span>
                            <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activePage === media_category.media_category_url_slug ? 'scale-x-100' : ''}`}></span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}