import Image from "next/image";

type BannerProps = {
  videoUrl: string;
  imageUrl: string;
  title: string;
  desc: string;
};

export default function Banner({ videoUrl, title, desc, imageUrl }: BannerProps) {
    return (
        <div className='flex flex-col'>
            <div className="skl-container">
                <div className="relative w-full animation-effect">
                    <div className="h-[0.4rem] w-full bg-[#FFFFFF] absolute bottom-[0rem] md:hidden block"></div>
                        {imageUrl !== "" ? 
                            <Image 
                                src={imageUrl} 
                                width={1200}
                                height={800}
                                alt="banner-img"
                                onContextMenu={(e) => e.preventDefault()} 
                                className="w-full h-[4rem] md:h-[5rem] mt-[0.3rem] md:mt-[0.5rem] object-cover pointer-events-none select-none"
                            />
                        : 
                            <video 
                                src={videoUrl} 
                                autoPlay 
                                muted 
                                loop
                                playsInline
                                onContextMenu={(e) => e.preventDefault()} 
                                className="w-full h-[4rem] md:h-[5rem] mt-[0.3rem] md:mt-[0.5rem] object-cover pointer-events-none select-none"
                                draggable={false}
                            />
                        }
                    <div className="h-full w-full bg-[#00000050] absolute bottom-[0rem] hidden md:block"></div>
                    <div className="h-[3.6rem] w-full bg-[#00000050] absolute top-[0rem] block md:hidden"></div>
                    <div className='text-[#ECECEC] block z-10 absolute left-[0.3rem] md:left-[1rem] top-[2rem] md:top-[2.5rem] text-[0.5rem] animation-effect'>
                        <div className="flex flex-col">
                            <span className="text-[0.15rem] md:text-[0.2rem]">{title}</span>
                            <span className="text-[0.25rem] md:text-[0.35rem] font-bold">{desc}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
