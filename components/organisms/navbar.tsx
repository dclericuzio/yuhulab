"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Navbar() {
    const leftLinks = [
        { href: "#ingredients", label: "Ingredients" },
        { href: "#why", label: "Why" },
    ];
    
    const rightLinks = [
        { href: "#quickfacts", label: "Quick Facts" },
        { href: "#rcvr", label: "RCVR." },
    ];
    return (
        <nav className='w-full font-bold'>
            <div className='yuhu-container flex flex-col md:flex-row items-center mx-auto justify-center py-[0.1rem] md:py-[0.3rem] gap-[0.2rem] md:gap-[0.8rem]'>
                <ul className='hidden md:flex items-center text-[0.3rem] gap-[0.8rem]'>
                    {leftLinks.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className='hover:text-[#8AD0C5] animation-effect'>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="#statement">
                    <Image
                        src="/assets/logo-green.png"
                        alt="Logo"
                        width={320}
                        height={60}
                        className="animation-effect w-[1.3rem] md:w-[2.3rem]"
                    />
                </Link>
                <ul className='hidden md:flex items-center text-[0.3rem] gap-[0.8rem]'>
                    {rightLinks.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className='hover:text-[#8AD0C5] animation-effect'>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className='flex md:hidden items-center text-[0.1rem] gap-[0.4rem]'>
                    {leftLinks.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className='hover:text-[#8AD0C5] animation-effect'>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                    {rightLinks.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className='hover:text-[#8AD0C5] animation-effect'>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}