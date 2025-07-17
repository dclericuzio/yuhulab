import Image from "next/image";
import Title from "../title";

export default function OutBusiness() {
    const cardData = [
        {
            title: 'Oil & Gas Carrier'
        },
        {
            title: 'Chemical Shipment'
        },
        {
            title: 'Ship Management'
        }
    ]

    const fleetData = [
        'Oil Barge 500KL',
        'Oil Barge 1000KL',
        'Oil Barge 2500KL',
        '⁠Oil Barge 3000KL'
    ]
    return (
        <div className="skl-container pb-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect">
            {/* profil */}
            <div className='flex flex-col md:flex-row w-full md:gap-[1rem] mb-[0.1rem] md:mb-[0.7rem]'>
                <div className="flex flex-col md:w-2/3">
                    <Title title="Gambaran Umum" custom=""/>
                    <div className="flex md:flex-row flex-col md:text-left text-justify mb-[0.1rem] md:mb-[0.2rem]">
                        <div className="flex flex-col gap-[0.1rem] text-justify">
                            <span className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">PT Rana Putra Solid (PT RANA) adalah perusahaan yang bergerak di bidang pelayaran angkutan laut khusus, berdiri pada tahun 2024 dengan semangat untuk turut serta mendukung pertumbuhan logistik dan distribusi nasional.</span>
                            <span className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Kami hadir dengan tekad kuat, integritas tinggi, dan komitmen untuk memberikan layanan terbaik kepada para mitra bisnis kami.</span>
                            <span className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">Kami melayani pengangkutan laut untuk berbagai jenis muatan khusus, mulai dari barang industri, bahan tambang, hingga logistik antar pulau, dengan fokus pada keselamatan, ketepatan waktu, dan efisiensi.</span>
                            <span className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D]">PT RANA mendapatkan kontrak pertamanya dengan mengangkut Kondensat yang diproduksi oleh salah satu Perusahaan produksi kondensat terbesar di Indonesia, selama 1 tahun hingga tahun 2026. Kapal yang digunakan untuk mengangkut adalah Oil Barge dengan muatan 3000 KL</span>
                        </div>
                    </div>
                </div>
                <Image
                    src="/assets/oil-3.jpg"
                    alt="image"
                    width={1300}
                    height={400}
                    className="h-[3rem] md:w-1/3 hidden md:block"
                />
            </div>

            {/* layanan */}
            <div className='flex flex-col md:flex-row w-full items-center mb-[0.1rem] md:mb-[0.7rem]'>
                <div className="flex flex-col w-full">
                    <div className="md:w-1/2 flex flex-col">
                        <Title title="Layanan Pelayaran Berstandar Tinggi" custom=""/>
                        <span className="text-[0.15rem] md:text-[0.15rem] text-[#4D4D4D] text-justify">PT RANA beroprasi dengan standar Keselamatan dan Kelayakan pelayaran untuk muatan khusus. Kapal kami didukung oleh awak yang berpengalaman dan telah memiliki sertifikasi sesuai peraturan pelayaran nasional dengan portfolio dan pengalaman untuk</span>
                    </div>
                    <div className="flex flex-col md:flex-row w-full my-[0.1rem] md:my-[0.2rem] gap-[0.1rem] md:gap-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">
                        {cardData.map((item, index) => (
                            <div key={index} className="rounded-[0.15rem] flex flex-col w-full md:w-1/2 bg-[#F5F5F5] p-[0.1rem] md:p-[0.2rem] animation-effect">
                                <span className="my-[0.1rem] text-[0.15rem] md:text-[0.25rem] font-bold text-center">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* armada */}
            <div className='flex flex-col md:flex-row w-full items-center mb-[0.1rem] md:mb-[0.7rem]'>
                <div className="flex flex-col w-full">
                    <Title title="Armada Operasional Kami" custom=""/>
                    <div className="flex flex-col md:flex-row w-full my-[0.1rem] md:my-[0.2rem] gap-[0.1rem] md:gap-[0.2rem] mb-[0.1rem] md:mb-[0.2rem]">
                        {fleetData.map((item, index) => (
                            <div key={index} className="rounded-[0.15rem] flex flex-col w-full bg-[#F5F5F5] p-[0.1rem] md:p-[0.2rem] animation-effect">
                                <span className="my-[0.1rem] text-[0.15rem] md:text-[0.25rem] font-bold text-center">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
