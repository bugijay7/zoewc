import React from "react";
import AboutNav from "../../components/AboutNav";

function Anthem() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1 bg-zinc-900 border-l-4 border-pink-600 mb-6">
            <span className="text-pink-600 text-xs font-black uppercase tracking-[0.4em]">Our Declaration</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center">
            The Zoe <span className="text-amber-500">Anthem</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR NAVIGATION */}
          <div className="lg:w-1/4">
            <AboutNav />
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:w-3/4 space-y-20">
            
            {/* ANTHEM POETRY SECTION */}
            <section className="relative p-8 md:p-16 bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-9xl font-black italic select-none">“</span>
              </div>
              
              <div className="relative z-10 text-center space-y-6">
                <p className="text-xl md:text-2xl leading-relaxed text-black font-light italic font-serif">
                  <strong className="text-pink-600 font-bold not-italic">We are Zoe family and one in Christ;</strong>
                  <br />
                  We live in the realm of the Divine Book: <em className="text-amber-600">The Bible</em>;
                  <br />
                  Yes, it is the realm of the Higher Life,
                  <br />
                  Walking from verse to verse, from chapter to chapter;
                  <br />
                  From book to book, and from testament to testament.
                </p>
                <div className="w-16 h-1 bg-pink-600 mx-auto mt-8"></div>
              </div>
            </section>

            {/* VISION & MISSION GRID */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card bg-white border border-zinc-100 shadow-sm p-8 rounded-none group hover:border-amber-500 transition-colors duration-500">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 mb-4">Our Vision</h2>
                <p className="text-xl font-bold text-black uppercase tracking-tight">
                  Inspired to win, train and send to win.
                </p>
              </div>

              <div className="card bg-white border border-zinc-100 shadow-sm p-8 rounded-none group hover:border-pink-600 transition-colors duration-500">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 mb-4">Our Mission</h2>
                <p className="text-xl font-bold text-black uppercase tracking-tight">
                  Transforming lives by the life and the love of christ.
                </p>
              </div>
            </div>

            {/* CORE VALUES - FLOWERS */}
            <section className="bg-black text-white p-10 md:p-16 rounded-none">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Our Core <span className="text-pink-600">Values</span></h2>
                <span className="px-4 py-1 bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest">F.L.O.W.E.R.S</span>
              </div>
              
              <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-zinc-300">
                { "Faith, Love, Obedience, Wisdom, Energy, Relevance, Service."
                  .split(', ')
                  .map((value, i, arr) => (
                    <span key={value} className="inline-block">
                      <span className="text-white font-bold">{value[0]}</span>
                      {value.slice(1)}{i !== arr.length - 1 && <span className="text-zinc-700 mx-3">•</span>}
                    </span>
                  ))
                }
              </p>
            </section>

            {/* MOTTO CTA */}
            <div className="text-center py-10">
              <div className="divider before:bg-zinc-100 after:bg-zinc-100 uppercase text-[10px] font-black tracking-[0.4em] text-zinc-900 mb-10">Our Motto</div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
                “Christ is the reason for <span className="text-amber-500 underline decoration-pink-600 underline-offset-8">Life</span>.”
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Anthem;