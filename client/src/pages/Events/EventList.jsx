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
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* --- HEADER SECTION --- */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto border-b border-zinc-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div data-aos="fade-right">
            <span className="text-pink-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
              Zoe Calendar
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
              Upcoming <br /> <span className="text-zinc-200">Events</span>
            </h1>
          </div>
          <div data-aos="fade-left" className="text-right">
            <p className="text-sm font-black uppercase tracking-widest text-zinc-400">
              Burning and  <span className="text-amber-500">Shining light</span>
            </p>
          </div>
        </div>
      </header>

      {/* --- EVENT LISTING --- */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-24">
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
                  data-aos="fade-up"
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative overflow-hidden shadow-2xl">
                    <div className="aspect-[4/3] w-full bg-zinc-100 relative">
                      <img
                        src={
                          event.image?.url
                            ? event.image.url
                            : `https://zoewc-1.onrender.com/${event.image}`
                        }
                        alt={event.title}
                        className="w-full h-full object-cover  duration-1000"
                      />
                      {/* Decorative Label on Image */}
                      <div className="absolute top-0 left-0 bg-black text-white p-3 text-[10px] font-black uppercase tracking-widest">
                        ZWC Event
                      </div>
                    </div>
                  </div>

                  {/* Event Info Column */}
                  <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-start">
                    
                    {/* Date Badge (Editorial Style) */}
                    <div className="flex flex-col items-center min-w-[80px] border-l-2 border-amber-500 pl-6">
                      <span className="text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">{month}</span>
                      <span className="text-5xl font-black text-black leading-none my-1">{day}</span>
                      <span className="text-zinc-300 text-[10px] font-bold tracking-widest">{year}</span>
                    </div>

                    {/* Details Container */}
                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter leading-tight group-hover:text-pink-600 transition-colors">
                          {event.title}
                        </h2>
                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                          <span className="flex items-center gap-1">
                            <span className="text-amber-500">📍</span> Zoe Worship Centre
                          </span>
                          <span className="text-zinc-200">|</span>
                          <span>
                            {date.toLocaleDateString(undefined, {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-500 text-lg font-light leading-relaxed italic max-w-xl">
                        {event.description}
                      </p>

                     
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* --- EMPTY / LOADING STATE --- */
            <div className="text-center py-40 border-2 border-dashed border-zinc-100">
              <div className="inline-block w-12 h-12 border-4 border-zinc-100 border-t-amber-500 rounded-full animate-spin mb-6"></div>
              <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em]">
                Seeking the next movement...
              </p>
            </div>
          )}
        </div>
      </main>

      {/* --- DECORATIVE MOTIF --- */}
      <footer className="pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between opacity-20">
          <div className="h-px flex-1 bg-zinc-300"></div>
          <div className="px-10 text-[10px] font-black uppercase tracking-[0.6em] text-zinc-400 whitespace-nowrap">
            Faith / Impact / Fellowship
          </div>
          <div className="h-px flex-1 bg-zinc-300"></div>
        </div>
      </footer >

      {/* FOOTER MULTI-BAR */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-amber-500"></div>
        <div className="flex-[4] bg-black"></div>
        <div className="flex-1 bg-pink-600"></div>
      </div>
    </div>
  );
}