import React, { useState } from 'react';
import { ChevronRight, Heart, Music, Users, Video, Home, Shield } from 'lucide-react';


import intercessoryImg from "../../assets/intercessory.jpeg";
import worshipImg from "../../assets/praise.jpg";
import evangelismImg from "../../assets/anagkazo.jpeg";
import mediaImg from "../../assets/media.jpeg";
import hospitalityImg from "../../assets/hospitality.jpeg";
import usheringImg from "../../assets/usher1.jpeg";

export default function SupportiveDepartments() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const departments = [
    { 
      name: "Intercessory Department",
      link: "/departments/supportive/intercessory",
      image:  intercessoryImg,
      desc: "A dedicated team committed to prayer and spiritual support, interceding for the church, members, and community. Through continuous prayer meetings, counseling, and guidance, the Intercessory Department fosters a spiritually strong and united church body.",
      icon: Heart,
      color: "from-purple-600 to-purple-800"
    },
    { 
      name: "Praise and Worship Department",
      link: "/departments/supportive/praiseAndWorship",
      image:  worshipImg,
      desc: "Leading the church in heartfelt worship, this department creates an atmosphere of praise and adoration. Through music, song, and creative expression, they inspire the congregation to connect deeply with God and experience His presence in every service.",
      icon: Music,
      color: "from-blue-600 to-blue-800"
    },
    { 
      name: "Anagkazo Department",
      link: "/departments/supportive/anagkazo",
      image: evangelismImg,
      desc: "Focused on outreach and evangelism, the Anagkazo Department brings the message of Christ to the community. Through ministry programs, outreach events, and personal engagement, they equip members to share God's love effectively.",
      icon: Users,
      color: "from-green-600 to-green-800"
    },
    { 
      name: "Media Department",
      link: "/departments/supportive/media",
      image: mediaImg,
      desc: "Responsible for capturing, streaming, and sharing church events, the Media Department ensures that the ministry's message reaches both local and global audiences. They manage audio-visuals, live streaming, photography, and digital content production with excellence.",
      icon: Video,
      color: "from-red-600 to-red-800"
    },
    { 
      name: "Hospitality Department",
      link: "/departments/supportive/hospitality",
      image: hospitalityImg,
      desc: "A welcoming team dedicated to making every visitor and member feel at home. The Hospitality Department ensures smooth logistics, warm greetings, and attentive service during all church activities, creating a loving and inclusive atmosphere.",
      icon: Home,
      color: "from-amber-600 to-amber-800"
    },
    { 
      name: "Ushering Protocol Department",
      link: "/departments/supportive/ushering",
      image: usheringImg,
      desc: "Maintaining order, safety, and care during services, the Ushering Protocol Department guides members and guests with professionalism. They ensure that every service runs smoothly and that everyone experiences a respectful and organized environment.",
      icon: Shield,
      color: "from-indigo-600 to-indigo-800"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-amber-900 to-pink-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: worshipImg,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10"> cw_25078483@hotmail.com. 
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-16 h-1 bg-yellow-400 rounded"></div>
                <Heart className="w-8 h-8 text-yellow-400" />
                <div className="w-16 h-1 bg-yellow-400 rounded"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Supportive Departments
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet our supportive departments that help keep the ministry thriving and assist in every aspect of church life. Together, we serve with excellence and love.
            </p>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gray-200 bg-opacity-95 rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                      {dept.name}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed line-clamp-4">
                    {dept.desc}
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={() => window.location.href = dept.link}
                    className={`w-full bg-gradient-to-r ${dept.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transform transition-all duration-300 group-hover:scale-105`}
                    aria-label={`Learn more about ${dept.name}`}
                  >
                    <span>Learn More</span>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`} />
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white to-transparent opacity-20 rounded-br-full"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join a Department Today
            </h2>
            <p className="text-lg text-blue-100">
              Discover your calling and serve alongside fellow believers. Every gift and talent has a place in God's kingdom.
            </p>
            <button className="bg-gray-200 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}