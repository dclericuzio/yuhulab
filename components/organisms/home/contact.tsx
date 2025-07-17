import Image from "next/image";
import Button from "../button";

export default function Contact() {
    return (
        <div id='kontak' className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.1rem] md:px-[0.7rem] animation-effect">
            <div className='flex flex-col bg-[#F5F5F5] rounded-xs p-[0.1rem] md:p-[0.5rem]'>
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className='text-[0.15rem] md:text-[0.25rem] animation-effect'>Butuh kirim kargo?</span>
                        <span className='text-[0.2rem] md:text-[0.45rem] font-bold animation-effect'>Kami siap berlayar!</span>
                    </div>
                    <Button 
                        title="Kontak Kami"
                        custom="bg-[#25D366]"
                        href="/kontak"
                    />
                </div>
                <Image
                    src="/assets/picture-1.png"
                    alt="interested"
                    width={4000}
                    height={1696}
                    className="w-full h-[1.5rem] md:h-[4rem] object-cover rounded-xs mt-[0.3rem] md:mt-[0.5rem] animation-effect"
                />
            </div>
        </div>
    );
}
