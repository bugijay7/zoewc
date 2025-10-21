import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  // Fetch all events
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
    <div className="min-h-screen bg-base-200 pt-30 py-16 px-6 md:px-20 font-montserrat">
      {/* 🌟 Title */}
      <h1 className="text-4xl md:text-5xl font-medium text-center text-primary mb-12">
        Upcoming Events
      </h1>

      {/* 🗓️ Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event._id}
              className="card bg-secondary-content shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <figure className="h-56 w-full overflow-hidden rounded-t-xl">
                <img
                  src={`https://zoewc-1.onrender.com/${event.image}`}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </figure>

              <div className="card-body text-left">
                <h2 className="card-title text-lg font-medium text-base-content">
                  {event.title}
                </h2>

                <div className="mt-3">
                  <Link
                    to={`/events/eventDetails?id=${event._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-base-content opacity-70 col-span-full">
            No events available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}

export default EventList;
