"use client"

import Link from "next/link";
import Image from "next/image";


import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import nl2br from "nl2br";
import parser from 'html-react-parser';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import { Banner as BannerProps, BlogCategories, BlogListing, IntroProps, Ticker } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  blog_category_url_slug?: string
  introduction: IntroProps
  blog_categories: BlogCategories[]
  blog_featured: BlogListing[]
  blogs: BlogListing[]
};

export default function BlogComponent({ticker, banner, blog_category_url_slug, introduction, blog_categories, blog_featured, blogs}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const blogs_data: Record<string, [BlogListing, BlogListing[]][]> = {};
  
  blogs.forEach((blog) => {
    const category = blog.blog_category_name;
    
    if (!blogs_data[category]) {
      blogs_data[category] = [];
    }
    
    const groups = blogs_data[category];
    const lastGroup = groups[groups.length - 1];
    
    if (!lastGroup || (lastGroup[0] && lastGroup[1] && lastGroup[1].length === 3)) {
      groups.push([blog, []]);
    } else {
      lastGroup[1].push(blog);
    }
  });

  const filtered_blog_categories = blog_categories.filter(
    (category) => blogs_data[category.blog_category_title]
  );

  blog_categories = filtered_blog_categories;

  let activeBlogCategorySlug = blog_category_url_slug;

  if(!activeBlogCategorySlug) {
    activeBlogCategorySlug = (blog_categories.length > 0 ) ? blog_categories[0].blog_category_url_slug: '';
  }

  const [activeBlogCategory, updateActiveBlogCategory] = useState(activeBlogCategorySlug);

  return (
    <>
    <Header ticker_api={ticker} />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      {
        blog_featured && blog_featured.length > 0 && (
        <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
          <Intro
          introTitle={introduction.intro_title}
          introCaption={introduction.intro_caption}
          introDescription={introduction.intro_description} />
          <div className="flex gap-5 flex-col lg:flex-row">
            {
              blog_featured.length > 0 && (
              <div className="w-full lg:w-[55%] flex gap-4 flex-col">
                {
                  blog_featured[0].blog_thumbnail && (
                    <Image src={blog_featured[0].blog_thumbnail} alt={blog_featured[0].blog_title} width={600} height={600} className="w-full lg:h-100" />
                  )
                }
                <h2 className="font-georgia text-xl">{blog_featured[0].blog_title}</h2>
                <ul className="flex gap-10 text-[#4E4E4E]">
                  <li>{dayjs.utc(blog_featured[0].blog_published_date).format('Do MMMM, YYYY')}</li>
                  <li>
                    <Link href={blog_featured[0].blog_category_url_slug}>{blog_featured[0].blog_category_name}</Link>
                  </li>
                </ul>
                <Link href={blog_featured[0].blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
              </div>
              )
            }
            {
              blog_featured.length > 1 && (
              <div className="w-full lg:w-[45%] flex gap-5 flex-col">
                {
                  blog_featured[1].blog_thumbnail && (
                    <Image src={blog_featured[1].blog_thumbnail} alt={blog_featured[1].blog_title} width={600} height={600} className="w-full lg:h-100" />
                  )
                }
                <h2 className="font-georgia text-xl">{blog_featured[1].blog_title}</h2>
                <ul className="flex gap-10 text-[#4E4E4E]">
                  <li>{dayjs.utc(blog_featured[1].blog_published_date).format('Do MMMM, YYYY')}</li>
                  <li>
                    <Link href={blog_featured[1].blog_category_url_slug}>{blog_featured[1].blog_category_name}</Link>
                  </li>
                </ul>
                <Link href={blog_featured[1].blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
              </div>
              )
            }
          </div>
        </div>
      )
      }
      {
        blog_featured.length > 0 && (
        <div className="w-full px-5 md:px-15 xl:px-30 py-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-25 lg:justify-between border-t border-b border-[#D3D3D3] py-10">
            <h3 className="font-georgia text-xl w-50">Featured Blog</h3>
            <Link href={blog_featured[0].blog_url_slug} className="font-georgia text-4xl">{blog_featured[0].blog_title}</Link>
          </div>
        </div>
        )
      }
      <div className="w-full px-5 md:px-15 xl:px-30">
        {
          blog_categories && blog_categories.length > 0 && !blog_category_url_slug && (
          <ul className="flex flex-col flex-wrap sm:flex-row gap-5 lg:gap-10 justify-center items-center py-5">
            {
              blog_categories.map((blog_category, key) => (
                <li className="group" key={key}>
                    <span className="relative cursor-pointer" onClick={() => updateActiveBlogCategory(blog_category.blog_category_url_slug)}>
                        <span>{blog_category.blog_category_title}</span>
                        <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeBlogCategory === blog_category.blog_category_url_slug ? 'scale-x-100' : ''}`}></span>
                    </span>
                </li>
              ))
            }
          </ul>
          )
        }
        {
          blog_categories && blog_categories.length > 0 && blog_categories.filter((blog_category) => !blog_category_url_slug || blog_category.blog_category_url_slug === blog_category_url_slug).map((blog_category, key) => (
          <div className={`w-full py-10 flex flex-col gap-10 ${activeBlogCategory === blog_category.blog_category_url_slug ? 'block' : 'hidden'}`} key={key}>
            {
              blogs_data[blog_category.blog_category_title] && blogs_data[blog_category.blog_category_title].length > 0 && blogs_data[blog_category.blog_category_title].map((blog_data, key) => (
              <div className="w-full flex gap-5 flex-col lg:flex-row" key={key}>
                {
                  blog_data[0] && (
                  <div className={`w-full lg:w-1/2 flex gap-4 flex-col order-${(key % 2) ? '2': '1'}`}>
                    {
                      blog_data[0].blog_thumbnail && (
                        <Image src={blog_data[0].blog_thumbnail} alt={blog_data[0].blog_title} width={600} height={600} className="w-full lg:h-100" />
                      )
                    }
                    <h2 className="font-georgia text-xl">{blog_data[0].blog_title}</h2>
                    <ul className="flex gap-10 text-[#4E4E4E]">
                      <li>{dayjs.utc(blog_data[0].blog_published_date).format('Do MMMM, YYYY')}</li>
                      <li>
                        <Link href={blog_data[0].blog_category_url_slug}>{blog_data[0].blog_category_name}</Link>
                      </li>
                    </ul>
                    <p className="text-[#4E4E4E] text-sm">{parser(nl2br(blog_data[0].blog_preview))}</p>
                    <Link href={blog_data[0].blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
                  </div>
                  )
                }
                {
                  blog_data[1] && blog_data[1].length > 0 && (
                  <div className={`w-full lg:w-1/2 flex gap-10 flex-col order-${(key % 2) ? '1': '2'}`}>
                    {
                      blog_data[1].map((blog, i) => (
                        <div className="flex flex-col lg:flex-row gap-5" key={i}>
                          {
                          blog.blog_thumbnail && (
                          <Image src={blog.blog_thumbnail} alt={blog.blog_title} width={600} height={600} className="w-full lg:w-50 lg:h-50" />
                          )}
                          <div className="flex gap-2 flex-col">
                            <h2 className="font-georgia text-lg">{blog.blog_title}</h2>
                            <ul className="flex gap-10 text-[#4E4E4E]">
                              <li>{dayjs.utc(blog.blog_published_date).format('Do MMMM, YYYY')}</li>
                              <li>
                                <Link href={blog.blog_category_url_slug}>{blog.blog_category_name}</Link>
                              </li>
                            </ul>
                            <p className="text-[#4E4E4E] text-sm">{parser(nl2br(blog.blog_preview))}</p>
                            <Link href={blog.blog_url_slug} className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  )
                }
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </main>
    </>
  );
}