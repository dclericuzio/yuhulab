"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };
      
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pathname = usePathname();

    const links = [
        { 
            name: "Beranda", 
            path: "/" 
        },
        { 
            name: "Tentang Kami", 
            path: "/tentang-kami" 
        },
        { 
            name: "Bisnis Kami", 
            path: "/bisnis-kami" 
        },
        { 
            name: "Kontak", 
            path: "/kontak"
        }
    ]

    // Don't render until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <nav className='fixed z-50 bg-[#172b50] w-full font-semibold shadow-md'>
                <div className='skl-container flex items-center my-[0.1rem] md:my-0 px-[0.15rem] md:px-0'>
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={320}
                            height={60}
                            className="animation-effect ml-[0.1rem] sm:ml-[0.2rem] md:ml-[0.7rem] w-[0.8rem] md:w-[1rem] md:h-[0.4rem]"
                        />
                    </Link>
                    <div className='hidden md:flex flex-col ml-auto'>
                        <div className='w-full'>
                            <ul className='flex items-center'>
                                {links.map((link, index) => (
                                    <li
                                        key={index}
                                        className='text-[#ECECEC] tracking-widest text-[0.12rem] px-[0.7rem] py-[0.2rem]'
                                    >
                                        <Link href={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex ml-auto mr-[0.1rem] sm:mr-[0.2rem] md:hidden group z-50 w-[0.25rem] h-[0.2rem] cursor-pointer flex-col justify-between items-center'>
                        <span className='h-[0.04rem] w-full rounded-lg cursor-pointer animation-effect bg-[#5fb1c5]' />
                        <span className='h-[0.04rem] rounded-lg cursor-pointer animation-effect bg-[#ECECEC] w-full' />
                        <span className='h-[0.04rem] w-full rounded-lg cursor-pointer animation-effect bg-[#5fb1c5]' />
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className='fixed z-50 bg-[#172b50] w-full font-semibold shadow-md'>
            <div className='skl-container flex items-center my-[0.1rem] md:my-0 px-[0.15rem] md:px-0'>
                {/* logo */}
                <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={320}
                        height={60}
                        className="animation-effect ml-[0.1rem] sm:ml-[0.2rem] md:ml-[0.7rem] w-[0.8rem] md:w-[1rem] md:h-[0.4rem]"
                    />
                </Link>
                {/* desktop */}
                <div className='hidden md:flex flex-col ml-auto'>
                    <div className='w-full'>
                        <ul className='flex items-center'>
                            {links.map((link, index) => {
                                const isActive = pathname === link.path;
                                return (
                                    <li
                                        key={index}
                                        className={`text-[#ECECEC] tracking-widest text-[0.12rem] px-[0.7rem] py-[0.2rem] ${isActive ? 'bg-[#5fb1c5]' : ''}`}
                                    >
                                        <Link href={link.path}>{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                {/* hamburger */}
                <div className='flex ml-auto mr-[0.1rem] sm:mr-[0.2rem] md:hidden group z-50 w-[0.25rem] h-[0.2rem] cursor-pointer flex-col justify-between items-center' onClick={() => { setOpen(!open) }}>
                    <span className={`h-[0.04rem] w-full rounded-lg cursor-pointer animation-effect bg-[#5fb1c5] ${open ? "rotate-45 translate-y-[0.07rem]" : ""}`} />
                    <span className={`h-[0.04rem] rounded-lg cursor-pointer animation-effect bg-[#ECECEC] ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-[0.04rem] w-full rounded-lg cursor-pointer animation-effect bg-[#5fb1c5] ${open ? "-rotate-45 -translate-y-[0.095rem]" : ""}`} />
                </div>

                {/* mobile */}
                <div 
                    className={
                    `fixed top-0 right-0 z-40 w-2/3 h-full bg-white 
                    animation-effect drop-shadow-2xl flex flex-col
                    ${open ? 'translate-x-0' : 'translate-x-full'}`
                    }
                >
                    <div className='flex flex-col mt-[0.6rem]'>
                        <ul className='flex flex-col items-center'>
                            {links.map((link, index) => {
                                const isActive = pathname === link.path;
                                return (
                                    <li key={index} className={`w-full text-[0.16rem] text-center py-[0.2rem] ${isActive ? 'text-[#ECECEC] bg-[#5fb1c5]' :''}`}>
                                        <Link href={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}