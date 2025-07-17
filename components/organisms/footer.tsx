"use client"
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Footer() {
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
    const footerData = [
        {
            icon: <FaPhone className="text-[#ECECEC]"/>,
            name: '+62 21 5795-0866',
            path: 'tel:+622157950866'
        },
        {
            icon: <IoMdMail className="mt-[0.03rem] text-[#ECECEC]"/>,
            name: 'admin@ranaputrasolid.co.id',
            path: 'mailto:admin@ranaputrasolid.co.id'
        },
        {
            icon: <FaMapMarkerAlt className="text-[#ECECEC]"/>,
            name: 'Sampoerna Strategic Square South Tower Lt.22',
            address: 'Jl. Jend. Sudirman No.45 - 46, Karet Semanggi,',
            address2: 'Setiabudi, Jakarta Selatan, DKI Jakarta 12930',
            path: 'https://maps.app.goo.gl/qtjAAjtrP3EuDbFGA'
        }
    ]
    return (
        <div className="bg-[#172b50] skl-container px-[0.3rem] md:px-[0.7rem] animation-effect">
            <div className="flex flex-col">
                <div className="flex py-[0.3rem] md:py-[0.5rem]">
                    <div className="flex flex-col">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={320}
                            height={60}
                            className="animation-effect w-[1rem] md:w-[2rem] h-auto"
                        />
                        <div className="flex md:flex-row flex-col gap-[0.4rem]">
                            <div className="flex flex-col gap-[0.1rem] mt-[0.4rem]">
                                {footerData.map((item, index) => (
                                    <Link key={index} href={item.path} className="flex items-center text-[0.14rem] md:text-[0.17rem] gap-[0.1rem]">
                                        {item.icon}
                                        {item.address ? (
                                            <div className="flex flex-col text-[#ECECEC]">
                                                <span>{item.name}</span>
                                                <span>{item.address}</span>
                                                <span>{item.address2}</span>
                                            </div>
                                        ): (
                                            <span className="text-[#ECECEC]">{item.name}</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col md:ml-[2rem] text-[#ECECEC] mt-[0.2rem]">
                                <span className="text-[0.2rem]">Quick Links</span>
                                <div className="flex flex-col gap-[0.1rem] mt-[0.2rem]">
                                    {links.map((item, index) => {
                                        const isActive = pathname === item.path
                                        return(
                                        <Link key={index} href={item.path} className={`text-[0.16rem] ${isActive ? 'text-[#5fb1c5]' : 'text-[#ECECEC]'}`}>
                                            {item.name}
                                        </Link> 
                                    )})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[0.13rem] md:text-[0.16rem] text-[#ECECEC] text-center py-[0.16rem] border-t-[0.01rem] border-[#ECECEC]">
                    &copy; 2025 <span className="font-bold">PT. Rana Putra Solid</span> All rights reserved
                </div>
            </div>
        </div>
    );
}
