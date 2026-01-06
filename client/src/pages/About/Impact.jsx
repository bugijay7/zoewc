import React from "react";
import AboutNav from "../../components/AboutNav";

export default function Impact() {
  return (
    <div className="bg-white min-h-screen">
      {/* SECTION HEADER */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1 bg-zinc-900 border-l-4 border-amber-500 mb-6">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Our Purpose</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center">
            Make An <span className="text-pink-600">Impact</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* STICKY SIDEBAR */}
          <div className="lg:w-1/4">
            <AboutNav />
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:w-3/4 max-w-3xl">
            {/* CORE PHILOSOPHY BOX */}
            <div className="mb-16 p-10 bg-zinc-50 border-l-8 border-black" data-aos="fade-right">
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-black mb-6">
                Our impact is realized when we love God completely, ourselves correctly, and other people compassionately.
              </p>
              <div className="flex flex-col md:flex-row gap-8 mt-10">
                <div className="flex-1">
                  <span className="text-pink-600 font-black text-xs uppercase tracking-widest block mb-2">Phase 01</span>
                  <h4 className="text-lg font-bold uppercase underline decoration-amber-500 underline-offset-4">Vertical Experience</h4>
                  <p className="text-zinc-500 text-sm mt-2 uppercase tracking-tighter">Connection with God</p>
                </div>
                <div className="flex-1 border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 md:pl-8">
                  <span className="text-pink-600 font-black text-xs uppercase tracking-widest block mb-2">Phase 02</span>
                  <h4 className="text-lg font-bold uppercase underline decoration-amber-500 underline-offset-4">Horizontal Impact</h4>
                  <p className="text-zinc-500 text-sm mt-2 uppercase tracking-tighter">Self-realization to World Reach</p>
                </div>
              </div>
            </div>

            {/* SCRIPTURAL CONTENT */}
            <div className="space-y-12 text-lg leading-relaxed text-zinc-700 font-light">
              <div className="relative" data-aos="fade-up">
                <p>
                  <span className="text-black font-bold">‘He called the twelve to be with Him.’</span> He wanted to reproduce Himself in
                  His disciples, then send them to reproduce themselves into the world.
                  This only happens through believers’ consciousness of being the light
                  of the world — a city set on a hill.
                </p>
              </div>

              {/* SHINING LIGHT CALLOUT */}
              <div className="py-12 border-y border-zinc-100 flex flex-col items-center text-center" data-aos="zoom-in">
                <div className="text-amber-500 mb-4 text-2xl">✦</div>
                <blockquote className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black max-w-xl">
                  “The path of the just is like a <span className="text-pink-600">shining light</span> that shines brighter and brighter to the perfect day.”
                </blockquote>
              </div>

              <div className="space-y-8" data-aos="fade-up">
                <p className="italic font-serif text-xl border-l-2 border-zinc-200 pl-6">
                  “And now, brethren, I commend you to God and to the Word of His grace,
                  which is able to build you up and give you an inheritance among all
                  those who are sanctified.” <br/>
                  <span className="text-xs font-black uppercase tracking-widest not-italic text-zinc-900">— Acts 20:32</span>
                </p>

                <div className="p-8 bg-black text-white">
                    <p className="text-amber-500 uppercase font-black tracking-widest text-xs mb-2">The Abundant Promise</p>
                    <p className="text-2xl font-bold italic font-serif">
                        “I am come that you may have life and have it more abundantly”
                    </p>
                    <p className="text-right text-xs mt-4 text-zinc-500">— John 10:10b</p>
                </div>

                <p>
                  Life in abundance is twofold: <span className="text-black font-bold">your life</span> and <span className="text-black font-bold">life for the dead.</span>
                  God called Ezekiel (3:3) to fill his belly with the Word, and in chapter 37,
                  to speak life to the dead bones.
                </p>

                <p className="bg-zinc-50 p-6 border border-zinc-100 font-medium text-black">
                  Our ministry is not only about serving people already in the Church,
                  but also about bringing into the fold those who are lost in darkness.
                </p>
              </div>
            </div>

            {/* GREAT COMMISSION FOOTER */}
            <div className="mt-20 flex flex-col items-center text-center space-y-6" data-aos="fade-up">
              <div className="w-px h-20 bg-gradient-to-b from-transparent to-pink-600"></div>
              <h3 className="text-xs font-black uppercase tracking-[0.5em] text-pink-600">The Great Commission</h3>
              <p className="text-xl font-bold text-black uppercase tracking-tight max-w-md">
                You are inspired to do the work of the Great Commission.
              </p>
              <span className="badge badge-outline rounded-none p-4 font-black text-[10px] tracking-widest text-zinc-900">MATTHEW 28:19–20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}