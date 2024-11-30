import DisplayLayout from "@/components/layout";
import Image from "next/image";

import Screenshot1 from "@/assets/images/Data Professionals Survey.png";
import Screenshot2 from "@/assets/images/Formula 1.png";
import Screenshot3 from "@/assets/images/Insurance Policies.png";
import Screenshot4 from "@/assets/images/NYC Bus Breakdowns.png";


const Projects = () => {
    return (
        <div className="bg-black">
            <DisplayLayout position="relative">
                <div className="px-5 md:px-20 py-20">
                    <div>
                        <h3 className="font-bold text-4xl md:text-6xl mb-5 text-white">I uncover insights from data.</h3>
                        <p className="text-sm md:text-xl md:w-[55%] leading-loose md:leading-loose text-[#969696]">
                            See how I&apos;ve transformed data into clear, actionable insights. Dive into the projects
                            that uncover trends and drive decisions. Explore my <span className="text-white">journey and discover what makes my
                                approach to data analysis unique and impactful.</span>
                        </p>
                    </div>
                    <div className="mt-10 md:mt-20">
                        <div className="flex flex-col md:grid grid-cols-2 gap-10">
                            <div>
                                <div className="h-[15rem] md:h-[30rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center mb-3 md:mb-5">
                                    <Image src={Screenshot1} alt="project 1" className="w-[85%] h-auto" />
                                </div>
                                <h5 className="text-xs md:text-sm mb-2 text-[#969696]">Microsoft Excel</h5>
                                <h3 className="text-base md:text-lg text-white">Data Professionals Survey</h3>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[30rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center mb-3 md:mb-5">
                                    <Image src={Screenshot4} alt="project 1" className="w-[85%] h-auto" />
                                </div>
                                <h5 className="text-xs md:text-sm mb-2 text-[#969696]">Microsoft Excel</h5>
                                <h3 className="text-base md:text-lg text-white">NYC Bus Breakdowns</h3>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[30rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center mb-3 md:mb-5">
                                    <Image src={Screenshot3} alt="project insurance" className="w-[85%] h-auto" />
                                </div>
                                <h5 className="text-xs md:text-sm mb-2 text-[#969696]">Microsoft Excel</h5>
                                <h3 className="text-base md:text-lg text-white">Insurance Policies</h3>
                            </div>
                            <div>
                                <div className="h-[15rem] md:h-[30rem] w-full bg-[#DCDFE6] rounded-xl flex items-center justify-center mb-3 md:mb-5">
                                    <Image src={Screenshot2} alt="project formula one" className="w-[85%] h-auto" />
                                </div>
                                <h5 className="text-xs md:text-sm mb-2 text-[#969696]">Microsoft Excel</h5>
                                <h3 className="text-base md:text-lg text-white">Formula One Survey</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    )
}

export default Projects;