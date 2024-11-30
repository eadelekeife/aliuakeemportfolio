"use client";
import DisplayLayout from "@/components/layout";
import gsap from 'gsap';
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

import Screenshot1 from "@/assets/images/Data Professionals Survey.png";
import Screenshot2 from "@/assets/images/Formula 1.png";
import Screenshot3 from "@/assets/images/Insurance Policies.png";
import Screenshot4 from "@/assets/images/NYC Bus Breakdowns.png";


export default function Home() {
  const [currentcount, setCurrentCount] = useState<number>(0);
  useEffect(() => {
    let count = currentcount;
    const intervalWatch = setInterval(() => {
      count = count + 20;
      setCurrentCount(count);
      if (count === 100) {
        clearInterval(intervalWatch)
      };
    }, 1000)
  }, [])
  const blackHalf = useRef(null);
  useLayoutEffect(() => {
    if (currentcount === 100) {
      gsap.to(blackHalf.current, {
        height: 0,
        duration: 2,
        delay: 1,
        stagger: (index) => index * 0.1, // Creates a wave-like delay
        ease: "power2.out"
      })
    }
  }, [currentcount]);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('aliu_akeem.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'aliu_akeem.pdf';
        alink.click();
      })
    })
  }

  return (
    <div>
      <div className="animation-bg overflow-hidden" ref={blackHalf}>
        <div className="flex items-end w-full px-2 pb-60 md:pb-20 h-[100vh] mx-auto relative">
          <h3 className="md:text-5xl text-3xl text-[#FFC107] welcome-tag hidden md:block"
            style={{ marginLeft: `${currentcount === 100 ? 90 : currentcount === 0 ? currentcount : currentcount - 5}%` }}>{currentcount}%</h3>
          <h3 className="md:text-5xl text-3xl text-[#FFC107] welcome-tag md:hidden"
            style={{ marginLeft: `${currentcount === 100 ? 80 : currentcount === 0 ? currentcount : currentcount - 10}%` }}>{currentcount}%</h3>
        </div>
      </div>
      <div className="black-bg">
        <DisplayLayout display="black">
          <div className="">
            {/* <div className="w-full h-[100vh] flex items-center justify-center"> */}
            <div className="w-full h-[100vh] flex md:flex-row flex-col md:grid grid-cols-2/1 gap-10 items-center justify-center px-5 md:px-20">
              <div className="w-[100%] md:mt-24">
                <h5 className="mb-10 text-sm md:text-base text-[#FFC107]">Hi, my name is</h5>
                <h2 className="text-white text-2xl md:text-6xl font-black mb-4 md:mb-8">Aliu Akeem Oluwaseyi</h2>
                <h2 className="text-offWhite text-2xl md:text-6xl font-black mb-4 md:mb-8">I analyze data for insights.</h2>
                <div className="mt-3 mb-10">
                  <p className="text-offWhite md:text-base text-sm w-full md:w-[60%] md:leading-loose leading-loose">
                    I&apos;m a data analyst passionate about turning numbers into insights that drive decisions. Currently, I&apos;m honing
                    my skills and working on projects to build a solid foundation in data analysis.</p>
                </div>
                <button
                  onClick={onButtonClick}
                  className="text-[#FFC107] border-solid border-2 border-[#FFC107] py-5 px-8 md:px-10">Download my Resume</button>
              </div>
              <div>
                {/* <Image src={_1} alt="ank" className="rotate" /> */}
                {/* <div className="w-[80%] mx-auto h-[30rem] -mt-35 bg-offWhite"></div> */}
              </div>
            </div>
            <div className="bg-white py-20 px-5 md:px-20">
              <div className="flex flex-col gap-10 md:gap-0 md:grid grid-cols-1/2">
                <div>
                  <h4 className="font-black text-black text-2xl">(001)</h4>
                </div>
                <div>
                  <p className="md:text-2xl text-base text-black font-bold leading-loose md:leading-relaxed mb-10">

                    As a data analyst, I specialize in transforming raw data into actionable insights that empower organizations to make informed
                    decisions. With a solid foundation in analytical tools and techniques, I&apos;m passionate about uncovering trends and patterns
                    that drive growth and efficiency.
                  </p>
                  <p className="md:text-2xl text-base text-black font-bold leading-loose md:leading-relaxed mb-10">
                    I&apos;m eager to apply my skills in real-world scenarios through internships or entry-level roles. Whether collaborating on team
                    projects or handling individual assignments, I bring a detail-oriented approach and a commitment to delivering meaningful results.
                  </p>

                  <div className="mt-10 md:mt-20">
                    <Link href="/about" className="bg-black text-base text-white rounded-full py-5 px-10">Read more about me</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 md:px-20 pt-32">
              <div className="md:grid md:grid-cols-2 gap-5">
                <div>
                  <div>
                    <h4 className="font-black mb-5 text-offWhite text-2xl">(002)</h4>
                  </div>
                  <h3 className="text-offWhite md:w-full w-[70%] leading-normal text-2xl md:text-3xl md:mb-0 mb-5">Some work I&apos;ve done over the past year</h3>
                </div>
                <div>
                  {/* <div className="h-[15rem] md:h-[25rem] w-full bg-offWhite rounded-lg md:mb-0 mb-5"></div> */}
                  <div className="h-[15rem] md:h-[25rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center md:mb-0 mb-5">
                    <Image src={Screenshot1} alt="project 1" className="w-[85%] h-auto" />
                  </div>
                </div>
                <div>
                  {/* <div className="h-[15rem] md:h-[25rem] w-full bg-offWhite rounded-lg md:-mt-[20rem] md:mb-0 mb-5"></div> */}
                  <div className="h-[15rem] md:h-[25rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center md:-mt-[20rem] md:mb-0 mb-5">
                    <Image src={Screenshot2} alt="project 1" className="w-[85%] h-auto" />
                  </div>
                </div>
                <div>
                  {/* <div className="h-[15rem] md:h-[25rem] w-full bg-offWhite rounded-lg md:mb-0 mb-5"></div> */}
                  <div className="h-[15rem] md:h-[25rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center md:mb-0 mb-5">
                    <Image src={Screenshot3} alt="project 1" className="w-[85%] h-auto" />
                  </div>
                </div>
                <div>
                  {/* <div className="h-[15rem] md:h-[25rem] w-full bg-offWhite rounded-lg md:-mt-[20rem] md:mb-0 mb-10"></div> */}
                  <div className="h-[15rem] md:h-[25rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center md:-mt-[20rem] md:mb-0 mb-10">
                    <Image src={Screenshot4} alt="project 1" className="w-[85%] h-auto" />
                  </div>
                </div>
                <div>
                  <Link href="/contact" className="bg-transparent border-solid rounded-xl border-2 block w-max border-offWhite text-offWhite text-base px-10 py-5">See More</Link>
                </div>
              </div>
              <div className="mt-32">
                <div className="mb-10">
                  <h4 className="text-lg text-offWhite">My Services</h4>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite md:text-2xl text-lg">Data Cleaning and Preprocessing</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite md:text-2xl text-lg" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite md:text-2xl text-lg">Risk Analysis and Mitigation</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite md:text-2xl text-lg" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite md:text-2xl text-lg">Market Analysis</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite md:text-2xl text-lg" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite md:text-2xl text-lg">Data Visualization</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite md:text-2xl text-lg" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite md:text-2xl text-lg">Database Management</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite md:text-2xl text-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-32 px-5 md:px-20">
              <div className="flex flex-col md:grid gap-50 grid-cols-1/2/1">
                <div className="md:mb-0 mb-10">
                  <p className="text-xl text-offWhite">Talk to me</p>
                </div>
                <div className="md:mb-0 mb-10">
                  <h5 className="md:text-3xl text-xl leading-relaxed text-offWhite">
                    Discover my journey and see how I craft impactful, data-driven solutions that make a difference.
                  </h5>
                </div>
                <div className="flex md:justify-end">
                  <div>
                    <Link href="/contact" className="bg-[#F0F0F0] block text-black py-5 px-10 rounded-xl text-lg">Reach out to me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DisplayLayout>
      </div>
    </div>
  );
}
