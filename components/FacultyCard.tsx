import { Faculties } from "@/types/api"
import Image from "next/image"
import Link from "next/link"

import { MdArrowOutward } from "react-icons/md";

type FacultyProps = {
    faculty: Faculties
    keyIndex: number
}

export function FacultyCard({faculty, keyIndex}: FacultyProps) {
    const basePath = process.env.NEXT_PUBLIC_PATH;
    
    return (
        <div className="h-full flex">
            <div className="flex-1 flex flex-col gap-4 xl:w-sm justify-center items-center text-center bg-white border-[0.5px] border-[#E0CDCD]" title={faculty.faculty_name} key={keyIndex}>
                <div className="h-75">
                    {
                    faculty.faculty_thumbnail && (
                        <Image src={faculty.faculty_thumbnail} alt={faculty.faculty_thumbnail_alt} width={500} height={500} className="object-contain w-full h-full" />
                    )
                    }
                </div>
                <h2 className="font-georgia text-xl">{faculty.faculty_name}</h2>
                <span className="text-[#4E4E4E]">{faculty.faculty_designation}</span>
                <Link className="w-full bg-[#800000] text-white py-1 flex justify-center items-center gap-2 mt-auto" href={`${basePath}faculty/${faculty.faculty_url_slug}`}>View Profile <MdArrowOutward size={20} /></Link>
            </div>
        </div>
    )
}