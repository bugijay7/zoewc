import React from "react";
import { Link } from "react-router-dom";

// ✅ Import images
import intercessoryImg from "../../assets/intercessory.jpg";
import worshipImg from "../../assets/praise.jpg";
import evangelismImg from "../../assets/anagkazo.jpeg";
import mediaImg from "../../assets/media.jpg";
import hospitalityImg from "../../assets/hospitality.jpeg";
import usheringImg from "../../assets/ushering.jpeg";

export default function SupportiveDepartments() {
  const departments = [
    { name: "Intercessory Department", link: "/departments/supportive/intercessory", image: intercessoryImg },
    { name: "Praise and Worship Department", link: "/departments/supportive/praiseAndWorship", image: worshipImg },
    { name: "Anagkazo / Evangelism Department", link: "/departments/supportive/anagkazo", image: evangelismImg },
    { name: "Media / Sound System Department", link: "/departments/supportive/media", image: mediaImg },
    { name: "Hospitality Department", link: "/departments/supportive/hospitality", image: hospitalityImg },
    { name: "Ushering / Protocol Department", link: "/departments/supportive/ushering", image: usheringImg },
  ];

  return (
    <div className="bg-base-200 md:pt-40  pt-20 py-16 px-6 md:px-20 font-montserrat">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-2xl md:text-6xl font-bold text-primary">
          Supportive Departments
        </h1>
        <p className="text-base-content/70 text-[7px] md:text-xl leading-relaxed max-w-[400px] mx-auto">
          Meet our supportive departments that help keep the ministry thriving and assist in every aspect of church life.
        </p>
      </div>

      {/* Department List */}
      <ul className="max-w-4xl mx-auto divide-y-8 divide-base-200">
              {departments.map((dept, index) => (
                <li key={index} className="flex flex-row md:flex-row items-start gap-4 md:gap-6 py-4">
                  {/* Image */}
                  <div className="flex-shrink-0 w-20 h-20 md:w-32 md:h-32 overflow-hidden rounded-box">
                    <img src={dept.image} alt={dept.name} className="object-cover w-full h-full" />
                  </div>
      
                  {/* Text */}
                  <div className="flex-1">
                    <div className="text-[8px] md:text-lg font-medium md:underline mb-1">{dept.name}</div>
                    <p className="text-[7px] md:text-sm opacity-70">
                      Explore the activities and impact of the {dept.name}. Engage, serve, and grow in your faith through our community-focused programs.
                    </p>
                    <div className="mt-2">
                      <Link
                        to={dept.link}
                        className="inline-block underline text-primary md:text-primary  px-2 py-1 rounded-sm text-[7px] md:text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
    </div>
  );
}
