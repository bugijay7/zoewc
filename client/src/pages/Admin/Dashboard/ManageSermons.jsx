import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaYoutube, FaCalendarAlt, FaTimes, FaSave } from "react-icons/fa";

function ManageSermons() {
  const [sermons, setSermons] = useState([]);
  const [editingSermon, setEditingSermon] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    youtubeLink: "",
  });

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      const res = await axios.get("https://zoewc-omsu.onrender.com/api/sermons");
      setSermons(res.data);
    } catch (err) {
      console.error("Error fetching sermons:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Permanent Action: Delete this sermon from the archive?")) {
      try {
        await axios.delete(`https://zoewc-omsu.onrender.com/api/sermons/${id}`);
        setSermons(sermons.filter((s) => s._id !== id));
      } catch (err) {
        console.error("Error deleting sermon:", err);
      }
    }
  };

  const handleEdit = (sermon) => {
    setEditingSermon(sermon._id);
    setFormData({
      title: sermon.title,
      date: sermon.date.split("T")[0],
      description: sermon.description,
      youtubeLink: sermon.youtubeLink,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://zoewc-omsu.onrender.com/api/sermons/${editingSermon}`, formData);
      setEditingSermon(null);
      fetchSermons();
    } catch (err) {
      console.error("Error updating sermon:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-l-8 border-black pl-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-black leading-none">
            Sermon <span className="text-amber-500">Archive</span>
          </h2>
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mt-3">
            Digital Library Management
          </p>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sermons.map((sermon) => (
            <div key={sermon._id} className="group border border-zinc-100 bg-zinc-50 flex flex-col">
              {/* Video Container */}
              <div className="aspect-video bg-black relative overflow-hidden">
                <iframe
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  src={sermon.youtubeLink}
                  title={sermon.title}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Details */}
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-pink-600 text-white text-[9px] font-black px-2 py-1 uppercase tracking-widest">
                    Live Recording
                  </span>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <FaCalendarAlt className="text-xs" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {new Date(sermon.date).toDateString()}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 group-hover:text-pink-600 transition-colors">
                  {sermon.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3 italic">
                  "{sermon.description}"
                </p>

                {/* Actions */}
                <div className="flex border-t border-zinc-200 pt-6 gap-4">
                  <button 
                    onClick={() => handleEdit(sermon)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                  >
                    <FaEdit /> Edit Sermon
                  </button>
                  <button 
                    onClick={() => handleDelete(sermon._id)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border border-zinc-200 text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingSermon && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl p-8 md:p-12 relative animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setEditingSermon(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors"
              >
                <FaTimes size={24} />
              </button>

              <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter">Edit <span className="text-pink-600">Entry</span></h3>
                <div className="h-1 w-12 bg-amber-500 mt-2"></div>
              </div>

              <form onSubmit={handleUpdate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sermon Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-100 py-2 focus:border-pink-600 outline-none font-bold"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Date Preached</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border-b-2 border-zinc-100 py-2 focus:border-pink-600 outline-none font-bold uppercase"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">YouTube Embed URL</label>
                  <div className="flex items-center gap-3 border-b-2 border-zinc-100 py-2 focus-within:border-pink-600">
                    <FaYoutube className="text-red-600" />
                    <input
                      type="text"
                      name="youtubeLink"
                      value={formData.youtubeLink}
                      onChange={handleChange}
                      className="w-full outline-none font-medium text-sm"
                      placeholder="https://www.youtube.com/embed/..."
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full border-2 border-zinc-100 p-3 focus:border-pink-600 outline-none font-medium text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-black text-white py-4 font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3 hover:bg-pink-600 transition-colors"
                  >
                    <FaSave /> Push Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageSermons;