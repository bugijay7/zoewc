import React from "react";
import { Link } from "react-router-dom";

function Culture() {
  return (
    <div className=" bg-base-200 text-base-content px-6 md:px-20 py-34 font-serif leading-relaxed">
      {/* 🔗 Navigation Buttons */}
      <div className="text-center mb-16">
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <Link to="/about/knowUs" className="btn btn-outline btn-primary">
            About
          </Link>
          <Link to="/about/history" className="btn btn-outline btn-primary">
            History
          </Link>
          <Link to="/about/culture" className="btn btn-primary">
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
          <Link to="/about/anthem" className="btn btn-outline btn-primary">
            Anthem
          </Link>
        </div>
      </div>

      {/* 📰 Content Section */}
      <div className="max-w-5xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 md:p-12">
        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 border-b-4 border-primary inline-block pb-2">
            Our Culture
          </h1>
        </div>

        <p className="text-lg md:text-xl whitespace-pre-line">
          From the top apex downwards, we believe in Christ Principles — that
          leaders are led and lead by example through accountability, self-responsibility,
          loyalty to the vision, availability, assignment commitment, transparency,
          time consciousness, unity of purpose, forgiveness, and result-based celebration.

          {"\n\n"}Welcome to Zoe Family — Welcome to Zoe, the World of John 10:10b and
          2 Corinthians 3:18.

          {"\n\n"}Welcome on board! zoe worship centre is the hub of divine information,
          where we are transformed and inspired to inspire generations.

          {"\n\n"}Welcome to a family where you are no longer a church member but a
          minister in the making — reaching out to the lost.

          {"\n\n"}Welcome to a church where the limit is not the sky, but yourself.

          {"\n\n"}Welcome to the class of learning and re-learning, where your culture
          is transformed into a Supra-culture.

          {"\n\n"}Welcome to an environment of divine encounters with the Word and
          the Spirit of God.

          {"\n\n"}Welcome to a dimension where the voice of God is present and real.

          {"\n\n"}In Zoe, we are a family that runs the race of faith together,
          cares for one another, and celebrates our success.
        </p>
      </div>
    </div>
  );
}

export default Culture;
