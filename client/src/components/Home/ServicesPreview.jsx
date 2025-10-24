import React from "react";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  const mainServices = [
    {
      title: "Zoe Worship Centre – Minister Service",
      time: "FROM 8:00 AM TO 9:00 AM",
    },
    {
      title: "Zoe Worship Centre – First Service",
      time: "FROM 9:05 AM TO 10:45 AM",
    },
    {
      title: "Zoe Worship Centre – Second Service",
      time: "FROM 10:50 AM TO 1:00 PM",
    },
  ];

  const renderServiceCard = (service, i) => (
    <div
      key={i}
      className="flex flex-col items-left md:items-center bg-base-200/60 p-6  hover:bg-base-200 transition duration-300 w-full md:w-1/3"
    >
      <h3 className="text-md md:text-lg font-semibold mb-2 text-center uppercase text-primary">
        {service.title}
      </h3>
      <p className="text-xs md:text-sm opacity-80 text-center">{service.time}</p>
    </div>
  );

  return (
    <section className="py-10 md:py-14 bg-base-100 text-base-content mb-10">
      <div className="px-4 md:px-6 text-center max-w-6xl mx-auto">
        {/* 🔹 Title */}
        <h1 className="text-xl md:text-4xl font-extrabold uppercase mb-8 md:mb-12 tracking-wide">
          Main Services
        </h1>

        {/* 🔸 Main Services */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            {mainServices.map(renderServiceCard)}
          </div>
        </div>

        {/* 🔹 Link to Full Schedule */}
        <div className="mt-6 md:mt-10">
          <p className="text-xs md:text-sm">
            For our complete weekly and monthly service schedule,&nbsp;
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
