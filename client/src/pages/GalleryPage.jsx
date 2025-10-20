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
import image12 from "../assets/mission-k.jpeg";
import image13 from "../assets/parking.jpeg";
import image14 from "../assets/praise2.jpeg"
import image15 from "../assets/evangelism.jpg"
import image16 from "../assets/service-bg.jpg"

const retroFilter =
  "w-full h-full object-cover rounded-lg filter sepia-[0.4] contrast-[1.05] brightness-[0.9] saturate-[0.8] hue-rotate-[-10deg] transition-transform duration-300 hover:scale-[1.02]";

function GalleryPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-22">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Column 1 */}
        <div className="grid gap-4">
          <img className={retroFilter} src={image1} alt="" />
          <img className={retroFilter} src={image2} alt="" />
          <img className={retroFilter} src={image16} alt="" />
          <img className={retroFilter} src={image3} alt="" />
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <img className={retroFilter} src={image4} alt="" />
          <img className={retroFilter} src={image5} alt="" />
          <img className={retroFilter} src={image6} alt="" />
        </div>

        {/* Column 3 */}
        <div className="grid gap-4">
          <img className={retroFilter} src={image7} alt="" />
          <img className={retroFilter} src={image8} alt="" />
          <img className={retroFilter} src={image9} alt="" />
          <img className={retroFilter} src={image15} alt="" />
          
        </div>

        {/* Column 4 */}
        <div className="grid gap-4">
          <img className={retroFilter} src={image10} alt="" />
          <img className={retroFilter} src={image11} alt="" />
          <img className={retroFilter} src={image12} alt="" />
          <img className={retroFilter} src={image13} alt="" />
          <img className={retroFilter} src={image14} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
