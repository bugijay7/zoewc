import React from "react";
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

function GalleryPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {/* Column 1 */}
      <div className="grid">
        <img className="w-full h-full object-cover" src={image1} alt="" />
        <img className="w-full h-full object-cover" src={image2} alt="" />
        <img className="w-full h-full object-cover" src={image3} alt="" />
      </div>

      {/* Column 2 */}
      <div className="grid">
        <img className="w-full h-full object-cover" src={image4} alt="" />
        <img className="w-full h-full object-cover" src={image5} alt="" />
        <img className="w-full h-full object-cover" src={image6} alt="" />
      </div>

      {/* Column 3 */}
      <div className="grid">
        <img className="w-full h-full object-cover" src={image7} alt="" />
        <img className="w-full h-full object-cover" src={image8} alt="" />
        <img className="w-full h-full object-cover" src={image9} alt="" />
      </div>

      {/* Column 4 */}
      <div className="grid">
        <img className="w-full h-full object-cover" src={image10} alt="" />
        <img className="w-full h-full object-cover" src={image11} alt="" />
      </div>
    </div>
  );
}

export default GalleryPage;
