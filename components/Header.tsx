"use client"

import Link from "next/link"
import Image from "next/image";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { fuse } from '@/lib/fuse'

import { useServerCountdown } from "@/hooks/useServerCountdown";

import { IoMdMail } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import { Ticker as TickerProps, ProgramsProps } from "@/types/api";

import { useHeader } from '@/context/HeaderContext'
import SearchBox from "./SearchBox";

type HeaderProps = {
    program_categories: string[]
    common_programs: ProgramsProps[]
    ticker_api: TickerProps
}

export default function Header({ program_categories, common_programs, ticker_api }: HeaderProps) {
    const { headerProps } = useHeader()

    let {
        showLoader = false,
        programPage = false,
        admissionPage = false,
        alumniPage = false,
        alumniPortal = "",
        alumniAssociation = "",
        placement_latest_brochure = {},
        placementsPage = false,
        eventRegistrationURL = "",
        programApplicationLink = "",
        programEligibilityFees = "",
        programBrochureAvailable = "",
        onDownloadBrochureClick,
        MDPPage = false,
        MDPProgramsScrollref
    } = headerProps;

    const basePath = process.env.NEXT_PUBLIC_PATH;

    let ticker_end_date;
    let nowValid = false;
    let countdown;

    if(ticker_api) {
        ticker_end_date = useMemo(
            () => new Date(ticker_api.ticker_end_time),
            []
        )

        nowValid = !!ticker_end_date && ticker_end_date.getTime() > Date.now();
        
        countdown = useServerCountdown(ticker_end_date);
    }

    const [activeProgramCategory, updateActiveProgramCategory] = useState('');

    const [hoverPGDM, updateHoverPGDM] = useState(false);

    const [openMobileMenu, updateMobileMenu] = useState(false);

    const [step, setStep] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    const [showSearchResults, updateShowSearchResults] = useState(false);

    const search_results = useMemo(() => {
        if(!searchValue.trim()) return [];

        return fuse.search(searchValue).map(r => r.item)
    }, [searchValue])

    const router = useRouter();
    
    const handleSearchClick = (path: string) => {
        updateShowSearchResults(false);

        if (path.endsWith(".pdf")) {
            window.open(path, "_blank", "noopener,noreferrer");
            return;
        }
        
        router.push(path);
    };

    const handleMDPProgramsScroll = () => {
        MDPProgramsScrollref?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <>
        <div className={`h-full w-full fixed top-0 left-0 z-15 cursor-wait bg-center bg-no-repeat bg-white opacity-50 ${showLoader === false ? 'hidden': ''}`} style={{backgroundImage: `url(${basePath}images/img_loader.gif)`}}></div>
        <header className="w-full fixed z-10">
            <div className="bg-white">
                {
                    ticker_api && ticker_api.ticker_caption && (
                        <ul className="w-full bg-[#FFCC33] flex gap-2 items-center justify-center flex-col md:flex-row md:gap-10 py-2">
                            <li className="text-sm">{ticker_api.ticker_caption} </li>
                            {
                                ticker_end_date && nowValid && countdown && (
                                    <li>
                                        <ul className="flex gap-5 md:gap-10">
                                            <li className="text-lg font-semibold">
                                                {(countdown.days) ? `${countdown.days}d ` : ''}
                                                {(countdown.hours) ? `${countdown.hours}h ` : ''}
                                                {(countdown.minutes) ? `${countdown.minutes}m ` : ''}
                                                {countdown.seconds}s
                                            </li>
                                            {
                                                ticker_api.ticker_link && (
                                                    <li>
                                                        <Link href={ticker_api.ticker_link} target="_blank" className="text-sm underline">{ticker_api.ticker_link_caption}</Link>
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
                        <Link href={`${basePath}events`}>Events</Link>
                    </li>
                    <li>
                        <Link href={`${basePath}my-social-responsibilties`}>MSR</Link>
                    </li>
                    <li>
                        <Link href={`${basePath}iqac`}>IQAC</Link>
                    </li>
                    <li>
                        <Link href={`${basePath}alumni`}>Alumni</Link>
                    </li>
                    <li>
                        <Link href={`${basePath}media`}>Media</Link>
                    </li>
                    <li>
                        <Link href={`${basePath}scholarships`}>Scholarships</Link>
                    </li>
                    <li className="hidden lg:block xl:hidden">
                        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} updateShowSearchResults={updateShowSearchResults} />
                    </li>
                    <li className="hidden lg:block xl:hidden">
                        <Link href={`${basePath}contact-us`} className="flex items-center justify-center gap-2 py-2 px-3 bg-[#800000] text-white">
                            <IoMdMail size={20} />
                            <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>
                <div className="w-full flex gap-2 justify-between items-center px-5 text-sm bg-white relative h-16 z-1">
                    <Link href={`${basePath}`}>
                        <Image src={`${basePath}logo.svg`} width={200} height={60} alt="NL Dalmia Logo" className="w-30 md:w-50" />
                    </Link>
                    <ul className="gap-5 lg:gap-4 xl:gap-2 items-center hidden lg:flex h-full">
                        <li className="group relative">
                            <Link href={`${basePath}about-us`} className="flex gap-1 items-center">About Us <MdKeyboardArrowDown size={25} /></Link>
                            <ul className="bg-white box-shadow absolute mt-5 left-1/2 -translate-x-1/2 text-[#4E4E4E] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap flex flex-col gap-5 w-50">
                                <li>
                                    <Link href={`${basePath}about-us#who-we-are`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Who we are</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}about-us#legacy`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Legacy</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}about-us#managing-council`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Managing Council</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}about-us#international-tie-ups`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">International Tie-ups</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group/item relative h-full justify-center flex">
                            <Link href={`${basePath}programs`} className="flex gap-1 items-center" onMouseOut={() => updateActiveProgramCategory('')}>Programs <MdKeyboardArrowDown size={25} /></Link>
                            <div className="absolute top-full -left-10 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible flex">
                                <ul className="bg-white box-shadow text-[#4E4E4E] shadow-lg whitespace-nowrap flex flex-col gap-5">
                                {
                                    program_categories.map((program_category, key) => (
                                        <li key={key} className="cursor-pointer relative w-50 group/submenu hover:bg-[#800000] hover:text-white" onMouseOver={() => updateHoverPGDM(false)} onMouseEnter={() => updateActiveProgramCategory(program_category)}>
                                            <span className="block px-4 py-2">{program_category}</span> <MdKeyboardArrowRight size={20} className="absolute right-0 top-1/2 -translate-y-1/2" />
                                        </li>
                                    ))
                                }
                                </ul>
                                {
                                    activeProgramCategory && (
                                    <ul className="bg-white box-shadow text-[#4E4E4E] shadow-lg whitespace-nowrap flex flex-col gap-5 min-w-[250px]">
                                        {
                                            activeProgramCategory === "Programs" && (
                                                <>
                                                <li className="cursor-pointer hover:bg-[#800000] hover:text-white" onMouseOver={() => updateHoverPGDM(true)}>
                                                    <span className="block px-4 py-2 relative">PGDM <MdKeyboardArrowRight size={20} className="absolute right-0 top-1/2 -translate-y-1/2" /></span>
                                                </li>
                                                <li className="hover:bg-[#800000] hover:text-white" onMouseOver={() => updateHoverPGDM(false)}>
                                                    <Link href="/programs/global-mba-program-university-of-wisconsin-parkside" className="block px-4 py-2">Global MBA</Link>
                                                </li>
                                                <li className="hover:bg-[#800000] hover:text-white" onMouseOver={() => updateHoverPGDM(false)}>
                                                    <Link href="/programs/doctoral-programs" className="block px-4 py-2">Ph.D</Link>
                                                </li>
                                                </>
                                            )
                                        }
                                        {
                                            common_programs.filter((program) => program.program_type === "Executive Education" && program.program_type === activeProgramCategory && (program.program_link || program.program_application_link)).map((program, sub_key) => (
                                                <li key={sub_key} className="hover:bg-[#800000] hover:text-white">
                                                    <Link href={program.program_link || program.program_application_link} className="block px-4 py-2">{program.program_name}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}
                                {
                                    hoverPGDM && (
                                    <ul className="bg-white box-shadow text-[#4E4E4E] shadow-lg whitespace-nowrap flex flex-col gap-5 min-w-[250px]" onMouseLeave={() => updateHoverPGDM(false)}>
                                        <li className="hover:bg-[#800000] hover:text-white">
                                            <Link href="/programs/pgdm" className="block px-4 py-2">PGDM</Link>
                                        </li>
                                        <li className="hover:bg-[#800000] hover:text-white">
                                            <Link href="/programs/finance" className="block px-4 py-2">PGDM Finance</Link>
                                        </li>
                                        <li className="hover:bg-[#800000] hover:text-white">
                                            <Link href="/programs/pgdm-in-business-analytics" className="block px-4 py-2">PGDM in Business Analytics</Link>
                                        </li>
                                    </ul>
                                    )
                                }
                            </div>
                        </li>
                        <li className="group relative">
                            <span className="flex gap-1 items-center cursor-pointer">Executive Education <MdKeyboardArrowDown size={25} /></span>
                            <ul className="bg-white box-shadow text-[#4E4E4E] absolute mt-5 left-1/2 -translate-x-1/2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap flex flex-col gap-5">
                            {
                                common_programs.filter((program) => program.program_type === "Executive Education" && (program.program_link || program.program_application_link)).map((program, sub_key) => (
                                    <li key={sub_key}>
                                        <Link href={program.program_link || program.program_application_link} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">{program.program_name}</Link>
                                    </li>
                                ))
                            }
                            </ul>
                        </li>
                        <li className="group relative">
                            <span className="flex gap-1 items-center cursor-pointer">Faculty <MdKeyboardArrowDown size={25} /></span>
                            <ul className="bg-white box-shadow text-[#4E4E4E] absolute mt-5 left-1/2 -translate-x-1/2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap flex flex-col gap-5">
                                <li>
                                    <Link href={`${basePath}faculty`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Faculty</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}faculty/research-papers-published/journal-publications`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Research</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}faculty/faculty-development-programs`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Faculty Development Programs</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <Link href={`${basePath}placements`} className="flex gap-1 items-center">Placements <MdKeyboardArrowDown size={25} /></Link>
                            <ul className="bg-white box-shadow text-[#4E4E4E] absolute mt-5 left-1/2 -translate-x-1/2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap flex flex-col gap-5">
                                <li>
                                    <Link href={`${basePath}placements#corporate-engagement`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Corporate Engagement</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}placements#highlights`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Placement Highlights</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}placements#recruiters`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Recruiters</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}placements#batch-profile`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Batch Profile</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}placements#reports`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Placement Reports</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}placements#connect`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Connect With Our Team</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group relative">
                            <Link href={`${basePath}life-at-nld`} className="flex gap-1 items-center">Life@NLD <MdKeyboardArrowDown size={25} /></Link>
                            <ul className="bg-white box-shadow text-[#4E4E4E] absolute mt-5 left-1/2 -translate-x-1/2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap flex flex-col gap-5">
                                <li>
                                    <Link href={`${basePath}life-at-nld#events`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Events</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}life-at-nld#student-clubs`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Student Clubs</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}life-at-nld#infrastructure`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Infrastructure</Link>
                                </li>
                                <li>
                                    <Link href={`${basePath}life-at-nld#institutional-publications`} className="block px-4 py-2 hover:bg-[#800000] hover:text-white">Institutional Publications</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href={`${basePath}admissions`}>Admissions</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-1 relative">
                        <div className="mx-5 flex lg:mx-0 lg:hidden xl:flex w-full xl:w-[50%]">
                            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} updateShowSearchResults={updateShowSearchResults} />
                        </div>
                        <Link href={`${basePath}contact-us`} className="hidden xl:flex items-center justify-center gap-2 py-2 bg-[#800000] text-white px-3 w-[50%]">
                            <IoMdMail size={20} />
                            <span>Contact Us</span>
                        </Link>
                        <RiMenu3Fill size={25} className={`cursor-pointer absolute right-0 lg:hidden transition-all duration-300 ${!openMobileMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`} onClick={() => { updateMobileMenu(true); setStep(0)}} />
                        <RiCloseLargeFill size={25} className={`cursor-pointer absolute right-0 transition-all duration-300 ${openMobileMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}  onClick={() => {updateMobileMenu(false); setStep(0)}} />
                    </div>
                </div>
            </div>
            <div className={`relative ${showSearchResults ? 'max-h-screen' : 'max-h-0'}`}>
                {
                    showSearchResults && (
                        <div className="w-full md:w-xs xl:w-sm bg-white absolute right-0 flex transition-transform duration-300 ease-in-out">
                            <ul className="w-full max-h-screen overflow-y-auto">
                                {
                                    search_results.map((result, key) => (
                                        <li key={key} className="w-full block cursor-pointer py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all" onClick={() => handleSearchClick(result.path)}>{result.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                )
                }
            </div>
            <div className={`overflow-hidden w-full transition-all duration-300 bg-white ${openMobileMenu ? 'max-h-screen': 'max-h-0'}`}>
                <div className="flex transition-transform duration-300 ease-in-out w-full h-full" style={{ transform: `translateX(-${step * 100}%)` }}>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(5);}}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">About Us <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => { setStep(1); }}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Programs <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => { setStep(3) }}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Executive Education <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => { setStep(6);}}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Faculty <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => { setStep(7);}}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Placements <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => { setStep(8);}}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Life@NLD <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => updateMobileMenu(false)}>
                                <Link href={`${basePath}admissions`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Admissions</Link>
                            </li>
                            <li onClick={() => updateMobileMenu(false)}>
                                <Link href={`${basePath}contact-us`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(0); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li>
                                <Link href={`${basePath}programs`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">All Programs </Link>
                            </li>
                            <li onClick={() => { setStep(2) }}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Programs <MdKeyboardArrowRight size={25} /></span>
                            </li>
                            <li onClick={() => { setStep(4) }}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Executive Education <MdKeyboardArrowRight size={25} /></span>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(1); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li onClick={() => {setStep(3);}}>
                                <span className="flex gap-1 items-center cursor-pointer block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">PGDM <MdKeyboardArrowRight size={20} /></span>
                            </li>
                            <li>
                                <Link href="/programs/global-mba-program-university-of-wisconsin-parkside" className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Global MBA</Link>
                            </li>
                            <li>
                                <Link href="/programs/doctoral-programs" className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Ph.D</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(2); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li>
                                <Link href="/programs/pgdm" className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">PGDM</Link>
                            </li>
                            <li>
                                <Link href="/programs/finance" className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">PGDM Finance</Link>
                            </li>
                            <li>
                                <Link href="/programs/pgdm-in-business-analytics" className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">PGDM in Business Analytics</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(1); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            {
                                common_programs.filter((program) => program.program_type === "Executive Education" && (program.program_link || program.program_application_link)).map((program, key) => (
                                    <li key={key}>
                                        <Link href={program.program_link || program.program_application_link} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">{program.program_name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(0); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}about-us`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">About Us</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}about-us#who-we-are`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Who we are</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}about-us#legacy`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Legacy</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}about-us#managing-council`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Managing Council</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}about-us#international-tie-ups`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">International Tie-ups</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(0); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}faculty`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Faculty</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}faculty/research-papers-published/journal-publications`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Research</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}faculty/faculty-development-programs`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Faculty Development Programs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(0); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Placements</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements#corporate-engagement`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Corporate Engagement</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements#highlights`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Placement Highlights</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements#recruiters`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Recruiters</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements#batch-profile`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Batch Profile</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements#reports`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Placement Reports</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}placements#connect`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Connect With Our Team</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full shrink-0`}>
                        <ul>
                            <li onClick={() => { setStep(0); }}>
                                <span className="flex px-2 py-2 items-center cursor-pointer text-sm"><MdKeyboardArrowLeft size={20} /> Go Back</span>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}life-at-nld`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Life@NLD</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}life-at-nld#events`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Events</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}life-at-nld#student-clubs`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Student Clubs</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}life-at-nld#infrastructure`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Infrastructure</Link>
                            </li>
                            <li>
                                <Link onClick={() => updateMobileMenu(false)} href={`${basePath}life-at-nld#institutional-publications`} className="block py-3 px-5 hover:bg-[#800000] hover:text-white duration-300 transition-all">Institutional Publications</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                programPage && (programEligibilityFees || programBrochureAvailable || programApplicationLink) && (
                <div className="w-full bg-[#FFCC33] flex justify-center sm:justify-end">
                    <ul className="flex gap-3 text-white my-2 sm:my-3 lg:my-3 mx-1 sm:mx-8">
                        {
                            programEligibilityFees && (
                                <li>
                                    <Link className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm" href={programEligibilityFees} target="_blank">Program Eligibility & Fees</Link>
                                </li>
                            )
                        }
                        {
                            programBrochureAvailable && (
                            <li>
                                <span className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm cursor-pointer" onClick={onDownloadBrochureClick}>Download Brochure</span>
                            </li>
                            )
                        }
                        {
                            programApplicationLink && (
                                <li>
                                    <Link className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm" href={programApplicationLink} target="_blank">Apply Now</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                )
            }
            {
                admissionPage && (
                <div className="w-full bg-[#FFCC33] flex justify-center sm:justify-end">
                    <ul className="flex gap-3 text-white my-2 sm:my-3 lg:my-3 mx-1 sm:mx-8">
                        <li>
                            <Link href="https://apply.nldalmia.in/pgdm-application-form" target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Apply for PGDM 2025/27</Link>
                        </li>
                        <li>
                            <Link href="https://apply.nldalmia.in/global-mba-application-form" target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Apply For Global MBA</Link>
                        </li>
                        <li>
                            <span className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm cursor-pointer" onClick={onDownloadBrochureClick}>Download Brochure</span>
                        </li>
                    </ul>
                </div>
                )
            }
            {
                alumniPage && (
                <div className="w-full bg-[#FFCC33] flex justify-end">
                    <ul className="flex gap-3 text-white my-2 sm:my-3 lg:my-3 mx-1 sm:mx-8">
                        {
                            alumniPortal && (
                            <li>
                                <Link href={alumniPortal} target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Alumni Portal</Link>
                            </li>
                            )
                        }
                        {
                            alumniAssociation && (
                            <li>
                                <Link href={alumniAssociation} target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Alumni Association</Link>
                            </li>
                        )
                        }
                    </ul>
                </div>
                )
            }
            {
                MDPPage && (
                    <div className="w-full bg-[#FFCC33] flex justify-end">
                        <ul className="flex gap-3 text-white my-2 mx-1 sm:mx-8">
                            <li>
                                <button className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm cursor-pointer" onClick={handleMDPProgramsScroll}>Explore Programs</button>
                            </li>
                        </ul>
                    </div>
                )
            }
            {
                eventRegistrationURL && (
                <div className="w-full bg-[#FFCC33] flex justify-end">
                    <ul className="flex gap-3 text-white my-2 sm:my-3 lg:my-3 mx-1 sm:mx-8">
                        <li>
                            <Link href={eventRegistrationURL} target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Register Now</Link>
                        </li>
                    </ul>
                </div>
                )
            }
            {
                placementsPage && (
                <div className="w-full bg-[#FFCC33] flex justify-end">
                    <ul className="flex gap-3 text-white my-2 sm:my-3 lg:my-3 mx-1 sm:mx-8">
                        {
                            placement_latest_brochure.intro_pdf && (
                            <li>
                                <Link href={placement_latest_brochure.intro_pdf} target="_blank" className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">{placement_latest_brochure.intro_title}</Link>
                            </li>
                        )
                        }
                        <li>
                            <Link href={`${basePath}placements#connect`} className="bg-[#800000] px-1 lg:px-5 py-2 text-[10px] sm:text-sm">Enquire Now</Link>
                        </li>
                    </ul>
                </div>
                )
            }
        </header>
        </>
    )
}