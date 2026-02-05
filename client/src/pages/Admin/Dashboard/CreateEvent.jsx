import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaImage, FaCalendarDay, FaPen } from "react-icons/fa";

function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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

      await axios.post("https://zoewc-omsu.onrender.com", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Event created successfully!");
      setEventData({ title: "", date: "", description: "" });
      setImage(null);
    } catch (error) {
      console.error("Error creating event:", error);
      setMessage("❌ Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Navigation Header */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-8">
        <Link to="/dashboard" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Create New Event</h2>
          <p className="text-gray-500">Fill in the details below to announce a new church event.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <FaPen className="mr-2 text-gray-400" /> Event Title
            </label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="e.g. Sunday Youth Conference"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Date Input */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <FaCalendarDay className="mr-2 text-gray-400" /> Event Date
            </label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Provide more details about the event..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-gray-700">
              <FaImage className="mr-2 text-gray-400" /> Event Poster / Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors bg-gray-50">
              <div className="space-y-1 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="cursor-pointer"
                  required
                />
                <p className="text-xs text-gray-500 mt-2 italic">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 ${
              loading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
                Uploading...
              </span>
            ) : (
              "Create Event"
            )}
          </button>

          {/* Feedback Message */}
          {message && (
            <div className={`p-4 rounded-lg text-center font-medium ${
              message.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;