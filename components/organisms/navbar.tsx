"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import { useHash } from '@/contexts/HashContext';

export default function Navbar() {
    const { currentHash, setCurrentHash } = useHash();
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };
      
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // // Handle click on navigation links
    // const handleNavClick = (hash: string) => {
    //     console.log('Nav clicked:', hash);
    //     setCurrentHash(hash);
    // };

    const links = [
        { 
            name: "Beranda", 
            path: "#beranda" 
        },
        { 
            name: "Tentang Kami", 
            path: "#tentangkami" 
        },
        { 
            name: "Bisnis Kami", 
            path: "#bisniskami" 
        },
        { 
            name: "Kontak", 
            path: "#kontak"
        }
    ]

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
                                // const isHomeActive = link.path === "#home" && (currentHash === "" || currentHash === "#home");
                                // const isOtherActive = link.path !== "#home" && currentHash === link.path;
                                // const isActive = isHomeActive || isOtherActive ? 'bg-[#5fb1c5] text-white' : 'text-[#ECECEC]';
                                // console.log(`Link ${link.name}: currentHash=${currentHash}, link.path=${link.path}, isActive=${isHomeActive || isOtherActive}`);
                                return (
                                    <li key={index} className={`text-[#ECECEC] tracking-widest text-[0.12rem] px-[0.7rem] py-[0.2rem]`}>
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
                                // const isHomeActive = link.path === "#home" && (currentHash === "" || currentHash === "#home");
                                // const isOtherActive = link.path !== "#home" && currentHash === link.path;
                                // const isActive = isHomeActive || isOtherActive ? 'bg-[#5fb1c5] text-[#ECECEC]' : 'text-black';
                                return (
                                    <li key={index} className={`w-full text-[0.16rem] text-center py-[0.2rem] text-[#ECECEC]`}>
                                        <Link href={link.path}>{link.name}</Link>
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