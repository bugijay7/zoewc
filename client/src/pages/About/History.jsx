import React from "react";
import AboutNav from "../../components/AboutNav";

export default function History() {
  return (
    <div className="bg-base-200 text-base-content px-4 md:px-10 py-20 font-serif leading-relaxed max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* 🧭 Sidebar */}
        <div className="md:w-1/4">
          <AboutNav />
        </div>

        {/* 📰 Main Content */}
        <div className="flex-1 bg-base-100 shadow-lg rounded-2xl p-6 md:mt-10">
          {/* 🕊️ Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 border-b-4 border-primary inline-block pb-2">
            Our History
          </h1>

          {/* 📖 Content */}
          <p className="text-xs md:text-xl whitespace-pre-line">
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
    </div>
  );
}
