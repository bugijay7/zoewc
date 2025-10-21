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
    <div className="bg-base-200 pt-40 py-16 px-6 md:px-20 font-montserrat">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Our Programs
        </h1>
        <p className="text-base-content/70 text-lg md:text-xl leading-relaxed">
          Explore the diverse programs designed to impact lives, nurture growth, and strengthen our community.
        </p>
      </div>

      {/* Programs List */}
      <ul className="max-w-3xl mx-auto bg-primary rounded-box shadow-md divide-y-8 divide-base-200">
        {programs.map((program, index) => (
          <li key={index} className="list-row p-4 mt-2 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="text-lg font-medium underline">{program.name}</div>
              <p className="text-xs md:text-sm opacity-70 mt-1">
                Learn more about the {program.name.toLowerCase()} and how it positively impacts lives in our community.
              </p>
            </div>
            <div className="flex-shrink-0 mt-2 md:mt-0">
              <Link
                to={program.link}
                className="btn btn-secondary btn-sm"
              >
                Learn More
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
