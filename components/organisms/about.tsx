export default function About() {
    return (
        <div className="skl-container mt-[0.3rem] md:mt-[0.5rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col'>
                <span className='mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-medium animation-effect'>About us</span>
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-2/3 flex flex-col">
                        <div className="text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D]">PT Sejahtera Karuna Lines (PTSKL) was established in 2012 as a subsidiary of PT Samudra Berkar Shipping. The company specializes in the ownership and operation of various marine vessels, including bulk carrier mother vessels (MV), self-propelled barges (SPB), tug and barge units (T&B), and oil barges (OB). PTSKL provides comprehensive maritime services, encompassing long-haul transportation, transshipment, and ship-to-ship transfer operations within Indonesian territorial waters.</div>
                        <button className="mt-[0.1rem] md:mt-[0.2rem] font-medium text-white text-[0.15rem] md:text-[0.2rem] mr-auto px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem] bg-red-500">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
