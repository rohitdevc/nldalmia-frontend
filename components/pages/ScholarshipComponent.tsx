"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Intro from "@/components/Intro";
import CenterIntro from "@/components/CenterIntro";

import { MdArrowOutward } from "react-icons/md";

export default function ScholarshipComponent() {
  const basePath = process.env.NEXT_PUBLIC_PATH;
  
  useEffect(() => {
    const wrappers = document.querySelectorAll(".responsive-table");
    if (!wrappers.length) return;

    wrappers.forEach((wrapper) => {
      const table = wrapper.querySelector("table");
      if (!table) return;
      
      const headers = Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent.trim());
      
      table.querySelectorAll("tbody tr").forEach((tr) => {
        Array.from(tr.children).forEach((td, index) => {
          if (headers[index]) {
            td.setAttribute("data-label", headers[index]);
          }
        });
      });
    })
  }, []);

  return (
    <>
    <Header />
    <main className="w-full" style={{backgroundImage: `url(${basePath}images/home/bg-pattern.png)`}}>
      <Banner
      banner_image="banner.jpeg"
      banner_caption="Where Merit Meets Opportunity"
      banner_description="At N.L. Dalmia Institute Of Management Studies and Research, we believe academic brilliance and potential should never be limited by financial constraints. Our scholarship programs reward high achivers, encourage inclusivity and enable deserving student to access world class education"/>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Events" introCaption="Empowering Ambition Through Financial Support" introDescription="The NLDIMSR Scholarship Program is designed to recognise merit, promote diversity and support students from economically or socially disadvantaged backgrounds. With both merit based and inclusivity based scholarships, we aim to build an ecosystem where every deserving candidate has the chance to excel." />
        <div className="w-full">
          <Image src={`${basePath}images/scholarship/scholarship.png`} alt="Scholarship" width={1920} height={900} className="object-cover" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro introCaption="Merit Based Scholarship" introDescription="To 10% of admitted students based on entrance scores, academic records, interviews and extracurriculars" />
          <div className="responsive-table">
            <table className="w-full table-fixed text-[#4E4E4E] text-center my-5">
              <thead>
                <tr>
                  <th>Scholarship</th>
                  <th>Fee Wavier</th>
                  <th>CAT</th>
                  <th>GMAT Score</th>
                  <th>CMAT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>100%</td>
                  <td>Rs. 8,25,000</td>
                  <td>&gt;99.00</td>
                  <td>785+</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>75%</td>
                  <td>Rs. 6,18,750</td>
                  <td>&gt;98-98.99</td>
                  <td>750-784+</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>50%</td>
                  <td>Rs. 4,12,500</td>
                  <td>&gt;95-95.97</td>
                  <td>700-749+</td>
                  <td>&gt;99.00</td>
                </tr>
                <tr>
                  <td>25%</td>
                  <td>Rs. 2,06,250</td>
                  <td>&gt;92-94.99</td>
                  <td>675-699+</td>
                  <td>&gt;98.5-98.99</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro introCaption="Inclusivity - Based Scholarships" introDescription="For students from EWS backgrounds, differently abled students, outstanding sports performance and children of alumni or faculty" />
          <div className="responsive-table">
            <table className="w-full table-fixed text-[#4E4E4E] text-center my-5">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Fee Wavier</th>
                  <th>Amount</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Economically Weaker Section</td>
                  <td>30%</td>
                  <td>₹ 2,47,500</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Differently Abled Students</td>
                  <td>30%</td>
                  <td>₹ 2,47,500</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Sports Excellence</td>
                  <td>20%</td>
                  <td>₹ 1,65,500</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Alumni/Faculty Ward</td>
                  <td>20%</td>
                  <td>₹ 1,65,500</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-5">
          <CenterIntro introCaption="Second Year Scholarships <br /> (Based on CGPI + 90% Attendance + Clean Record"/>
          <div className="responsive-table">
            <table className="w-full table-fixed text-[#4E4E4E] text-center my-5">
              <thead>
                <tr>
                  <th>CGPI Range</th>
                  <th>Fee Wavier</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&gt;9.80</td>
                  <td>100%</td>
                  <td>₹ 8,25,000</td>
                </tr>
                <tr>
                  <td>&gt;9.70 - 9.79</td>
                  <td>75%</td>
                  <td>₹ 6,18,750</td>
                </tr>
                <tr>
                  <td>&gt;9.60 - 9.69</td>
                  <td>50%</td>
                  <td>₹ 4,12,500</td>
                </tr>
                <tr>
                  <td>&gt;9.50 - 9.59</td>
                  <td>25%</td>
                  <td>₹ 2,06,250</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <div className="w-full flex flex-col gap-5 px-5 md:px-15 xl:px-30 py-10">
        <Intro introTitle="Student Clubs" introCaption="Transparency In Action"/>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-400">
            <Image src={`${basePath}images/scholarship/scholarship-report.png`} alt="Scholarship Report" width={500} height={300} className="object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#4E4E4E] leading-loose">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            <ul className="flex flex-col gap-3 text-burgundy">
              <li>
                <Link href="" target="_blank" className="flex gap-1 items-center">Scholarship Report 2025/2026 <MdArrowOutward size={15} /></Link>
              </li>
              <li>
                <Link href="" target="_blank" className="flex gap-1 items-center">Scholarship Report 2025/2026 <MdArrowOutward size={15} /></Link>
              </li>
              <li>
                <Link href="" target="_blank" className="flex gap-1 items-center">Scholarship Report 2025/2026 <MdArrowOutward size={15} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}