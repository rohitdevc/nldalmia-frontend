"use client"

import Image from "next/image";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import lodash from 'lodash';

export default function Faculty() {
  const basePath = process.env.NEXT_PUBLIC_PATH;

  const faculties = [
    {
      faculty_name: 'Shri Shivkumar Dalmia',
      faculty_designation: 'Chairman, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'HR'
    },
    {
      faculty_name: 'Prof. Dr. Seema Saini',
      faculty_designation: 'CEO, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'Teacher'
    },
    {
      faculty_name: 'Shri Shivkumar Dalmia',
      faculty_designation: 'Chairman, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'Staff'
    },
    {
      faculty_name: 'Prof. Dr. Seema Saini',
      faculty_designation: 'CEO, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'Staff'
    },
    {
      faculty_name: 'Shri Shivkumar Dalmia',
      faculty_designation: 'Chairman, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'HR'
    },
    {
      faculty_name: 'Prof. Dr. Seema Saini',
      faculty_designation: 'CEO, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'Management'
    },
    {
      faculty_name: 'Prof. Dr. Seema Saini',
      faculty_designation: 'CEO, N.L. Dalmia Education society',
      faculty_thumbnail: 'seema-saini.png',
      faculty_department: 'Management'
    }
  ]

  const departments: string[] = [];

  faculties.forEach((faculty) => {
    if(!departments.includes(faculty.faculty_department)) {
      departments.push(faculty.faculty_department);
    }
  })

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setDepartment("");
  };
  
  const handleDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value);
    setSearch("");
  };

  const filteredFaculties = faculties?.filter((faculty) => {
    if (search) {
      const q = search.toLowerCase();
      
      return (
        faculty.faculty_name.toLowerCase().includes(q) || faculty.faculty_designation.toLowerCase().includes(q) || faculty.faculty_department.toLowerCase().includes(q)
      );
    }
    
    if (department) {
      return faculty.faculty_department === department;
    }
    
    return true;
  });

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Meet The Mind Shaping Tomorrow’s Business Leader"
      banner_description="Explore the accomplished faculty behind NLDIMSR’s industry aligned PGDM programs. From finance experts to data science pioneers, discover the academic and real world experience that drives our classrooms."/>
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between px-5 md:px-15 xl:px-30 py-10">
        <div className="relative lg:w-[45%] border-b border-[#800000] text-black">
            <input type="search" placeholder="Search" className="peer py-2 focus:outline-none w-full placeholder-shown:pl-5 focus:pl-0 placeholder:text-black" value={search} onChange={handleSearch} />
            <CiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:hidden peer-not-placeholder-shown:hidden" size={18} />
        </div>
        <div className="relative lg:w-[45%] border-b border-[#800000]">
          <select className="px-2 w-full outline-none appearance-none" title="Department" value={department} onChange={handleDepartment}>
            <option value="">Search By Area</option>
            {
              departments && departments.length > 0 && departments.map((department, key) => (
                <option value={department} key={key}>{department}</option>
              ))
            }
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
            <IoIosArrowDown size={25} />
          </div>
        </div>
      </div>
      {
        filteredFaculties && filteredFaculties.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-5 xl:px-30 py-10">
            {
              filteredFaculties.map((faculty, key) => {
                return (
                  <div className="flex flex-col gap-4 xl:w-sm justify-center items-center text-center bg-white border-[0.5px] border-[#E0CDCD]" title={faculty.faculty_name} key={key}>
                    <div className="h-75">
                      <Image src={`${basePath}images/about-us/management/${faculty.faculty_thumbnail}`} alt={faculty.faculty_name} width={500} height={500} className="object-contain w-full h-full" />
                    </div>
                    <h2 className="font-georgia text-xl">{faculty.faculty_name}</h2>
                    <span className="text-[#4E4E4E]">{faculty.faculty_designation}</span>
                    <Link className="w-full bg-[#800000] text-white py-1 flex justify-center items-center gap-2" href={`${basePath}faculty/${lodash.kebabCase(faculty.faculty_name)}`}>View Profile <MdArrowOutward size={20} /></Link>
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