"use client"

import Link from "next/link";
import Image from "next/image";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { MdArrowOutward } from "react-icons/md";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Ticker, Blog, BlogListing } from "@/types/api";
import parser from 'html-react-parser';
import nl2br from "nl2br";

type PageProps = {
  ticker: Ticker
  blog: Blog
  related_blog: BlogListing[]
}

export default function BlogDetailsComponent({ticker, blog, related_blog}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  return (
    <>
    <Header ticker_api={ticker} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <div className="pt-50 flex flex-col gap-10 justify-center text-center px-5 md:px-15 xl:px-30 py-5">
        <h1 className="font-georgia text-3xl lg:text-5xl">{blog.blog_title}</h1>
        {
          blog.banner_image && (
          <Image src={blog.banner_image} alt={blog.blog_title} width={1920} height={900} className="w-full border border-[#800000]" />
          )
        }
        <ul className="flex gap-2">
          <li>{dayjs.utc(blog.blog_published_date).format('Do MMMM, YYYY')}</li>
          {
            blog.blog_author_name && (
              <>
              <li>|</li>
              <li>Author: {blog.blog_author_name}</li>
              </>
            )
          }
        </ul>
      </div>
      {
        blog.blog_content && (
        <div className="px-5 md:px-15 xl:px-30 py-5 leading-loose">
          {parser(blog.blog_content)}
        </div>
        )
      }
      {
        related_blog && related_blog.length > 0 && (
        <div className="flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
          <h2 className="font-georgia text-3xl">Related Blogs</h2>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
            <div className="flex flex-col gap-10 w-full lg:w-[55%]">
              {
              related_blog.slice(0, 2).map((blog, key) => (
                <div className="flex flex-col md:flex-row gap-7.5" key={key}>
                  <div className="w-full md:w-175">
                    {
                      blog.blog_thumbnail && (
                      <Image src={blog.blog_thumbnail} alt={blog.blog_title} width={600} height={600} className="object-cover" />
                      )
                    }
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-georgia text-lg">{blog.blog_title}</h2>
                    <ul className="flex gap-10 text-[#4E4E4E] text-sm">
                      <li>{dayjs.utc(blog.blog_published_date).format('Do MMMM, YYYY')}</li>
                      <li>
                        <Link href={blog.blog_category_url_slug}>{blog.blog_category_name}</Link>
                      </li>
                    </ul>
                    <p className="text-[#4E4E4E] text-sm">{parser(nl2br(blog.blog_preview))}</p>
                    <Link href={blog.blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit text-sm">Learn More <MdArrowOutward size={15} /></Link>
                  </div>
                </div>
              ))
            }
            </div>
            {
              related_blog.slice(2, 1).map((blog, key) => (
              <div className="flex flex-col md:flex-row lg:flex-col gap-7.5 w-full lg:w-[45%]" key={key}>
                <div className="w-full md:w-175 lg:w-full">
                  {
                    blog.blog_thumbnail && (
                    <Image src={blog.blog_thumbnail} alt={blog.blog_title} width={600} height={600} className="object-cover" />
                    )
                  }
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="font-georgia text-lg">{blog.blog_title}</h2>
                  <ul className="flex gap-10 text-[#4E4E4E] text-sm">
                    <li>{dayjs.utc(blog.blog_published_date).format('Do MMMM, YYYY')}</li>
                    <li>
                      <Link href={blog.blog_category_url_slug}>{blog.blog_category_name}</Link>
                    </li>
                  </ul>
                  <p className="text-[#4E4E4E] text-sm">{parser(nl2br(blog.blog_preview))}</p>
                  <Link href={blog.blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit text-sm">Learn More <MdArrowOutward size={15} /></Link>
                </div>
              </div>
              ))
            }
          </div>
        </div>
        )
      }
      <Footer />
    </main>
    </>
  );
}