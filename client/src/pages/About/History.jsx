import React from "react";
import AboutNav from "../../components/AboutNav";

export default function History() {
  const milestones = [
    {
      year: "2008",
      month: "October",
      title: "The Divine Response",
      content: "Our Journey began when the founder responded to the call of God after a long wrestle, establishing the Ministry in Kinoo by God's grace.",
      accent: "border-zinc-200"
    },
    {
      year: "2009",
      month: "January",
      title: "The Emergence",
      content: "Zoe Worship Centre officially emerged as a humble beacon of hope. Led by Rev. Dave, the early church consisted of his family, two siblings, and one faithful neighbor.",
      accent: "border-pink-600"
    },
    {
      year: "2010",
      month: "Mid-Year",
      title: "The Season of Testing",
      content: "Operating in a semi-permanent structure on leased land, challenges arose necessitating a relocation to a second leased location—testing our perseverance.",
      accent: "border-zinc-200"
    },
    {
      year: "2014",
      month: "Victory",
      title: "A New Chapter",
      content: "By God’s grace, we purchased our own land and cleared the full payment—marking a permanent home for our journey of faith and purpose.",
      accent: "border-amber-500"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION HEADER */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1 bg-zinc-900 border-l-4 border-amber-500 mb-6">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Our Roots</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center">
            Our <span className="text-pink-600">History</span>
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
            
            {/* INTRO SUMMARY */}
            <div className="mb-20 max-w-2xl" data-aos="fade-up">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-black mb-6">
                From a Humble <span className="text-pink-600">Beacon</span> to a Growing Light
              </h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed font-serif italic border-l-4 border-zinc-100 pl-6">
                "We believe in the power of small beginnings and the faithfulness of a Great God who guides every step of our journey."
              </p>
            </div>

            {/* CHRONOLOGICAL TIMELINE */}
            <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-zinc-100 before:via-zinc-200 before:to-transparent">
              
              {milestones.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  {/* Dot indicator */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-zinc-50 text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-black group-hover:text-white">
                    <span className="text-[10px] font-black">{item.year.slice(-2)}</span>
                  </div>

                  {/* Card Content */}
                  <div className={`w-[calc(100%-4rem)] md:w-[45%] p-8 bg-white border-b-4 ${item.accent} shadow-sm hover:shadow-xl transition-all duration-500`}>
                    <div className="flex items-center justify-between mb-2">
                      <time className="text-amber-600 font-black uppercase text-[10px] tracking-widest">
                        {item.month} {item.year}
                      </time>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CLOSING TESTIMONY */}
            <div className="mt-32 p-12 bg-zinc-50 text-center border border-zinc-100 relative overflow-hidden" data-aos="zoom-in">
                <div className="relative z-10">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-black mb-4">Ebenezer</h2>
                    <p className="text-zinc-900 font-bold uppercase tracking-[0.4em] text-xs">"Thus far the Lord has helped us"</p>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-pink-600"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}