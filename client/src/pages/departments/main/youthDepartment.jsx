import React from "react";
import youthImg from "../../../assets/youths.jpeg";

export default function YouthDepartment() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={youthImg}
          alt="Youth Department"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-center mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[800px]">
        <h1 className="text-xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Youth Ministry
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Empowering Young Adults in Faith and Leadership
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Youth Department at Zoe Worship Centre is designed to engage and inspire young adults 
          to grow spiritually, develop leadership skills, and make a meaningful impact in their communities. 
          Through dynamic events, mentorship programs, and community service, we focus on:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>spiritual formation,</li>
          <li>leadership development,</li>
          <li>active community involvement.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our goal is to equip youth with strong faith, practical skills, and a heart for service 
          so they can thrive and lead effectively in church, school, and society.
        </p>
      </div>
    </section>
  );
}
