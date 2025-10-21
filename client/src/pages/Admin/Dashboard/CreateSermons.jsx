import React, { useState } from "react";
import axios from "axios";

function CreateSermons() {
  const [sermonData, setSermonData] = useState({
    title: "",
    date: "",
    description: "",
    youtubeLink: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Convert normal YouTube link → embed link
  const convertToEmbedLink = (url) => {
    if (!url) return "";
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/i
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
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

    if (
      !sermonData.title ||
      !sermonData.date ||
      !sermonData.description ||
      !sermonData.youtubeLink
    ) {
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

      const formattedData = {
        ...sermonData,
        youtubeLink: convertToEmbedLink(sermonData.youtubeLink),
      };

      await axios.post("https://zoewc-1.onrender.com/api/sermons", formattedData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("✅ Sermon created successfully!");
      setSermonData({
        title: "",
        date: "",
        description: "",
        youtubeLink: "",
      });
    } catch (error) {
      console.error("Error creating sermon:", error);
      setMessage("❌ Failed to create sermon. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-base-200 p-4">
      <div className="bg-base-100 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-medium text-center mb-6 text-primary uppercase">
          Create New Sermon
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Sermon Title */}
          <div>
            <label className="block font-medium mb-1 text-base-content">
              Sermon Title
            </label>
            <input
              type="text"
              name="title"
              value={sermonData.title}
              onChange={handleChange}
              placeholder="Enter sermon title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Sermon Date */}
          <div>
            <label className="block font-medium mb-1 text-base-content">
              Sermon Date
            </label>
            <input
              type="date"
              name="date"
              value={sermonData.date}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1 text-base-content">
              Description
            </label>
            <textarea
              name="description"
              value={sermonData.description}
              onChange={handleChange}
              placeholder="Enter a short sermon description"
              rows="4"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* YouTube Link */}
          <div>
            <label className="block font-medium mb-1 text-base-content">
              YouTube Link
            </label>
            <input
              type="text"
              name="youtubeLink"
              value={sermonData.youtubeLink}
              onChange={handleChange}
              placeholder="Paste YouTube link here"
              className="input input-bordered w-full"
              required
            />
            <p className="text-sm opacity-70 mt-1">
              ✅ Paste any YouTube link — it will be converted automatically.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full ${
              loading ? "btn-disabled opacity-70" : ""
            }`}
          >
            {loading ? "Uploading..." : "Create Sermon"}
          </button>

          {/* Message */}
          {message && (
            <p
              className={`text-center text-sm mt-3 ${
                message.startsWith("✅") ? "text-success" : "text-error"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateSermons;
