'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
    '/assets/banner-1.jpg',
    '/assets/banner-5.jpg',
    '/assets/new-banner-1.jpg',
    '/assets/new-banner-3.jpg',
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setProgress(0);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 1;
            });
        }, 50);
        return () => clearInterval(progressInterval);
    }, [currentIndex]);

    return (
        <div className='flex flex-col'>
            <div className="skl-container">
                <div className="relative w-full h-[2rem] md:h-[7rem] animation-effect">
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={`Hero Image ${index + 1}`}
                            width={4000}
                            height={1696}
                            className={`absolute top-[0.5rem] md:top-[1rem] left-0 w-full h-full object-cover animation-effect ${
                                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                            priority={index === 0}
                        />
                    ))}
                    <div className='font-bold hidden md:block z-10 absolute right-[1rem] top-[2.5rem] text-[0.5rem] animation-effect'>
                        Your <span className='p-[0.05rem] bg-red-500 text-white'>dependable</span> sea-<span className='italic'>partner</span>
                    </div>
                    {/* phone overlay & text  */}
                    <div className='block md:hidden z-10 top-[0.5rem] w-full h-full bg-[#00000050] absolute animation-effect'></div>
                    <div className='text-end font-bold block md:hidden z-10 absolute right-[0.2rem] top-[1.5rem] text-[0.2rem] w-[1.2rem] text-white animation-effect'>
                        Your <span className='p-[0.05rem] bg-red-500 text-white'>dependable</span> sea-<span className='italic'>partner</span>
                    </div>
                    <div className='w-[0.3rem] md:w-[0.6rem] h-[0.05rem] md:h-[0.1rem] bg-gray-200 rounded-full absolute bottom-[-0.63rem] md:right-0 right-[0.35rem]  md:bottom-[-0.7rem] md:left-1/2 md:-translate-x-1/2 z-10 overflow-hidden'>
                        <div 
                            className='h-full bg-red-500 rounded-full transition-all duration-[50ms] ease-linear'
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
            <div className='skl-container'>
                <div className='h-[0.2rem] w-[70%] md:w-[85%] bg-red-500 mt-[0.5rem] md:mt-[1rem] animation-effect'></div>
            </div>
        </div>
    );
}
