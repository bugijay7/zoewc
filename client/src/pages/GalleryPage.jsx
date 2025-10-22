import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // for blur-in effect

import image1 from "../assets/history.jpeg";
import image2 from "../assets/impact.jpeg";
import image3 from "../assets/mens-conference.jpeg";
import image4 from "../assets/women.jpeg";
import image5 from "../assets/praise.jpg";
import image6 from "../assets/sunday-service.jpg";
import image7 from "../assets/youths.jpeg";
import image8 from "../assets/anagkazo.jpeg";
import image9 from "../assets/sunday-school.jpeg";
import image10 from "../assets/culture.jpeg";
import image11 from "../assets/about-hero.jpeg";
import image12 from "../assets/mission-k.jpeg";
import image13 from "../assets/parking.jpeg";
import image14 from "../assets/praise2.jpeg";
import image15 from "../assets/evangelism.jpg";
import image16 from "../assets/service-bg.jpg";

const retroFilter =
  "w-full h-full object-cover rounded-lg filter sepia-[0.4] contrast-[1.05] brightness-[0.9] saturate-[0.8] hue-rotate-[-10deg] transition-transform duration-300 hover:scale-[1.02]";

function GalleryPage() {
  const images = [
    image1, image2, image16, image3,
    image4, image5, image6,
    image7, image8, image9, image15,
    image10, image11, image12, image13, image14,
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-22">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, i) => (
          <LazyLoadImage
            key={i}
            src={img}
            alt={`Gallery image ${i + 1}`}
            effect="blur" // fade-in + blur effect
            className={retroFilter}
          />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
