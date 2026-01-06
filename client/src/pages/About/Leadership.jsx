import React from "react";
import AboutNav from "../../components/AboutNav";

export default function Leadership() {
  const characteristics = [
    { label: "Faithful", detail: "to God" },
    { label: "Loyal", detail: "to the vision and the vision bearer" },
    { label: "Available", detail: "dedicated to service and ministry" },
    { label: "Sacrificial", detail: "committed to excellence in performance" },
    { label: "Result-Oriented", detail: "driven by impact and transformation" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION HEADER */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1 bg-zinc-900 border-l-4 border-pink-600 mb-6">
            <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em]">Governance & Heart</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center">
            Our <span className="text-amber-500">Leadership</span>
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
          <div className="lg:w-3/4">
            {/* INTRO TEXT SECTION */}
            <div className="mb-20 space-y-8" data-aos="fade-up">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-black leading-none">
                A Unified <span className="text-pink-600">Front</span>
              </h2>
              <div className="w-20 h-1.5 bg-amber-500"></div>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light italic font-serif">
                "Zoe Worship Centre has great Leaders and Pastors who are well trained,
                submit to one another, and honor their vision bearer. They are committed
                to loving all the saints regardless of race, tribe, or background, and
                dedicated to building the Church of Christ in unity."
              </p>
            </div>

            {/* CHARACTERISTICS SECTION */}
            <div className="space-y-12">
              <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900">
                  The Five Pillars of Leadership
                </h3>
              </div>

              <div className="grid gap-6">
                {characteristics.map((item, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-zinc-50 hover:bg-black transition-all duration-500 border border-zinc-100"
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                  >
                    {/* Circle Number */}
                    <div className="w-12 h-12 shrink-0 border border-zinc-200 group-hover:border-pink-600 rounded-full flex items-center justify-center text-xs font-black group-hover:text-pink-600 transition-colors">
                      0{index + 1}
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-white transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                        — {item.detail}
                      </p>
                    </div>

                    <div className="hidden md:block ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-pink-600 text-xl">✦</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CLOSING TAGLINE */}
            <div className="mt-20 py-16 border-t border-zinc-100 text-center space-y-4">
              <p className="text-zinc-900 text-xs font-black uppercase tracking-[0.5em]">
                Leading by Example
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                Christ-like <span className="text-pink-600">Attitude</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}