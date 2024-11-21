import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const Footer = () => {
    return (
        <div className="bg-black py-20 px-20">
            <div className="flex justify-between">
                <div>
                    <h4 className="mb-10 text-base text-white">Reach out to me</h4>
                    <h3 className="text-white mb-10 text-6xl leading-snug">Let&apos;s start <br /> creating together</h3>
                    <Link href="" className="bg-[#F0F0F0] rounded-full py-5 px-8 text-base flex gap-2 items-center w-max btn">Let&apos;s talk
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
            <div className="flex justify-between mt-28">
                <div>
                    <p className="text-[#808080] text-base">2023 Pearl Framer template crafted with love by Dawid Pietrasiak</p>
                </div>
                <div>
                    <Link href="" className="bg-[#F0F0F0] rounded-lg py-5 px-8">Download My Resume</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;