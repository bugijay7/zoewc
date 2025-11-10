import React from "react";
import canadaImg from "../../assets/canada.jpeg";

export default function Canada() {
  return (
    <section className="bg-base-100 text-base-content py-20 px-6 pt-40 md:pt-36 font-montserrat">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* 🇨🇦 Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={canadaImg}
            alt="Canada Assembly of Zoe Worship Center"
            className="rounded-xl shadow-lg w-full h-120 md:h-100 object-cover border-4 border-secondary"
          />
        </div>

        {/* 🕊️ Content Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-2xl font-bold text-primary mb-4">
            Canada Assembly of Zoe Worship Center
          </h2>
          <p className="text-base md:text-lg text-base-content/80 mb-6 leading-relaxed">
            The <span className="font-semibold text-secondary">Canada Assembly</span> stands as a vibrant extension of
            the Zoe Worship Center family — a fellowship devoted to nurturing faith, unity,
            and spiritual growth among believers in Canada and beyond.
          </p>
          <p className="text-base md:text-lg text-base-content/80 mb-6 leading-relaxed">
            As part of the broader <span className="text-primary font-medium">Zoe Worship Center Assemblies</span>,
            this congregation continues the mission of spreading the gospel, empowering
            communities, and fostering global connection through worship and service.
          </p>
          <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
            The Canada Assembly reflects our heart for inclusivity, excellence in ministry,
            and a deep commitment to seeing lives transformed through the love of Christ —
            across nations and generations.
          </p>

          {/* ✨ Call to Action */}
          <div className="mt-8">
            <button className=" underline underline-offset-4 underline-secondary text-neutral hover:bg-secondary-focus">
              For more info about our Canada Assembly contact  +254 722 908 733
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
