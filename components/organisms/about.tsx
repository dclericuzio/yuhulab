export default function About() {
    return (
        <div className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col'>
                <span className='mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-medium animation-effect'>About us</span>
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-2/3 flex flex-col">
                        <div className="text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D]">PT Sejahtera Karunia Lines (PTSKL) was established in 2012 as a subsidiary of PT Samudra Berkat Shipping. It operates under a license in the field of maritime freight transportation, with a strong commitment to supporting the growth of national logistics distribution and downstream industries. PTSKL owns and has experience operating various types of vessels, including Bulk Carrier Mother Vessels (MV), Self-Propelled Barges (SPB), Tug and Barge (T&B), and Oil Barges (OB). The company also provides a range of shipping services such as long-haul transport, transshipment, and Ship-to-Ship (STS) operations.</div>
                        <button className="cursor-pointer mt-[0.1rem] md:mt-[0.2rem] font-medium text-white text-[0.15rem] md:text-[0.2rem] mr-auto px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem] bg-red-500">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
