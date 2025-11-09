import React from "react";
import AboutNav from "../../components/AboutNav";

function Anthem() {
  return (
    <div className="bg-base-200 text-base-content px-4 sm:px-6 md:px-10 py-10 md:py-12 font-serif leading-relaxed">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-7xl mx-auto">
        {/* 🧭 Sidebar */}
        <div className="w-full md:w-1/4">
          <AboutNav />
        </div>

        {/* 📖 Main Content */}
        <div className="flex-1 bg-base-100 shadow-lg rounded-2xl p-4 sm:p-6 md:mt-15">
          {/* 🕊️ Title */}
          <div className="text-left md:text-left mb-6 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium border-b-4 border-primary inline-block pb-2">
              Our Anthem
            </h1>
          </div>

          {/* 🎶 Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-left text-sm sm:text-base md:text-lg">
            <p>
              <span className="font-medium">We are Zoe family and one in Christ;</span>
              <br />
              We live in the realm of the Divine Book: <em>The Bible</em>;
              <br />
              Yes, it is the realm of the Higher Life,
              <br />
              Walking from verse to verse, from chapter to chapter;
              <br />
              From book to book, and from testament to testament.
            </p>

            <h2 className="text-base sm:text-lg md:text-2xl font-medium mb-1 text-primary">Our Vision</h2>
            <p>We have a Christ-like vision — we win, train, and send to win.</p>

            <h2 className="text-base sm:text-lg md:text-2xl font-medium mb-1 text-primary">Our Mission</h2>
            <p>To transform lives by the life and the love of Christ.</p>

            <h2 className="text-base sm:text-lg md:text-2xl font-medium mb-1 text-primary">Our Core Values</h2>
            <p>
              Represented by <strong>FLOWERS</strong> — 
              <span className="italic">
                <br />
                Faith, Love, Obedience, Wisdom, Enthusiasm, Relevance, and Service.
              </span>
            </p>

            <div className="mt-6 md:mt-10">
              <h2 className="text-base sm:text-lg md:text-2xl font-medium text-primary">Our Motto</h2>
              <p className="text-sm sm:text-base md:text-xl font-medium mt-1 italic">
                “Christ is the reason for Life.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anthem;
