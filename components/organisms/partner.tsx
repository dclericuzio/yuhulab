'use client';

import Image from 'next/image';

const images = [
    '/assets/client-1.jpg',
    '/assets/client-2.jpg',
    '/assets/client-3.jpg',
    '/assets/client-4.jpg',
    '/assets/client-5.jpg',
    '/assets/client-6.jpg',
    '/assets/client-7.jpg',
    '/assets/client-8.jpg',
    '/assets/client-9.jpg',
];

export default function Partner() {
    const allImages = [...images, ...images];
    return (
        <div className="skl-container my-[0.3rem] md:my-[0.5rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col overflow-hidden'>
                <span className='my-[0.2rem] md:my-[0.5rem] text-[0.3rem] md:text-[0.5rem] font-medium animation-effect'>Partners</span>
                <div className='relative z-10'>
                    <div className="absolute left-0 top-0 w-[1rem] h-[1.3rem] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 w-[1rem] h-[1.3rem] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
                <div className='overflow-hidden'>
                    <div className="flex scroll-left-animation whitespace-nowrap min-w-full w-fit gap-[0.5rem]">
                        {allImages.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`client-${index + 1}`}
                                width={462}
                                height={462}
                                priority={index < images.length}
                                loading="eager"
                                className="w-[1.3rem] h-[0.4rem] md:w-[1.5rem] md:h-[0.4rem] object-contain animation-effect"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
