import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://zoewc-omsu.onrender.com");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`https://zoewc-omsu.onrender.com/${id}`);
        setEvents(events.filter((event) => event._id !== id));
      } catch (err) {
        console.error("Error deleting event:", err);
      }
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-medium text-center text-primary mb-10">
        Manage Events
      </h2>

      {/* Event List */}
      <div className="space-y-6">
        {events.length === 0 && (
          <p className="text-center text-lg text-base-content opacity-70">
            No events found.
          </p>
        )}

        {events.map((event) => (
          <div
            key={event._id}
            className="flex flex-col md:flex-row items-center justify-between bg-base-100 p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={`https://zoewc-omsu.onrender.com/${event.image}`}
                alt={event.title}
                className="w-28 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium text-lg text-base-content">
                  {event.title}
                </h3>
                <p className="text-sm opacity-70">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleDelete(event._id)}
              className="btn btn-error btn-sm mt-4 md:mt-0"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageEvent;
