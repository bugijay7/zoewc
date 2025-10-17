import React from "react";
import { Link } from "react-router-dom";

function History() {
  return (
    <div className="bg-base-200 text-base-content px-6 md:px-20 py-34 font-serif leading-relaxed">
      {/* 🔗 Navigation Links */}
      <div className="text-center mb-16">
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <Link to="/about/knowUs" className="btn btn-outline btn-primary">
            About
          </Link>
          <Link to="/about/history" className="btn btn-primary">
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

      {/* 📰 Main Content */}
      <div className="max-w-4xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 md:p-12">
        {/* 🕊️ Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center border-b-4 border-primary inline-block pb-2">
          Our History
        </h1>

        {/* 📖 Content */}
        <p className="text-lg md:text-xl whitespace-pre-line">
          Our Journey as Zoe Worship Centre began in October 2008 when the founder
          of the ministry responded to the call of God after his long wrestle with
          Him and finally, by God's grace, established the Ministry in Kinoo.

          {"\n\n"}In January 2009, Zoe Worship Centre officially emerged as a humble
          beacon of hope, offering sound teaching amidst a polluted Gospel. Led by
          the unwavering faith of Rev. Dave, the early church membership consisted
          of the Reverend’s family, his two siblings, and one faithful neighbor who
          believed in his divine calling.

          {"\n\n"}The church began in a modest semi-permanent structure on leased land.
          After one and a half years, challenges arose between the church and the
          landlady, prompting relocation to another leased location.

          {"\n\n"}In 2014, by God’s grace, we were finally able to purchase land and
          clear its full payment — marking a new chapter in our journey of faith and
          purpose.
        </p>
      </div>
    </div>
  );
}

export default History;
