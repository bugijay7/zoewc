import React from "react";
import mediaImg from "../../../assets/medias.jpg";

export default function MediaDept() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-auto md:h-[50vh] overflow-hidden">
        <img
          src={mediaImg}
          alt="Media / Sound System Department"
          className="object-cover md:w-full md:h-full  w-[90vh] h-auto object-bottom mt-5 md:mt-0"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[1400px]">
        <h1 className="text-xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Media & Sound System Department
        </h1>
        <h2 className="text-sm md:text-2xl font-medium mb-4">
          Enhancing Worship Through Technology
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Media Department at Zoe Worship Centre is dedicated to using technology 
          to enrich worship and facilitate communication. Through audio, video, 
          and media production, we:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>ensure high-quality sound and visual experience,</li>
          <li>support live streaming and recording of church events,</li>
          <li>enhance engagement during services and programs.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to leverage media and technology to glorify God and connect our community, making every service a meaningful and immersive experience.
        </p>
      </div>
    </section>
  );
}
