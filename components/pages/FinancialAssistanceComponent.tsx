"use client"

import Image from "next/image";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";

import { Banner as BannerProps, Ticker } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
};

export default function FinancialAssistance({ticker, banner}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const financial_partners = [
      {
        id: 1,
        financial_partner_name: 'IDFC First Bank',
        financial_partner_logo: 'idfc.png',
        financial_partner_url: 'https://www.idfcfirst.bank.in/'
      },
      {
        id: 2,
        financial_partner_name: 'Axis Bank',
        financial_partner_logo: 'axis.png',
        financial_partner_url: 'https://www.axis.bank.in/'
      },
      {
        id: 3,
        financial_partner_name: 'ICICI Bank iSmart Education Loans',
        financial_partner_logo: 'icici-i-smart.jpg',
        financial_partner_url: 'https://www.icici.bank.in/personal-banking/loans/education-loan'
      },
      {
        id: 4,
        financial_partner_name: 'Credila',
        financial_partner_logo: 'credila.jpg',
        financial_partner_url: 'https://www.credila.com/'
      },
      {
        id: 5,
        financial_partner_name: 'TATA Capital',
        financial_partner_logo: 'tata-capital.jpg',
        financial_partner_url: 'https://www.tatacapital.com/'
      }
  ]

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
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <Intro introCaption="Trusted Financial Partners" introDescription="We’ve collaborated with leading financial institutions to offer simplified, student friendly loan solutions. Get fast track approvals, minimal documentation and flexible repayment options tailored for PGDM and MBA students." />
        {
          financial_partners && financial_partners.length && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-5 xl:gap-15">
            {
              financial_partners.map((financial_partner, key) => (
                <div className="border-[0.5px] border-[#D2A6A6] flex flex-col gap-5 px-5 py-5" key={key}>
                  <Image src={`${basePath}images/admissions/${financial_partner.financial_partner_logo}`} alt={financial_partner.financial_partner_name} width={100} height={60} className="w-30" />
                  <h2 className="font-georgia text-lg">{financial_partner.financial_partner_name}</h2>
                  <Link className="text-burgundy flex gap-2 items-center text-sm" href={financial_partner.financial_partner_url}>View Profile <MdArrowOutward size={15} /></Link>
                </div>
              ))
            }
          </div>
          )
        }
        <div className="flex justify-center items-center">
          <Link href="" className="text-white bg-[#800000] px-5 py-1 ">Download Guidelines</Link>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}