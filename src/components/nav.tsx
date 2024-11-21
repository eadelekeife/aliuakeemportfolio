import Link from "next/link";

// type NavPropsType = {
//     display?: string
// }

// const Nav = (props: NavPropsType) => {
const Nav = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-20 py-5">
                <div >
                    <h4 className="text-white nav text-4xl">Aliu Akeem</h4>
                </div>
                <div>
                    <ul className="flex gap-10">
                        <li>
                            <Link className="text-offWhite" href=""><span className="text-accent">01 &mdash;</span> Home</Link>
                        </li>
                        <li>
                            <Link className="text-offWhite" href=""><span className="text-accent">02 &mdash;</span> About Me</Link>
                        </li>
                        <li>
                            <Link className="text-offWhite" href=""><span className="text-accent">03 &mdash;</span> Projects</Link>
                        </li>
                        <li>
                            <Link className="text-offWhite" href=""><span className="text-accent">04 &mdash;</span> Contact Me</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="" className="flex gap-0">
                        <div className="bg-transparent border-[#FFC107] border-2 border-solid text-accent py-5 px-8">Let&apos;s talk on WhatsApp</div>
                        {/* <div className="bg-white h-[4rem] -ml-2 w-[4rem] items-center flex justify-center text-xl rounded-full"><FaArrowTrendUp /></div> */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Nav;