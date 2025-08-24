import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex-col h-screen flex items-center justify-center text-[0.2rem] md:text-[0.8rem] font-bold">
        OOPS PAGE NOT FOUND
        <Link href="/" className="text-[0.2rem] bg-[#51C0AA] p-[0.1rem] text-white animate-pulse">
          Go back home
        </Link>
      </div>
    );
  }
  