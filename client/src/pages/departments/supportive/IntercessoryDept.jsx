import React from "react";
import intercessoryImg from "../../../assets/hero.jpg";

export default function IntercessoryDept() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={intercessoryImg}
          alt="Intercessory Ministry"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-center mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[1000px]">
        <h1 className="text-xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Intercessory Ministry
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Praying and Standing in the Gap
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Intercessory Department at Zoe Worship Centre is committed to supporting the church, its members, 
          and the community through dedicated prayer and spiritual guidance. We focus on:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>interceding for individuals and families,</li>
          <li>praying for church events and programs,</li>
          <li>fostering a culture of persistent prayer and faith.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to cultivate a strong prayer foundation, empowering believers to experience God’s presence, 
          breakthrough, and guidance in every area of life.
        </p>
      </div>
    </section>
  );
}
