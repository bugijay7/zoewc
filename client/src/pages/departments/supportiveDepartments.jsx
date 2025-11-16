import React from "react";
import { Link } from "react-router-dom";

import departmentsBg from "../../assets/departments.jpeg";

import intercessoryImg from "../../assets/intercessory.jpeg";
import worshipImg from "../../assets/praise.jpg";
import evangelismImg from "../../assets/anagkazo.jpeg";
import mediaImg from "../../assets/media.jpeg";
import hospitalityImg from "../../assets/hospitality.jpeg";
import usheringImg from "../../assets/usher1.jpg";

export default function SupportiveDepartments() {
  const departments = [
    { 
      name: "Intercessory Department",
      link: "/departments/supportive/intercessory",
      image: intercessoryImg,
      desc: "A dedicated team committed to prayer and spiritual support, interceding for the church, members, and community. Through continuous prayer meetings, counseling, and guidance, the Intercessory Department fosters a spiritually strong and united church body."
    },
    { 
      name: "Praise and Worship Department",
      link: "/departments/supportive/praiseAndWorship",
      image: worshipImg,
      desc: "Leading the church in heartfelt worship, this department creates an atmosphere of praise and adoration. Through music, song, and creative expression, they inspire the congregation to connect deeply with God and experience His presence in every service."
    },
    { 
      name: "Anagkazo Department",
      link: "/departments/supportive/anagkazo",
      image: evangelismImg,
      desc: "Focused on outreach and evangelism, the Anagkazo Department brings the message of Christ to the community. Through ministry programs, outreach events, and personal engagement, they equip members to share God’s love effectively."
    },
    { 
      name: "Media Department",
      link: "/departments/supportive/media",
      image: mediaImg,
      desc: "Responsible for capturing, streaming, and sharing church events, the Media Department ensures that the ministry’s message reaches both local and global audiences. They manage audio-visuals, live streaming, photography, and digital content production with excellence."
    },
    { 
      name: "Hospitality Department",
      link: "/departments/supportive/hospitality",
      image: hospitalityImg,
      desc: "A welcoming team dedicated to making every visitor and member feel at home. The Hospitality Department ensures smooth logistics, warm greetings, and attentive service during all church activities, creating a loving and inclusive atmosphere."
    },
    { 
      name: "Ushering Protocol Department",
      link: "/departments/supportive/ushering",
      image: usheringImg,
      desc: "Maintaining order, safety, and care during services, the Ushering Protocol Department guides members and guests with professionalism. They ensure that every service runs smoothly and that everyone experiences a respectful and organized environment."
    },
  ];

  return (
    <div
      className="bg-base-100 text-base-content font-montserrat pt-28 pb-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${departmentsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-[1200px] mx-auto text-left">
        {/* Header */}
        <h1 className="text-5xl md:text-9xl font-bold mb-6 text-primary pt-10 pl-5 md:pl-30 uppercase">
          Supportive Departments
        </h1>
        <p className="text-xs md:text-sm text-black font-bold mx-auto mb-12 pl-5 md:pl-30 ">
          Meet our supportive departments that help keep the ministry thriving and assist in every aspect of church life.
        </p>

        {/* Department Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="max-w-[1200px] mx-auto transition duration-300 flex flex-col md:flex-row items-center text-left"
            >
              {/* Image */}
              <div className="w-full md:w-[450px] h-[250px] flex justify-center mb-4 md:mb-0">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-[90%] md:w-[450px] h-full object-cover border border-primary hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-start justify-center text-left w-full md:w-[500px] p-4 md:p-5">
                <h2 className="text-xl font-bold text-primary mb-2">{dept.name}</h2>
                <p className="text-xs md:text-sm text-black md:font-semibold font-normal italic mb-4">{dept.desc}</p>
                <Link
                  to={dept.link}
                  className="btn btn-primary btn-sm text-sm px-5 mb-12"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
