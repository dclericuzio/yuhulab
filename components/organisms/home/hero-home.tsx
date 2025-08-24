import Image from 'next/image';
import { GiChemicalDrop, GiBackpack, GiHand, GiFrenchFries } from "react-icons/gi";
import { FaRegLightbulb, FaCocktail, FaLeaf, FaDumbbell } from "react-icons/fa";
import { MdOutlineShoppingCart,MdOutlineSupportAgent } from "react-icons/md";
import Link from 'next/link';

export default function Hero() {
    const statement = [
        "Feeling hungover ?",
        "Feeling tired ?",
        "Overworking your body ?",
        "Feeling dehydrated ?"
    ];
    const cards = [
        {
          Icon: GiChemicalDrop,
          title: "Recovery Blend",
          text: "L-Theanine, L-Arginine, Turmeric, Glutathione & Goji."
        },
        {
          Icon: GiBackpack,
          title: "Portable Single-Serve",
          text: "No water, no fuss — fits your bag or gym kit."
        },
        {
          Icon: GiHand,
          title: "Squeeze & Go",
          text: "Tear one, squeeze, enjoy — best chilled."
        },
    ];
    const moments = [
        { Icon: FaCocktail, label: "After drinks" },
        { Icon: GiFrenchFries, label: "Heavy meals" },
        { Icon: FaLeaf, label: "Wellness boost" },
        { Icon: FaDumbbell, label: "Post-workout" },
    ];

    const ecomm = [
        { src: "/assets/tokped.png", alt: "tokped", href:"/" },
        { src: "/assets/shopee.png", alt: "shopee",href:"/" },
        { src: "/assets/tiktok.png", alt: "tiktok",href:"/" },
    ];

    return (
        <div className="flex mb-[1rem]">
            <div className="yuhu-container flex flex-col mt-[0.25rem] md:mt-[0.5rem] gap-0 md:gap-[0.5rem]">

                {/* Small Jelly, Big impact. */}
                <div className="flex md:flex-row flex-col items-center justify-evenly gap-[0.1rem] md:gap-0">
                    <div className='flex flex-col mx-[0.31rem] md:mx-0'>
                        <span className="font-recoleta-bold text-[0.325rem] md:text-[0.65rem] text-[#51C0AA]">RCVR.</span>
                        <span className="text-[0.2rem] md:text-[0.4rem]">Small <span className='border-b-[0.05rem] border-[#F58359] font-bold'>Jelly</span>, Big <span className='border-b-[0.05rem] border-[#51C0AA] font-bold'>impact</span>.</span>
                        <div className='flex flex-col mt-[0.15rem] md:mt-[0.35rem] md:w-[6rem]'>
                            <span className="text-[0.12rem] md:text-[0.2rem]">YUHU isn&rsquo;t just a product — your everyday wellness companion to RCVR, recharge, and flow.</span>
                            <span className="text-[0.12rem] md:text-[0.2rem] font-bold">#YUHUForYou</span>
                        </div>
                    </div>
                    <Image
                        src="/assets/product-1.jpg"
                        alt="product-1"
                        width={320}
                        height={60}
                        className="animation-effect md:w-[5rem]"
                    />
                </div>

                {/* ingredients */}
                <div id='ingredients' className="flex flex-col items-center justify-evenly mx-[0.25rem] md:mx-0 py-[0.35rem] md:py-[0.7rem]">
                    <div className="flex items-center text-[#F58359]">
                        <span className='font-bold text-[0.28rem] md:text-[0.65rem]'>What&rsquo;s Inside RCVR.</span> 
                        <GiChemicalDrop className='text-[0.28rem] md:text-[0.65rem] sway'/>
                    </div>
                    <Image
                        src="/assets/product-5.png"
                        alt="product-2"
                        width={320}
                        height={60}
                        className="animation-effect md:w-[5.5rem] mt-[-0.5rem] md:mt-0"
                    />
                </div>

                {/* why */}
                <div id='why' className="flex flex-col justify-center mx-[0.31rem] md:mx-auto py-[0.35rem] md:py-[0.7rem] my-[0.25rem] md:my-[0.5rem] md:mt-0">
                    <div className='text-center relative mx-auto'>
                        <Image
                            src="/assets/people.png"
                            alt="people"
                            width={320}
                            height={60}
                            className="animation-effect w-[1.59rem] md:w-[3.8rem] absolute left-1/2 top-[-0.18rem] md:top-[-0.04rem] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                        />
                        <span className='relative font-bold text-[0.325rem] md:text-[0.65rem] text-[#51C0AA] z-20 bg-[#FFF8EE]'>
                            Why Yuhu+
                        </span>
                    </div>
                    <span className='text-[0.12rem] md:text-[0.2rem] md:w-[6rem] text-center'>
                        Instead of pills or powders, YUHU makes wellness portable, tasty, and convenient. Science-meets-fun in a peach-flavored jelly you can slip into your bag, gym kit, or night-out essentials. Formulated for men and women, RCVR. delivers functional support that fits any lifestyle.
                    </span>
                </div>
                
                {/* quick facts */}
                <div id='quickfacts' className="flex md:flex-row flex-col items-center justify-center mx-[0.31rem] md:mx-0 gap-[0.1rem] md:gap-[0.5rem] py-[0.35rem] md:py-[0.7rem]">
                    <div className='flex flex-col md:w-2/3'>
                        <div className="flex items-center text-[#F58359]">
                            <span className='font-bold text-[0.325rem] md:text-[0.65rem]'>Quick Facts</span> 
                            <FaRegLightbulb className='text-[0.325rem] md:text-[0.65rem] sway'/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.1rem] md:gap-[0.3rem] mt-[0.1rem] md:mt-[0.5rem]">
                            {cards.map(({ Icon, title, text }) => (
                                <div key={title} className="text-center flex flex-col bg-[#51C0AA] rounded-sm py-[0.1rem] md:py-[0.2rem] px-[0.1rem] md:px-[0.1rem]">
                                    <Icon className="text-[0.325rem] md:text-[0.65rem] mx-auto text-white"/>
                                    <span className="font-bold text-[0.12rem] md:text-[0.2rem] text-white">{title}</span>
                                    <span className="text-[0.11rem] md:text-[0.2rem] text-white">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image
                        src="/assets/product-4.png"
                        alt="product-4"
                        width={320}
                        height={60}
                        className="animation-effect w-[1.5rem] md:w-[2rem]"
                    />
                </div>

                {/* RCVR. */}
                <div id='rcvr' className="flex md:flex-row flex-col-reverse items-center justify-center mx-[0.31rem] md:mx-0 gap-[0.1rem] md:gap-[0.5rem] py-[0.35rem] md:py-[0.7rem]">
                    <Image
                        src="/assets/product-2.jpg"
                        alt="product-2"
                        width={320}
                        height={60}
                        className="animation-effect md:w-[3.5rem]"
                    />
                    <div className='flex flex-col md:w-1/2'>
                        <span className="font-recoleta-bold text-[0.325rem] md:text-[0.65rem] text-[#51C0AA]">RCVR.</span> 
                        <span className='text-[0.12rem] md:text-[0.2rem]'>RCVR. is our first functional jelly — designed to help you recover, recharge, and feel better faster. Peach-flavored, single-serve sticks make wellness portable and effortless: tear, squeeze, go.</span> 
                        <div className='flex md:flex-row flex-col items-center mt-[0.15rem] md:mt-[0.3rem]'>
                            <span className='text-[0.12rem] md:text-[0.2rem] whitespace-nowrap mr-auto md:mr-0'>Perfect for :</span> 
                            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-[0.2rem] mt-[0.1rem] md:mt-0'>
                                {moments.map(({ Icon, label }) => (
                                    <div key={label} className="flex flex-col items-center text-center">
                                        <div className="flex justify-center items-center rounded-full bg-[#F58359] p-[0.1rem]">
                                            <Icon className="text-[0.2rem] md:text-[0.4rem] text-white"/>
                                        </div>
                                        <div className="text-[0.12rem] md:text-[0.2rem] whitespace-nowrap">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* statement */}
                <div id='statement' className="flex md:flex-row flex-col-reverse items-center justify-center mx-[0.31rem] md:mx-0 gap-[0.1rem] md:gap-[0.5rem] py-[0.35rem] md:py-[0.7rem]">
                    <Image
                        src="/assets/product-bg.png"
                        alt="product-2"
                        width={320}
                        height={60}
                        className="animation-effect md:w-[3.5rem]"
                    />
                    <div className='flex flex-col md:w-1/2'>
                        <ul className='text-[0.15rem] md:text-[0.3rem] list-square list-inside'>
                            {statement.map((s) => (
                            <li key={s}>{s}</li>
                            ))}
                        </ul>
                        <span className="text-[0.2rem] md:text-[0.4rem]"><span className='border-b-[0.05rem] border-[#F58359] font-bold'>YUHU</span> is here to <span className='border-b-[0.05rem] border-[#51C0AA] font-bold'>HELP</span>.</span>
                    </div>
                </div>

                {/* shop */}
                <div id='ingredients' className="flex flex-col items-center justify-evenly mx-[0.25rem] md:mx-0 py-[0.35rem] md:py-[0.7rem]">
                    <div className="flex items-center text-[#51C0AA]">
                        <span className='font-bold text-[0.28rem] md:text-[0.65rem]'>YUHU Official Store</span> 
                        <MdOutlineShoppingCart className='text-[0.28rem] md:text-[0.65rem] sway'/>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-3 gap-[0.1rem]'>
                        {ecomm.map((logo) => (
                            <Link href={logo.href} key={logo.src}>
                                <div className='flex flex-col'>
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={320}
                                        height={60}
                                        className="animation-effect w-[0.8rem] md:w-[3.5rem] cursor-pointer sway"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* agen */}
                <div id='ingredients' className="flex flex-col items-center justify-evenly mx-[0.25rem] md:mx-0 py-[0.35rem] md:py-[0.7rem]">
                    <div className="flex items-center text-[#F58359]">
                        <span className='font-bold text-[0.28rem] md:text-[0.65rem]'>YUHU Official Agent</span> 
                        <MdOutlineSupportAgent className='text-[0.28rem] md:text-[0.65rem] sway'/>
                    </div>
                    <span className='text-[0.15rem] md:text-[0.3rem] mt-[1rem]'>Coming soon...</span>
                    {/* <div className='grid grid-cols-3 md:grid-cols-3 gap-[0.1rem]'>
                        {ecomm.map((logo) => (
                            <Link href={logo.href} key={logo.src}>
                                <div className='flex flex-col'>
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={320}
                                        height={60}
                                        className="animation-effect w-[0.8rem] md:w-[3.5rem] cursor-pointer sway"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div> */}
                </div>
                
            </div>
        </div>
    );
}