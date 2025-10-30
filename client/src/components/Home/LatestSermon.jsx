import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LatestSermon() {
  const [sermon, setSermon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestSermon = async () => {
      try {
        const response = await axios.get("https://zoewc-1.onrender.com/api/sermons");
        const sermons = response.data;

        if (sermons.length > 0) {
          // Sort by date descending and pick the latest
          const latest = sermons.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )[0];
          setSermon(latest);
        }
      } catch (err) {
        console.error("Error fetching latest sermon:", err);
        setError("Failed to load sermon. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestSermon();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 text-base-content">
        <p>Loading latest sermon...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 text-error">
        <p>{error}</p>
      </div>
    );
  }

  if (!sermon) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 text-base-content">
        <p>No sermons available yet.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-medium mb-3 text-primary uppercase">
          Latest Sermon
        </h1>
        <p className="text-base sm:text-lg text-base-content/70">
          Watch and be inspired by the Word of God.
        </p>
      </div>

      <div className="bg-base-100 rounded-box shadow-lg max-w-5xl mx-auto p-6">
        {/* 🎥 Video Frame */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md mb-6">
          <iframe
            className="w-full h-full rounded-xl"
            src={sermon.youtubeLink}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* 📜 Sermon Details */}
        <div className="text-left space-y-2 mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-base-content">
            {sermon.title}
          </h3>
          <p className="text-xs sm:text-sm uppercase font-medium text-primary">
            {new Date(sermon.date).toLocaleDateString()}
          </p>
          <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
            {sermon.description}
          </p>
        </div>

        {/* 🔗 Link to full sermons page */}
        <div className="text-center">
          <Link
            to="/sermons"
            className="btn btn-primary btn-lg"
          >
            View All Sermons
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestSermon;
