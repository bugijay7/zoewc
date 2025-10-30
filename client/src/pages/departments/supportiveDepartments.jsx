import React from "react";
import { Link } from "react-router-dom";

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
    { name: "Anagkazo Department", link: "/departments/supportive/anagkazo", image: evangelismImg },
    { name: "Media Department", link: "/departments/supportive/media", image: mediaImg },
    { name: "Hospitality Department", link: "/departments/supportive/hospitality", image: hospitalityImg },
    { name: "Ushering Protocol Department", link: "/departments/supportive/ushering", image: usheringImg },
  ];

  return (
    <div className="bg-base-100 text-base-content font-montserrat pt-28 pb-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
          Supportive Departments
        </h1>
        <p className="text-sm md:text-base text-base-content/70 max-w-2xl mx-auto mb-12">
          Meet our supportive departments that help keep the ministry thriving
          and assist in every aspect of church life.
        </p>

        {/* Department Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-base-200 p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full h-40 md:h-56 rounded-xl overflow-hidden mb-4">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-2">
                {dept.name}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 mb-4 px-2">
                Explore the activities and impact of the {dept.name}. Engage,
                serve, and grow in your faith through our community-focused
                programs.
              </p>

              <Link
                to={dept.link}
                className="btn btn-primary btn-sm text-xs md:text-sm"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
