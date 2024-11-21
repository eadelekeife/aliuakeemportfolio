import DisplayLayout from "@/components/layout";
import React from "react";

import { FaAngleDown } from "react-icons/fa6";


export default function Home() {
  return (
    <div>
      <div className="black-bg">
        <DisplayLayout display="black">
          <div className="">
            {/* <div className="w-full h-[100vh] flex items-center justify-center"> */}
            <div className="w-full h-[100vh] grid grid-cols-1.5/1 gap-10 items-center px-20">
              <div className="w-[100%] -mt-20">
                <h5 className="mb-10 text-base text-[#FFC107]">Hi, my name is</h5>
                <h2 className="text-white text-6xl font-black mb-8">Aliu Akeem Oluwaseyi</h2>
                <h2 className="text-offWhite text-6xl font-black mb-8">I build things for the web.</h2>
                <div className="mt-3 mb-10">
                  <p className="text-offWhite text-base w-[80%] leading-loose">I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m
                    focused on building accessible, human-centered products at Upstatement. I build accessible.</p>
                </div>
                <button className="text-[#FFC107] border-solid border-2 border-[#FFC107] py-5 px-10">Download my Resume</button>
              </div>
              <div>
                {/* <Image src={_1} alt="ank" className="rotate" /> */}
                {/* <div className="w-[80%] mx-auto h-[30rem] -mt-35 bg-offWhite"></div> */}
              </div>
            </div>
            <div className="bg-white py-20 px-20">
              <div className="grid grid-cols-1/2">
                <div>
                  <h4 className="font-black text-2xl">(001)</h4>
                </div>
                <div>
                  <p className="text-2xl font-bold leading-relaxed mb-10 uppercase">
                    As a digital designer and art director I help companies and organisations around the world connect with their
                    audience and grow their business. Projects can be done directly with clients or in a supporting role.
                  </p>
                  <p className="text-2xl font-bold leading-relaxed mb-10 uppercase">
                    As a digital designer and art director I help companies and organisations around the world connect with their
                    audience and grow their business.
                  </p>

                  <div className="mt-20">
                    <button className="bg-black text-base text-white rounded-full py-5 px-10">Read about me</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-20 pt-32">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div>
                    <h4 className="font-black mb-5 text-offWhite text-2xl">(002)</h4>
                  </div>
                  <h3 className="text-offWhite text-3xl">Some work I&apos;ve done over the past year</h3>
                </div>
                <div>
                  <div className="h-[25rem] w-full bg-offWhite rounded-lg"></div>
                </div>
                <div>
                  <div className="h-[25rem] w-full bg-offWhite rounded-lg -mt-[20rem]"></div>
                </div>
                <div>
                  <div className="h-[25rem] w-full bg-offWhite rounded-lg"></div>
                </div>
                <div>
                  <div className="h-[25rem] w-full bg-offWhite rounded-lg -mt-[20rem]"></div>
                </div>
                <div>
                  <button className="bg-transparent border-solid rounded-xl border-2 border-offWhite text-offWhite text-base px-10 py-5">See More</button>
                </div>
              </div>
              <div className="mt-32">
                <div className="mb-10">
                  <h4 className="text-lg text-offWhite">My Services</h4>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite text-2xl">Data Cleaning and Preprocessing</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite text-2xl" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite text-2xl">Risk Analysis and Mitigation</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite text-2xl" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite text-2xl">Market Analysis</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite text-2xl" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite text-2xl">Data Visualization</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite text-2xl" />
                  </div>
                </div>
                <div className="flex justify-between border-b-2 border-solid border-offWhite pb-5 items-center mb-5">
                  <div>
                    <h4 className="text-offWhite text-2xl">Database Management</h4>
                  </div>
                  <div>
                    <FaAngleDown className="text-offWhite text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-32 px-20">
              <div className="grid gap-50 grid-cols-1/2/1">
                <div>
                  <p className="text-xl text-offWhite">Talk to me</p>
                </div>
                <div>
                  <h5 className="text-3xl text-offWhite">
                    Explore our journey and learn what sets us apart in crafting impactful digital experiences.
                  </h5>
                </div>
                <div className="flex justify-end">
                  <div>
                    <button className="bg-offWhite py-4 px-10 rounded-xl text-lg">Reach out to me</button>
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
