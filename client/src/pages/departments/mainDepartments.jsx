import React from "react";
import { Link } from "react-router-dom";

import menImg from "../../assets/mens-conference.jpeg";
import womenImg from "../../assets/women.jpg";
import youthImg from "../../assets/youths.jpeg";
import teenImg from "../../assets/teen.jpg";
import sundaySchoolImg from "../../assets/sunday-school.jpg";

export default function MainDepartments() {
  const departments = [
    { name: "Men Department", link: "/departments/main/men", image: menImg },
    { name: "Women Department", link: "/departments/main/women", image: womenImg },
    { name: "Youth Department", link: "/departments/main/youth", image: youthImg },
    { name: "Teens Department", link: "/departments/main/teens", image: teenImg },
    {
      name: "Sunday School Department",
      link: "/departments/main/sunday-school",
      image: sundaySchoolImg,
    },
  ];

  return (
    <div className="bg-base-200 pt-40 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* 🌟 Unique Main Departments Intro Card */}
          <div className="card flex flex-col justify-center items-center text-left p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Main Departments
            </h1>
            <p className="text-base-content/70 text-sm md:text-base leading-relaxed">
              Discover the heart of our ministry through the various departments
              serving our community in love, faith, and purpose.
            </p>
          </div>

          {/* 🔹 Department Cards */}
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
              <div className="card-body items-center justify-center p-4">
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
