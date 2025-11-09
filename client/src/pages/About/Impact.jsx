import React from "react";
import AboutNav from "../../components/AboutNav";

export default function Impact() {
  return (
    <div className="bg-base-200 text-base-content px-4 md:px-10 py-20 font-serif leading-relaxed max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* 🧭 Sidebar */}
        <div className="md:w-1/4">
          <AboutNav />
        </div>

        {/* 🕊️ Content Section */}
        <div className="flex-1 bg-base-100 shadow-lg rounded-2xl p-6 md:mt-10">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-medium mb-8 border-b-4 border-primary inline-block pb-2">
              Make the Impact
            </h1>
          </div>

          <p className="text-xs md:text-xl whitespace-pre-line">
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
    </div>
  );
}
