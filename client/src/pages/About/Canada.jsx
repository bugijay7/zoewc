import React from "react";
import canadaImg from "../../assets/canada.jpeg";
import AboutNav from "../../components/AboutNav";

export default function Canada() {
  return (
    <section className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] lg:h-[70vh] flex items-stretch overflow-hidden bg-black">
        {/* Left: Content Overlay */}
        <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 bg-gradient-to-r from-black via-black/80 to-transparent">
          <div data-aos="fade-right">
            <span className="text-pink-600 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
              Global Missions
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Canada <br />
              <span className="text-amber-500">Assembly</span>
            </h1>
            <div className="w-20 h-1.5 bg-white"></div>
          </div>
        </div>

        {/* Right: Background Image */}
        <div className="absolute inset-0 lg:relative lg:w-full h-full">
          <img
            src={canadaImg}
            className="w-full h-full object-cover opacity-60 lg:opacity-100 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Canada Assembly of Zoe Worship Center"
          />
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* SIDEBAR NAVIGATION */}
          <div className="lg:w-1/4">
            <AboutNav />
          </div>

          {/* CONTENT SECTION */}
          <div className="lg:w-3/4 max-w-3xl">
            <div className="space-y-12" data-aos="fade-up">
              {/* Intro Statement */}
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-black border-l-8 border-pink-600 pl-8 py-2">
                The <span className="text-pink-600">Canada Assembly</span> stands as a vibrant extension of
                the Zoe Worship Center family.
              </p>

              {/* Body Text */}
              <div className="space-y-8 text-zinc-600 text-lg leading-relaxed font-light">
                <p>
                  A fellowship devoted to nurturing faith, unity,
                  and spiritual growth among believers in Canada and beyond. As part of the 
                  broader <strong className="text-black font-bold">Zoe Worship Center Assemblies</strong>,
                  this congregation continues the mission of spreading the gospel.
                </p>

                <div className="grid md:grid-cols-2 gap-8 py-8">
                  <div className="p-6 bg-zinc-50 border-t-2 border-amber-500">
                    <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2">Our Reach</h3>
                    <p className="text-sm">Empowering communities and fostering global connection through worship and service.</p>
                  </div>
                  <div className="p-6 bg-zinc-50 border-t-2 border-pink-600">
                    <h3 className="text-xs font-black uppercase tracking-widest text-black mb-2">Our Values</h3>
                    <p className="text-sm">Inclusivity, excellence in ministry, and a commitment to seeing lives transformed.</p>
                  </div>
                </div>

                <p className="italic font-serif text-xl text-black">
                  "The Canada Assembly reflects our heart for inclusivity... across nations and generations."
                </p>
              </div>

              {/* CALL TO ACTION */}
              <div className="mt-16 pt-12 border-t border-zinc-100">
                <div className="group relative bg-black p-1 text-center">
                  <div className="bg-black border border-zinc-800 p-8 transition-all group-hover:border-amber-500">
                    <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                      Inquiries & Connection
                    </h4>
                    <p className="text-white text-lg font-bold mb-6">
                      For more info about our Canada Assembly contact:
                    </p>
                    <a 
                      href="tel:+254722908733"
                      className="inline-block bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all duration-300"
                    >
                      +254 722 908 733
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER DECOR */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-amber-500"></div>
        <div className="flex-1 bg-pink-600"></div>
        <div className="flex-1 bg-black"></div>
      </div>
    </section>
  );
}