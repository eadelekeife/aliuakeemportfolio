import DisplayLayout from "@/components/layout";

import { LuArrowRight } from "react-icons/lu";

export default function Home() {
    return (
        <div>
            <DisplayLayout position="relative">
                <div className="px-5 md:px-20 py-20 bg-black">
                    <div className="flex flex-col md:grid grid-cols-2 gap-16">
                        <div>
                            <h4 className="mb-4 md:mb-10 text-offWhite">Contact Me</h4>
                            <h3 className="text-3xl md:text-6xl mb-4 md:mb-10 font-black text-white">Get in touch</h3>
                            <p className="md:w-[80%] text-offWhite text-sm md:text-lg leading-loose md:leading-normal">Get in touch to learn more about our automation platform and how we
                                can help you achieve your business goals. Get in touch to learn more about our automation platform.</p>
                            <div className="mt-10 md:mt-16">
                                <div className="md:w-[80%] flex justify-between items-center">
                                    <div>
                                        <h4 className="text-sm mb-5 text-[#666]">My Email Address</h4>
                                        <h3 className="text-offWhite text-xl">hello@framer.com</h3>
                                    </div>
                                    <div>
                                        <span className="icon-bar"><LuArrowRight className="text-2xl text-offWhite" /></span>
                                    </div>
                                </div>
                                <div className="mt-10 md:mt-16 md:w-[80%] flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-center">
                                    <div>
                                        <h4 className="text-sm mb-2 md:mb-5 text-[#666]">My Phone Number</h4>
                                        <h3 className="text-offWhite text-xl"><span className="text-sm">(+234)</span> 813 227 7316</h3>
                                    </div>
                                    <div>
                                        <h4 className="text-sm mb-2 md:mb-5 text-[#666]">Location</h4>
                                        <h3 className="text-offWhite text-xl">Abeokuta, Nigeria.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form action="">
                                <div className="form-group mb-5">
                                    <label htmlFor="fullName" className="text-offWhite text-sm md:text-base">Your Full Name</label>
                                    <input className="text-offWhite bg-transparent text-xs border-2 border-solid border-[#666] h-[4rem] rounded-lg block w-full px-3" name="full_name" />
                                </div>
                                <div className="grid grid-cols-2 gap-2 md:gap-5">
                                    <div className="form-group mb-5">
                                        <label htmlFor="email" className="text-offWhite text-sm md:text-base">Your Email Address</label>
                                        <input className="text-offWhite bg-transparent text-xs border-2 border-solid border-[#666] h-[4rem] rounded-lg block w-full px-3" name="full_name" />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label htmlFor="phone" className="text-offWhite text-sm md:text-base">Your Phone Number</label>
                                        <input className="text-offWhite bg-transparent text-xs border-2 border-solid border-[#666] h-[4rem] rounded-lg block w-full px-3" name="full_name" />
                                    </div>
                                </div>
                                <div className="form-group mb-8">
                                    <label htmlFor="fullName" className="text-offWhite text-sm md:text-base">Your Message</label>
                                    <textarea name="message" rows={10} className="text-offWhite bg-transparent text-xs border-2 border-solid border-[#666] rounded-lg block w-full px-3 py-3" />
                                </div>
                                <div className="mt-10">
                                    <div className="flex justify-between">
                                        <div></div>
                                        <button className="py-5 rounded-lg bg-accent px-12 text-sm text-black">Send Mail</button>
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

