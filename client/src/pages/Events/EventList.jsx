import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("https://zoewc-1.onrender.com/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] pt-30 py-16 px-4 md:px-20 font-montserrat">
      {/* Header */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h1 className="text-lg uppercase tracking-wide text-gray-500">
          Current Exhibitions
        </h1>
        <p className="text-gray-400 text-sm">October 2025</p>
      </div>

      {/* Event List */}
      <div className="max-w-6xl mx-auto space-y-10">
        {events.length > 0 ? (
          events.map((event) => {
            const date = new Date(event.date);
            const day = date.getDate().toString().padStart(2, "0");
            const month = date
              .toLocaleString("default", { month: "short" })
              .toUpperCase();
            const year = date.getFullYear();

            return (
              <div
                key={event._id}
                className="flex flex-col md:flex-row bg-[#fffdf9] shadow-sm hover:shadow-md rounded-xl overflow-hidden border border-gray-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="md:w-[220px] md:h-[180px] w-full h-56 overflow-hidden">
                  <img
                    src={`https://zoewc-1.onrender.com/${event.image}`}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col items-center justify-center px-6 py-4 bg-white border-r border-gray-200">
                  <span className="text-xs text-gray-500">{month}</span>
                  <span className="text-3xl font-bold text-gray-800">{day}</span>
                  <span className="text-xs text-gray-400">{year}</span>
                </div>

                {/* Event Info */}
                <div className="flex-1 p-6 text-left">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 uppercase mb-2">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span>📍 Zoe Worship Centre</span>
                    <span className="text-gray-400">|</span>
                    <span>
                      {date.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="mt-4">
                    <Link
                      to={`/events/eventDetails?id=${event._id}`}
                      className="text-primary font-medium hover:underline text-sm"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No events available.</p>
        )}
      </div>
    </div>
  );
}
