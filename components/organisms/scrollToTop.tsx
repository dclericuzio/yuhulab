"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    // respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="
        fixed z-50 bottom-[0.75rem] right-[0.15rem] md:right-[0.5rem] md:bottom-[1.1rem] rounded-full
        p-[0.1rem]
        bg-[#F58359] 
        flex items-center justify-center
        shadow-xl"
    >
      <FaArrowUp className="w-[0.25rem] h-[0.25rem] md:w-[0.3rem] md:h-[0.3rem] text-white"/>
    </button>
  );
}
