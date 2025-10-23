import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AboutNav() {
  const location = useLocation(); // Get current path to highlight active link

  const links = [
    { label: "About", to: "/about/knowUs" },
    { label: "History", to: "/about/history" },
    { label: "Culture", to: "/about/culture" },
    { label: "Make an Impact", to: "/about/impact" },
    { label: "Leadership", to: "/about/leadership" },
    { label: "Faith Statement", to: "/about/faithStatement" },
    { label: "Anthem", to: "/about/anthem" },
  ];

  return (
    <div className="bg-base-200 py-6 px-4 overflow-x-auto">
      <div className="flex justify-center gap-3 md:gap-4 min-w-max whitespace-nowrap">
        {links.map((link, i) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={i}
              to={link.to}
              className={`btn btn-sm md:btn-md ${
                isActive ? "btn-primary" : "btn-outline btn-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
