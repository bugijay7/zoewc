import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaArrowLeft, FaYoutube, FaCalendarAlt } from "react-icons/fa";

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
    if (window.confirm("Are you sure you want to delete this sermon?")) {
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
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between mb-10 border-b pb-6">
        <div>
          <Link to="/dashboard" className="flex items-center text-blue-600 hover:underline mb-2">
            <FaArrowLeft className="mr-2" /> Back to Dashboard
          </Link>
          <h2 className="text-3xl font-bold text-gray-800">Manage Sermons</h2>
        </div>
        <Link to="/dashboard/create-sermon" className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + Add New Sermon
        </Link>
      </div>

      {/* Sermons List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6">
        {sermons.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">No sermons found. Start by creating one!</p>
          </div>
        ) : (
          sermons.map((sermon) => (
            <div key={sermon._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
              {/* Video Preview Side */}
              <div className="md:w-1/3 bg-black aspect-video flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src={sermon.youtubeLink}
                  title={sermon.title}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Content Side */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800">{sermon.title}</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(sermon)}
                        className="p-2 text-amber-600 hover:bg-amber-50 rounded-full transition-colors"
                        title="Edit Sermon"
                      >
                        <FaEdit size={20} />
                      </button>
                      <button 
                        onClick={() => handleDelete(sermon._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                        title="Delete Sermon"
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </div>
                  <p className="flex items-center text-sm text-gray-500 mt-1 mb-3">
                    <FaCalendarAlt className="mr-2" /> {new Date(sermon.date).toDateString()}
                  </p>
                  <p className="text-gray-600 line-clamp-3">{sermon.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal Overlay */}
      {editingSermon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Edit Sermon</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1 flex items-center">
                    <FaYoutube className="mr-1 text-red-600" /> YouTube Link
                  </label>
                  <input
                    type="text"
                    name="youtubeLink"
                    value={formData.youtubeLink}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Embed link"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                ></textarea>
              </div>
              <div className="flex space-x-3 pt-4">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditingSermon(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageSermons;