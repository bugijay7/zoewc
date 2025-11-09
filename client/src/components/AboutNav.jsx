import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AboutNav() {
  const location = useLocation();

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
    <>
      {/* Mobile: Grid-style buttons for better UI/UX */}
<nav className="md:hidden bg-base-200 rounded-lg p-4 mt-10">
  <div className="grid grid-cols-2 gap-2">
    {links.map((link, i) => {
      const isActive = location.pathname === link.to;
      return (
        <Link
          key={i}
          to={link.to}
          className={`w-full text-center px-3 py-2 rounded-md text-sm font-medium transition duration-200 border ${
            isActive
              ? "bg-primary text-primary-content border-primary shadow-md"
              : "bg-base-100 text-base-content border-base-300 hover:bg-base-300"
          }`}
        >
          {link.label}
        </Link>
      );
    })}
  </div>
</nav>


      {/* Desktop: Sidebar */}
      <aside className="hidden md:flex flex-col bg-base-200 p-6 min-h-screen w-64 border-r border-base-300">
        <h2 className="text-lg font-bold mb-6 text-primary">About Us</h2>
        <nav className="flex flex-col gap-2">
          {links.map((link, i) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={i}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  isActive
                    ? "bg-primary text-primary-content shadow-md"
                    : "hover:bg-base-300 text-base-content/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
