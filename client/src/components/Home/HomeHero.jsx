import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/service-bg.jpg";
import hero2 from "../../assets/about-hero.jpeg";
import hero3 from "../../assets/who-we-are.jpg";


export default function HomeHero() {
  const slides = [
    { id: 1,
      image: hero1,
      title: "The Year Of",
      state: "Burning and Shining Light",
      subtitle: "Isaiah 54:2",
      button: "Word of Welcome",
      link: "/new",
    },
    {
      id: 2,
      image: hero2,
      title: "Welcome To Zoe",
      state: "Supportive Ministries",
      subtitle: "1 Peter 4:10",
      button: "Call to Serve",
      link: "/departments/supportive",
    },
    {
      id: 3,
      image: hero3,
      title: "Zoe Worship Centre",
      state: "The God Kind of Life",
      subtitle: "John 10:10",
      button: "Learn More",
      link: "/about/knowUs", 
    },
  ];

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
    <div className="carousel w-full min-h-screen relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image}) center/cover no-repeat`,
          }}
        >
          <div className="hero-content text-center text-neutral-content px-6 py-16 mx-auto">
            <div className="">
              <h1 className="mb-5 text-4xl md:text-5xl font-semibold text-secondary">{slide.title}</h1>
               <h3 className="mb-5 text-4xl md:text-7xl font-bold">{slide.state}</h3>
              <h2 className="mb-5 text-xl md:text-3xl font-bold">{slide.subtitle}</h2>
             
              <p className="mb-5 text-sm md:text-base leading-relaxed">{slide.text}</p>
              <Link to={slide.link} className="btn btn-primary">
                {slide.button}
              </Link>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle btn-sm md:btn-md"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > slides.length ? 1 : index + 2}`}
              className="btn btn-circle btn-sm md:btn-md"
            >
              ❯
            </a>
          </div>
        </div>
      ))}

      {/* Bottom-left Events button */}
      <div className="absolute bottom-6 left-6 z-20">
        <Link
          to="/events/eventList"
          className="btn btn-outline btn-secondary text-white border-white hover:bg-white hover:text-black transition-all"
        >
          View Events
        </Link>
      </div>
    </div>
  );
  
}
