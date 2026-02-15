"use client"
import Link from "next/link"
import Image from "next/image";

import { useMemo } from "react";

import { useServerCountdown } from "@/hooks/useServerCountdown";

import { IoMdMail } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

type Ticker = {
    ticker_message?: string;
    ticker_end_date: Date;
    ticker_link?: string;
};

export default function Header({admissionPage = false}) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    const ticker: Ticker = {
        ticker_message: 'Admission For Full Time Courses (PGDM) Are Open Now',
        ticker_end_date: useMemo(
            () => new Date('2026-12-31 20:00:00+05:30'),
            []
        ),
        ticker_link: 'https://apply.nldalmia.in/pgdm-application-form'
    }

    const nowValid = !!ticker.ticker_end_date && ticker.ticker_end_date.getTime() > Date.now();
    
    const countdown = useServerCountdown(ticker.ticker_end_date);

    return (
        <>
        <header className="w-full fixed z-5 h-[175px]">
            {
                ticker.ticker_message && (
                    <ul className="w-full bg-[#FFCC33] flex gap-2 items-center justify-center flex-col md:flex-row md:gap-10 py-2">
                        <li className="text-sm">{ticker.ticker_message} </li>
                        {
                            ticker.ticker_end_date && nowValid && countdown && (
                                <li>
                                    <ul className="flex gap-5 md:gap-10">
                                        <li className="text-lg font-semibold">
                                            {(countdown.days) ? `${countdown.days}d ` : ''}
                                            {(countdown.hours) ? `${countdown.hours}h ` : ''}
                                            {(countdown.minutes) ? `${countdown.minutes}m ` : ''}
                                            {countdown.seconds}s
                                        </li>
                                        {
                                            ticker.ticker_link && (
                                                <li>
                                                    <Link href={ticker.ticker_link} target="_blank" className="text-sm underline">Apply Now</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </li>
                            )
                        }
                    </ul>
                )
            }
            <ul className="w-full flex gap-4 md:gap-10 py-3 md:pr-15 text-sm justify-center lg:justify-end items-center border-b border-[#70707054] bg-white">
                <li>
                    <Link href="">Events</Link>
                </li>
                <li>
                    <Link href="">MSR</Link>
                </li>
                <li>
                    <Link href="">IQAC</Link>
                </li>
                <li>
                    <Link href="">Alumni</Link>
                </li>
                <li>
                    <Link href="">Media</Link>
                </li>
                <li>
                    <Link href="">Scholarships</Link>
                </li>
            </ul>
            <div className="w-full flex justify-between items-center py-2 pl-5 md:pl-20 xl:pl-[2%] pr-5 md:pr-10 xl:pr-[2%] text-sm bg-white">
                <Link href={`${basePath}`}>
                    <Image src={`${basePath}logo.svg`} width={200} height={60} alt="NL Dalmia Logo" className="w-30 md:w-50" />
                </Link>
                <ul className="gap-7 items-center hidden xl:flex">
                    <li>
                        <Link href={`${basePath}about-us`} className="flex gap-2 items-center">About Us <MdKeyboardArrowDown size={25} /></Link>
                    </li>
                    <li>
                        <Link href={`${basePath}programs`} className="flex gap-2 items-center">Programs <MdKeyboardArrowDown size={25} /></Link>
                    </li>
                    <li>
                        <Link href="">Executive Education</Link>
                    </li>
                    <li>
                        <Link href="">Faculty</Link>
                    </li>
                    <li>
                        <Link href="">Placements</Link>
                    </li>
                    <li>
                        <Link href="">Life@NLD</Link>
                    </li>
                    <li>
                        <Link href={`${basePath}admissions`}>Admissions</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    <form>
                        <div className="relative">
                            <input type="search" placeholder="Search" className="peer text-right pr-3 py-2 focus:outline-none" />
                            <CiSearch className="absolute right-18 top-1/2 -translate-y-1/2 text-gray-500 peer-not-placeholder-shown:hidden" size={18} />
                        </div>
                    </form>
                    <Link href={`${basePath}contact-us`} className="hidden lg:flex items-center justify-center gap-2 py-2 px-3 bg-[#800000] text-white">
                        <IoMdMail size={20} />
                        <span>Contact Us</span>
                    </Link>
                    <RiMenu3Fill size={25} className="cursor-pointer block xl:hidden" />
                </div>
            </div>
            {
                admissionPage && (
                <div className="w-full bg-[#FFCC33] flex justify-center sm:justify-end">
                    <ul className="flex gap-3 text-white my-4 mx-1 sm:mx-8">
                        <li>
                            <Link href="" target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Apply for PGDM 2025/27</Link>
                        </li>
                        <li>
                            <Link href="" target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Apply For Global MBA</Link>
                        </li>
                        <li>
                            <Link href="" target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Download Brochure</Link>
                        </li>
                    </ul>
                </div>
                )
            }
        </header>
        </>
    )
}