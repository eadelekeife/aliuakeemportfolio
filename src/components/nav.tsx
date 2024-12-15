"use client";

import { Drawer } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

type NavPropsType = {
    position?: "relative" | "fixed"
}

const Nav = (props: NavPropsType) => {

    const [fixedNav, setFixed] = useState(false);
    const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

    const toggleMenuDrawerDisplay = () => {
        setOpenMenuDrawer(!openMenuDrawer);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setFixed(true);
            }
            else {
                setFixed(false);
            }
        })
    }, [])

    return (
        <div>
            <div className={`${fixedNav ? "fixed" : props.position === "relative" ? "relative" : "fixed"} bg-black w-full flex justify-between items-center md:px-20 px-3 py-5`}>
                <div >
                    <Link href="/">
                        <h4 className={`text-white nav text-3xl`}>Aliu Akeem</h4>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex gap-10">
                        <li>
                            <Link className="text-offWhite" href="/"><span className="text-accent">01 &mdash;</span> Home</Link>
                        </li>
                        <li>
                            <Link className="text-offWhite" href="/about"><span className="text-accent">02 &mdash;</span> About Me</Link>
                        </li>
                        <li>
                            <Link className="text-offWhite" href="/projects"><span className="text-accent">03 &mdash;</span> Projects</Link>
                        </li>
                        <li>
                            <Link className="text-offWhite" href="/contact"><span className="text-accent">04 &mdash;</span> Contact Me</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <a href="" className="flex gap-0">
                        <div className="bg-transparent border-[#FFC107] border-2 border-solid text-accent py-5 px-8">Let&apos;s talk on WhatsApp</div>
                        {/* <div className="bg-white h-[4rem] -ml-2 w-[4rem] items-center flex justify-center text-xl rounded-full"><FaArrowTrendUp /></div> */}
                    </a>
                </div>
                <div className="md:hidden">
                    <HiMenuAlt3 onClick={toggleMenuDrawerDisplay} className="text-offWhite text-3xl" />
                </div>
            </div>
            <Drawer open={openMenuDrawer} onClose={() => setOpenMenuDrawer(false)} footer={null}>
                <div className="drawer-navigation h-full flex items-center relative">
                    <div
                        onClick={toggleMenuDrawerDisplay}
                        className="cancel size-14 bg-[#FF0000] rounded-full absolute top-0 right-0 items-center justify-center flex">
                        <FaTimes className="text-3xl text-white" />
                    </div>
                    <ul>
                        <li className="mb-10">
                            <Link className="text-[#cccfca] text-2xl" href="/">Home</Link>
                        </li>
                        <li className="mb-10">
                            <Link className="text-[#cccfca] text-2xl" href="/about">About Me</Link>
                        </li>
                        <li className="mb-10">
                            <Link className="text-[#cccfca] text-2xl" href="/projects">My Projects</Link>
                        </li>
                        <li className="mb-10">
                            <Link className="text-[#cccfca] text-2xl" href="/contact">Contact Me</Link>
                        </li>
                    </ul>
                    <div className="absolute bottom-10 w-full">
                        <button className="w-full bg-[#cccdca] py-5 rounded-lg text-black text-base">Chat with me</button>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Nav;