import React, { useState } from "react";

export default function NewMembers() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    previousChurch: "",
    introLetter: "",
    bornAgain: "",
    ledToSalvation: "",
    salvationExperience: "",
    status: "",
    joinedZoe: "",
    discipleship: "",
    leadership: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyuXPBBzhRcl1QIaXvyaqaWR5H6o5-qIyATTtF96i61pONb3ydxI3jJ75l5hcV_81ehaA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Submitted Successfully!");
      setFormData({
        fullName: "",
        phoneNumber: "",
        previousChurch: "",
        introLetter: "",
        bornAgain: "",
        ledToSalvation: "",
        salvationExperience: "",
        status: "",
        joinedZoe: "",
        discipleship: "",
        leadership: ""
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-black">
      {/* --- HERO / TITLE SECTION --- */}
      <header className="relative bg-black py-24 px-6 overflow-hidden">
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

                {/* ✅ Custom Visitor Form */}
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  <p className="text-sm text-zinc-500">
                    Kindly fill this minister’s brief introduction form to help us know you better.
                  </p>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Mobile Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Mobile Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Previous Church */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Which is your previous church? *
                    </label>
                    <input
                      required
                      type="text"
                      name="previousChurch"
                      value={formData.previousChurch}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                      placeholder="Enter church name"
                    />
                  </div>

                  {/* Introduction Letter */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Do you have any introduction letter? *
                    </label>
                    <div className="flex gap-6 text-sm">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="introLetter" value="YES" checked={formData.introLetter === "YES"} onChange={handleChange} required /> YES
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="introLetter" value="NO" checked={formData.introLetter === "NO"} onChange={handleChange} /> NO
                      </label>
                    </div>
                  </div>

                  {/* Born Again */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      When and where were you born again? *
                    </label>
                    <input
                      required
                      type="text"
                      name="bornAgain"
                      value={formData.bornAgain}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Led to Salvation */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Who led you to salvation?
                    </label>
                    <input
                      type="text"
                      name="ledToSalvation"
                      value={formData.ledToSalvation}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Salvation Experience */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Share your salvation experience
                    </label>
                    <textarea
                      name="salvationExperience"
                      value={formData.salvationExperience}
                      onChange={handleChange}
                      rows="3"
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    ></textarea>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      What is your status?
                    </label>
                    <div className="flex gap-6 text-sm">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="status" value="SINGLE" checked={formData.status === "SINGLE"} onChange={handleChange} /> SINGLE
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="status" value="MARRIED" checked={formData.status === "MARRIED"} onChange={handleChange} /> MARRIED
                      </label>
                    </div>
                  </div>

                  {/* Join Zoe */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      How did you join Zoe?
                    </label>
                    <input
                      type="text"
                      name="joinedZoe"
                      value={formData.joinedZoe}
                      onChange={handleChange}
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Previous Discipleship */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Previous discipleship experience? If so in what capacity
                    </label>
                    <textarea
                      name="discipleship"
                      value={formData.discipleship}
                      onChange={handleChange}
                      rows="2"
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    ></textarea>
                  </div>

                  {/* Leadership Roles */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Previous leadership or ministry roles? If so in what capacity
                    </label>
                    <textarea
                      name="leadership"
                      value={formData.leadership}
                      onChange={handleChange}
                      rows="2"
                      className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition disabled:bg-zinc-400"
                  >
                    {loading ? "Submitting..." : "Submit Introduction"}
                  </button>
                </form>
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