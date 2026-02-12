import { useServerCountdown } from "@/hooks/useServerCountdown";
import Link from "next/link";
import nl2br from "nl2br";
import parser from 'html-react-parser';

type ProgramProp = {
    program: {
        program_admission_end_datetime: Date;
        program_name: string;
        program_link: string;
        program_description: string;
    }
}

export function AdmissionProgramSlider({program}: ProgramProp) {
    const endDate = program.program_admission_end_datetime;
    
    const nowValid = !!endDate && new Date(endDate).getTime() > Date.now();
    
    const countdown = useServerCountdown(new Date(endDate));
    
    return (
    <div className="flex flex-col gap-5 py-10 px-5 justify-center items-center text-center transition-all duration-300 bg-white text-burgundy hover:bg-[#800000] hover:!text-white">
        <h2 className="text-xl">{program.program_name}</h2>
        <p className="leading-loose">{parser(nl2br(program.program_description))}</p>
        {endDate && nowValid && countdown && (
            <span className="text-3xl">
                {countdown.days ? `${countdown.days}d ` : ""}
                {countdown.hours ? `${countdown.hours}h ` : ""}
                {countdown.minutes ? `${countdown.minutes}m ` : ""}
                {countdown.seconds}s
            </span>
        )}
        <ul className="flex gap-5">
            <li>
                <Link href="" target="_blank" className="bg-[#800000] text-white py-2 px-2 text-sm group-hover:bg-white group-hover:text-[#800000]">Apply Now</Link>
            </li>
            <li>
                <Link href={program.program_link} target="_blank" className="border border-[#800000] bg-white py-2 px-2 text-sm group-hover:border-white group-hover:bg-[#800000] group-hover:text-white">View Program Details</Link>
            </li>
        </ul>
    </div>
    );
}