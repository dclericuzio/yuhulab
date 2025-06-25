
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, {useEffect, useState} from 'react'

export default function Navbar() {
    const pathname = usePathname();
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
    const links = [
        { 
            name: "Home", 
            path: "/" 
        },
        { 
            name: "About Us", 
            path: "/aboutus" 
        },
        { 
            name: "Business", 
            path: "/business" 
        },
        { 
            name: "Contact", 
            path: "/contact"
        }
    ]
    const navData = [
        {
            name: '+62 21 5795-0866',
            path: 'tel:+622157950866'
        },
        {
            name: 'marketing@ptsbs.id',
            path: 'mailto:marketing@ptsbs.id'
        },
        {
            name: 'AIA Central Lt.33',
            path: 'https://maps.app.goo.gl/PupLd7eMMdBDbH9R8'
        }
    ]
    return (
        <nav className='fixed z-50 bg-[#F9F9F9] w-full font-semibold shadow-md'>
            <div className='skl-container flex items-center my-[0.1rem] md:my-0'>
                {/* logo */}
                <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={420}
                        height={60}
                        className="animation-effect ml-[0.1rem] sm:ml-[0.2rem] md:ml-[0.7rem] w-[2.7rem] h-[0.4rem] md:w-[4.2rem] md:h-[0.6rem]"
                    />
                </Link>
                {/* desktop */}
                <div className='hidden md:flex flex-col ml-auto'>
                    <div className='flex items-center bg-gray-500 text-white justify-evenly'>
                        {navData.map((item, index) => {
                            return (
                                <Link 
                                    href={item.path} 
                                    key={index} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-[0.12rem] my-[0.1rem] mx-[0.2rem] pr-[0.3rem]'
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className='w-full'>
                        <ul className='flex items-center'>
                            {links.map((link, index) => {
                                const isActive = pathname === link.path ? 'bg-[#d13333] text-white' : 'text-black';
                                return (
                                    <li key={index} className={`text-[0.16rem] px-[0.7rem] py-[0.2rem] ${isActive}`}>
                                        <Link href={link.path}>{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                {/* hamburger */}
                <div className='flex ml-auto mr-[0.1rem] sm:mr-[0.2rem] md:hidden group z-50 w-[0.25rem] h-[0.2rem] cursor-pointer flex-col justify-between items-center' onClick={() => { setOpen(!open) }}>
                    <span className={`h-[0.04rem] w-full rounded-lg cursor-pointer animation-effect bg-[#d11919] ${open ? "rotate-45 translate-y-[0.07rem]" : ""}`} />
                    <span className={`h-[0.04rem] rounded-lg cursor-pointer animation-effect bg-black ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-[0.04rem] w-full rounded-lg cursor-pointer animation-effect bg-[#d11919] ${open ? "-rotate-45 -translate-y-[0.095rem]" : ""}`} />
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
                                const isActive = pathname === link.path ? 'bg-[#d11919] text-white' : 'text-black';
                                return (
                                    <li key={index} className={`w-full text-[0.16rem] text-center py-[0.2rem] ${isActive}`}>
                                        <Link href={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='flex mt-auto flex-col items-center bg-gray-500 text-white justify-evenly'>
                        {navData.map((item, index) => {
                            return (
                                <Link 
                                    href={item.path} 
                                    key={index} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-[0.12rem] my-[0.1rem] mx-[0.2rem] py-[0.1rem] text-center border-b-[0.01rem] border-white last:border-none'
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}