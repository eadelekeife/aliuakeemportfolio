import DisplayLayout from "@/components/layout";

const AboutUs = () => {
    return (
        <div className="black-bg">
            <DisplayLayout>
                <div className="about-hero min-h-[90vh] flex items-center justify-center">
                    <div className="w-[85%] py-48">
                        <h3 className="mx-auto text-7xl leading-tight uppercase font-black text-[#CCCFCA]">Hello there! My name is Aliu Akeem
                            Oluwaseyi, a data analyst from Lagos Nigeria.</h3>
                        <div className="mt-10 w-full h-[40rem] rounded-xl bg-[#CCCFCA]"></div>
                        <div className="mt-32">
                            <div className="grid grid-cols-1/2">
                                <div>
                                    <h5 className="text-[#CCCFCA] text-lg leading-loose">/My Bio</h5>
                                </div>
                                <div>
                                    <p className="text-[#CCCFCA] text-lg leading-loose">Farzin Zaman Khan is a web designer and Webflow developer who uses whitespace to draw attention to his work
                                        while creating a fun navigation experience (circles along a timeline unite as you scroll and hit the next
                                        project) to keep visitors scrolling. Farzin opens the site with a bold Email me CTA button for those
                                        who want to get in touch right away. And at the end, he places his contact information in a
                                        striking, user-friendly heading with clever animations that make the experience more exciting.</p>
                                </div>
                            </div>
                            <div className="mt-32">
                                <div className="grid grid-cols-3 gap-20">
                                    <div>
                                        <h5 className="mb-3 text-lg text-[#CCCFCA]">Goal Oriented</h5>
                                        <p className="text-[#CCCFCA] text-sm leading-loose">Farzin Zaman Khan is a web designer and Webflow developer who uses whitespace to draw attention to his work
                                            while creating a fun navigation experience (circles along a timeline unite as you scroll and hit.</p>
                                    </div>
                                    <div>
                                        <h5 className="mb-3 text-lg text-[#CCCFCA]">Goal Oriented</h5>
                                        <p className="text-[#CCCFCA] text-sm leading-loose">Farzin Zaman Khan is a web designer and Webflow developer who uses whitespace to draw attention to his work
                                            while creating a fun navigation experience (circles along a timeline unite as you scroll and hit.</p>
                                    </div>
                                    <div>
                                        <h5 className="mb-3 text-lg text-[#CCCFCA]">Goal Oriented</h5>
                                        <p className="text-[#CCCFCA] text-sm leading-loose">Farzin Zaman Khan is a web designer and Webflow developer who uses whitespace to draw attention to his work
                                            while creating a fun navigation experience (circles along a timeline unite as you scroll and hit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DisplayLayout>
        </div>
    )
}

export default AboutUs;