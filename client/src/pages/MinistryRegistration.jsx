import React, { useState } from "react";

export default function MinistryRegistration() {
  const [formData, setFormData] = useState({
    department: "",
    fullName: "",
    gender: "",
    phone: "",
    email: "",
    residence: "",
    discipleshipCompleted: "",
    completionPeriod: "",
    ministryInterests: [],
    consentServe: false,
    consentInfo: false
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "ministryInterests") {
      setFormData((prev) => {
        const interests = prev.ministryInterests.includes(value)
          ? prev.ministryInterests.filter((i) => i !== value)
          : [...prev.ministryInterests, value];
        return { ...prev, ministryInterests: interests };
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzdNavRKk_PI7uHZ7pr6S9BggAknhpZrgCGnPiBBD6jtIlPYuJNhS4vs6O-YkgAvTc1NA/exec";

    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      alert("Registration Submitted Successfully!");
      setFormData({
        department: "", fullName: "", gender: "", phone: "", email: "",
        residence: "", discipleshipCompleted: "", completionPeriod: "",
        ministryInterests: [], consentServe: false, consentInfo: false
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* --- HERO SECTION --- */}
      <header className="bg-black py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pink-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block border border-amber-500 px-4 py-1 mb-6">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Serve the King</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Ministry <span className="text-pink-600">Registration</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-bold uppercase tracking-widest italic">
            For Members Who Have Completed Discipleship Classes
          </p>
        </div>
      </header>

      {/* --- FORM SECTION --- */}
      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter border-b-4 border-black pb-2 inline-block">
              Take Your Place
            </h2>
            <p className="text-zinc-900 leading-relaxed font-light">
              Ministry is serving God through people. Your unique gifts are needed to fulfill the vision of winning, training, and sending.
            </p>
            <div className="p-6 bg-zinc-50 border-l-4 border-amber-500">
              <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">Notice</p>
              <p className="text-sm font-medium italic">"A ministry leader will contact you for orientation and next steps after submission."</p>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-8 bg-white border border-zinc-100 p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Department Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-pink-600">Department Selection *</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="">Select Ministry Department</option>
                    <option value="Men’s Ministry">Men’s Ministry</option>
                    <option value="Women’s Ministry">Women’s Ministry</option>
                    <option value="Youth Ministry">Youth Ministry</option>
                    <option value="Teens Ministry">Teens Ministry</option>
                    <option value="Sunday School Ministry">Sunday School Ministry</option>
                  </select>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Gender */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Mobile Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="WhatsApp preferred"
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Email & Residence */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Area of Residence</label>
                  <input
                    type="text"
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border-b-2 border-zinc-200 p-3 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Discipleship Details */}
              <div className="grid md:grid-cols-2 gap-8 p-6 bg-zinc-900 text-white">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-500">Completed Discipleship? *</label>
                  <select
                    name="discipleshipCompleted"
                    value={formData.discipleshipCompleted}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border-b border-white/20 p-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="" className="text-black">Select</option>
                    <option value="Yes" className="text-black">Yes</option>
                    <option value="No" className="text-black">No</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-amber-500">Completion Period</label>
                  <select
                    name="completionPeriod"
                    value={formData.completionPeriod}
                    onChange={handleChange}
                    className="w-full bg-white/10 border-b border-white/20 p-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="" className="text-black">Select Period</option>
                    <option value="Within the last 3 months" className="text-black">Within 3 months</option>
                    <option value="3–6 months ago" className="text-black">3–6 months ago</option>
                    <option value="Over 6 months ago" className="text-black">Over 6 months ago</option>
                  </select>
                </div>
              </div>

              {/* Service Areas (Checkboxes) */}
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-pink-600 block">Preferred Area(s) of Service</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Worship / Music", "Ushering & Protocol", "Media & Technical",
                    "Administration", "Evangelism & Outreach", "Hospitality",
                    "Teaching / Mentorship", "Prayer / Intercession", "Other"
                  ].map((area) => (
                    <label key={area} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="ministryInterests"
                        value={area}
                        checked={formData.ministryInterests.includes(area)}
                        onChange={handleChange}
                        className="w-4 h-4 accent-pink-600"
                      />
                      <span className="text-xs font-bold uppercase tracking-tighter text-zinc-500 group-hover:text-black transition-colors">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consents */}
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <label className="flex gap-4 items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consentServe"
                    checked={formData.consentServe}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 accent-black"
                  />
                  <span className="text-xs text-zinc-500 group-hover:text-black transition-colors">
                    I confirm that I have completed Discipleship Classes and commit to serve faithfully under church leadership.
                  </span>
                </label>
                <label className="flex gap-4 items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consentInfo"
                    checked={formData.consentInfo}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 accent-black"
                  />
                  <span className="text-xs text-zinc-500 group-hover:text-black transition-colors">
                    I consent to my information being used for ministry communication and coordination.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 text-xs font-black uppercase tracking-[0.3em] hover:bg-pink-600 transition-all duration-500 shadow-lg disabled:bg-zinc-300"
              >
                {loading ? "Processing..." : "Submit Registration"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}