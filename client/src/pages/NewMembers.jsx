import React, { useState } from "react";

export default function NewMembers() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    serviceExperience: "",
    standoutMoment: "",
    feedback: "",
    department: "",
    wantsContact: "",
    preferredContactMethod: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset contact method if they change "wantsContact" to No
      ...(name === "wantsContact" && value === "No" ? { preferredContactMethod: "" } : {})
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycby3UKrmvZBDWR6BdBNJPN2jv6ZDISBw6Hyh5cUCxXJZvlhiBk_pVNwRNBp8Tw1i9B4l/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      alert("Thank you! Your feedback has been received.");
      setFormData({
        fullName: "", phoneNumber: "", serviceExperience: "", standoutMoment: "",
        feedback: "", department: "", wantsContact: "", preferredContactMethod: ""
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
      {/* --- HERO SECTION --- */}
      <header className="relative bg-black py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-600/10 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center pt-20">
          <div className="inline-block border border-amber-500 px-4 py-1 mb-6">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Welcome Home</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Visitors & <span className="text-pink-600">Feedback</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto italic">
            Thank you for visiting Zoe Worship Centre. You are welcome to worship with us again.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* --- LEFT COL: THE FORM --- */}
          <section className="lg:col-span-6">
            <div className="sticky top-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-black text-zinc-100 italic">01</span>
                <h2 className="text-3xl font-black uppercase tracking-tighter border-b-4 border-amber-500 pb-2">
                  Guest Card
                </h2>
              </div>

              <div className="bg-zinc-50 p-8 border-l-4 border-black shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pink-600 mb-2">1. Your Full Name *</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-300 bg-transparent p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">2. Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-300 bg-transparent p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Experience Dropdown */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">3. How was your experience today?</label>
                    <select
                      name="serviceExperience"
                      value={formData.serviceExperience}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-300 bg-transparent p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="">Select Option</option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Fair">Fair</option>
                      <option value="Needs Improvement">Needs Improvement</option>
                    </select>
                  </div>

                  {/* Standout Moment */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">4. What’s one thing that stood out to you?</label>
                    <input
                      type="text"
                      name="standoutMoment"
                      value={formData.standoutMoment}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-300 bg-transparent p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Feedback Textarea */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">5. Share any feedback to help us improve</label>
                    <textarea
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                      rows="2"
                      className="w-full border-b-2 border-zinc-300 bg-transparent p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    ></textarea>
                  </div>

                  {/* Department Dropdown */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">6. Which department best describes you?</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-300 bg-transparent p-3 text-sm focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="">Select Department</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Youth">Youth</option>
                    </select>
                  </div>

                  {/* Wants Contact */}
                  <div className="pt-4 border-t border-zinc-200">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-amber-600 mb-4">7. Would you like to be reached out to by the Zoe team?</label>
                    <div className="flex gap-8">
                      <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                        <input type="radio" name="wantsContact" value="Yes" checked={formData.wantsContact === "Yes"} onChange={handleChange} className="accent-black" /> YES
                      </label>
                      <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                        <input type="radio" name="wantsContact" value="No" checked={formData.wantsContact === "No"} onChange={handleChange} className="accent-black" /> NO
                      </label>
                    </div>
                  </div>

                  {/* Conditional Contact Method */}
                  {formData.wantsContact === "Yes" && (
                    <div className="p-4 bg-zinc-900 animate-in fade-in slide-in-from-top-2 duration-500">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Preferred method of contact</label>
                      <select
                        name="preferredContactMethod"
                        value={formData.preferredContactMethod}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 p-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="" className="text-black">Select Method</option>
                        <option value="Phone Call" className="text-black">Phone Call</option>
                        <option value="WhatsApp" className="text-black">WhatsApp</option>
                        <option value="SMS" className="text-black">SMS</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white py-4 text-xs font-black uppercase tracking-[0.3em] hover:bg-pink-600 transition-all duration-500 shadow-lg disabled:bg-zinc-400"
                  >
                    {loading ? "Processing..." : "Submit Response"}
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* --- RIGHT COL: SPIRITUAL CONTENT --- */}
          <div className="lg:col-span-6 space-y-32">
             <section className="relative pl-12">
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
              </div>
            </section>

            <section className="relative pl-12">
              <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
              <div className="absolute left-[-4px] top-0 h-8 w-2 bg-amber-500"></div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">God Loves You</h2>
              <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                The love of God is the foundation of our Christian walk. His love is
                not earned but freely given — pure, holy, and infinite.
              </p>
              <div className="p-8 bg-pink-600 text-white relative">
                <p className="text-xl font-bold italic mb-4">“For we are God's masterpiece.”</p>
                <p className="text-xs uppercase tracking-widest opacity-80">— Ephesians 2:10</p>
                <div className="absolute right-4 bottom-4 text-6xl opacity-20">♥</div>
              </div>
            </section>

            <section className="relative pl-12 pb-12">
              <div className="absolute left-0 top-0 h-full w-px bg-zinc-100"></div>
              <div className="absolute left-[-4px] top-0 h-8 w-2 bg-black"></div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Serve God</h2>
              <p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                Ministry is serving God through people. Service is the fruit of love.
              </p>
              <div className="bg-amber-500 p-10 text-black">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">Kingdom Benefits</h4>
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