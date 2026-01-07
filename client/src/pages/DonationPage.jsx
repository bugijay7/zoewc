import React, { useState } from "react";
import {
  FaMobileAlt,
  FaUniversity,
  FaHeart,
  FaPhoneAlt,
  FaCopy,
  FaCheckCircle,
} from "react-icons/fa";

export default function DonationPage() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="bg-gray-200 min-h-screen font-sans antialiased text-black">
      {/* --- HERO HEADER --- */}
      <section className="bg-black py-24 px-6 relative overflow-hidden">
        {/* Background Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-20">
          <div data-aos="zoom-in" className="inline-flex items-center justify-center w-20 h-20 bg-pink-600 rounded-full mb-8 shadow-2xl shadow-pink-600/20">
            <FaHeart className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Support the <span className="text-pink-600">Ministry</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
            Your generous giving helps Zoe Worship Centre Kinoo continue
            spreading the gospel, supporting the community, and building strong
            foundations of faith. Every gift—large or small—makes an eternal difference.
          </p>
        </div>
      </section>

      {/* --- GIVING METHODS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BANK TRANSFER CARD */}
          <div className="bg-amber-500 border-t-8 border-white shadow-2xl p-8 md:p-12 transition-transform hover:-translate-y-2 duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-zinc-100 flex items-center justify-center rounded-lg">
                <FaUniversity className="text-xl text-black" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">Bank Transfer</h2>
            </div>

            <div className="space-y-8">
              <div className="border-b border-zinc-100 pb-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-100 block mb-1">Bank Name</span>
                  <p className="text-xl font-bold">Equity Bank</p>
                </div>
                <span className="text-xs font-medium text-zinc-300">Kenya</span>
              </div>

              <div className="border-b border-zinc-100 pb-4 relative group">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-100 block mb-1">Account Number</span>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black tracking-widest text-black">1290 2609 40849</p>
                  <button 
                    onClick={() => handleCopy("1290260940849")}
                    className="p-3 bg-zinc-900 text-white hover:bg-amber-500 hover:text-black transition-all rounded-full"
                  >
                    {copiedText === "1290260940849" ? <FaCheckCircle /> : <FaCopy />}
                  </button>
                </div>
                {copiedText === "1290260940849" && (
                  <span className="absolute -top-6 right-0 text-[10px] font-black text-amber-500 uppercase animate-bounce">Copied to Clipboard</span>
                )}
              </div>

              <div className="pb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-100 block mb-1">Branch</span>
                <p className="text-lg font-bold">Kenyatta Avenue</p>
              </div>
            </div>
          </div>

          {/* M-PESA GIVING CARD */}
          <div className="bg-white border-t-8 border-amber-500 shadow-2xl p-8 md:p-12 transition-transform hover:-translate-y-2 duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-amber-50 flex items-center justify-center rounded-lg">
                <FaMobileAlt className="text-xl text-amber-600" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">M-Pesa Giving</h2>
            </div>

            <div className="space-y-8">
              <div className="border-b border-zinc-100 pb-4 relative group">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 block mb-1">Lipa Na M-Pesa Paybill</span>
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-black tracking-widest text-black italic">202273</p>
                  <button 
                    onClick={() => handleCopy("202273")}
                    className="p-3 bg-amber-500 text-black hover:bg-black hover:text-white transition-all rounded-full"
                  >
                    {copiedText === "202273" ? <FaCheckCircle /> : <FaCopy />}
                  </button>
                </div>
                {copiedText === "202273" && (
                  <span className="absolute -top-6 right-0 text-[10px] font-black text-amber-500 uppercase animate-bounce">Copied Paybill</span>
                )}
              </div>

              <div className="border-b border-zinc-100 pb-4 relative group">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 block mb-1">Account Name</span>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black uppercase tracking-tighter text-black">Offering / Tithe</p>
                  <button 
                    onClick={() => handleCopy("Offering / Tithe")}
                    className="p-3 bg-zinc-100 text-zinc-400 hover:text-black transition-all rounded-full"
                  >
                    {copiedText === "Offering / Tithe" ? <FaCheckCircle /> : <FaCopy />}
                  </button>
                </div>
                {copiedText === "Offering / Tithe" && (
                  <span className="absolute -top-6 right-0 text-[10px] font-black text-amber-500 uppercase animate-bounce">Copied Account</span>
                )}
              </div>
            </div>
            
            
          </div>
        </div>

        {/* --- DIASPORA & HELPLINE --- */}
        <div data-aos="fade-up" className="mt-20 bg-zinc-900 text-white p-8 md:p-16 relative overflow-hidden">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 via-amber-500 to-pink-600"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <FaPhoneAlt className="text-amber-500 text-2xl" />
                <h3 className="text-2xl font-black uppercase tracking-widest">Diaspora Giving & Helpline</h3>
              </div>
              <p className="text-zinc-100 text-lg font-light leading-relaxed mb-6">
                For those giving from outside Kenya or needing assistance, please
                contact us or send your gift directly via M-Pesa to:
              </p>
              <div className="inline-block border-2 border-white/10 px-8 py-4">
                 <p className="text-3xl font-black tracking-[0.2em] text-white">+254 722 908 733</p>
              </div>
            </div>
            
            <div className="lg:col-span-5 text-right hidden lg:block">
               <p className="text-zinc-200 text-xs font-black uppercase tracking-[0.5em] leading-loose">
                 Building the Kingdom <br /> Together <br /> Since the Foundation
               </p>
            </div>
          </div>

          <p className="mt-12 text-sm font-medium text-pink-600 uppercase tracking-widest text-center border-t border-white/5 pt-8">
            Thank you for supporting Zoe worship centre kinoo in advancing
            the Kingdom of God!
          </p>
        </div>
      </section>

     
    </div>
  );
}