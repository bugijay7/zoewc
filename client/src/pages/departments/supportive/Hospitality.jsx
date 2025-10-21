import React from "react";
import hospitalityImg from "../../../assets/hospitality.jpeg";

export default function HospitalityDept() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={hospitalityImg}
          alt="Hospitality Department"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-top mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[1000px]">
        <h1 className="text-xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Hospitality Department
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Serving with Love and Excellence
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Hospitality Department at Zoe Worship Centre is committed to creating a welcoming and warm environment for everyone who walks through our doors. Through greeting, hosting, and assisting members and visitors, we:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>ensure everyone feels valued and cared for,</li>
          <li>support the smooth running of church services and events,</li>
          <li>foster a culture of kindness, respect, and excellence.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to make every interaction a reflection of Christ’s love, serving the community with joy and dedication.
        </p>
      </div>
    </section>
  );
}
