"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import CenterIntro from "@/components/CenterIntro";
import MediaNavigation from "@/components/MediaNavigation";
import Image from "next/image";
import { Banner as BannerProps, Ticker } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps;
};

export default function AwardsComponent({ticker, banner}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const awards = [
    {
      award_name: 'INS Hamla',
      award_thumbnail: 'ins-hamla.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Best Green Campus',
      award_thumbnail: 'best-green-campus.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Education Today',
      award_thumbnail: 'education-today.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Best Education Brands 2023',
      award_thumbnail: 'best-education-brands-2023.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'INS Hamla',
      award_thumbnail: 'ins-hamla.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Best Green Campus',
      award_thumbnail: 'best-green-campus.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Education Today',
      award_thumbnail: 'education-today.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Best Education Brands 2023',
      award_thumbnail: 'best-education-brands-2023.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'INS Hamla',
      award_thumbnail: 'ins-hamla.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Best Green Campus',
      award_thumbnail: 'best-green-campus.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Education Today',
      award_thumbnail: 'education-today.png',
      award_description: '2023, for seamless conduct of management phase'
    },
    {
      award_name: 'Best Education Brands 2023',
      award_thumbnail: 'best-education-brands-2023.png',
      award_description: '2023, for seamless conduct of management phase'
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
        <CenterIntro introTitle="Media And Newsroom" introCaption="At NLDIMSR, We Believe In Leading With Impact And It Shows In The Stories We Tell And The Stories Told About Us." introDescription="Celebrate the milestone that define our legacy-from institutional accolades to individual excellence across academia, innovation and leadership" />
        <MediaNavigation activePage="awards-and-achievements" />
        {
            awards && awards.length > 0 &&
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {
                awards.map((award, key) => (
                  <div className="flex flex-col gap-3 sm:w-50 text-center" key={key}>
                    <div className="border-[0.5px] border-[#800000]">
                      <Image src={`${basePath}images/awards/${award.award_thumbnail}`} className="object-cover w-full" width={300} height={300} alt={award.award_name} />
                    </div>
                    <h2 className="font-georgia text-xl">{award.award_name}</h2>
                    <p className="text-[#4E4E4E] text-sm">{award.award_description}</p>
                  </div>
                ))
              }
            </div>
        }
      </div>
      
      <Footer />
    </main>
    </>
  );
}