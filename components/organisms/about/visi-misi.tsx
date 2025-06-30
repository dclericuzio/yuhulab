import Image from "next/image";

export default function VisiMisi() {
    const valueDetails = [
        {
            letter: 'T',
            title: 'Tenacity',
            description: 'We face challenges head-on with resilience and commitment to operational excellence in every voyage.'
        },
        {
            letter: 'R',
            title: 'Reliability',
            description: 'We deliver what we promise — on time, safely, and consistently, earning the confidence of our clients and partners.'
        },
        {
            letter: 'U',
            title: 'Usefulness',
            description: 'We focus on real, measurable impact — supporting national connectivity, downstream development, and solving logistics challenges that matter.'
        },
        {
            letter: 'S',
            title: 'Stewardship',
            description: 'We take ownership of our responsibilities — from safety (K3) to ESG — safeguarding people, cargo, and the environment.'
        },
        {
            letter: 'T',
            title: 'Transparency',
            description: 'We communicate clearly and act with integrity across every level of the organization and with every stakeholder.'
        }
    ];
    const values = valueDetails.map(v => v.title);

    return (
        <div className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect">
            <div className="flex flex-col mb-[0.1rem] md:mb-[1rem] ">    
                <div className="flex flex-col-reverse md:flex-row items-center gap-[0.2rem]">
                    <div className='flex flex-col'>
                        <span className='mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-semibold animation-effect'>Vision</span>
                        <div className="mb-[0.1rem] md:mb-[0.2rem] text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D] text-justify">To become the leading and most trusted domestic maritime transportation company in Indonesia, providing reliable, safe, and sustainable shipping services.</div>
                        <span className='mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-semibold animation-effect'>Mission</span>
                        <div className="mb-[0.1rem] md:mb-[0.2rem] text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D] text-justify">To provide dependable logistics services through reliable, professional, and trustworthy operational management, prioritizing Safety (K3) and Environmental, Social, and Governance (ESG) standards.</div>
                        <div className="text-[0.15rem] md:text-[0.2rem] text-[#4D4D4D] text-justify">To support government and private maritime programs in enhancing connectivity and downstream processing of resources for vital sectors.</div>
                    </div>
                    <Image
                        src='/assets/new-banner-4.jpg'
                        alt="aboutbg"
                        width={2000}
                        height={800}
                        className={`w-full md:h-[4rem] animation-effect`}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-center mb-[0.1rem] md:mb-[0.2rem]">
                    <span className='text-[0.3rem] md:text-[0.5rem] font-semibold animation-effect'>Company Values</span>
                    <div className="h-[0.05rem] md:h-[0.1rem] mx-auto w-[1rem] bg-[#d13333] mt-[-0.15rem] md:mt-0"></div>
                </div>
                <span className="text-[0.75rem] md:text-[1.3rem]">TRUST</span>
                <div className="text-[0.1rem] md:text-[0.2rem] mt-[-0.1rem] md:mt-[-0.3rem] mb-[0.1rem] md:mb-[0.5rem]">
                    {values.map((value) => (
                        <span key={value}>
                            <span className="font-bold text-[#d13333]">{value.charAt(0)}</span>{value.slice(1)}
                        </span>
                    ))}
                </div>
                <div className="grid-cols-1 md:grid-cols-5 grid gap-[0.35rem]">
                    {valueDetails.map((item, index) => (
                        <div key={index} className="p-[0.3rem] bg-white drop-shadow-xl relative">
                            <div className={`absolute left-[0rem] md:left-[-0.15rem] top-[0rem] md:top-[-0.15rem] text-[0.15rem] md:text-[0.25rem] bg-[#d13333] text-white w-[0.25rem] h-[0.25rem] md:w-[0.45rem] md:h-[0.45rem] flex justify-center items-center`}>
                                {item.letter}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-[0.15rem] md:text-[0.2rem] font-semibold">{item.title}</div>
                                <div className="text-[0.115rem] md:text-[0.135rem]">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
