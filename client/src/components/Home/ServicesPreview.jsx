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
      className="flex flex-col items-center border p-6 rounded-md hover:bg-base-200 transition duration-300 min-w-[250px]"
    >
      <h3 className="text-lg font-semibold mb-2 uppercase">{service.title}</h3>
      <p className="text-sm opacity-80 mb-3">{service.time}</p>
      <button className="btn btn-outline btn-primary text-sm font-semibold">
        Learn More
      </button>
    </div>
  );

  return (
    <section className="py-14 bg-base-100 text-base-content">
      <div className="px-6 text-center max-w-6xl mx-auto">
        {/* 🔹 Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-12 tracking-wide">
          Services
        </h1>

        {/* 🔸 Main Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 uppercase">Main Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {mainServices.map(renderServiceCard)}
          </div>
        </div>

        {/* 🔹 Link to Full Schedule */}
        <div className="mt-10">
          <p className="text-lg">
            For all our complete weekly and monthly services,&nbsp;
            <Link
              to="/services"
              className="text-primary font-semibold underline hover:text-secondary transition"
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
