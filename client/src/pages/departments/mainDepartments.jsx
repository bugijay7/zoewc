import React from "react";
import { Link } from "react-router-dom";

import menImg from "../../assets/mens-conference.jpeg";
import womenImg from "../../assets/women.jpeg";
import youthImg from "../../assets/youths.jpeg";
import teenImg from "../../assets/teen.jpeg";
import sundaySchoolImg from "../../assets/sunday-school.jpeg";

export default function MainDepartments() {
  const departments = [
    { name: "Men Department", link: "/departments/main/men", image: menImg },
    { name: "Women Department", link: "/departments/main/women", image: womenImg },
    { name: "Youth Department", link: "/departments/main/youth", image: youthImg },
    { name: "Teens Department", link: "/departments/main/teens", image: teenImg },
    { name: "Sunday School Department", link: "/departments/main/sunday-school", image: sundaySchoolImg },
  ];

  return (
    <div className="bg-base-200 pt-40 py-16 px-6 md:px-20 font-montserrat">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-6xl md:text-6xl font-bold text-primary">
          Main Departments
        </h1>
        <p className="text-base-content/70 text-lg md:text-xl leading-relaxed max-w-[400px] mx-auto">
          Discover the heart of our ministry through the various departments serving our community in love, faith, and purpose.
        </p>
      </div>

      {/* Department List */}
      <ul className="max-w-3xl mx-auto bg-primary rounded-box shadow-md divide-y-8  divide-base-200">
        {departments.map((dept, index) => (
          <li key={index} className="list-row p-4 mt-2 flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-box">
              <img src={dept.image} alt={dept.name} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-medium  underline">{dept.name}</div>
              <p className="text-xs md:text-sm opacity-70 mt-1">
                Explore the activities and impact of the {dept.name}. Engage, serve, and grow in your faith through our community-focused programs.
              </p>
            </div>
            <div className="flex-shrink-0 mt-2 md:mt-0">
              <Link
                to={dept.link}
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
