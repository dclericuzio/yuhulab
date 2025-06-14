import { IoBoatOutline } from "react-icons/io5";

export default function Business() {
    const cardData = [
        {
            title: 'Long-haul Transportation',
            desc: 'Reliable transport of goods over long distances, across regions or countries.',
        },
        {
            title: 'Transshipment',
            desc: 'The transfer of goods from one vessel to another during their journey to the final destination.',
        },
        {
            title: 'Ship-to-Ship',
            desc: 'Direct transfer of cargo between two vessels while at sea or anchored.',
        }
    ]
    return (
        <div className="bg-red-500 skl-container py-[0.35rem] md:py-[0.7rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col'>
                <div className="w-full flex justify-between items-center">
                    <span className='text-white mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-medium animation-effect'>Our business</span>
                    <button className="md:block hidden cursor-pointer font-medium text-red-500 bg-white text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]">See More</button>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="flex-col">
                        <div className="text-[0.15rem] md:text-[0.2rem] text-white">PT Sejahtera Karuna Lines (PTSKL) has dedicated the past 13 years since its establishment to operating and distributing bulk/dry-bulk cargo for a wide range of clients, including leading producers and distributors in the mining, power generation, and mineral trading industries—both in Indonesia and abroad.</div>
                        <div className="flex flex-col md:flex-row w-full my-[0.1rem] md:my-[0.2rem] gap-[0.1rem] md:gap-[0.2rem]">
                            {cardData.map((item, index) => (
                                <div key={index} className="rounded-xs flex flex-col w-full md:w-1/3 bg-[#F5F5F5] p-[0.1rem] md:p-[0.2rem] animation-effect">
                                    <IoBoatOutline className="text-red-500 text-[0.4rem] md:text-[0.5rem]" />
                                    <span className="my-[0.1rem] text-[0.2rem] md:text-[0.25rem] font-medium">{item.title}</span>
                                    <div className="text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D]">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="block md:hidden cursor-pointer font-medium text-red-500 bg-white text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]">See More</button>
            </div>
        </div>
    );
}
