import React from "react";
import heroImg from "../../assets/her01.jpg";

export default function HomeHero() {
  return (
    <div
      className="hero min-h-[90vh] flex items-center justify-start text-center px-6 md:px-24 relative overflow-hidden top-0"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-base-content/20 backdrop-blur-sm"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto text-base-100 font-montserrat">
        <h1 className="mb-5 text-5xl md:text-6xl font-extrabold uppercase">
          Zoe Worship Center
        </h1>
        <p className="mb-5 font-extrabold text-lg md:text-xl mt-10 max-w-[800px] mx-auto leading-tight">
          Transforming lives by the life and love of Christ
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
         
<Link to="/services">
  <button className="btn btn-outline btn-primary mt-5">
    Sunday Service Details
  </button>
</Link>

          <Link to="/live">
  <button className="btn btn-outline btn-secondary mt-5">
    Church Online
  </button>
</Link>
        </div>
      </div>
    </div>
  );
}
