import React from "react";
import evangelismImg from "../../../assets/anagkazo.jpeg";

export default function AnagkazoDept() {
  return (
    <section className="w-full max-w-[1400px] pt-20 md:pt-40 mx-auto flex flex-col">
      {/* Top Section - Image */}
      <div className="w-full h-[50vh] overflow-hidden">
        <img
          src={evangelismImg}
          alt="Anagkazo / Evangelism Department"
          className="object-cover w-full h-full object-top"
        />
      </div>

      {/* Bottom Section - Text */}
      <div className="bg-base-100 flex flex-col justify-center px-8 md:px-20 py-12 max-w-[1400px]">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase">
          Anagkazo / Evangelism
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4">
          Sharing the Gospel, Changing Lives
        </h2>
        <p className="text-sm md:text-lg leading-relaxed">
          The Anagkazo Department at Zoe Worship Centre is dedicated to spreading the Good News of Jesus Christ 
          both locally and globally. Through outreach programs, campaigns, and personal evangelism, we:
        </p>
        <ul className="pl-10 list-disc mt-2 text-sm md:text-lg">
          <li>reach the lost with the message of hope,</li>
          <li>equip believers to share their faith effectively,</li>
          <li>engage communities through meaningful service and love.</li>
        </ul>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Our mission is to raise a generation of bold and compassionate witnesses, impacting lives and expanding God’s kingdom.
        </p>
      </div>
    </section>
  );
}
