import React from "react";
import womenImg from "../../../assets/women.jpeg";

export default function WomenDepartment() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={womenImg}
          alt="Women's Department"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-center mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[800px]">
        <h1 className="text-xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Women's Ministry
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Empowering Women in Faith and Leadership
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Women’s Department at Zoe Worship Centre is devoted to nurturing and 
          equipping women to grow spiritually, lead with wisdom, and impact their 
          communities. Through regular meetings, retreats, and outreach programs, we focus on:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>spiritual growth,</li>
          <li>leadership and mentorship,</li>
          <li>community service.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to raise women of faith, integrity, and influence who inspire 
          transformation in their families, church, and society.
        </p>
      </div>
    </section>
  );
}
