"use client"

import Link from "next/link";
import { useRef } from "react";

import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(utc);
dayjs.extend(advancedFormat);

import { MdArrowOutward } from "react-icons/md";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import MediaNavigation from "@/components/MediaNavigation";
import Image from "next/image";
import nl2br from "nl2br";
import parser from "html-react-parser";
import YTVideoPopUp, { YTVideoPopupHandle } from "@/components/YouTubeVideo";

type MediaCategoryProps = {
  media_category_url_slug: string;
}

export default function MediaComponent({media_category_url_slug}: MediaCategoryProps) {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const videoPopupRef = useRef<YTVideoPopupHandle>(null);

  const media = [
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    },
    {
      media_title: 'From Data To Decisions: What Recruiters Expect From Next-Gen Mba Graduates',
      media_thumbnail: 'media.png',
      media_published_date: new Date('2025-10-30'),
      media_preview: 'You are stepping into an exciting yet challenging business world. The MBA job market is changing faster than ever. Traditional skills alone are not enough. You need to show recruiters that you can turn data into decisions.',
      media_link: '',
      media_attachment: '',
      media_youtube_id: ''
    }
  ]

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="In The Spotlight"
      banner_description="Discover how N.L.Dalmmia Institute Of Management Studies and Research makes headlines, earns recognition, and share its voice across platforms from newsrooms to industry reports"/>
      <div className="w-full flex flex-col gap-10 px-5 md:px-15 xl:px-30 py-10">
        <MediaNavigation activePage={media_category_url_slug} />
        {
          media && media.length > 0 && (
            <div className="flex flex-col gap-25">
              {
                media.map((media_row, key) => (
                  <div className="w-full flex gap-10" key={key}>
                    <Image src={`${basePath}images/media/${media_row.media_thumbnail}`} alt={media_row.media_title} width={300} height={300} className="w-100" />
                    <div className="flex flex-col gap-5">
                      <h2 className="font-georgia text-xl">{media_row.media_title}</h2>
                      <span>{dayjs(media_row.media_published_date).format('MMMM DD, YYYY')}</span>
                      <p>{parser(nl2br(media_row.media_preview))}</p>
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
      <Footer />
      <YTVideoPopUp ref={videoPopupRef} />
    </main>
    </>
  );
}