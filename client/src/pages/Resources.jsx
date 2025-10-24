import React from "react";
import {
  FaDownload,
  FaBookOpen,
  FaScroll,
  FaPenFancy,
  FaBible,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaPrayingHands,
} from "react-icons/fa";

export default function Resources() {
  const resources = [
    {
      title: "Discipleship Manual",
      description:
        "A step-by-step guide for new believers and growing disciples to build a firm foundation in faith.",
      icon: <FaBible className="text-primary text-3xl mb-3" />,
      link: "#",
    },
    {
      title: "Zoe Strategic Plan",
      description:
        "An outline of our ministry goals, vision milestones, and community impact strategies.",
      icon: <FaScroll className="text-primary text-3xl mb-3" />,
      link: "#",
    },
    {
      title: "Church Constitution",
      description:
        "Our governance document — defining leadership, membership, and organizational structure in accordance with biblical principles.",
      icon: <FaBookOpen className="text-primary text-3xl mb-3" />,
      link: "#",
    },
   
    {
      title: "Ministry Training Guide",
      description:
        "Practical tools and teachings for those serving in different ministry departments within the church.",
      icon: <FaChalkboardTeacher className="text-primary text-3xl mb-3" />,
      link: "#",
    },
    {
      title: "Volunteer Handbook",
      description:
        "Everything you need to know to serve effectively in our church — roles, responsibilities, and values.",
      icon: <FaHandsHelping className="text-primary text-3xl mb-3" />,
      link: "#",
    },
    {
      title: "Prayer and Fasting Guide",
      description:
        "A simple yet powerful guide to help you grow deeper in prayer, intimacy, and spiritual discipline.",
      icon: <FaPrayingHands className="text-primary text-3xl mb-3" />,
      link: "#",
    },
  ];

  return (
    <div className="bg-base-100 text-base-content font-montserrat pt-28 pb-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Resources</h1>
        <p className="text-primary text-sm md:text-base max-w-2xl mx-auto mb-12">
          Access helpful materials and guides designed to strengthen your spiritual journey
          and understanding of the church’s mission.
        </p>

        {/* Resource Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              {item.icon}
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                className="btn btn-primary btn-sm"
                onClick={(e) => e.preventDefault()} // placeholder, safe click
              >
                <FaDownload className="mr-2" /> Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
