export default function Business() {
    const cardData = [
        {
            img: './assets/long-toll-red.png',
            title: 'Long-Toll Transportation',
            desc: 'Reliable transport of dry-bulk cargo over long distance from Port of Loading (POL) to the Port of Discharge (POD)',
        },
        {
            img: './assets/transhipment-red.png',
            title: 'Transhipment/Ship-to-Ship',
            desc: 'Direct transfer of dry-bulk cargo with our barges from Port of Loading (POL) to the Mother Vessel (MV) at anchorage point',
        }
    ]
    return (
        <div className="bg-[#d13333] skl-container py-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col'>
                <div className="w-full flex justify-between items-center">
                    <span className='text-white mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-semibold animation-effect'>Our business</span>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="flex-col">
                        <div className="flex flex-row gap-[1.5rem] items-center">
                            <div className="text-[0.15rem] md:text-[0.2rem] text-white text-justify">PT Sejahtera Karuna Lines (PT SKL) has dedicated the past 13 years since its establishment to operate and distribute bulk/dry-bulk cargo for a wide range of clients, including leading producers and distributors in the mining, power generation, and mineral trading industries—both in Indonesia and abroad.</div>
                            <button className="whitespace-nowrap md:block hidden cursor-pointer font-medium text-[#d13333] bg-white text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]">See More</button>
                        </div>
                        <div className="flex flex-col md:flex-row w-full my-[0.1rem] md:my-[0.2rem] gap-[0.1rem] md:gap-[0.2rem]">
                            {cardData.map((item, index) => (
                                <div key={index} className="rounded-xs flex flex-col w-full md:w-1/2 bg-[#F5F5F5] p-[0.1rem] md:p-[0.2rem] animation-effect">
                                    <img src={item.img} alt="icon" className="w-[1rem] h-auto ml-[-0.15rem]"/>
                                    <span className="my-[0.1rem] text-[0.2rem] md:text-[0.25rem] font-semibold">{item.title}</span>
                                    <div className="text-[0.15rem] md:text-[0.2rem] text-[#5c5c5c] text-justify">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="block md:hidden cursor-pointer font-medium text-[#d13333] bg-white text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]">See More</button>
            </div>
        </div>
    );
}
