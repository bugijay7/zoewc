import React from "react";
import menImg from "../../../assets/mens-conference.jpeg";

export default function MensDepartment() {
  return (
    <section className="w-full max-w-[1400px] pt-16 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={menImg}
          alt="Men's Department"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-top mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-6 md:px-20 py-10 md:py-12 max-w-[800px] mx-auto">
        <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 md:mb-6 uppercase">
          Men's Ministry
        </h1>
        <h2 className="text- md:text-xl lg:text-2xl font-medium mb-3 md:mb-4">
          Strengthening Men in Faith and Purpose
        </h2>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          The Men’s Department at Zoe Worship Centre is dedicated to inspiring and 
          equipping men to live strong, God-centered lives. Through regular meetings, 
          conferences, and outreach programs, we focus on:
        </p>
        <ul className="pl-6 md:pl-10 list-disc mt-2 text-sm md:text-base lg:text-lg">
          <li>spiritual growth,</li>
          <li>leadership,</li>
          <li>community engagement.</li>
        </ul>
        <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed">
          Our mission is to build men of integrity, purpose, and faith who impact 
          their families, church, and community for Christ.
        </p>
      </div>
    </section>
  );
}
