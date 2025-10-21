import React from "react";
import worshipImg from "../../../assets/praise.jpg";

export default function PraiseAndWorship() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[70vh] overflow-hidden">
        <img
          src={worshipImg}
          alt="Praise & Worship Department"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-top mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[1400px]">
        <h1 className="text-xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Praise & Worship Department
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Leading Hearts into God’s Presence
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Praise and Worship Department at Zoe Worship Centre is devoted to creating
          an atmosphere where hearts connect with God through music and worship. We focus on:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>leading congregational worship,</li>
          <li>training musicians and vocalists,</li>
          <li>supporting church events with live worship sessions.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to inspire and equip every member to engage in heartfelt worship,
          deepening their relationship with Christ and fostering a spirit-filled church community.
        </p>
      </div>
    </section>
  );
}
