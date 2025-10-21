import React from "react";
import teenImg from "../../../assets/teen.jpeg";

export default function TeensDepartment() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-[50vh] overflow-hidden">
        <img
          src={teenImg}
          alt="Teens Department"
          className="object-cover w-full h-full object-center"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[800px]">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Teens Ministry
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4">
          Guiding Teens to Grow in Faith and Character
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Teens Department at Zoe Worship Centre is focused on nurturing teenagers in their spiritual journey, helping them develop strong values, and empowering them to live purpose-driven lives. Through interactive programs, mentorship, and fellowship, we focus on:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>spiritual growth and biblical understanding,</li>
          <li>building life skills and character,</li>
          <li>community engagement and peer mentorship.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to equip teens with a firm foundation in Christ, preparing them to navigate life’s challenges with faith, wisdom, and confidence.
        </p>
      </div>
    </section>
  );
}
