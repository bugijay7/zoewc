import React from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaHeart,
  FaHandsHelping,
  FaMotorcycle,
  FaMusic,
  FaGlobe,
  FaBible,
  FaChild,
  FaHandshake,
  FaHome,
  FaChurch,
  FaPrayingHands,
} from "react-icons/fa";

export default function Programs() {
  const programs = [
    {
      name: "Men’s Conference and Outreach",
      link: "/programs/MensConference",
      description:
        "Empowering men to lead with integrity, purpose, and spiritual strength through mentorship, outreach, and fellowship.",
      icon: <FaUsers className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Women’s Conference and Outreach",
      link: "/programs/WomensConference",
      description:
        "Equipping women to live out their divine calling through prayer, empowerment, and community impact programs.",
      icon: <FaHeart className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Youth ITIG, Outreach and Luncheons",
      link: "/programs/YouthOutreachLuncheon",
      description:
        "Building the next generation through interactive teaching, innovation, and purposeful gatherings that ignite godly ambition.",
      icon: <FaBible className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Teens Vibes",
      link: "/programs/teenVibes",
      description:
        "A vibrant space for teenagers to connect, grow in faith, and find identity in Christ through fun and mentorship.",
      icon: <FaChild className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Sunday School Vibes",
      link: "/programs/sundaySchoolVibes",
      description:
        "Nurturing children in the Word of God through engaging stories, music, and creative learning experiences.",
      icon: <FaHome className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Marriage Therapy",
      link: "/programs/marriageTherapy",
      description:
        "Providing couples with biblical guidance, healing, and tools to strengthen their love and communication.",
      icon: <FaHandshake className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Local and International Missions",
      link: "/programs/LocalInternatinalMissions",
      description:
        "Spreading the gospel locally and globally, reaching hearts through acts of compassion and evangelism.",
      icon: <FaGlobe className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Hospitality for the Less Privileged",
      link: "/programs/ForTheLessPriviledged",
      description:
        "Serving our community with love by providing food, care, and support to those in need.",
      icon: <FaHandsHelping className="text-primary text-3xl mb-3" />,
    },
    {
      name: "BodaBoda Empowerment",
      link: "/programs/BodaBodaEmpowernment",
      description:
        "Empowering riders spiritually and economically through discipleship, safety training, and business mentorship.",
      icon: <FaMotorcycle className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Breath of Worship",
      link: "/programs/breathOfWorship",
      description:
        "A dynamic worship experience that brings people closer to God through song, prayer, and prophetic expression.",
      icon: <FaMusic className="text-primary text-3xl mb-3" />,
    },
    {
      name: "Anagkazo Campaign",
      link: "/programs/anagkazoCampaign",
      description:
        "A soul-winning campaign inspired by Luke 14:23 — compelling many to come to Christ through evangelism and outreach.",
      icon: <FaChurch className="text-primary text-3xl mb-3" />,
    },
  ];

  return (
    <div className="bg-base-100 text-base-content font-montserrat pt-28 pb-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          Our Programs
        </h1>
        <p className="text-base-content/70 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Explore our ministry programs designed to transform lives, strengthen
          families, and impact communities for the glory of God.
        </p>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              {program.icon}
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {program.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {program.description}
              </p>
              <Link
                to={program.link}
                className="btn btn-primary btn-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
