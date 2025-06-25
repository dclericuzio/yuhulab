import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex-col h-screen flex items-center justify-center text-[0.2rem] md:text-[0.8rem] font-bold">
        404, OOPS PAGE NOT FOUND
        <Link href="/" className="text-[0.2rem] bg-red-500 p-[0.1rem] text-white">
          Go back home
        </Link>
      </div>
    );
  }
  