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
import lodash from 'lodash';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

export default function BlogComponent({blog_category_url_slug = ""}) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const blog_categories = [
    'Admission Consultations',
    'B Schools',
    'Big Data',
    'Career',
    'College Application',
    'Global MBA',
    'Jobs',
    'MBA'
  ]

  let activeBlogCategorySlug = blog_category_url_slug;

  if(!activeBlogCategorySlug) {
    activeBlogCategorySlug = lodash.kebabCase(blog_categories[0]);
  }

  const [activeBlogCategory, updateActiveBlogCategory] = useState(activeBlogCategorySlug);

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="In The Spotlight"
      banner_description="Discover how N.L.Dalmmia Institute Of Management Studies and Research makes headlines, earns recognition, and share its voice across platforms from newsrooms to industry reports"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Media And Newsroom" introCaption="At NLDIMSR, We Believe In Leading With Impact- And It Shows In The Stories We Tell And The Stories Told About Us." introDescription="Celebrate the milestone that define our legacy-from institutional accolades to individual excellence across academia, innovation and leadership" />
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="w-full lg:w-[55%] flex gap-4 flex-col">
            <Image src={`${basePath}images/blog/blog-1.png`} alt="Blog" width={600} height={600} className="w-full lg:h-100" />
            <h2 className="font-georgia text-xl">From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates</h2>
            <ul className="flex gap-10 text-[#4E4E4E]">
              <li>October 30, 2025</li>
              <li>
                <Link href="/blog/mba">MBA</Link>
              </li>
            </ul>
            <Link href="/blog/mba/from-data-to-decisions" className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
          </div>
          <div className="w-full lg:w-[45%] flex gap-5 flex-col">
            <Image src={`${basePath}images/blog/blog-1.png`} alt="Blog" width={600} height={600} className="w-full lg:h-100" />
            <h2 className="font-georgia text-xl">From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates</h2>
            <ul className="flex gap-10 text-[#4E4E4E]">
              <li>October 30, 2025</li>
              <li>
                <Link href="/blog/mba">MBA</Link>
              </li>
            </ul>
            <Link href="/blog/mba/from-data-to-decisions" className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-15 xl:px-30 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-25 lg:justify-between border-t border-b border-[#D3D3D3] py-10">
          <h3 className="font-georgia text-xl w-50">Featured Blog</h3>
          <Link href="/blog/mba/some-blog" className="font-georgia text-4xl">Ai, Analytics & Decision Making: What Pgdm In Business Analytics Prepares You For</Link>
        </div>
      </div>
      <div className="w-full px-5 md:px-15 xl:px-30">
        {
          blog_categories && blog_categories.length > 0 && !blog_category_url_slug && (
          <ul className="flex flex-col flex-wrap sm:flex-row gap-5 lg:gap-10 justify-center items-center py-5">
            {
              blog_categories.map((blog_category, key) => (
                <li className="group" key={key}>
                    <span className="relative cursor-pointer" onClick={() => updateActiveBlogCategory(lodash.kebabCase(blog_category))}>
                        <span>{blog_category}</span>
                        <span className={`absolute w-full -bottom-1 left-0 h-[0.5px] bg-[#800000] origin-center transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeBlogCategory === lodash.kebabCase(blog_category) ? 'scale-x-100' : ''}`}></span>
                    </span>
                </li>
              ))
            }
          </ul>
          )
        }
        {
          blog_categories && blog_categories.length > 0 && blog_categories.filter((blog_category) => !blog_category_url_slug || lodash.kebabCase(blog_category) === blog_category_url_slug).map((blog_category, key) => (
          <div className={`w-full py-10 flex flex-col gap-10 ${activeBlogCategory === lodash.kebabCase(blog_category) ? 'block' : 'hidden'}`} key={key}>
            {
                [...Array(2)].map((_, j) => (
            <div className="w-full flex gap-5 flex-col lg:flex-row" key={j}>
              <div className={`w-full lg:w-1/2 flex gap-4 flex-col order-${(j % 2) ? '2': '1'}`}>
                <Image src={`${basePath}images/blog/blog-1.png`} alt="Blog" width={600} height={600} className="w-full lg:h-100" />
                <h2 className="font-georgia text-xl">From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates</h2>
                <ul className="flex gap-10 text-[#4E4E4E]">
                  <li>October 30, 2025</li>
                  <li>
                    <Link href={`/blog/${lodash.kebabCase(blog_category)}`}>{blog_category}</Link>
                  </li>
                </ul>
                <p className="text-[#4E4E4E] text-sm">You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.</p>
                <Link href="/blog/mba/from-data-to-decisions" className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
              </div>
              <div className={`w-full lg:w-1/2 flex gap-10 flex-col order-${(j % 2) ? '1': '2'}`}>
                {
                  [...Array(3)].map((_, i) => (
                    <div className="flex flex-col lg:flex-row gap-5" key={i}>
                      <Image src={`${basePath}images/blog/blog-1.png`} alt="Blog" width={600} height={600} className="w-full lg:w-50 lg:h-50" />
                      <div className="flex gap-2 flex-col">
                        <h2 className="font-georgia text-lg">From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates</h2>
                        <ul className="flex gap-10 text-[#4E4E4E]">
                          <li>October 30, 2025</li>
                          <li>
                            <Link href={`/blog/${lodash.kebabCase(blog_category)}`}>{blog_category}</Link>
                          </li>
                        </ul>
                        <p className="text-[#4E4E4E] text-sm">You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.</p>
                        <Link href="/blog/mba/from-data-to-decisions" className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
                      </div>
                    </div>
                  ))
                }
              </div>
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