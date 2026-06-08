import { BlogListing } from "@/types/api";
import Image from "next/image";
import Link from "next/link";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { MdArrowOutward } from "react-icons/md";

type Props = {
    blog_featured: BlogListing
    blog_width: string
}

export default function FeaturedBlogCard({blog_featured, blog_width}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    return (
        <div className={`w-full lg:w-[${blog_width}%] flex gap-4 flex-col`}>
            <div className="w-full lg:h-100">
            {
                blog_featured.blog_thumbnail && (
                <Image src={blog_featured.blog_thumbnail} alt={blog_featured.blog_thumbnail_alt} width={600} height={600} className="object-cover w-full h-full" />
                )
            }
            </div>
            <h2 className="font-georgia text-xl">{blog_featured.blog_title}</h2>
            <ul className="flex gap-10 text-[#4E4E4E]">
                <li>{dayjs.utc(blog_featured.blog_published_date).format('Do MMMM, YYYY')}</li>
                <li>
                <Link href={basePath + blog_featured.blog_category_url_slug}>{blog_featured.blog_category_name}</Link>
                </li>
            </ul>
            <Link href={basePath + blog_featured.blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
        </div>
    )
}