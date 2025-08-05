"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../button";
import Title from "../title";

const aboutImages = [
    {
        src: "/assets/oil-2.jpg",
        alt: "About 1",
        width: 1300,
        height: 350
    },
    {
        src: "/assets/oil-3.jpg", 
        alt: "About 2",
        width: 1300,
        height: 400
    },
    {
        src: "/assets/oil-1.jpg",
        alt: "About 3", 
        width: 1300,
        height: 350
    }
];

export default function About() {
    return (
        <motion.div 
            className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className='justify-center flex flex-col w-full'>
                <div className="flex flex-row gap-[0.2rem] overflow-x-auto md:justify-center mb-[0.2rem] mt-[-0.3rem]">
                    {aboutImages.map((image, index) => (
                        <Image 
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="w-[2rem] md:w-[3rem] h-[1.5rem] md:h-[2rem] rounded-[0.15rem] object-cover flex-shrink-0"
                        />
                    ))}
                </div>
                <Title title="Tentang Kami" custom="text-center"/>
                <div className="flex md:flex-row flex-col md:text-center text-justify justify-center mb-[0.1rem] md:mb-[0.2rem]">
                    <div className="md:w-2/3 flex flex-col gap-[0.1rem]">
                        <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">PT Rana Putra Solid (PT RANA) adalah perusahaan yang bergerak di bidang pelayaran angkutan laut khusus, berdiri pada tahun 2024 dengan semangat untuk turut serta mendukung pertumbuhan logistik dan distribusi nasional. Kami hadir dengan tekad kuat, integritas tinggi, dan komitmen untuk memberikan layanan terbaik kepada para mitra bisnis kami.</div>
                        <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Kami melayani pengangkutan laut untuk berbagai jenis muatan khusus, mulai dari barang industri, bahan tambang, hingga logistik antar pulau, dengan fokus pada keselamatan, ketepatan waktu, dan efisiensi.</div>
                    </div>
                </div>
                <Button title="See More" custom="bg-[#172b50]" href="/tentang-kami"/>
            </div>
        </motion.div>
    );
}
