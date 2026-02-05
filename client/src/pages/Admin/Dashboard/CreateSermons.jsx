import React, { useState } from "react";
import axios from "axios";
import { FaVideo, FaCalendarAlt, FaPenNib, FaLink, FaCloudUploadAlt } from "react-icons/fa";

function CreateSermons() {
  const [sermonData, setSermonData] = useState({
    title: "",
    date: "",
    description: "",
    youtubeLink: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const convertToEmbedLink = (url) => {
    if (!url) return "";
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/i
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : url;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "youtubeLink") {
      value = convertToEmbedLink(value);
    }
    setSermonData({ ...sermonData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sermonData.title || !sermonData.date || !sermonData.description || !sermonData.youtubeLink) {
      setMessage("⚠️ Please fill in all fields.");
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
      await axios.post(
        "https://zoewc-omsu.onrender.com/api/sermons",
        sermonData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("✅ Sermon created successfully!");
      setSermonData({ title: "", date: "", description: "", youtubeLink: "" });
    } catch (error) {
      setMessage("❌ Failed to create sermon. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 border-l-8 border-pink-600 pl-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-black leading-none">
            Post <span className="text-amber-500">Sermon</span>
          </h1>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">
            Zoe Worship Centre Content Management
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Side */}
          <div className="bg-white p-8 border border-zinc-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 italic font-black text-zinc-100 text-4xl select-none">Z</div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <FaPenNib className="text-pink-600" /> Sermon Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={sermonData.title}
                  onChange={handleChange}
                  placeholder="The Power of Grace"
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 focus:outline-none focus:border-black transition-colors font-bold text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <FaCalendarAlt className="text-amber-500" /> Service Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={sermonData.date}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 focus:outline-none focus:border-black transition-colors font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <FaVideo className="text-pink-600" /> YouTube Link
                </label>
                <input
                  type="text"
                  name="youtubeLink"
                  value={sermonData.youtubeLink}
                  onChange={handleChange}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 focus:outline-none focus:border-black transition-colors font-medium text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <FaLink className="text-amber-500" /> Brief Summary
                </label>
                <textarea
                  name="description"
                  value={sermonData.description}
                  onChange={handleChange}
                  placeholder="What was this message about?"
                  rows="4"
                  className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-4 focus:outline-none focus:border-black transition-colors font-medium resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group bg-black text-white py-5 px-8 flex items-center justify-between hover:bg-pink-600 transition-all duration-500 disabled:bg-zinc-300"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  {loading ? "Processing..." : "Publish Sermon"}
                </span>
                <FaCloudUploadAlt className="text-xl group-hover:scale-125 transition-transform" />
              </button>

              {message && (
                <div className={`p-4 text-[10px] font-black uppercase tracking-widest text-center ${message.includes('❌') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Preview Side */}
          <div className="lg:sticky lg:top-10 h-fit">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Live Preview</h3>
            <div className="bg-black text-white overflow-hidden shadow-2xl">
              <div className="aspect-video bg-zinc-900 flex items-center justify-center border-b border-zinc-800">
                {sermonData.youtubeLink ? (
                  <iframe
                    src={sermonData.youtubeLink}
                    className="w-full h-full"
                    title="Sermon Preview"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="text-center p-10">
                    <FaVideo className="text-zinc-700 text-5xl mx-auto mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Video will appear here</p>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-pink-600 text-[9px] font-black px-3 py-1 uppercase tracking-tighter">New Message</span>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase">{sermonData.date || "Date Placeholder"}</span>
                </div>
                <h4 className="text-2xl font-black uppercase leading-none mb-4 italic">
                  {sermonData.title || "Untitled Sermon"}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {sermonData.description || "The description you write will appear here for your congregation to read."}
                </p>
              </div>
            </div>
            
            <div className="mt-6 border-t border-zinc-200 pt-6">
              <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-widest leading-relaxed">
                Tip: Ensure the YouTube link is set to "Public" or "Unlisted" so it can be viewed by everyone on the site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSermons;