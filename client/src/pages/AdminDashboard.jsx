import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlusCircle,
  FaCalendarAlt,
  FaBookOpen,
  FaMicrophone,
  FaEnvelope,
} from "react-icons/fa";

function AdminDashboard() {
  const cards = [
    {
      name: "Create Event",
      icon: <FaPlusCircle />,
      link: "/dashboard/create-event",
      color: "bg-blue-500",
    },
    {
      name: "Manage Events",
      icon: <FaCalendarAlt />,
      link: "/dashboard/manage-events",
      color: "bg-emerald-500",
    },
    {
      name: "Create Sermon",
      icon: <FaMicrophone />,
      link: "/dashboard/create-sermon",
      color: "bg-purple-500",
    },
    {
      name: "Manage Sermons",
      icon: <FaBookOpen />,
      link: "/dashboard/manage-sermons",
      color: "bg-amber-500",
    },
    {
      name: "View Messages",
      icon: <FaEnvelope />,
      link: "/dashboard/messages",
      color: "bg-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header Section */}
      <div className="mb-10 border-b pb-6">
        <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
        <p className="text-gray-600 mt-2">
          Welcome back! Manage your events, sermons, and messages easily.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cards.map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-transparent"
          >
            <div className={`p-4 rounded-full text-white mb-4 shadow-md ${card.color} group-hover:scale-110 transition-transform`}>
              {React.cloneElement(card.icon, { size: 32 })}
            </div>
            <p className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
              {card.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;