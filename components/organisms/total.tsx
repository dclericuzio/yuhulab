'use client';

import { useEffect, useRef, useState } from 'react';

export default function Total() {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const target = 2200000;
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateCount();
                } else {
                    cancelAnimationFrame(animationRef.current!);
                    setCount(0);
                }
            },
            { threshold: 0.7 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const animateCount = () => {
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                animationRef.current = requestAnimationFrame(step);
            }
        };

        animationRef.current = requestAnimationFrame(step);
    };

    return (
        <div
            ref={ref}
            className="skl-container mt-[0.3rem] md:mt-[0.5rem] px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect bg-red-500"
        >
            <div className="py-[0.4rem] flex flex-col justify-center items-center">
                <span className="text-white text-[0.3rem] md:text-[0.5rem] font-medium animation-effect">
                    TOTAL CARGO DELIVERED
                </span>
                <div className="text-white flex items-center">
                    <span className="text-[0.3rem] md:text-[0.4rem] font-medium animation-effect">
                        {count.toLocaleString()} MT/
                    </span>
                    <span className="mt-[0.17rem] text-[0.12rem] md:text-[0.2rem] font-medium animation-effect">
                        Metric Tonnes
                    </span>
                </div>
            </div>
        </div>
    );
}
