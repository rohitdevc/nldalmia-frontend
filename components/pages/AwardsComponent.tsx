"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import CenterIntro from "@/components/CenterIntro";
import MediaNavigation from "@/components/MediaNavigation";
import Image from "next/image";
import { Awards, Banner as BannerProps, IntroProps, Ticker } from "@/types/api";

type PageProps = {
  ticker: Ticker
  banner: BannerProps
  introduction: IntroProps
  awards: Awards[]
};

export default function AwardsComponent({ticker, banner, introduction, awards}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

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
        <CenterIntro
        introTitle={introduction.intro_title}
        introCaption={introduction.intro_caption}
        introDescription={introduction.intro_description} />
        <MediaNavigation activePage="awards-and-achievements" />
        {
          awards && awards.length > 0 &&
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {
              awards.map((award, key) => (
                <div className="flex flex-col gap-3 sm:w-50 text-center" key={key}>
                  <div className="border-[0.5px] border-[#800000]">
                    {
                      award.award_thumbnail && (
                      <Image src={award.award_thumbnail} className="object-cover w-full h-full" width={300} height={300} alt={award.award_name} />
                      )
                    }
                  </div>
                  <h2 className="font-georgia text-xl">{award.award_name}</h2>
                  <p className="text-[#4E4E4E] text-sm">{award.award_year}</p>
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