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

  return (
    <div className="min-h-screen bg-base-200 pt-30  py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <figure className="h-80 w-full overflow-hidden">
          <img
            src={`https://zoewc-1.onrender.com/${event.image}`}
            alt={event.title}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Content Section */}
        <div className="p-8 md:p-10">
          <h1 className="text-4xl font-medium text-primary mb-4 text-center">
            {event.title}
          </h1>
          <p className="text-sm text-base-content/70 text-center mb-6">
            📅 {new Date(event.date).toLocaleDateString()}
          </p>

          <p className="text-base leading-relaxed text-base-content mb-8 text-center">
            {event.description}
          </p>

          <div className="flex justify-center">
            <Link to="/events/eventList" className="btn btn-outline btn-primary">
              ← Back to All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
