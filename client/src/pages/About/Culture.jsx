import React from "react";
import AboutNav from "../../components/AboutNav";

function Culture() {
  const principles = [
    "Accountability", "Self-responsibility", "Loyalty", "Availability", 
    "Assignment Commitment", "Transparency", "Time Consciousness", 
    "Unity of Purpose", "Forgiveness", "Result-based Celebration"
  ];

  const welcomeStatements = [
    { text: "Welcome to Zoe, the World of John 10:10b and 2 Corinthians 3:18.", highlight: false },
    { text: "Zoe Worship Centre is the hub of divine information, where we are transformed and inspired to inspire generations.", highlight: true },
    { text: "Welcome to a family where you are no longer a church member but a minister in the making — reaching out to the lost.", highlight: false },
    { text: "Welcome to a church where the limit is not the sky, but yourself.", highlight: true },
    { text: "Welcome to the class of learning and re-learning, where your culture is transformed into a Supra-culture.", highlight: false },
    { text: "Welcome to an environment of divine encounters with the Word and the Spirit of God.", highlight: true },
    { text: "Welcome to a dimension where the voice of God is present and real.", highlight: false },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION HEADER */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1 bg-zinc-900 border-l-4 border-pink-600 mb-6">
            <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.4em]">Our Heartbeat</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center">
            The Zoe <span className="text-amber-500">Culture</span>
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
            
            {/* APEX PRINCIPLES SECTION */}
            <section className="mb-20" data-aos="fade-up">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 mb-8 flex items-center gap-4">
                The Apex Foundation <span className="h-px w-20 bg-zinc-100"></span>
              </h2>
              <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-black mb-10">
                From the top apex downwards, we believe in <span className="text-pink-600">Christ Principles</span>.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {principles.map((principle, idx) => (
                  <span key={idx} className="px-4 py-2 border border-zinc-100 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-default">
                    {principle}
                  </span>
                ))}
              </div>
            </section>

            {/* WELCOME CASCADING SECTION */}
            <section className="space-y-4">
               <h3 className="text-4xl font-black uppercase tracking-tighter mb-12">
                 Welcome to the <span className="text-amber-500 underline decoration-black underline-offset-8">Zoe Family</span>
               </h3>

               <div className="space-y-2">
                {welcomeStatements.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-8 border-l-2 transition-all duration-500 ${item.highlight ? 'bg-zinc-50 border-amber-500' : 'bg-white border-zinc-100 hover:border-pink-600'}`}
                    data-aos="fade-left"
                    data-aos-delay={idx * 50}
                  >
                    <p className={`text-lg md:text-xl leading-relaxed ${item.highlight ? 'text-black font-bold' : 'text-zinc-500 font-light'}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
               </div>
            </section>

            {/* FINAL FAMILY DECLARATION */}
            <div className="mt-20 p-12 bg-black text-white relative overflow-hidden" data-aos="zoom-in">
              <div className="relative z-10 text-center space-y-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-pink-600 rotate-45"></div>)}
                </div>
                <p className="text-2xl md:text-3xl font-light italic font-serif leading-relaxed">
                  "In Zoe, we are a family that runs the race of faith together, 
                  cares for one another, and celebrates our success."
                </p>
                <div className="pt-6">
                   <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">United in Christ</span>
                </div>
              </div>
              {/* Subtle background texture/accent */}
              <div className="absolute -bottom-10 -right-10 text-zinc-900 text-9xl font-black select-none">ZOE</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture;