import React from "react";

export default function NewMembers() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-black">
      {/* --- HERO / TITLE SECTION --- */}
      <header className="relative bg-black py-24 px-6 overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-600/10 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center pt-20">
          <div data-aos="fade-down" className="inline-block border border-amber-500 px-4 py-1 mb-6">
             <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Discipleship Pathway</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Visitors & <span className="text-pink-600">Discipleship</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic">
            A Christ-Centered Life — A Four Step Journey to Life Impact
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
{/* --- LEFT COL: STEP 1 (KNOW OUR GUEST) --- */}
<section className="lg:col-span-5" data-aos="fade-right">
  <div className="sticky top-10">
    <div className="flex items-center gap-4 mb-8">
      <span className="text-6xl font-black text-zinc-100 italic">01</span>
      <h2 className="text-3xl font-black uppercase tracking-tighter border-b-4 border-amber-500 pb-2">
        Know Our Guest
      </h2>
    </div>

    <div className="bg-zinc-50 p-8 border-l-4 border-black">
      <h3 className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4">
        Visitor Registration
      </h3>

      {/* ✅ Google Form Embed */}
      <div className="w-full h-[800px]">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf82ZjxDl2DVc67MHi0cciGhuy809wDczLzmb3qvC2TMnF1XA/viewform?usp=publish-editor"
       width="340"
        height="441" 
        frameborder="0" 
        marginheight="0"
         marginwidth="0">Loading…</iframe>
      </div>
    </div>
  </div>
</section>



          {/* --- RIGHT COL: THE SPIRITUAL JOURNEY --- */}
          <div className="lg:col-span-7 space-y-32">
            
            {/* God Knows You */}
            <section data-aos="fade-up" className="relative pl-12">
               <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
               <div className="absolute left-[-4px] top-0 h-8 w-2 bg-pink-600"></div>
               
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">God Knows You</h2>
               <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                 God’s knowledge of you is complete and intimate. He knew you before
                 you were formed and still knows your every thought and step.
               </p>
               <div className="space-y-6 border-l border-amber-500/30 pl-8 italic">
                 <blockquote className="text-zinc-400 text-sm">
                   “Before I formed you in the womb I knew you, before you were born, I
                   set you apart.” <br/> <strong className="text-black not-italic">— Jeremiah 1:5</strong>
                 </blockquote>
                 <blockquote className="text-zinc-400 text-sm">
                   “You have searched me, Lord, and you know me.” <br/> <strong className="text-black not-italic">— Psalm 139:1</strong>
                 </blockquote>
               </div>
            </section>

            {/* God Loves You */}
            <section data-aos="fade-up" className="relative pl-12">
               <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
               <div className="absolute left-[-4px] top-0 h-8 w-2 bg-amber-500"></div>
               
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">God Loves You</h2>
               <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                 The love of God is the foundation of our Christian walk. His love is
                 not earned but freely given — pure, holy, and infinite.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all duration-500 cursor-default">
                    <span className="text-[10px] font-black uppercase tracking-widest block mb-2 opacity-50">Reflection</span>
                    <p className="text-sm font-bold">Why does God love you?</p>
                  </div>
                  <div className="p-6 bg-zinc-50 hover:bg-black hover:text-white transition-all duration-500 cursor-default">
                    <span className="text-[10px] font-black uppercase tracking-widest block mb-2 opacity-50">Reflection</span>
                    <p className="text-sm font-bold">How does God love us?</p>
                  </div>
               </div>
               <div className="p-8 bg-pink-600 text-white relative">
                  <p className="text-xl font-bold italic mb-4">“For we are God's masterpiece.”</p>
                  <p className="text-xs uppercase tracking-widest opacity-80">— Ephesians 2:10</p>
                  <div className="absolute right-4 bottom-4 text-6xl opacity-20">♥</div>
               </div>
            </section>

            {/* Know God */}
            <section data-aos="fade-up" className="relative pl-12">
               <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
               <div className="absolute left-[-4px] top-0 h-8 w-2 bg-black"></div>
               
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 text-outline text-zinc-100">Know God</h2>
               <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                 Knowing God is not an event but a journey of revelation, intimacy, and faith.
               </p>
               <div className="flex flex-wrap gap-4">
                  {["Creation", "Special Revelation", "Jesus / The Bible"].map((tag, i) => (
                    <span key={i} className="px-6 py-2 border border-zinc-200 text-[10px] font-black uppercase tracking-widest hover:border-black transition-colors">
                      {tag}
                    </span>
                  ))}
               </div>
            </section>

            {/* Love God */}
            <section data-aos="fade-up" className="relative pl-12">
               <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
               <div className="absolute left-[-4px] top-0 h-8 w-2 bg-pink-600"></div>
               
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Love God</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Love Others", "Walk in His Ways", "Honor Parents"].map((point, i) => (
                    <div key={i} className="border-b border-zinc-100 pb-4">
                      <span className="text-pink-600 font-black mr-2">/</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">{point}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Serve God */}
            <section data-aos="fade-up" className="relative pl-12 pb-12">
               <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
               <div className="absolute left-[-4px] top-0 h-8 w-2 bg-amber-500"></div>
               
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Serve God</h2>
               <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                 Ministry is serving God through people. Service is the fruit of love.
               </p>
               <div className="bg-amber-500 p-10 text-black">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">Kingdom Benefits</h4>
                  <p className="text-sm font-medium mb-6 uppercase tracking-widest opacity-70">Honor from the Father</p>
                  <p className="text-lg font-bold">“If anyone serves Me, him will My Father honor.”</p>
                  <p className="text-[10px] font-black mt-2">— John 12:26</p>
               </div>
            </section>
          </div>
        </div>
      </main>

     
    </div>
  );
}