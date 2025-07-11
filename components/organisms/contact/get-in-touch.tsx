'use client';
import { useState } from 'react';
import LeafletMap from '../LeafletMap'
import Title from "../title";
import { useStatusMessage } from "@/components/StatusMessageContext";

export default function GetInTouch() {
    const text = 'text-[0.12rem] md:text-[0.15rem] text-[#4D4D4D]'
    const formColumn = 'w-full rounded-[0.15rem] bg-[#F5F5F5] p-[0.1rem] md:p-[0.2rem] text-[0.15rem] font-semibold'

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { status, setStatus: setGlobalStatus } = useStatusMessage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalStatus('Sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setGlobalStatus('Sent');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setGlobalStatus('Failed to send.');
    }
  };

    return (
        <div className="skl-container pb-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect relative">
            {/* profil */}
            <div className='flex flex-col md:flex-row w-full gap-[1rem] md:gap-[1rem] mb-[0.1rem] md:mb-[0.7rem]'>
                <div className="flex flex-col md:w-1/2">
                    <Title title="Informasi Kontak" custom=""/>
                    <div className="flex md:flex-row flex-col md:text-left text-justify mb-[0.1rem] md:mb-[0.2rem]">
                        <div className="flex flex-col gap-[0.3rem] text-justify">
                            <div className='flex flex-row gap-[0.5rem]'>
                                <div className='flex flex-col gap-[0.1rem] text-justify'>
                                    <span className={text}>Nomor Telepon :</span>
                                    <span className={`${text} font-bold`}>+62 21 5795-0866</span>
                                </div>
                                <div className='flex flex-col gap-[0.1rem] text-justify'>
                                    <span className={text}>Surel/Email :</span>
                                    <span className={`${text} font-bold`}>admin@ranaputrasolid.co.id</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.1rem]'>
                                <span className={text}>Alamat Pusat :</span>
                                <span className={`${text} font-bold`}>Sampoerna Strategic Square South Tower Lt.22</span>
                                <span className={`${text} font-bold`}>Jl. Jend. Sudirman No.45 - 46, Karet Semanggi,</span>
                                <span className={`${text} font-bold`}>Setiabudi, Jakarta Selatan, DKI Jakarta 12930</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[70%]'>
                        <LeafletMap/>
                    </div>
                </div>
                <div className="flex flex-col md:w-1/2">
                    <Title title="Hubungi Kami" custom=""/>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-[0.2rem] md:gap-[0.4rem]">
                        <div className='flex flex-col'>
                            <span className={`${text} mb-[0.1rem]`}>Nama :</span>
                            <input 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Nama" 
                                required 
                                className={formColumn}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className={`${text} mb-[0.1rem]`}>Surel/Email :</span>
                            <input 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Email" 
                                required 
                                type="email" 
                                className={formColumn}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className={`${text} mb-[0.1rem]`}>Pesan :</span>
                            <textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Message" 
                                required 
                                className={formColumn}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className={`cursor-pointer bg-[#172b50] text-[#ececec] font-semibold text-[0.15rem] md:text-[0.2rem] px-[0.2rem] md:px-[0.3rem] py-[0.08rem] md:py-[0.15rem] flex items-center justify-center`}
                        >
                            {status === 'Sending' ? (
                                <span className="inline-block w-[0.22rem] h-[0.22rem] md:w-[0.3rem] md:h-[0.3rem] border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                            ) : 'Kirim'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
