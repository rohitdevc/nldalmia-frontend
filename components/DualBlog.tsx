import { BlogListing } from "@/types/api";
import Image from "next/image";
import Link from "next/link";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { MdArrowOutward } from "react-icons/md";

import nl2br from "nl2br";
import parser from 'html-react-parser'

type Props = {
    blog: BlogListing
}

export default function DualBlog({blog}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-65 h-65">
                <Image src={blog.blog_thumbnail || `${basePath}logo.svg`} alt={blog.blog_thumbnail_alt} width={600} height={600} className="w-full h-full" />
            </div>
            <div className="flex gap-2 flex-col flex-1">
            <h2 className="font-georgia text-lg">{blog.blog_title}</h2>
            <ul className="flex gap-10 text-[#4E4E4E]">
                <li>{dayjs.utc(blog.blog_published_date).format('Do MMMM, YYYY')}</li>
                <li>
                <Link href={basePath + blog.blog_category_url_slug}>{blog.blog_category_name}</Link>
                </li>
            </ul>
            <p className="text-[#4E4E4E] text-sm">{parser(nl2br(blog.blog_preview.slice(0, 200) + '...'))}</p>
            <Link href={basePath + blog.blog_url_slug} className="text-burgundy flex gap-1 items-center hover:border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
            </div>
        </div>
    )
}