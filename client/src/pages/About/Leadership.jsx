import React from "react";
import { Link } from "react-router-dom";

function Leadership() {
  return (
    <div className="bg-base-200 text-base-content px-6 md:px-20 py-34 font-serif leading-relaxed">
      {/* 🔗 Navigation Links */}
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
          <Link to="/about/anthem" className="btn btn-outline btn-primary">
            Anthem
          </Link>
        </div>
      </div>

      {/* 👑 Leadership Section */}
      <div className="max-w-5xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 md:p-12">
        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 border-b-4 border-primary inline-block pb-2">
            Our Leadership
          </h1>
        </div>

        <p className="text-lg md:text-xl whitespace-pre-line">
          Zoe Worship Centre has great Leaders and Pastors who are well trained,
          submit to one another, and honor their vision bearer. They are committed
          to loving all the saints regardless of race, tribe, or background, and
          dedicated to building the Church of Christ in unity.
          {"\n\n"}
          All our leaders possess a unique Christ-like attitude and are easily
          identified through the following five characteristics:
        </p>

        <ul className="list-disc list-inside text-lg md:text-xl mt-6 space-y-2">
          <li><strong>Faithful</strong> — to God</li>
          <li><strong>Loyal</strong> — to the vision and the vision bearer</li>
          <li><strong>Available</strong> — dedicated to service and ministry</li>
          <li><strong>Sacrificial</strong> — committed to excellence in performance</li>
          <li><strong>Result-Oriented</strong> — driven by impact and transformation</li>
        </ul>
      </div>
    </div>
  );
}

export default Leadership;
