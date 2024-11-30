"use client";

import DisplayLayout from "@/components/layout";
import Link from "next/link";

const AboutUs = () => {
    return (
        <div className="black-bg">
            <DisplayLayout>
                <div className="about-hero min-h-[90vh] flex items-center justify-center">
                    <div className="px-5 md:px-20 pt-44 md:pt-60 pb-40">
                        <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-20">
                            <div className="h-[20rem] md:h-full rounded-xl bg-[#929196]"></div>
                            <div>

                                <p className="text-[#CCCFCA] text-sm md:text-sm mb-5">Hello there, my name is</p>
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-normal mb-5">Aliu Akeem <br /> <span className="text-4xl md:text-6xl">Oluwaseyi</span></h2>
                                <h5 className="text-sm md:text-xl text-[#CCCFCA] font-bold mb-5 leading-loose md:leading-relaxed">
                                    A data analyst who transforms complex datasets into actionable strategies, delivering clarity and driving smarter decisions.
                                </h5>
                                <p className="text-[#CCCFCA] text-sm leading-loose mb-5">Aliu Akeem is a data analyst who turns raw data into meaningful
                                    insights, using visualization techniques that highlight trends and patterns. His work creates a seamless
                                    experience, blending clarity with actionable outcomes that keep stakeholders engaged and informed..</p>
                                <p className="text-[#CCCFCA] text-sm leading-loose mb-5">Akeem is also great at explaining complex data in simple 
                                    terms. Whether he&apos;s talking to a technical team or company leaders, he makes sure everyone understands the 
                                    insights and can use them to make better decisions.</p>
                                <p className="text-[#CCCFCA] text-sm leading-loose mb-10">If you have any exciting projects to talk about, feel free to hit me up.</p>
                                <Link className="bg-accent text-black py-5 px-10 text-sm block rounded-lg w-max" href="/contact">Reach out to me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    )
}

export default AboutUs;