import React from "react";
import usheringImg from "../../../assets/ushering.jpeg";

export default function Ushering() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-[50vh] overflow-hidden">
        <img
          src={usheringImg}
          alt="Ushering & Protocol Department"
          className="object-cover w-full h-full object-top"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Ushering & Protocol Department
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-base-content/90 mb-4">
          Serving with Excellence and Order
        </h2>
        <p className="text-sm md:text-lg text-base-content/80 leading-relaxed">
          The Ushering Department at Zoe Worship Centre is committed to creating a welcoming
          and organized environment for all church services and events. Our team:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg text-base-content/80">
          <li>welcomes and assists congregants,</li>
          <li>manages seating and flow during services,</li>
          <li>ensures smooth operations of church events and programs.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg text-base-content/80 leading-relaxed">
          Our mission is to serve with humility and excellence, fostering a warm, orderly, and
          Christ-centered atmosphere where everyone feels valued and cared for.
        </p>
      </div>
    </section>
  );
}
