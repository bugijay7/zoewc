import React from "react";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  const mainServices = [
    {
      title: "zoe worship centre – Minister Service",
      time: "FROM 8:00 AM TO 9:00 AM",
    },
    {
      title: "zoe worship centre – First Service",
      time: "FROM 9:05 AM TO 10:45 AM",
    },
    {
      title: "zoe worship centre – Second Service",
      time: "FROM 10:50 AM TO 1:00 PM",
    },
  ];

  const renderServiceCard = (service, i) => (
    <div
      key={i}
      className="flex flex-col items-center border p-4 md:p-6 rounded-md hover:bg-base-200 transition duration-300 min-w-[220px] md:min-w-[250px]"
    >
      <h3 className="text-md md:text-lg font-medium mb-2 text-center uppercase">
        {service.title}
      </h3>
      <p className="text-xs md:text-sm opacity-80 mb-3 text-center">{service.time}</p>
      <button className="btn btn-outline btn-primary text-xs md:text-sm font-medium">
        Learn More
      </button>
    </div>
  );

  return (
    <section className="py-10 md:py-14 bg-base-100 text-base-content">
      <div className="px-4 md:px-6 text-center max-w-6xl mx-auto">
        {/* 🔹 Title */}
        <h1 className="text-xl md:text-4xl font-extrabold uppercase mb-8 md:mb-12 tracking-wide">
          Services
        </h1>

        {/* 🔸 Main Services */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-medium mb-6 md:mb-8 uppercase">
            Main Services
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {mainServices.map(renderServiceCard)}
          </div>
        </div>

        {/* 🔹 Link to Full Schedule */}
        <div className="mt-6 md:mt-10">
          <p className="text-sm md:text-lg">
            For all our complete weekly and monthly services,&nbsp;
            <Link
              to="/services"
              className="text-primary font-medium underline hover:text-secondary transition"
            >
              click here
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
