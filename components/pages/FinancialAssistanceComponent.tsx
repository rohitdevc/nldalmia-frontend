"use client"

import Image from "next/image";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

import { Banner as BannerProps, FinancialAssistancePartners, IntroProps } from "@/types/api";

type PageProps = {
  banner: BannerProps
  introduction: IntroProps
  financial_assistance_partners: FinancialAssistancePartners[]
};

export default function FinancialAssistance({ banner, introduction, financial_assistance_partners}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_caption}
      banner_description={banner.banner_description}
      banner_vimeo_video_id={banner.banner_vimeo_video_id}
      banner_button_caption={banner.button_caption}
      banner_url={banner.button_link} />
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description} />
        {
          financial_assistance_partners && financial_assistance_partners.length && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-5 xl:gap-15">
            {
              financial_assistance_partners.map((financial_partner, key) => (
                <div className="border-[0.5px] border-[#D2A6A6] flex flex-col items-center justify-center gap-5 px-5 py-5" key={key}>
                  {
                    financial_partner.partner_logo && (
                      <Image src={financial_partner.partner_logo} alt={financial_partner.partner_name} width={100} height={60} className="w-30" />
                    )
                  }
                  <h2 className="font-georgia text-lg">{financial_partner.partner_name}</h2>
                  {
                    financial_partner.partner_pdf && (
                      <Link className="text-burgundy flex gap-2 items-center text-sm" href={financial_partner.partner_pdf}>View Profile <MdArrowOutward size={15} /></Link>
                    )
                  }
                </div>
              ))
            }
          </div>
          )
        }
        {
          introduction.intro_pdf && (
            <div className="flex justify-center items-center">
              <Link href={introduction.intro_pdf} target="_blank" className="text-white bg-[#800000] px-5 py-1">Download Guidelines</Link>
            </div>
          )
        }
      </div>
    </main>
  );
}