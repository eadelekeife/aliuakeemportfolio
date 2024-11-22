import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { GoHeartFill } from "react-icons/go";

const Footer = () => {
    return (
        <div className="bg-black py-20 px-5 md:px-20">
            <div className="flex flex-col md:flex-row justify-between gap-20">
                <div>
                    <h4 className="mb-5 md:mb-10 text-base text-white">Reach out to me</h4>
                    <h3 className="text-white mb-5 md:mb-10 text-4xl md:text-6xl leading-snug">Let&apos;s create <br /> magic together</h3>
                    <Link href="" className="bg-[#F0F0F0] text-black rounded-full py-4 md:py-5 px-6 md:px-8 text-base flex gap-2 items-center w-max btn">Talk to me
                    <span className="icon-bar"><LuArrowRight className="text-2xl" /></span></Link>
                </div>
                <div>
                    <div className="flex gap-32">
                        <ul className="flex flex-col gap-6">
                            <li>
                                <Link href="" className="text-white text-base">Home</Link>
                            </li>
                            <li>
                                <Link href="" className="text-white text-base">Work</Link>
                            </li>
                            <li>
                                <Link href="" className="text-white text-base">About</Link>
                            </li>
                            <li>
                                <Link href="" className="text-white text-base">Content</Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-6">
                            <li>
                                <Link href="" className="text-white text-base flex gap-10 items-center btn">Twitter <span className="icon-bar"><LuArrowRight className="text-2xl" /></span></Link>
                            </li>
                            <li>
                                <Link href="" className="text-white text-base flex gap-10 items-center btn">Medium <span className="icon-bar"><LuArrowRight className="text-2xl" /></span></Link>
                            </li>
                            <li>
                                <Link href="" className="text-white text-base flex gap-10 items-center btn">LinkedIn <span className="icon-bar"><LuArrowRight className="text-2xl" /></span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-20 gap-10 md:mt-28">
                <div>
                    <p className="text-[#808080] text-sm md:text-sm flex items-center gap-2">Developed with 
                        love <GoHeartFill className="text-[#FF0000]" /> by <a href="" className="border-b border-[#808080]" target="_blank">Adeleke Ifeoluwase</a></p>
                </div>
                <div>
                    <Link href="" className="bg-[#F0F0F0] text-black rounded-xl py-5 px-8">Download My Resume</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;