import Link from "next/link";

type BannerProps = {
    custom: string;
    title: string;
    href: string;
  };
  
export default function Button({ custom, title, href }: BannerProps) {
    return (
        <Link href={href} className="flex justify-center">
            <button className={`${custom} cursor-pointer font-medium text-[#ECECEC] text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem]`}>
                {title}
            </button>
        </Link>
    );
}
  