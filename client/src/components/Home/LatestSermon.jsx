import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LatestSermon() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestSermons = async () => {
      try {
        const response = await axios.get("https://zoewc-omsu.onrender.com/api/sermons");
        const sorted = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setSermons(sorted.slice(0, 3)); // ✅ show 3 latest sermons
      } catch (err) {
        console.error("Error fetching sermons:", err);
        setError("Failed to load sermons. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestSermons();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-base-200">
        <p className="text-base-content">Loading sermons...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-base-200 text-error">
        <p>{error}</p>
      </div>
    );

  if (sermons.length === 0)
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-base-200 text-base-content">
        <p>No sermons available yet.</p>
      </div>
    );

  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-pink-50 via-white to-rose-50 py-16 px-4 sm:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-500 mb-2 uppercase tracking-wide">
          Latest Sermons
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Be inspired and strengthened by the Word of God
        </p>
      </div>

      {/* Sermon Cards */}
      <div className="grid gap-10 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {sermons.map((sermon) => (
          <div
            key={sermon._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Video */}
            <div className="aspect-video w-full overflow-hidden">
              <iframe
                className="w-full h-full"
                src={sermon.youtubeLink}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {sermon.title}
              </h3>
              <p className="text-xs font-semibold uppercase text-rose-500 mb-2">
                {new Date(sermon.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 flex-grow mb-4 line-clamp-3">
                {sermon.description}
              </p>

              {/* Watch Button */}
              <a
                href={sermon.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto btn btn-sm md:btn-md bg-rose-500 text-white hover:bg-rose-600 rounded-full transition-all duration-300"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-16">
        <Link
          to="/sermons"
          className="btn btn-outline btn-rose hover:bg-rose-500 hover:text-white text-rose-500 border-rose-400 rounded-full"
        >
          View All Sermons
        </Link>
      </div>
    </section>
  );
}

export default LatestSermon;
