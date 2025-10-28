import React, { useEffect, useState } from "react";

function LiveStream() {
  const [isLive, setIsLive] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load from environment variables
  const CHANNEL_ID = import.meta.env.VITE_YT_CHANNEL_ID;
  const API_KEY = import.meta.env.VITE_YT_API_KEY;

  useEffect(() => {
    const fetchLiveStatus = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setIsLive(true);
          setVideoId(data.items[0].id.videoId);
        } else {
          setIsLive(false);
        }
      } catch (error) {
        console.error("Error fetching live status:", error);
        setIsLive(false);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveStatus();
    const interval = setInterval(fetchLiveStatus, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, [CHANNEL_ID, API_KEY]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-400 to-orange-600 text-base-content px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white text-center drop-shadow-lg">
        Zoe Worship Centre Live
      </h1>

      {loading ? (
        <p className="mt-8 text-white text-lg animate-pulse text-center">
  🔴 Checking live stream status...
</p>

      ) : isLive && videoId ? (
        <div className="w-full max-w-5xl aspect-video mt-8">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Zoe Worship Centre Livestream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-2xl"
          ></iframe>
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="text-white text-lg opacity-90 mb-3">
            We’re not live right now. Check back soon or visit our YouTube channel below.
          </p>
          <a
            href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent text-white"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      )}
    </section>
  );
}

export default LiveStream;
