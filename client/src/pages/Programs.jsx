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
    <div className="pt-40 py-16 px-6 md:px-20 font-montserrat">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Our Programs
        </h1>
        <p className="text-base-content/70 text-lg md:text-xl leading-relaxed">
          Explore the diverse programs designed to impact lives, nurture growth,
          and strengthen our community.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 border border-base-300"
          >
            <h2 className="text-lg font-semibold">{program.name}</h2>
            <p className="text-sm opacity-70 mt-2">
              Learn more about {program.name.toLowerCase()} and how it impacts
              lives in our community.
            </p>
            <Link
              to={program.link}
              className="mt-3 text-primary font-medium underline hover:text-primary-focus"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
