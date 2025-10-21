import React, { useEffect, useState } from "react";

function LiveStream() {
  const [isLive, setIsLive] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // 🔹 Replace with your real credentials
  const CHANNEL_ID = "YOUR_CHANNEL_ID_HERE";
  const API_KEY = "YOUR_YOUTUBE_API_KEY_HERE";

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
      }
    };

    fetchLiveStatus();
    const interval = setInterval(fetchLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-amber-500 text-base-content px-4 py-10">
      <h1 className="text-xl md:text-5xl font-medium uppercase tracking-widest text-primary text-center">
        zoe worship centre <br></br> Live
      </h1>

      {isLive && videoId ? (
        <div className="w-full max-w-5xl aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="zoe worship centre Livestream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      ) : (
        <div className="text-center mt-8">
          <p className="text-sm md:text-lg opacity-70 mb-3">
            We’re not live right now. Check back soon or visit our YouTube
            channel below.
          </p>
          <a
            href="https://www.youtube.com/@ZoeWorshipCentreKinoo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      )}
    </section>
  );
}

export default LiveStream;
