import React, { useEffect, useState } from "react";
import { FaTrash, FaCheckCircle, FaRegCircle, FaUser, FaPhoneAlt, FaEnvelopeOpenText, FaClock } from "react-icons/fa";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://zoewc-omsu.onrender.com/api/messages";

  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Archive this message permanently?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const toggleReplied = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg._id === id ? { ...msg, replied: !msg.replied } : msg
      )
    );
    // Note: You might want to add a PATCH request here later to persist this in the DB
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse text-zinc-400">
          Syncing Inbox...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[2px] w-10 bg-amber-500"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Communication Hub</span>
          </div>
          <h1 className="text-6xl font-black uppercase tracking-tighter text-black">
            Inbox <span className="text-pink-600">({messages.length})</span>
          </h1>
        </header>

        {messages.length === 0 ? (
          <div className="py-32 border-2 border-dashed border-zinc-100 flex flex-col items-center justify-center">
            <FaEnvelopeOpenText className="text-5xl text-zinc-100 mb-4" />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Your inbox is currently clear</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Desktop Header Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-8 mb-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              <div className="col-span-3">Sender</div>
              <div className="col-span-5">Message</div>
              <div className="col-span-2">Received</div>
              <div className="col-span-1 text-center">Status</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {messages.map((msg) => (
              <div 
                key={msg._id} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-8 border transition-all duration-300 ${
                  msg.replied ? 'bg-zinc-50 border-zinc-100 opacity-60' : 'bg-white border-zinc-200 shadow-sm hover:border-black'
                }`}
              >
                {/* User Info */}
                <div className="col-span-3 space-y-1">
                  <div className="flex items-center gap-2 font-black uppercase tracking-tighter text-lg text-black">
                    <FaUser className="text-xs text-pink-600" />
                    {msg.name}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold">
                    <FaPhoneAlt className="text-[10px]" />
                    {msg.phone}
                  </div>
                </div>

                {/* Message Content */}
                <div className="col-span-5 py-2 md:py-0">
                  <p className="text-zinc-600 text-sm leading-relaxed italic">
                    "{msg.message}"
                  </p>
                </div>

                {/* Date */}
                <div className="col-span-2 flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase">
                  <FaClock />
                  {new Date(msg.createdAt).toLocaleDateString()}
                </div>

                {/* Replied Toggle */}
                <div className="col-span-1 flex justify-center">
                  <button 
                    onClick={() => toggleReplied(msg._id)}
                    className={`text-2xl transition-colors ${msg.replied ? 'text-green-500' : 'text-zinc-200 hover:text-pink-600'}`}
                  >
                    {msg.replied ? <FaCheckCircle /> : <FaRegCircle />}
                  </button>
                </div>

                {/* Delete Action */}
                <div className="col-span-1 text-right">
                  <button 
                    onClick={() => deleteMessage(msg._id)}
                    className="p-3 text-zinc-300 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                    title="Delete Message"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 flex items-center gap-6 text-[9px] font-black uppercase tracking-widest text-zinc-400 border-t border-zinc-100 pt-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-white border border-zinc-200"></span> New Message
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-zinc-100"></span> Replied / Handled
          </div>
        </div>
      </div>
    </div>
  );
}