import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Create Event", path: "/dashboard/create-event" },
    { name: "Manage Events", path: "/dashboard/manage-events" },
    { name: "Create Sermon", path: "/dashboard/create-sermon" },
    { name: "Manage Sermons", path: "/dashboard/manage-sermons" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-base-200 pt-20">
      <nav className="max-w-[1000px] mx-auto  p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center rounded-lg">
        {/* Logo / Title */}
        <h1 className="text-sm font-bold text-primary mb-3 sm:mb-0">
          zoe worship centre Admin
        </h1>

        {/* Navbar Links */}
        <div className="flex flex-wrap justify-center gap-6 text-base-content font-medium text-xs">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-3 sm:mt-0 btn btn-error btn-sm text-white"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default AdminNavbar;
