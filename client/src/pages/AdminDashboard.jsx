import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaCalendarAlt, FaBookOpen, FaMicrophone } from "react-icons/fa";

function AdminDashboard() {
  const cards = [
    {
      name: "Create Event",
      icon: <FaPlusCircle size={40} className="text-primary" />,
      link: "/dashboard/create-event",
    },
    {
      name: "Manage Events",
      icon: <FaCalendarAlt size={40} className="text-primary" />,
      link: "/dashboard/manage-events",
    },
    {
      name: "Create Sermon",
      icon: <FaMicrophone size={40} className="text-primary" />,
      link: "/dashboard/create-sermon",
    },
    {
      name: "Manage Sermons",
      icon: <FaBookOpen size={40} className="text-primary" />,
      link: "/dashboard/manage-sermons",
    },
  ];

  return (
    <div className="bg-base-200 flex flex-col min-h-[70vh]">
      {/* 🔹 Dashboard Title */}
      <div className="text-center pt-20 md:pt:40 py-12">
        <h2 className="text-5xl font-extrabold mb-4 text-primary uppercase">
          Admin Dashboard
        </h2>
        <p className="text-base-content/70">
          Manage your events, sermons, and content easily.
        </p>
      </div>

      {/* 🔹 Dashboard Cards */}
      <div className="flex-grow px-8 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {cards.map((card, index) => (
            <Link
              to={card.link}
              key={index}
              className="bg-base-100 w-52 h-44 shadow-md rounded-2xl flex flex-col items-center justify-center hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {card.icon}
              <p className="mt-3 text-lg font-medium text-base-content">
                {card.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
