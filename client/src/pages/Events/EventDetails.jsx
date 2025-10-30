import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function EventDetails() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventId = queryParams.get("id");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`https://zoewc-1.onrender.com/api/events/${eventId}`);
        if (!res.ok) throw new Error("Failed to fetch event details.");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh] bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[70vh] bg-base-200 text-center">
        <p className="text-error text-lg mb-4">
          {error || "Event not found."}
        </p>
        <Link to="/events" className="btn btn-primary">
          Back to Events
        </Link>
      </div>
    );
  }

  // 🗓️ Extract date parts
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "short" });
  const year = eventDate.getFullYear();

  return (
    <div className="min-h-screen bg-base-200 pt-30 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between p-8 md:p-10 gap-8">
          {/* 🖼️ Image */}
          <div className="flex-shrink-0 w-[300px] h-auto overflow-hidden shadow-md">
            <img
              src={`https://zoewc-1.onrender.com/${event.image}`}
              alt={event.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* 📅 Date */}
          <div className="flex flex-col items-center justify-center text-center text-primary font-bold">
            <span className="text-6xl leading-none">{day}</span>
            <span className="text-2xl uppercase tracking-wide">{month}</span>
            <span className="text-lg text-base-content/70">{year}</span>
          </div>

          {/* 📰 Event Details */}
          <div className="flex-1 text-left space-y-4">
            <h1 className="text-3xl font-semibold text-primary">
              {event.title}
            </h1>
            <p className="text-base text-base-content leading-relaxed">
              {event.description}
            </p>
            <Link
              to="/events/eventList"
              className="btn btn-outline btn-primary mt-4"
            >
              ← Back to All Events
            </Link>
          </div>
        </div>

        {/* Mobile layout (stacked) */}
        <div className="md:hidden p-6 text-center">
          <div className="w-full h-auto  mb-6">
            <img
              src={`https://zoewc-1.onrender.com/${event.image}`}
              alt={event.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-primary font-bold mb-4">
            <div className="text-5xl leading-none">{day}</div>
            <div className="text-xl uppercase tracking-wide">{month}</div>
            <div className="text-sm text-base-content/70">{year}</div>
          </div>

          <h1 className="md:text-3xl text-sm font-semibold text-primary mb-3">
            {event.title}
          </h1>
          <p className="md:text-xl text-xs text-base-content leading-relaxed mb-6">
            {event.description}
          </p>

          <Link
            to="/events/eventList"
            className="btn btn-outline btn-primary"
          >
            ← Back to All Events
          </Link>
        </div>
      </div>
    </div>
  );
}
