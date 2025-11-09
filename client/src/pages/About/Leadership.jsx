import React from "react";
import AboutNav from "../../components/AboutNav";

export default function Leadership() {
  return (
    <div className="bg-base-200 text-base-content px-4 md:px-10 py-20 font-serif leading-relaxed max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* 🧭 Sidebar */}
        <div className="md:w-1/4">
          <AboutNav />
        </div>

        {/* 👑 Content Section */}
        <div className="flex-1 bg-base-100 shadow-lg rounded-2xl p-6 md:mt-10">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-medium mb-8 border-b-4 border-primary inline-block pb-2">
              Our Leadership
            </h1>
          </div>

          <p className="text-xs md:text-xl whitespace-pre-line">
            Zoe Worship Centre has great Leaders and Pastors who are well trained,
            submit to one another, and honor their vision bearer. They are committed
            to loving all the saints regardless of race, tribe, or background, and
            dedicated to building the Church of Christ in unity.
            {"\n\n"}
            All our leaders possess a unique Christ-like attitude and are easily
            identified through the following five characteristics:
          </p>

          <ul className="list-disc list-inside text-xs md:text-xl mt-6 space-y-2">
            <li><strong>Faithful</strong> — to God</li>
            <li><strong>Loyal</strong> — to the vision and the vision bearer</li>
            <li><strong>Available</strong> — dedicated to service and ministry</li>
            <li><strong>Sacrificial</strong> — committed to excellence in performance</li>
            <li><strong>Result-Oriented</strong> — driven by impact and transformation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
