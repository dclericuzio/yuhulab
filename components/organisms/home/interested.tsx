import Image from "next/image";

export default function Interested() {
    return (
        <div className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col bg-[#F5F5F5] rounded-xs p-[0.1rem] md:p-[0.5rem]'>
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className='text-[0.2rem] md:text-[0.5rem] font-medium animation-effect'>Need cargo moved?</span>
                        <span className='text-[0.2rem] md:text-[0.5rem] font-medium animation-effect'>We’re set to sail.</span>
                    </div>
                    <button className="cursor-pointer font-medium text-white bg-[#d13333] text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]">Contact Us</button>
                </div>
                <Image
                    src="/assets/new-banner-13.jpg"
                    alt="interested"
                    width={4000}
                    height={1696}
                    className="w-full h-[1.5rem] md:h-[4rem] object-cover rounded-xs mt-[0.3rem] md:mt-[0.5rem] animation-effect"
                />
            </div>
        </div>
    );
}
