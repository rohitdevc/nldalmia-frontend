import { Banner, MetaData } from "@/types/api";
import type { Metadata } from "next";

type Props = {
  meta: MetaData
  banner: {
    banner_image: string
  }
  canonical_tag: string;
}

export async function generateMetadata({meta, banner, canonical_tag}: Props): Promise<Metadata> {
  return {
    title: meta.meta_title,
    description: meta.meta_description,
    alternates: {
      canonical: canonical_tag
    },
    openGraph: {
      title: meta.meta_title,
      description: meta.meta_description,
      type: "website",
      url: canonical_tag,
      siteName: "NL Dalmia",
      images: [
        {
          url: banner.banner_image,
          width: 1200,
          height: 630,
          alt: meta.meta_title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.meta_title,
      description: meta.meta_description,
      images: [banner.banner_image],
    }
  }
}