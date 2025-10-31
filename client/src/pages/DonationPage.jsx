import React, { useState } from "react";
import { FaMobileAlt, FaUniversity, FaHeart, FaPhoneAlt, FaCopy } from "react-icons/fa";

export default function DonationPage() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Clear message after 2s
  };

  return (
    <div className="bg-gray-50 pb-20 pt-32 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto">
        {/* ❤️ Title Section */}
        <div className="text-center mb-12">
          <FaHeart className="text-primary text-5xl mx-auto" />
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mt-4">
            Support the Ministry
          </h1>
          <p className="text-primary py-6 text-sm md:text-base max-w-2xl mx-auto">
            Your generous giving helps Apostolic Faith Church Kiambaa continue spreading
            the gospel, supporting the community, and building strong foundations of faith.
            Every gift—large or small—makes an eternal difference.
          </p>
        </div>

        {/* 💳 Giving Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 🏦 Bank Transfer */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaUniversity className="text-amber-600 text-3xl mb-4" />
            <h2 className="text-xl font-medium text-gray-800 mb-3">Bank Transfer</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Bank:</span> Equity Bank
            </p>
            <p className="text-gray-700 mb-2 flex items-center gap-2">
              <span className="font-bold">Account Number:</span> 1290 2609 40849
              <FaCopy
                onClick={() => handleCopy("1290260940849")}
                className="text-gray-600 cursor-pointer hover:text-primary"
                title="Copy Account Number"
              />
            </p>
            {copiedText === "1290260940849" && (
              <p className="text-sm text-green-600">✅ Copied account number!</p>
            )}
            <p className="text-gray-700">
              <span className="font-bold">Branch:</span> Kenyatta Avenue
            </p>
          </div>

          {/* 📱 M-Pesa Giving */}
          <div className="bg-[#ffcfe7] p-8 rounded-xl shadow-lg border border-gray-100">
            <FaMobileAlt className="text-amber-600 text-3xl mb-4" />
            <h2 className="text-xl font-medium text-gray-800 mb-3">M-Pesa Giving</h2>

            <p className="text-gray-700 mb-2 flex items-center gap-2">
              Paybill: <span className="font-bold">202273</span>
              <FaCopy
                onClick={() => handleCopy("202273")}
                className="text-gray-600 cursor-pointer hover:text-primary"
                title="Copy Paybill"
              />
            </p>
            {copiedText === "202273" && (
              <p className="text-sm text-green-600">✅ Copied Paybill!</p>
            )}

            <p className="text-gray-700 flex items-center gap-2">
              Account: <span className="font-bold">Offering / Tithe</span>
              <FaCopy
                onClick={() => handleCopy("Offering / Tithe")}
                className="text-gray-600 cursor-pointer hover:text-primary"
                title="Copy Account Name"
              />
            </p>
            {copiedText === "Offering / Tithe" && (
              <p className="text-sm text-green-600">✅ Copied Account!</p>
            )}
          </div>
        </div>

        {/* 🌍 Diaspora Giving & Helpline */}
        <div className="mt-16 bg-primary text-white p-8 rounded-xl text-center shadow-lg">
          <FaPhoneAlt className="text-3xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Diaspora Giving & Helpline</h3>
          <p className="text-sm md:text-base mb-2">
            For those giving from outside Kenya or needing assistance, please contact us or
            send your gift directly via M-Pesa to:
          </p>
          <p className="text-lg md:text-xl font-bold tracking-wide">
            +254 722 908 733
          </p>
          <p className="text-sm mt-3 opacity-90">
            Thank you for supporting Apostolic Faith Church Kiambaa in advancing
            the Kingdom of God!
          </p>
        </div>
      </div>
    </div>
  );
}
