import DisplayLayout from "@/components/layout";
import Image from "next/image";

import { LuArrowRight } from "react-icons/lu";

export default function Home() {
    return (
        <div>
            <DisplayLayout>
                <div className="px-20 py-20">
                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <h4 className="mb-10 text-[#666]">Contact Me</h4>
                            <h3 className="text-6xl mb-10 font-black">Get in touch</h3>
                            <p className="w-[80%] text-lg leading-normal">Get in touch to learn more about our automation platform and how we
                                can help you achieve your business goals. Get in touch to learn more about our automation platform.</p>
                            <div className="mt-16">
                                <div className="w-[80%] flex justify-between items-center">
                                    <div>
                                        <h4 className="text-sm mb-5 text-[#666]">My Email Address</h4>
                                        <h3 className="text-black text-xl">hello@framer.com</h3>
                                    </div>
                                    <div>
                                        <span className="icon-bar"><LuArrowRight className="text-2xl" /></span>
                                    </div>
                                </div>
                                <div className="mt-16 w-[80%] flex justify-between items-center">
                                    <div>
                                        <h4 className="text-sm mb-5 text-[#666]">My Phone Number</h4>
                                        <h3 className="text-black text-xl"><span className="text-sm">(+234)</span> 813 227 7316</h3>
                                    </div>
                                    <div>
                                        <h4 className="text-sm mb-5 text-[#666]">Location</h4>
                                        <h3 className="text-black text-xl">Abeokuta, Nigeria.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form action="">
                                <div className="form-group mb-5">
                                    <label htmlFor="fullName text-xs">Your Full Name</label>
                                    <input className="text-xs border-2 border-solid border-[#666] h-[4rem] rounded-lg block w-full px-3" name="full_name" />
                                </div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="form-group mb-5">
                                        <label htmlFor="email text-xs">Your Email Address</label>
                                        <input className="text-xs border-2 border-solid border-[#666] h-[4rem] rounded-lg block w-full px-3" name="full_name" />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label htmlFor="phone text-xs">Your Phone Number</label>
                                        <input className="text-xs border-2 border-solid border-[#666] h-[4rem] rounded-lg block w-full px-3" name="full_name" />
                                    </div>
                                </div>
                                <div className="form-group mb-8">
                                    <label htmlFor="fullName text-xs">Your Message</label>
                                    <textarea name="message" rows={10} className="text-xs border-2 border-solid border-[#666] rounded-lg block w-full px-3 py-3" />
                                </div>
                                <div className="mt-10">
                                    <div className="flex justify-between">
                                        <div></div>
                                        <button className="py-5 rounded-lg bg-black px-12 text-sm text-white">Send Mail</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    );
}

