"use client";
import { useEffect } from "react";
import { useStatusMessage } from "./StatusMessageContext";
import { FaCircleCheck } from "react-icons/fa6";

export default function StatusMessageDisplay() {
  const { status, setStatus } = useStatusMessage();

  useEffect(() => {
    if (status === "Sent") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [status, setStatus]);

  if (status !== "Sent") return null;
  return (
    <div className="fixed top-[0.2rem] md:top-[0.4rem] left-1/2 -translate-x-1/2 mt-2 p-[0.15rem] bg-[#5fb1c5] z-50 flex items-center gap-[0.1rem]">
        <FaCircleCheck className="text-[0.15rem] text-[#fff]"/>
        <span className="text-[0.13rem] md:text-[0.15rem] text-[#fff]">Berhasil terkirim!</span>
    </div>
  );
}