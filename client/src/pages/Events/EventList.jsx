import React, { useEffect, useState } from "react";

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
        <h1 className="text-base md:text-lg uppercase tracking-wide text-primary font-bold">
        upcoming events
        </h1>
        <p className="text-gray-400 text-xs md:text-sm">October 2025</p>
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
                className="flex flex-col md:flex-row bg-[#fffdf9] shadow-sm hover:shadow-md  overflow-hidden border border-gray-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative md:w-[260px] w-full h-auto md:h-auto flex-shrink-0">
                  <img
                    src={
                      event.image?.url
                        ? event.image.url
                        : `https://zoewc-1.onrender.com/${event.image}`
                    }
                    alt={event.title}
                    className="object-cover md:object-center object-top w-full h-auto "
                  />
                </div>

                {/* Event Info */}
                <div className="flex flex-col md:flex-row flex-1">
                  {/* Date */}
                  <div className="flex flex-row md:flex-col items-center justify-center px-4 py-2 md:px-6 md:py-4 bg-white border-b md:border-b-0 md:border-r border-gray-200">
                    <span className="text-[10px] md:text-xs text-gray-500">
                      {month}
                    </span>
                    <span className="text-xl md:text-3xl font-bold text-gray-800 mx-1 md:mx-0">
                      {day}
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-400">
                      {year}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-4 md:p-6 text-left">
                    <h2 className="text-sm md:text-xl font-semibold text-gray-800 uppercase mb-2">
                      {event.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center text-[11px] md:text-sm text-gray-500 space-x-2 mb-2">
                      <span>📍 Zoe Worship Centre</span>
                      <span className="text-gray-400 hidden md:inline">|</span>
                      <span>
                        {date.toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 text-sm md:text-base">
            No events available.
          </p>
        )}
      </div>
    </div>
  );
}
