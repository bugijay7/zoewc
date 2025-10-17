import React from "react";
import { Link } from "react-router-dom";

function Impact() {
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
          <Link to="/about/impact" className="btn btn-primary">
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

      {/* 🕊️ Impact Section */}
      <div className="max-w-5xl mx-auto bg-base-100 shadow-lg rounded-2xl p-8 md:p-12">
        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-primary inline-block pb-2">
            Make the Impact
          </h1>
        </div>

        <p className="text-lg md:text-xl whitespace-pre-line">
          Our impact is realized when we love God completely, ourselves correctly,
          and other people compassionately. It always begins with the
          <strong> vertical experience </strong>
          with God, then self-realization to
          <strong> horizontal impact.</strong>

          {"\n\n"}‘He called the twelve to be with Him.’ He wanted to reproduce Himself in
          His disciples, then send them to reproduce themselves into the world.
          This only happens through believers’ consciousness of being the light
          of the world — a city set on a hill.

          {"\n\n"}Our Christ-life lifestyle, a light that shines throughout, is a critical
          tool for world impact. “The path of the just is like a shining light that shines
          brighter and brighter to the perfect day.”

          {"\n\n"}“And now, brethren, I commend you to God and to the Word of His grace,
          which is able to build you up and give you an inheritance among all
          those who are sanctified.” (Acts 20:32)

          {"\n\n"}Jesus said, *“I am come that you may have life and have it more abundantly”*
          (John 10:10b).

          {"\n\n"}Life in abundance is twofold: **your life** and **life for the dead.**
          God called Ezekiel (3:3) to fill his belly with the Word, and in chapter 37,
          to speak life to the dead bones.

          {"\n\n"}Our ministry is not only about serving people already in the Church,
          but also about bringing into the fold those who are lost in darkness.

          {"\n\n"}✨ You are inspired to do the work of the Great Commission.
          *(Matthew 28:19–20)*
        </p>
      </div>
    </div>
  );
}

export default Impact;
