import React from "react";
import sundaySchoolImg from "../../../assets/sunday-school.jpeg";

export default function SundaySchoolSection() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-50 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={sundaySchoolImg}
          alt="Zoe Sunday School"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-top mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[800px]">
        <h1 className="text-xl md:text-6xl font-bold mb-6 uppercase text-primary">
          Zoe Sunday School
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Nurturing Young Hearts in Faith
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          At Zoe Worship Centre, our Sunday School is a vibrant space where children
          and teens grow in the knowledge and love of Christ. Through:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>Interactive lessons</li>
          <li>Creative activities</li>
          <li>Engaging worship</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          We help every child understand God’s Word and experience His abundant life.
          Our mission is to equip the next generation with faith, values, and a heart
          for service, fostering a foundation that will guide them throughout their lives.
        </p>
      </div>
    </section>
  );
}
