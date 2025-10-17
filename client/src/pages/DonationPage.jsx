import React from "react";
import { FaPaypal, FaMobileAlt, FaUniversity, FaHeart } from "react-icons/fa";

export default function DonationPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto">
        {/* ❤️ Title Section */}
        <div className="text-center mb-12">
          <FaHeart className="text-amber-600 text-5xl mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Support the Ministry
          </h1>
          <p className="text-[#f5f0e9] max-w-2xl mx-auto">
            Your generous giving helps us reach more souls, support the
            community, and spread the gospel of Christ. Every contribution,
            big or small, makes an eternal impact.
          </p>
        </div>

        {/* 💳 Giving Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bank Transfer */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaUniversity className="text-amber-600 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Bank Transfer
            </h2>
            <p className="text-gray-700 mb-2">Account Name: Zoe Worship Center</p>
            <p className="text-gray-700 mb-2">Bank: Equity Bank</p>
            <p className="text-gray-700 mb-2">Account Number: 1234567890</p>
            <p className="text-gray-700">Branch: Kinoo</p>
          </div>

          {/* M-Pesa Giving */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaMobileAlt className="text-amber-600 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              M-Pesa Giving
            </h2>
            <p className="text-gray-700 mb-2">Paybill: 247247</p>
            <p className="text-gray-700 mb-2">Account: ZOEWORSHIP</p>
            <p className="text-gray-700">Thank you for your faithful giving!</p>
          </div>

          {/* PayPal Giving */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaPaypal className="text-amber-600 text-4xl mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              PayPal Giving
            </h2>
            <p className="text-gray-700 mb-4">
              You can give securely through PayPal.
            </p>
            <a
              href="https://www.paypal.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition"
            >
              Donate via PayPal
            </a>
          </div>
        </div>

        {/* 📨 Donation Form */}
        <div className="bg-[#ffcfe7] shadow-lg rounded-xl p-8 border border-gray-100 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Make a Pledge or Inquiry
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Amount (optional)
              </label>
              <input
                type="number"
                placeholder="Enter amount in KES or USD"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-semibold py-2 rounded-lg hover:bg-amber-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 🙏 Thank You Message */}
        <div className="text-center mt-16 text-[#f5f0e9]">
          <p>
            “Give, and it will be given to you. A good measure, pressed down,
            shaken together and running over, will be poured into your lap.”
          </p>
          <p className="mt-2 font-semibold text-gray-800">
            — Luke 6:38 (NIV)
          </p>
        </div>
      </div>
    </div>
  );
}
