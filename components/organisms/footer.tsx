"use client"
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const pathname = usePathname();
    const links = [
        { 
            name: "Home", 
            path: "/" 
        },
        { 
            name: "Company", 
            path: "/company" 
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
    const footerData = [
        {
            icon: <FaPhone className="text-[#d13333]"/>,
            name: '+62 21 5795-0866',
            path: 'tel:+622157950866'
        },
        {
            icon: <IoMdMail className="mt-[0.03rem] text-[#d13333]"/>,
            name: 'marketing@ptsbs.id',
            path: 'mailto:marketing@ptsbs.id'
        },
        {
            icon: <FaMapMarkerAlt className="text-[#d13333]"/>,
            name: 'AIA Central Lt.33',
            address: 'Jl. Jend. Sudirman Kav 48A, Karet Semanggi,',
            address2: 'Setiabudi, Jakarta Selatan, DKI Jakarta 12930',
            path: 'https://maps.app.goo.gl/PupLd7eMMdBDbH9R8'
        }
    ]
    return (
        <div className="bg-[#F5F5F5] skl-container px-[0.1rem] sm:px-[0.2rem] md:px-[0.7rem] animation-effect">
            <div className="flex flex-col">
                <div className="flex py-[0.3rem] md:py-[0.5rem]">
                    <div className="flex flex-col">
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width={420}
                            height={60}
                            className="animation-effect w-[2.7rem] h-[0.4rem] md:w-[4.2rem] md:h-[0.6rem]"
                        />
                        <div className="flex md:flex-row flex-col gap-[0.4rem]">
                            <div className="flex flex-col gap-[0.1rem] mt-[0.4rem]">
                                {footerData.map((item, index) => (
                                    <Link key={index} href={item.path} className="flex items-center text-[0.14rem] md:text-[0.17rem] gap-[0.1rem]">
                                        {item.icon}
                                        {item.address ? (
                                            <div className="flex flex-col text-[#4D4D4D]">
                                                <span>{item.name}</span>
                                                <span>{item.address}</span>
                                                <span>{item.address2}</span>
                                            </div>
                                        ): (
                                            <span className="text-[#4D4D4D]">{item.name}</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col md:ml-[2rem] text-[#4D4D4D] mt-[0.2rem]">
                                <span className="text-[0.2rem]">Quick Links</span>
                                <div className="flex flex-col gap-[0.1rem] mt-[0.2rem]">
                                    {links.map((item, index) => {
                                        const isActive = pathname === item.path ? 'text-[#d13333]' : 'text-[#4D4D4D]';
                                        return(
                                        <Link key={index} href={item.path} className={`text-[0.16rem] ${isActive}`}>
                                            {item.name}
                                        </Link> 
                                    )})}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[0.13rem] md:text-[0.16rem] text-[#4D4D4D] text-center py-[0.16rem] border-t-[0.01rem] border-[#4D4D4D20]">
                    &copy; 2025 <span className="font-bold">PT. Sejahtera Karunia Lines</span> All rights reserved
                </div>
            </div>
        </div>
    );
}
