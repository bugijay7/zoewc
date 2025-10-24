import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/faith.jpg"; // Hero background image

export default function FaithStatement() {
  return (
    <div className="font-serif bg-base-100 text-base-content">
      {/* 🕊️ Hero Section */}
      <section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover no-repeat`,
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-wide">
          Our Faith Statement
        </h1>
      </section>

      {/* 🔗 Navigation Bar (Single Line Scrollable) */}
      <div className="bg-base-200 py-6 px-4 overflow-x-auto">
        <div className="flex justify-center gap-3 md:gap-4 min-w-max whitespace-nowrap">
          <Link to="/about/knowUs" className="btn btn-outline btn-primary btn-sm md:btn-md">
            About
          </Link>
          <Link to="/about/history" className="btn btn-outline btn-primary btn-sm md:btn-md">
            History
          </Link>
          <Link to="/about/culture" className="btn btn-outline btn-primary btn-sm md:btn-md">
            Culture
          </Link>
          <Link to="/about/impact" className="btn btn-outline btn-primary btn-sm md:btn-md">
            Make an Impact
          </Link>
          <Link to="/about/leadership" className="btn btn-outline btn-primary btn-sm md:btn-md">
            Leadership
          </Link>
          <Link to="/about/faithStatement" className="btn btn-primary btn-sm md:btn-md">
            Faith Statement
          </Link>
          <Link to="/about/anthem" className="btn btn-outline btn-primary btn-sm md:btn-md">
            Anthem
          </Link>
        </div>
      </div>

      {/* 📖 Content Section */}
      <section className="px-6 md:px-20 py-16 bg-base-100">
        <div className="max-w-5xl mx-auto bg-base-200 shadow-lg rounded-2xl p-8 md:p-12">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-5xl font-medium mb-8 border-b-4 border-primary inline-block pb-2">
              Faith Statement
            </h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
            WE BELIEVE THE BIBLE — to be the inspired, authoritative Word of God.  
            (2 Peter 1:21; 2 Timothy 3:15–17)

            {"\n\n"}WE BELIEVE THE GODHEAD — consisting of the Father, the Son, and the Holy Spirit.

            {"\n\n"}WE BELIEVE IN THE DEITY OF JESUS CHRIST — in His virgin birth, atoning death, bodily resurrection, and ascension to the right hand of the Father.  
            (1 Timothy 3:16)

            {"\n\n"}WE BELIEVE MAN WAS CREATED WELL AND UPRIGHT — but fell through disobedience.

            {"\n\n"}WE BELIEVE IN SALVATION BY GRACE — through the redeeming blood of Christ.  
            (Hebrews 9:22; Ephesians 2)

            {"\n\n"}WE BELIEVE IN THE GREAT COMMISSION — to go into all the world and preach the Gospel.  
            (Matthew 28:19–20; Acts 1:8; Mark 16:15–18)

            {"\n\n"}WE BELIEVE IN THE KEEPING POWER OF GOD AND A HOLY WALK — to walk not after the flesh but after the Spirit.  
            (Jude 1:24; Romans 8:4)

            {"\n\n"}WE BELIEVE IN THE BAPTISM OF THE HOLY GHOST — and the believers’ baptism in water by immersion.

            {"\n\n"}WE BELIEVE IN THE FELLOWSHIP OF THE LORD’S SUPPER — according to Matthew 26:26; Mark 14:22; Luke 22:19; 1 Corinthians 10:16; 11:23.

            {"\n\n"}WE BELIEVE IN THE PRESENT MINISTRY OF THE HOLY SPIRIT — manifest in spiritual gifts and the fruit of the Spirit.  
            (Ephesians 4:11; 1 Corinthians 12:8–11; Galatians 5:22–23)

            {"\n\n"}WE BELIEVE THAT DIVINE HEALING IS OBTAINED ON THE BASIS OF ATONEMENT.  
            (1 Peter 2:24; Isaiah 53:4–5)

            {"\n\n"}WE BELIEVE IN THE CHURCH — as the universal fellowship of the Body of Christ, expressing herself in local communities under the authority of the Bible.  
            (Acts 2:42–47; 1 Corinthians 12:12–28; Ephesians 1:23)

            {"\n\n"}WE BELIEVE IN HOLY MATRIMONY — in the sanctity of marriage, with Scripture teaching monogamy.  
            (Genesis 2:24; Matthew 5:32; Mark 10:7–9; Romans 7:2; 1 Corinthians 7:10–11; Hebrews 13:4)

            {"\n\n"}WE BELIEVE IN THE DEDICATION OF INFANTS — Christian parents should dedicate their children to the Lord.  
            (1 Samuel 1:24–28; Mark 10:13–16; Matthew 19:14–15)

            {"\n\n"}WE BELIEVE IN THE RESURRECTION — of both the saved and the lost: the saved unto eternal life, and the lost unto eternal punishment.  
            (John 5:28; Revelation 20:15)
          </p>
        </div>
      </section>
    </div>
  );
}
