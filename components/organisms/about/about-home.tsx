import Image from 'next/image';
export default function Hero() {

    return (
        <div className='flex flex-col'>
            <div className="skl-container">
                <div className="relative w-full h-[2rem] md:h-[5rem] animation-effect">
                    <Image
                        src='/assets/new-banner-14.jpg'
                        alt="aboutbg"
                        width={4000}
                        height={1300}
                        className={`absolute top-[0.5rem] md:top-[1rem] left-0 w-full h-[2rem] md:h-[5rem] object-cover animation-effect`}
                    />
                    <div className='text-white font-bold hidden md:block z-20 absolute left-1/2 top-1/2 -translate-x-1/2 text-[0.5rem] animation-effect'>
                        About Us
                    </div>
                    {/* phone overlay & text  */}
                    <div className='hidden md:block z-10 top-[1rem] w-full h-[5rem] bg-[#00000050] absolute animation-effect'></div>
                    <div className='block md:hidden z-10 top-[0.5rem] w-full h-full bg-[#00000050] absolute animation-effect'></div>
                    <div className='text-end font-bold block md:hidden z-20 absolute left-1/2 top-[1.3rem] -translate-x-1/2  text-[0.2rem] text-white animation-effect'>
                        About Us
                    </div>
                </div>
            </div>
            <div className='skl-container'>
                <div className='h-[0.1rem] md:h-[0.2rem] w-[70%] md:w-[85%] bg-[#d13333] mt-[0.5rem] md:mt-[1rem] animation-effect'></div>
            </div>
        </div>
    );
}
