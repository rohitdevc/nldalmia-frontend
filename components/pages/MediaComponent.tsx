"use client"

import Link from "next/link";
import { useRef } from "react";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { MdArrowOutward } from "react-icons/md";

import Banner from "@/components/Banner";
import MediaNavigation from "@/components/MediaNavigation";
import Image from "next/image";
import nl2br from "nl2br";
import parser from "html-react-parser";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";
import { MediaCategory as BannerProps, Media, MediaCategoryListing } from "@/types/api";

type PageProps = {
  banner: BannerProps
  media_category_url_slug: string
  media_categories: MediaCategoryListing[]
  media: Media[]
}

export default function MediaComponent({ banner, media_category_url_slug, media, media_categories}: PageProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  return (
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image={banner.banner_image}
      banner_caption={banner.banner_image_caption}
      banner_description={banner.banner_image_description}
      />
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <MediaNavigation activePage={media_category_url_slug} media_categories={media_categories} />
        {
          media && media.length > 0 && (
            <div className="flex flex-col gap-25">
              {
                media.map((media_row, key) => (
                  <div className="w-full flex gap-10" key={key}>
                    <div className="w-100">
                      {
                        media_row.media_thumbnail && (
                          <Image src={media_row.media_thumbnail} alt={media_row.media_title} width={300} height={300} className="object-cover w-full h-full" />
                        )
                      }
                    </div>
                    <div className="flex flex-col gap-5">
                      <h2 className="font-georgia text-xl">{media_row.media_title}</h2>
                      <span>{dayjs(media_row.media_published_date).format('MMMM DD, YYYY')}</span>
                      {
                        media_row.media_preview && (
                        <p>{parser(nl2br(media_row.media_preview))}</p>
                        )
                      }
                      {
                        media_row.media_link ? (
                          <Link href={media_row.media_link} target="_blank" className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
                        ) : media_row.media_attachment ? (
                          <Link href={media_row.media_attachment} target="_blank" className="text-burgundy flex gap-1 items-center border-b w-fit">Learn More <MdArrowOutward size={15} /></Link>
                        ) : media_row.media_youtube_id ? (
                          <span className="text-burgundy flex gap-1 items-center border-b w-fit cursor-pointer" onClick={() => videoPopupRef.current?.open(media_row.media_youtube_id)}>Learn More <MdArrowOutward size={15} /></span>
                        ) : ''
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
  );
}