import React from "react";
import { FaPaypal, FaMobileAlt, FaUniversity, FaHeart } from "react-icons/fa";

export default function DonationPage() {
  return (
    <div className="bg-gray-50  pb-12 pt-30 md:pt-30 px-6 md:px-20 ">
      <div className="max-w-6xl mx-auto">
        {/* ❤️ Title Section */}
         <div className="text-center">
          <FaHeart className="text-primary text-5xl mx-auto" />
          <h1 className="text-2xl md:text-5xl font-medium text-gray-800">
            Support the Ministry
          </h1>
          <p className="text-primary py-6 text-xs md:text-sm max-w-2xl mx-auto md:py-12">
            Your generous giving helps us reach more souls, support the
            community, and spread the gospel of Christ. Every contribution,
            big or small, makes an eternal impact.
          </p>
        </div>

        {/* 💳 Giving Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Bank Transfer */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaUniversity className="text-amber-600 text-xl md:text-4xl mb-4" />
            <h2 className="text-xs md:text-2xl font-medium text-gray-800 mb-3">
              Bank Transfer
            </h2>
            <p className="text-gray-700 mb-2">Account Name: zoe worship centre</p>
            <p className="text-gray-700 mb-2">Bank: Equity Bank</p>
            <p className="text-gray-700 mb-2">Account Number: 1234567890</p>
            <p className="text-gray-700">Branch: Kinoo</p>
          </div>

          {/* M-Pesa Giving */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaMobileAlt className="text-amber-600 text-xl md:text-4xl mb-4" />
            <h2 className="text-xs md:text-2xl font-medium text-gray-800 mb-3">
              M-Pesa Giving
            </h2>
            <p className="text-gray-700 mb-2">Paybill: 247247</p>
            <p className="text-gray-700 mb-2">Account: Offering/Tithe</p>
            <p className="text-gray-700">Thank you for your faithful giving!</p>
          </div>
         </div>

        
      </div>
    </div>
  );
}
