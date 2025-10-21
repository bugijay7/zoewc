import React from "react";
import { Link } from "react-router-dom";

function Anthem() {
  return (
    <div className="pt-34 bg-base-200 text-base-content px-6 md:px-20 py-16 font-serif leading-relaxed">
      {/* 🔗 Navigation Buttons */}
      <div className="text-center mb-16">
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <Link to="/about/knowUs" className="btn btn-outline btn-primary">
            About
          </Link>
          <Link to="/about/history" className="btn btn-outline btn-primary">
            History
          </Link>
          <Link to="/about/culture" className="btn btn-outline btn-primary">
            Culture
          </Link>
          <Link to="/about/impact" className="btn btn-outline btn-primary">
            Make an Impact
          </Link>
          <Link to="/about/leadership" className="btn btn-outline btn-primary">
            Leadership
          </Link>
          <Link to="/about/faithStatement" className="btn btn-outline btn-primary">
            Faith Statement
          </Link>
          <Link to="/about/anthem" className="btn btn-primary">
            Anthem
          </Link>
        </div>
      </div>

      {/* 🕊️ Content Card */}
      <div className="max-w-5xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 md:p-12">
        {/* 🕊️ Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium border-b-4 border-primary inline-block pb-2">
            Our Anthem
          </h1>
        </div>

        {/* 🎶 Content Section */}
        <div className="text-lg md:text-xl space-y-6 text-center">
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

          <h2 className="text-2xl font-medium mb-2 text-primary">Our Vision</h2>
          <p>We have a Christ-like vision — we win, train, and send to win.</p>

          <h2 className="text-2xl font-medium mb-2 text-primary">Our Mission</h2>
          <p>To transform lives by the life and the love of Christ.</p>

          <h2 className="text-2xl font-medium mb-2 text-primary">Our Core Values</h2>
          <p>
            Represented by <strong>FLOWERS</strong> — 
            <span className="italic">
              <br />
              Faith, Love, Obedience, Wisdom, Enthusiasm, Relevance, and Service.
            </span>
          </p>

          <div className="text-center mt-10">
            <h2 className="text-2xl font-medium text-primary">Our Motto</h2>
            <p className="text-xl font-medium mt-2 italic">
              “Christ is the reason for Life.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anthem;
