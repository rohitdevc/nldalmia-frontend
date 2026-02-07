import Image from "next/image";
import Link from "next/link";

type Program = {
    id: number;
    program_name: string;
    program_tagline: string;
    program_thumbnail: string;
    program_description: string;
    program_highlights?: string[];
    program_career_paths?: string[];
    program_link: string;
}

type ProgramBlockProps = {
  program: Program;
  index: number;
}

import nl2br from 'nl2br';
import parser from 'html-react-parser';

import { MdArrowOutward } from "react-icons/md";
  
export default function ProgramBlock({program, index}: ProgramBlockProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  return (
    <div className="flex flex-col md:flex-row gap-10 py-5 lg:py-10" key={index}>
      <div className={`w-full flex items-center justify-center md:items-start lg:w-[40%] overflow-hidden ${(index % 2) ? 'md:order-2' : 'order-1'}`}>
        <Image src={`${basePath}images/programs/${program.program_thumbnail}`} width={800} height={750} alt={program.program_name} className="w-100" />
      </div>
      <div className={`w-full lg:w-[60%] flex flex-col gap-5 ${(index % 2) ? 'md:order-1' : 'order-2'}`}>
        <h2 className="font-georgia text-2xl">{program.program_name}</h2>
        <h3 className="font-georgia text-xl/">{program.program_tagline}</h3>
        {
          program.program_description && (
            <div className="flex flex-col gap-2">
              <h4 className="font-georgia">Course Description</h4>
              <p className="text-[#4E4E4E] text-sm leading-loose">{parser(nl2br(program.program_description))}</p>
            </div>
          )
        }
        {
          program.program_highlights && program.program_highlights.length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="font-georgia">Program Highlights</h4>
              <ul className="flex flex-col gap-3 text-sm text-[#4E4E4E] list-disc list-inside">
                {
                  program.program_highlights.map((program_highlight, key) => (
                    <li key={key} className="leading-loose">{program_highlight}</li>
                  ))
                }
              </ul>
            </div>
          )
        }
        {
          program.program_career_paths && program.program_career_paths.length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="font-georgia">Potential Career Path</h4>
              <ul className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 text-sm text-[#4E4E4E] list-disc list-inside">
                {
                  program.program_career_paths.map((program_career_path, key) => (
                    <li key={key}>{program_career_path}</li>
                  ))
                }
              </ul>
            </div>
          )
        }
        <div className="flex gap-5 text-burgundy">
          <Link href={program.program_link}>Learn More About This Course <MdArrowOutward size={15} className="inline" /></Link>
        </div>
      </div>
    </div>
  )
}