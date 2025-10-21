import React from "react";
import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    { name: "Men’s Conference and Outreach", link: "/programs/MensConference" },
    { name: "Women’s Conference and Outreach", link: "/programs/WomensConference" },
    { name: "Youth ITIG, Outreach and Luncheons", link: "/programs/YouthOutreachLuncheon" },
    { name: "Teens Vibes", link: "/programs/teenVibes" },
    { name: "Sunday School Vibes", link: "/programs/sundaySchoolVibes" },
    { name: "Marriage Therapy", link: "/programs/marriageTherapy" },
    { name: "Local and International Missions", link: "/programs/LocalInternatinalMissions" },
    { name: "Hospitality for the Less Privileged", link: "/programs/ForTheLessPriviledged" },
    { name: "BodaBoda Empowerment", link: "/programs/BodaBodaEmpowernment" },
    { name: "Breath of Worship", link: "/programs/breathOfWorship" },
    { name: "Anagkazo Campaign", link: "/programs/anagkazoCampaign" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-medium mb-12 text-gray-800">
          Our Programs
        </h1>

        {/* 🔹 Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.link}
              className="block bg-[#ffcfe7] shadow-lg rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 transform"
            >
              <h2 className="text-2xl font-medium text-gray-800 mb-3">
                {program.name}
              </h2>
              <p className="text-gray-500">
                Learn more about the {program.name.toLowerCase()} and how it
                impacts lives in our community.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
