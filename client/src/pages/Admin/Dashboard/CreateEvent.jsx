import React, { useState } from "react";
import axios from "axios";
import { FaCalendarPlus, FaImage, FaAlignLeft, FaRegCalendarAlt, FaUpload } from "react-icons/fa";

function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventData.title || !eventData.date || !eventData.description || !image) {
      setMessage("⚠️ Please fill in all fields and select an image.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("❌ Unauthorized. Please log in first.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();
      formData.append("title", eventData.title);
      formData.append("date", eventData.date);
      formData.append("description", eventData.description);
      formData.append("image", image);

      await axios.post("https://zoewc-omsu.onrender.com/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Event created successfully!");
      setEventData({ title: "", date: "", description: "" });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error creating event:", error);
      setMessage("❌ Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 selection:bg-amber-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-12 bg-pink-600"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-600">Admin Portal</span>
          </div>
          <h2 className="text-6xl font-black uppercase tracking-tighter text-black">
            New <span className="text-amber-500">Event</span>
          </h2>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Inputs Section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6 bg-zinc-50 p-8 border border-zinc-100">
              
              {/* Event Title */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <FaCalendarPlus className="text-pink-600" /> Event Heading
                </label>
                <input
                  type="text"
                  name="title"
                  value={eventData.title}
                  onChange={handleChange}
                  placeholder="e.g. Sunday Miracle Service"
                  className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:outline-none focus:border-black transition-colors font-bold text-xl placeholder:text-zinc-300"
                  required
                />
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-amber-500" /> Scheduled Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:outline-none focus:border-black transition-colors font-bold uppercase"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <FaAlignLeft className="text-pink-600" /> About the Event
                </label>
                <textarea
                  name="description"
                  value={eventData.description}
                  onChange={handleChange}
                  placeholder="Describe the atmosphere and purpose..."
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-zinc-200 py-3 focus:outline-none focus:border-black transition-colors font-medium resize-none"
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full group bg-black text-white py-6 flex items-center justify-center gap-4 hover:bg-pink-600 transition-all duration-500 disabled:bg-zinc-200"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em]">
                {loading ? "Uploading to Cloud..." : "Launch Event"}
              </span>
              <FaUpload className="group-hover:-translate-y-1 transition-transform" />
            </button>

            {message && (
              <div className={`p-4 text-[10px] font-black uppercase tracking-widest text-center ${message.includes('❌') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {message}
              </div>
            )}
          </div>

          {/* Image Upload/Preview Section */}
          <div className="lg:col-span-2">
            <div className="sticky top-12">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">Cover Image</label>
              
              <div className="relative group cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                  required={!preview}
                />
                
                <div className={`aspect-[3/4] border-2 border-dashed flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ${preview ? 'border-black' : 'border-zinc-200 bg-zinc-50'}`}>
                  {preview ? (
                    <div className="relative w-full h-full">
                      <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-[10px] font-black uppercase border border-white px-4 py-2">Change Image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <FaImage className="text-4xl text-zinc-200 mb-4 mx-auto group-hover:text-pink-600 transition-colors" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Click to upload poster</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 border-l-2 border-amber-500 pl-4">
                <p className="text-[9px] text-zinc-400 font-bold leading-relaxed uppercase tracking-wider">
                  Recommended: Use a high-quality vertical or square image (max 5MB). This image will be the primary visual for the event.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;