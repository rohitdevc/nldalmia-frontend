"use client"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import ResearchPublicationTabs from "@/components/ResearchPublicationTabs";

export default function BookChaptersComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const book_publications = [
    {
      book_name: 'The Essentials Of World Religion',
      book_author_name: 'Trilochan Sastry',
      book_thumbnail: '9780143466888.jpg',
      book_published_date: new Date('2026-01-04'),
      book_link: 'https://www.midlandbookshop.com/en/product/the-essentials-of-world-religions?'
    },
    {
      book_name: 'The Essentials Of World Religion',
      book_author_name: 'Trilochan Sastry',
      book_thumbnail: '9780143466888.jpg',
      book_published_date: new Date('2026-01-04'),
      book_link: 'https://www.midlandbookshop.com/en/product/the-essentials-of-world-religions?'
    },
    {
      book_name: 'The Essentials Of World Religion',
      book_author_name: 'Trilochan Sastry',
      book_thumbnail: '9780143466888.jpg',
      book_published_date: new Date('2023-04-04'),
      book_link: 'https://www.midlandbookshop.com/en/product/the-essentials-of-world-religions?'
    },
    {
      book_name: 'The Essentials Of World Religion',
      book_author_name: 'Trilochan Sastry',
      book_thumbnail: '9780143466888.jpg',
      book_published_date: new Date('2026-01-04'),
      book_link: 'https://www.midlandbookshop.com/en/product/the-essentials-of-world-religions?'
    },
    {
      book_name: 'The Essentials Of World Religion',
      book_author_name: 'Trilochan Sastry',
      book_thumbnail: '9780143466888.jpg',
      book_published_date: new Date('2022-09-14'),
      book_link: 'https://www.midlandbookshop.com/en/product/the-essentials-of-world-religions?'
    }
  ]

  const book_published_years: number[] = [];

  book_publications.forEach((book_publication) => {
    if(!book_published_years.includes(book_publication.book_published_date.getFullYear())) {
      book_published_years.push(book_publication.book_published_date.getFullYear());
    }
  })

  book_published_years.sort((a, b) => b - a);

  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setYear("");
  };
  
  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setSearch("");
  };

  const filteredBooks = book_publications?.filter((book) => {
    if (search) {
      const q = search.toLowerCase();
      
      return (
        book.book_name.toLowerCase().includes(q) || book.book_author_name.toLowerCase().includes(q) || book.book_published_date.getFullYear().toString().includes(q)
      );
    }
    
    if (year) {
      return book.book_published_date.getFullYear().toString() === year;
    }
    
    return true;
  });

  const page_name = "Book/Book Chapters";

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Faculty Research And Publications"
      banner_description="Discover book articles, case studies, books and thought leadership from our faculty. Search by title, faculty or year, filter by type and download citations."/>
      <ResearchPublicationTabs page_name={page_name}  />
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between px-5 md:px-15 xl:px-30 py-10">
        <div className="relative lg:w-[45%] border-b border-[#800000] text-black">
            <input type="search" placeholder="Search by title or faculty" className="peer py-2 focus:outline-none w-full placeholder-shown:pl-5 focus:pl-0 placeholder:text-black" value={search} onChange={handleSearch} />
            <CiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:hidden peer-not-placeholder-shown:hidden" size={18} />
        </div>
        <div className="relative lg:w-[45%] border-b border-[#800000]">
          <select className="px-2 w-full outline-none appearance-none" title="Year" value={year} onChange={handleYear}>
            <option value="">Published Year</option>
            {
              book_published_years && book_published_years.length > 0 && book_published_years.map((year, key) => (
                <option value={year} key={key}>{year}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <IoIosArrowDown size={25} />
          </div>
        </div>
      </div>
      {
        filteredBooks && filteredBooks.length > 0 && (
          <div className="w-full flex flex-col gap-5 px-5 lg:px-5 xl:px-30 py-10">
            {
              filteredBooks.map((book, key) => {
                return (
                  <div className="flex flex-col sm:flex-row gap-5 bg-white text-burgundy border-[0.5px] border-[#800000] py-5 px-10 group transition-all duration-300 hover:bg-[#800000] hover:!text-white" title={book.book_name} key={key}>
                    <div className="w-30">
                      <Image src={`${basePath}images/research-published/${book.book_thumbnail}`} alt={book.book_name} width={300} height={300} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h2 className="font-georgia text-xl">{book.book_name}</h2>
                      <h3>{book.book_author_name}</h3>
                      <Link href={book.book_link} target="_blank" className="w-fit text-white bg-[#800000] px-3 py-1 group-hover:bg-white group-hover:text-[#800000]">View</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
      <Footer />
    </main>
    </>
  );
}