import React from "react";
import worshipImg from "../../../assets/praise.jpg";

export default function PraiseAndWorship() {
  return (
    <section className="flex flex-col md:flex-row w-full h-[100vh]">
      {/* Left Section - Text */}
      <div className="w-full md:w-1/2 bg-base-100 flex flex-col justify-center px-8 md:px-20">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Praise & Worship Department
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-base-content/70 mb-4">
          Leading Hearts into God’s Presence
        </h2>
        <p className="text-sm md:text-lg text-base-content/80 leading-relaxed">
          The Praise and Worship Department at Zoe Worship Centre is devoted to creating
          an atmosphere where hearts connect with God through music and worship. We:
          <ul className="pl-10 list-disc mt-2">
            <li>lead congregational worship,</li>
            <li>train musicians and vocalists,</li>
            <li>support church events with live worship sessions.</li>
          </ul>
          <br />
          Our mission is to inspire and equip every member to engage in heartfelt worship,
          deepening their relationship with Christ and fostering a spirit-filled church community.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full">
        <img
          src={worshipImg}
          alt="Praise & Worship Department"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
