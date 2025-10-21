import React, { useEffect, useState } from "react";
import axios from "axios";

function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await axios.get("https://zoewc-1.onrender.com/api/sermons");
        setSermons(response.data);
      } catch (err) {
        console.error("Error fetching sermons:", err);
        setError("Failed to load sermons. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchSermons();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200 text-base-content">
        <p>Loading sermons...</p>
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

  return (
    <div className="min-h-screen bg-base-200 py-20 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* 🔹 Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-medium mb-3 text-primary uppercase">
          Sermons
        </h1>
        <p className="text-base sm:text-lg text-base-content/70">
          Watch and be inspired by the Word of God.
        </p>
      </div>

      {/* 🔹 Sermon List */}
      {sermons.length === 0 ? (
        <p className="text-center text-base-content">No sermons available yet.</p>
      ) : (
        <ul className="bg-base-100 rounded-box shadow-lg max-w-5xl mx-auto divide-y divide-base-300">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide uppercase">
            Latest Sermons
          </li>

          {sermons.map((sermon) => (
            <li
              key={sermon._id}
              className="p-6 flex flex-col gap-4 hover:bg-base-200 transition-all duration-300"
            >
              {/* 🎥 Video Frame */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={sermon.youtubeLink}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* 📜 Sermon Details */}
              <div className="w-full text-left space-y-2">
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sermons;
