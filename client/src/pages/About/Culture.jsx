import React from "react";
import { Link } from "react-router-dom";
import AboutNav from "../../components/AboutNav";

function Culture() {
  return (
    <div className="bg-base-200 text-base-content px-4 md:px-10 py-20 font-serif leading-relaxed">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto">
        {/* 🧭 Sidebar */}
        <div className="md:w-1/4">
          <AboutNav />
        </div>

        {/* 📰 Main Content */}
        <div className="flex-1 bg-base-100 shadow-lg rounded-2xl p-6 md:mt-15">
          <div className="text-left m">
            <h1 className="text-4xl md:text-5xl font-medium mb-8 border-b-4 border-primary inline-block pb-2">
              Our Culture
            </h1>
          </div>

          <p className="text-xs md:text-xl whitespace-pre-line">
            From the top apex downwards, we believe in Christ Principles — that
            leaders are led and lead by example through accountability,
            self-responsibility, loyalty to the vision, availability, assignment
            commitment, transparency, time consciousness, unity of purpose,
            forgiveness, and result-based celebration.

            {"\n\n"}Welcome to Zoe Family — Welcome to Zoe, the World of John
            10:10b and 2 Corinthians 3:18.

            {"\n\n"}Welcome on board! Zoe Worship Centre is the hub of divine
            information, where we are transformed and inspired to inspire
            generations.

            {"\n\n"}Welcome to a family where you are no longer a church member
            but a minister in the making — reaching out to the lost.

            {"\n\n"}Welcome to a church where the limit is not the sky, but
            yourself.

            {"\n\n"}Welcome to the class of learning and re-learning, where your
            culture is transformed into a Supra-culture.

            {"\n\n"}Welcome to an environment of divine encounters with the Word
            and the Spirit of God.

            {"\n\n"}Welcome to a dimension where the voice of God is present and
            real.

            {"\n\n"}In Zoe, we are a family that runs the race of faith
            together, cares for one another, and celebrates our success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Culture;
