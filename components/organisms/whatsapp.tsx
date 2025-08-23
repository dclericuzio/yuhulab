"use client";

import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WA_NUMBER = "6285194943303";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I want to ask about your product, RCVR.")}`;

export default function WhatsAppButton() {
  return (
    <Link
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed z-50 bottom-[0.15rem] right-[0.15rem] md:right-[0.5rem] md:bottom-[0.5rem] rounded-full
        p-[0.1rem]
        bg-[#25D366] 
        flex items-center justify-center
        shadow-xl"
    >
      <FaWhatsapp className="w-[0.25rem] h-[0.25rem] md:w-[0.3rem] md:h-[0.3rem] text-white"/>
    </Link>
  );
}
