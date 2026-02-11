import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube, FaRegCopyright } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    return (
        <>
        <div className="w-full bg-[#800000] text-white flex flex-col lg:flex-row items-center gap-10 md:gap-20 px-5 py-5 md:px-20 md:py-20">
            <div className="lg:border-r lg:pr-20 xl:pr-[30%] text-center md:text-left">
                <p className="text-sm leading-loose">NLDIMSR was established in the year 1995 by the Late Shri Niranjanlalji Dalmia with a vision to become a World-Class Management Institute. Currently, our Institute ranks among the Top B-schools in India and is one of Mumbai’s most preferred business schools.</p>
            </div>
            <Image src={`${basePath}white-logo.png`} alt="NL Dalmia Logo" width={200} height={60} className="w-70 md:w-100 md:h-20" />
        </div>
        <div className="w-full bg-[#FFCC33] text-sm grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 bg-[#FFCC33] px-5 md:px-20 py-5 md:py-20">
            <ul className="flex flex-col gap-4">
                <li className="font-bold underline">Quick Links</li>
                <li>
                    <Link href="">Mandatory Disclosures</Link>
                </li>
                <li>
                    <Link href="">AICTE Approvals</Link>
                </li>
                <li>
                    <Link href="">All Reports - MHRD NIRF</Link>
                </li>
                <li>
                    <Link href="">Grievance Redressal</Link>
                </li>
                <li>
                    <Link href="">Media & Blogs</Link>
                </li>
                <li>
                    <Link href="">NAAC</Link>
                </li>
                <li>
                    <Link href="">Contact Us</Link>
                </li>
                <li>
                    <Link href="">Committee</Link>
                </li>
                <li>
                    <Link href="">List of Faculty Members</Link>
                </li>
                <li>
                    <Link href="">List Of Non-Teaching Staff</Link>
                </li>
                <li>
                    <Link href="">Work With Us</Link>
                </li>
            </ul>
            <ul className="flex flex-col gap-4">
                <li className="font-bold underline">Programs</li>
                <li className="font-bold underline">Full-Time Programs</li>
                <li>
                    <Link href="">PGDM</Link>
                </li>
                <li>
                    <Link href="">PGDM Finance</Link>
                </li>
                <li>
                    <Link href="">PGDM in Business Analytics</Link>
                </li>
                <li>
                    <Link href="">Online Learning</Link>
                </li>
                <li>
                    <Link href="">Open & Distance Learning</Link>
                </li>
                <li>
                    <Link href="">PHD Programs</Link>
                </li>
                <li>
                    <Link href="">Executive PGDM</Link>
                </li>
                <li>
                    <Link href="">Global MBA</Link>
                </li>
                <li>
                    <Link href="">Bloomberg Research Analyst</Link>
                </li>
            </ul>
            <ul className="flex flex-col gap-4">
                <li className="font-bold underline">Placements</li>
                <li>
                    <Link href="">Batch Profile</Link>
                </li>
                <li>
                    <Link href="">Placement Partners</Link>
                </li>
                <li>
                    <Link href="">Placement Brochure</Link>
                </li>
                <li>
                    <Link href="">Batchwise Placement Details</Link>
                </li>
                <li>
                    <Link href="">Placement Report</Link>
                </li>
                <li>
                    <Link href="">Placement Contact Us</Link>
                </li>
                <li>
                    <Link href="">Placement Advisory Committee</Link>
                </li>
                <li className="font-bold underline">Corporate Connect</li>
                <li>
                    <Link href="">Management Development Programs</Link>
                </li>
                <li>
                    <Link href="">Guest Lectures</Link>
                </li>
                <li>
                    <Link href="">Value Added Programs</Link>
                </li>
            </ul>
            <ul className="flex flex-col gap-4">
                <li className="font-bold underline">Faculty & Research</li>
                <li>
                    <Link href="">Faculty</Link>
                </li>
                <li>
                    <Link href="">Faculty Participation</Link>
                </li>
                <li>
                    <Link href="">Research Papers Pubished</Link>
                </li>
                <li>
                    <Link href="">Faculty Initiatives</Link>
                </li>
                <li>
                    <Link href="">Faculty Participation Outside Campus</Link>
                </li>
                <li>
                    <Link href="">Faculty Development Programs</Link>
                </li>
                <li className="font-bold underline">Campus</li>
                <li className="font-bold underline">Life@NLD</li>
                <li>
                    <Link href="">Events</Link>
                </li>
                <li>
                    <Link href="">Industrial Visit</Link>
                </li>
                <li>
                    <Link href="">Resources</Link>
                </li>
            </ul>
            <ul className="flex flex-col gap-4">
                <li className="font-bold underline">Financial Assistance</li>
                <li>
                    <Link href="">Financial Aid</Link>
                </li>
                <li>
                    <Link href="">Scholarship</Link>
                </li>
                <li>
                    <Link href="">Value Added Programs</Link>
                </li>
            </ul>
        </div>
        <div className="w-full px-5 md:px-20 py-5 flex flex-col justify-center md:justify-start md:flex-row gap-5 md:gap-20 items-center">
            <div className="flex flex-col justify-center md:justify-start gap-5 w-full md:w-[75%]">
                <p className="text-xs flex gap-1 items-center"><FaRegCopyright /> N. L. Dalmia. Institute of Management Studies and Reseach All Rights Reserved</p>
                <p className="text-[0.60rem]">Disclaimer: The information in this website is intended for informational and educational purposes only, to provide readers with better understanding. All designated trademarks and brands are the property of their respective owners.</p>
            </div>
            <div className="flex justify-center md:justify-start gap-10 items-center w-full md:w-[20%]">
                <span className="text-xs">Follow us</span>
                <ul className="flex gap-2">
                    <Link href="https://www.facebook.com/NLDalmiaOfficial/" target="_blank"><FaFacebookSquare size={25} /></Link>
                    <Link href="https://www.instagram.com/nldalmiainstitute/" target="_blank"><FaInstagram size={25} /></Link>
                    <Link href="https://www.linkedin.com/school/n-l-dalmia-institute-of-management-studies-and-research" target="_blank"><FaLinkedin size={25} /></Link>
                    <Link href="https://www.youtube.com/channel/UC0AhxJDrG7PwuEagTTqfIAw" target="_blank"><FaYoutube size={25} /></Link>
                    <Link href="" target="_blank"><IoLogoWhatsapp size={25} /></Link>
                </ul>
            </div>
        </div>
        </>
    )
}