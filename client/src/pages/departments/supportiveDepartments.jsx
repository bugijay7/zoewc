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
    {
      name: "Intercessory Department",
      link: "/departments/supportive/intercessory",
      image: intercessoryImg,
    },
    {
      name: "Praise and Worship Department",
      link: "/departments/supportive/praiseAndWorship",
      image: worshipImg,
    },
    {
      name: "Anagkazo / Evangelism Department",
      link: "/departments/supportive/anagkazo",
      image: evangelismImg,
    },
    {
      name: "Media / Sound System Department",
      link: "/departments/supportive/media",
      image: mediaImg,
    },
    {
      name: "Hospitality Department",
      link: "/departments/supportive/hospitality",
      image: hospitalityImg,
    },
    {
      name: "Ushering / Protocol Department",
      link: "/departments/supportive/ushering",
      image: usheringImg,
    },
  ];

  return (
    <div className="bg-base-200 pt-40 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* 🌟 Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Supportive Departments
        </h1>

        {/* 🧩 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {departments.map((dept, index) => (
            <Link
              key={index}
              to={dept.link}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <figure className="h-56 w-full overflow-hidden rounded-t-xl">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="card-body text-center items-center justify-center p-4">
                <h2 className="card-title text-lg font-bold text-base-content">
                  {dept.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
