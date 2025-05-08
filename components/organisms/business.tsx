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
        <div className="skl-container mt-[0.3rem] md:mt-[0.5rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col'>
                <div className="w-full flex justify-between items-center">
                    <span className='mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-medium animation-effect'>Our business</span>
                    <button className="font-medium text-white text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem] bg-red-500">See More</button>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="flex-col">
                        <div className="text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D]">PT Sejahtera Karuna Lines (PTSKL) began operations by chartering tug and barge units for the transportation of steam coal in the coal industry. Over time, we have expanded our shipping services to accommodate a wider range of commodities across Java, Kalimantan, Sumatra, and Sulawesi.</div>
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
            </div>
        </div>
    );
}
