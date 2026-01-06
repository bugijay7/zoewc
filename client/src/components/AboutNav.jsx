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
    <aside className="w-full lg:w-72 lg:h-fit lg:sticky lg:top-24 mb-12 lg:mb-0 pt-20">
      <div className="bg-white border border-zinc-100 p-2 lg:p-6 shadow-sm">
        {/* Navigation Header - Subtle Hierarchy */}
        <div className="hidden lg:block mb-8 px-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">
            Section
          </h3>
          <p className="text-xl font-black uppercase tracking-tighter text-black">
            Our <span className="text-pink-600">Story</span>
          </p>
          <div className="w-8 h-1 bg-amber-500 mt-2"></div>
        </div>

        {/* Links Container */}
        <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar">
          {links.map((link, i) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={i}
                to={link.to}
                className={`
                  relative flex items-center shrink-0 lg:shrink-1 px-6 py-4 lg:px-4 lg:py-5
                  text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300
                  ${
                    isActive
                      ? "text-black lg:bg-zinc-50"
                      : "text-zinc-400 hover:text-black hover:bg-zinc-50/50"
                  }
                `}
              >
                {/* Active Indicator Bar (Desktop: Left, Mobile: Bottom) */}
                {isActive && (
                  <>
                    <span className="absolute left-0 top-0 lg:top-auto h-[2px] w-full lg:h-full lg:w-1 bg-pink-600 animate-pulse"></span>
                    <span className="hidden lg:inline-block absolute right-4 text-amber-500 text-[8px]">
                      ●
                    </span>
                  </>
                )}

                <span className="relative z-10">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Decorative Divider for Desktop */}
        <div className="hidden lg:block mt-8 px-4">
          <div className="h-[1px] w-full bg-zinc-100 mb-6"></div>
          <p className="text-[9px] text-zinc-400 italic font-serif leading-relaxed">
            Discover the God kind of life through our journey.
          </p>
        </div>
      </div>
    </aside>
  );
}