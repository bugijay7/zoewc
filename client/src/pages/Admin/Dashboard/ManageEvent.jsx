import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaCalendarAlt, FaRegFrownOpen, FaArrowLeft } from "react-icons/fa";

function ManageEvent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://zoewc-omsu.onrender.com/api/events"); // Added /api/events assuming standard routing
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
      try {
        await axios.delete(`https://zoewc-omsu.onrender.com/api/events/${id}`);
        setEvents(events.filter((event) => event._id !== id));
      } catch (err) {
        console.error("Error deleting event:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="border-l-8 border-amber-500 pl-6">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-black leading-none">
              Manage <span className="text-pink-600">Events</span>
            </h2>
            <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mt-3">
              Zoe Worship Centre Registry
            </p>
          </div>
          
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
          >
            <FaArrowLeft /> Back to Dashboard
          </button>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="py-20 text-center uppercase font-black tracking-widest text-zinc-300 animate-pulse">
            Loading Registry...
          </div>
        ) : events.length === 0 ? (
          <div className="py-20 border-2 border-dashed border-zinc-100 flex flex-col items-center justify-center text-zinc-400">
            <FaRegFrownOpen className="text-4xl mb-4" />
            <p className="font-black uppercase tracking-widest text-xs">No active events found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event._id} 
                className="group relative bg-zinc-50 border border-zinc-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-zinc-200">
                  <img
                    src={`https://zoewc-omsu.onrender.com/${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <span className="bg-black text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest">
                      Confirmed
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-pink-600 mb-2">
                    <FaCalendarAlt className="text-xs" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black uppercase tracking-tighter text-black mb-6 group-hover:text-pink-600 transition-colors">
                    {event.title}
                  </h3>

                  {/* Action Button */}
                  <button 
                    onClick={() => handleDelete(event._id)}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-zinc-200 py-3 text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group/btn"
                  >
                    <FaTrashAlt className="group-hover/btn:animate-bounce" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Remove Event</span>
                  </button>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-pink-600 group-hover:h-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Statistics */}
        <div className="mt-16 pt-8 border-t border-zinc-100 flex justify-between items-center">
          <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
            Total Active Events: {events.length}
          </p>
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-amber-500"></div>
             <div className="w-2 h-2 rounded-full bg-pink-600"></div>
             <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageEvent;