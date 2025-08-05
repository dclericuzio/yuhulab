"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../title"

export default function AboutUs() {

    const Value = [
        {
            title: "Sinergi",
            description: "Bersama mitra dan tim, kami membangun kolaborasi untuk hasil terbaik."
        },
        {
            title: "Operasional Andal", 
            description: "Layanan aman, tepat waktu, dan efisien adalah prioritas kami."
        },
        {
            title: "Loyalitas",
            description: "Komitmen jangka panjang dengan integritas dan kepercayaan."
        },
        {
            title: "Inovasi Berkelanjutan",
            description: "Selalu berkembang lewat teknologi dan solusi baru."
        },
        {
            title: "Disiplin",
            description: "Tegas dan konsisten dalam menjaga mutu dan keselamatan."
        }
    ]

    const licenseData = [
        '/assets/license-1.png',
        '/assets/license-2.png',
        '/assets/license-3.png'
    ]

    return (
        <div className="skl-container pb-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect">
            {/* profil */}
            <motion.div 
                className='flex flex-col md:flex-row w-full md:gap-[1rem] mb-[0.1rem] md:mb-[0.7rem]'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}    
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex flex-col md:w-2/3">
                    <Title title="Profil Perusahaan" custom=""/>
                    <div className="flex md:flex-row flex-col md:text-left text-justify mb-[0.1rem] md:mb-[0.2rem]">
                        <div className="flex flex-col gap-[0.1rem] text-justify">
                            <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">PT Rana Putra Solid (PT RANA) adalah perusahaan yang bergerak di bidang pelayaran angkutan laut khusus, berdiri pada tahun 2024 dengan semangat untuk turut serta mendukung pertumbuhan logistik dan distribusi nasional. Kami hadir dengan tekad kuat, integritas tinggi, dan komitmen untuk memberikan layanan terbaik kepada para mitra bisnis kami.</div>
                            <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Kami melayani pengangkutan laut untuk berbagai jenis muatan khusus, mulai dari barang industri, bahan tambang, hingga logistik antar pulau, dengan fokus pada keselamatan, ketepatan waktu, dan efisiensi.</div>
                        </div>
                    </div>
                </div>
                <Image
                    src="/assets/oil-2.jpg"
                    alt="image"
                    width={1300}
                    height={400}
                    className="h-[3rem] md:w-1/3 hidden md:block"
                />
            </motion.div>

            {/* visi misi */}
            <motion.div 
                className='flex flex-col md:flex-row w-full items-center mb-[0.1rem] md:mb-[0.7rem]'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}    
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex flex-col">
                    <div className="md:w-2/3 flex flex-col">
                        <Title title="Visi, Misi, dan Nilai-Nilai Perusahaan" custom=""/>
                        <div className="flex flex-col text-justify mb-[0.1rem] md:mb-[0.2rem]">
                            <span className="text-[0.15rem] md:text-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">Visi</span>
                            <div className="text-[0.15rem] text-[#4D4D4D] text-justify">Menjadi perusahaan angkutan laut dalam negeri terdepan dan terpercaya dalam layanan pengangkutan barang khusus, dengan standar keselamatan, keandalan, dan keberlanjutan tertinggi di Indonesia.</div>
                        </div>
                        <div className="flex flex-col text-justify mb-[0.1rem] md:mb-[0.2rem]">
                            <span className="text-[0.15rem] md:text-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">Misi</span>
                            <ul className="list-disc list-inside text-[0.15rem] text-[#4D4D4D] text-justify">
                                <li className="mb-[0.1rem]">Memberikan pelayanan melalui operasional logistik untuk barang dan muatan khusus secara andal, profesional, terpecaya dan bertanggung jawab</li>
                                <li>Mendukung program pemerintah dan mitra swasta dalam konektivitas maritim dan penguatan transportasi laut sebagai tulang punggung logistik nasional</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col text-justify mb-[0.1rem] md:mb-[0.2rem]">
                        <span className="text-[0.15rem] md:text-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">Nilai Perusahaan (SOLID)</span>
                        <div className="grid grid-cols-1 md:grid-cols-5 bg-gradient-to-t from-[#e3eaf3] to-[#e3eaf340] gap-[0.01rem] md:py-[0.25rem]">
                            {Value.map((item, index) => (
                                <div 
                                    key={index}
                                    className={`text-justify flex flex-col py-[0.075rem] mx-[0.075rem] md:px-[0.25rem] ${
                                        index > 0 ? 'border-t-[0.01rem] md:border-t-0 md:border-l-[0.01rem] border-[#d9d9d9]' : ''
                                    }`}
                                >
                                    <span className="text-[0.15rem] md:text-[0.2rem] font-bold">{item.title}</span>
                                    <span className="text-[0.15rem] text-[#4D4D4D]">{item.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Management */}
            <motion.div 
                className='flex flex-col md:flex-row w-full items-center'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}    
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex flex-col">
                    <Title title="Manajemen Perusahaan" custom="text-left"/>
                    <div className="flex md:flex-row flex-col-reverse items-center  mb-[0.3rem] md:mb-[0.7rem]">
                        <div className="md:w-2/3 flex flex-col">
                            <div className="flex flex-col text-justify mb-[0.1rem] md:mb-[0.2rem]">
                                <span className="text-[0.15rem] md:text-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">Pesan dari Direktur</span>
                                <div className="text-[0.15rem] text-[#4D4D4D] flex flex-col gap-[0.1rem] text-justify">
                                    <span>“ Sebagai perusahaan pelayaran angkutan laut khusus, PT Rana Putra Solid berkomitmen untuk memberikan solusi logistik yang tidak hanya aman, tepat waktu, dan andal, tetapi juga mampu menjawab kompleksitas kebutuhan industri modern. Kami memahami bahwa setiap kargo memiliki nilai strategis bagi pelanggan kami—oleh karena itu, kami menjadikan ketelitian, efisiensi, dan kepatuhan terhadap standar keselamatan sebagai fondasi utama dalam setiap pengangkutan.</span>
                                    <span>Didukung oleh armada yang terus berkembang serta tim profesional yang berpengalaman dan berdedikasi tinggi, kami siap melayani berbagai jenis muatan, mulai dari barang industri, bahan tambang, hingga logistik antarpulau. Setiap proses kami rancang dengan pendekatan operasional yang adaptif dan berkelanjutan, demi mendukung pertumbuhan ekosistem logistik nasional.</span>
                                    <span>Kami percaya bahwa kepercayaan dan kepuasan pelanggan adalah tolok ukur utama keberhasilan kami. Karena itu, kami terus berinovasi dalam hal teknologi, layanan, serta kemitraan strategis, agar dapat menjadi bagian penting dalam rantai pasok pelanggan kami. Dengan semangat kolaborasi dan profesionalisme, kami bertekad untuk menjadi mitra pelayaran yang dapat diandalkan, serta berkontribusi nyata terhadap kemajuan sektor logistik dan maritim Indonesia. ”</span>
                                </div>
                            </div>
                            <div className="flex flex-col ml-auto ">
                                <span className="text-[0.15rem]">Capt. Fauzan</span>
                                <span className="text-[0.15rem]">Direktur Utama</span>
                            </div>
                        </div>
                        <div className="w-1/3 flex justify-center">
                            <Image
                                src="/assets/director.jpg"
                                alt="Direktur Utama"
                                width={788}
                                height={1240}
                                className="w-full md:w-[70%] h-auto my-[0.2rem] md:my-0"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col text-justify mb-[0.3rem] md:mb-[0.7rem]">
                        <span className="text-[0.15rem] md:text-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">Profil Direktur</span>
                        <div className="flex md:flex-row flex-col md:text-left text-justify mb-[0.1rem] md:mb-[0.2rem]">
                            <div className="flex flex-col gap-[0.1rem] text-justify">
                                <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Warga negara Indonesia, 51 tahun. Beliau meraih gelar Master Nautical dari Sekolah Tinggi Ilmu Pelayaran (STIP) dan kini mendirikan dan menjabat sebagai Direktur Utama & CEO PT Rana Putra Solid (2024).</div>
                                <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Mengawali karir sebagai perwira muda di Perusahaan Pelayaran Mitsui.O.S.K Lines, Ltd. Japan dari tahun 1996 Hingga 2006 di berbagai tipe Kapal dari Container, Bulk carier, Oil tanker dan LNG carier, hingga mencapai posisi tertinggi sebagai Nahkoda.</div>
                                <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Selama berkarir di Perusahaan pelayaran beliau banyak menghandle kapal special GAS baik tipe membrane maupun tipe moss baik itu tipe A ataupun tipe C, seperti LNG Eka Putra, LNG Dwi Putra, LNG Triputra, LNG Suria Aki, LNG Maleo, LNG Hyundai Utopia, LNG Seri Bijaksana, LNG Seri Anggun, Gas Log Seatle, Hayang Seo 2 dan Gas Komodo.</div>
                                <div className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Sebelum menjadi Direktur Utama, Beliau pernah menjabat sebagai General Superintendent di PT Freeport Indonesia PTFI (2010-2012), Senior Manager di PT MBSS Indika Group (2013-2015), Senior Marine Coordinator di PT Donggi Senoro LNG (2015-2019) Head QHSE and Operation di PT Wintermar (2019-2021), Direktur Operasi PT Pelayaran Bahtera Adiguna PLN (2021-2022) dan  Direktur Utama PT Pelayaran  Bahtera Adiguna PLN (2022-2023), Fleet Direktur (2023) PT Baruna Raya Logistik, Direktur Business Development di HUMPUSS Group (2024).</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-justify mb-[0.3rem] md:mb-[0.7rem]">
                        <span className="text-[0.15rem] md:text-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">Struktur Perusahaan</span>
                        <div className="w-full">
                            <Image
                                src="/assets/struktur.png"
                                alt="Struktur"
                                width={788}
                                height={1240}
                                className="w-full h-auto my-[0.2rem] md:my-0"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* License */}
            <motion.div 
                className='flex flex-col md:flex-row w-full items-center'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}    
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="flex flex-col">
                    <Title title="Lisensi Perusahaan" custom=""/>
                    <div className="overflow-x-auto flex md:flex-row flex-col-reverse items-center  mb-[0.3rem] md:mb-[0.7rem]">
                        <div className="flex gap-[0.2rem]">
                            {licenseData.map((item, index)=> {
                                return(
                                    <Image
                                    key={index}
                                        src={item}
                                        alt="license"
                                        width={400}
                                        height={500}
                                        className="w-[1.3rem] h-auto"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
