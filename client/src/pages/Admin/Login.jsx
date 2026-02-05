import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth.jsx";
import { FaLock, FaEnvelope, FaChevronRight } from "react-icons/fa";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://zoewc-omsu.onrender.com/api/auth/login",
        { email, password }
      );

      login(res.data.token);
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    } catch (err) {
      if (err.response?.data?.message) {
        setMessage(`❌ ${err.response.data.message}`);
      } else {
        setMessage("❌ Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 selection:bg-pink-200">
      <div className="max-w-md w-full relative">
        
        {/* Decorative Background Accent */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-zinc-50 rounded-full -z-10 blur-3xl opacity-50"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-pink-50 rounded-full -z-10 blur-3xl opacity-50"></div>

        <div className="bg-white border border-zinc-100 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative Corner 'Z' - Matching Home Hub */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-50 flex items-center justify-center italic font-black text-zinc-200 text-2xl">
            Z
          </div>

          <div className="mb-10">
            <div className="inline-block px-4 py-1 bg-zinc-100 border-l-4 border-pink-600 mb-6">
              <span className="text-pink-600 text-[10px] font-black tracking-widest uppercase">Admin Portal</span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-black">
              Welcome <br />
              <span className="text-amber-500 text-5xl">Back</span>
            </h2>
            <p className="text-zinc-400 text-xs mt-4 font-bold uppercase tracking-widest">
              Zoe Worship Centre Management
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <FaEnvelope className="text-amber-500" /> Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@zoeworship.org"
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 focus:outline-none focus:border-pink-600 transition-colors font-medium text-sm"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <FaLock className="text-pink-600" /> Security Key
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 focus:outline-none focus:border-amber-500 transition-colors font-medium text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full group bg-black text-white py-4 px-8 flex items-center justify-between hover:bg-pink-600 transition-all duration-500 disabled:bg-zinc-300"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  {loading ? "Authenticating..." : "Login to Dashboard"}
                </span>
                <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Response Message */}
            {message && (
              <div className={`mt-6 p-4 text-[10px] font-black uppercase tracking-widest text-center ${message.includes('❌') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {message}
              </div>
            )}
          </form>

          <div className="mt-12 pt-8 border-t border-zinc-50 text-center">
            <p className="text-[9px] text-zinc-400 font-medium uppercase tracking-widest leading-loose">
              "One family in Christ, <br /> living by the Word."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}