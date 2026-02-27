import Image from "next/image";
import Link from "next/link";

import { FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

type AlumniProfileProps = {
    alumni_profile: {
        alumni_profiles_image: string;
        alumni_profiles_name: string;
    }
}

export default function AlumniProfile({alumni_profile}: AlumniProfileProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;

    return (
    <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FFCC33] px-5 py-5 lg:py-0 lg:px-20 lg:pt-10 lg:pb-5">
            <div className="w-sm h-100 overflow-hidden rounded-full lg:-mb-15 z-5">
                <Image src={`${basePath}images/about-us/management/${alumni_profile.alumni_profiles_image}`} alt={alumni_profile.alumni_profiles_name} width={300} height={300} className="w-full h-full object-cover" />                          
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="font-georgia text-xl">{alumni_profile.alumni_profiles_name}</h2>
                <h3 className="font-georgia text-xl">Head of Strategy & Growth, Amazon, India</h3>
                <h3 className="font-georgia text-xl">PGDM-Marketing, Class of 2011</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col gap-2">
                    <h3 className="font-georgia text-sm">Areas Of Expertise</h3>
                    <p className="text-[#4E4E4E]">Strategy, Innovation, Entrepreneurship</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-georgia text-sm">Email</h3>
                    <p className="text-[#4E4E4E]"><Link href="mailto:seemasaini@nldalmia.in">seemasaini@nldalmia.in</Link></p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-georgia text-sm">Courses</h3>
                    <p className="text-[#4E4E4E]">Entrepreneurship and innovation strategy, Strategy in Innovation Ecosystems</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-georgia text-sm">Phone</h3>
                    <p className="text-[#4E4E4E]"><Link href="tel:+919876543210">+91 9876543210</Link></p>
                </div>
                </div>
                <ul className="flex gap-7 text-[#4E4E4E]">
                <li>
                    <Link href=""><FaLinkedin size={30} /></Link>
                </li>
                <li>
                    <Link href=""><AiFillInstagram size={30} /></Link>
                </li>
                <li>
                    <Link href=""><FaSquareXTwitter size={30} /></Link>
                </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col gap-4 bg-white px-5 lg:px-20 py-5 lg:py-15 z-1">
            <h4 className="font-georgia text-md">Bio</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">Ritesh leads Amazon’s marketplace growth strategy across tier ll and tire lll cities, helping shape how millions shop online. With a deep passion for customer experience and data-led innovation, he’s been pivotal in scaling new vertical’s at lightning speed.</p>
            <h4 className="font-georgia text-md">Career Journey</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">After completing his PGDM in marketing at NLDIMSR, Ritesh began his career with Hindustan uniliver through campus placements. Over the next decade, he transitioned from FMCGto tech commerce, holding leadership roles at Flipkart and then amazon. His knack for balancing strategic vision with operational excellence continues to earn his industry recognition.</p>
            <h4 className="font-georgia text-md">NLDIMSR Experience</h4>
            <p className="text-[#4E4E4E] text-sm leading-loose">“NLDIMSR didn’t just prepare me for business-it taught me how to think. The case-study approach, marketing labs and late-night discussion with faculty helped sharpen my strategic thinking. I owe confidence and clarity to that experience.”</p>
        </div>
    </div>
    )
}