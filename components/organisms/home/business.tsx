export default function Business() {
    const cardData = [
        {
            title: 'Oil & Gas Carrier',
            desc: 'test'
        },
        {
            title: 'Chemical Shipment',
            desc: 'test',
        },
        {
            title: 'Ship Management',
            desc: 'test'
        },
    ]
    return (
        <div id='bisniskami' className="bg-[#c3c9ca] skl-container py-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect">
            <div className='justify-center flex flex-col w-full'>
                <span className='text-center text-[#172b50] mb-[0.1rem] md:mb-[0.2rem] text-[0.25rem] md:text-[0.35rem] font-bold animation-effect'>Bisnis Kami</span>
                <div className="flex md:flex-row flex-col md:text-center text-justify justify-center">
                    <div className="md:w-2/3 flex">
                        <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">PT RANA beroprasi dengan standar Keselamatan dan Kelayakan pelayaran untuk muatan khusus. Kapal kami didukung oleh awak  yang berpengalaman dan telah memiliki sertifikasi sesuai peraturan pelayaran nasional dengan portfolio dan pengalaman untuk </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full my-[0.1rem] md:my-[0.2rem] gap-[0.1rem] md:gap-[0.2rem]">
                    {cardData.map((item, index) => (
                        <div key={index} className="rounded-[0.15rem] flex flex-col w-full md:w-1/2 bg-[#F5F5F5] p-[0.1rem] md:p-[0.2rem] animation-effect">
                            <span className="my-[0.1rem] text-[0.15rem] md:text-[0.25rem] font-bold text-center">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
