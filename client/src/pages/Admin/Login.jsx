import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth"; // ✅ Import your context hook

export default function Login() {
  const { login } = useAuth(); // ✅ Access login() from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("https://zoewc-1.onrender.com/api/auth/login", {
        email,
        password,
      });

      login(res.data.token); // ✅ Update context + save token automatically
      setMessage("✅ Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 200);
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
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 shadow-xl border border-base-300 p-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary uppercase tracking-wide">
          Zoe Worship Centre Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@zoeworship.org"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-center text-sm mt-4 ${
                message.startsWith("✅") ? "text-success" : "text-error"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
