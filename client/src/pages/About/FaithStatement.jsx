import React from "react";
import AboutNav from "../../components/AboutNav";

export default function FaithStatement() {
  const statements = [
    {
      title: "The Bible",
      content: "WE BELIEVE THE BIBLE — to be the inspired, authoritative Word of God.",
      refs: "(2 Peter 1:21; 2 Timothy 3:15–17)",
    },
    {
      title: "The Godhead",
      content: "WE BELIEVE THE GODHEAD — consisting of the Father, the Son, and the Holy Spirit.",
      refs: "",
    },
    {
      title: "The Deity of Christ",
      content: "WE BELIEVE IN THE DEITY OF JESUS CHRIST — in His virgin birth, atoning death, bodily resurrection, and ascension to the right hand of the Father.",
      refs: "(1 Timothy 3:16)",
    },
    {
      title: "The Fall of Man",
      content: "WE BELIEVE MAN WAS CREATED WELL AND UPRIGHT — but fell through disobedience.",
      refs: "",
    },
    {
      title: "Salvation",
      content: "WE BELIEVE IN SALVATION BY GRACE — through the redeeming blood of Christ.",
      refs: "(Hebrews 9:22; Ephesians 2)",
    },
    {
      title: "The Great Commission",
      content: "WE BELIEVE IN THE GREAT COMMISSION — to go into all the world and preach the Gospel.",
      refs: "(Matthew 28:19–20; Acts 1:8; Mark 16:15–18)",
    },
    {
      title: "Holy Living",
      content: "WE BELIEVE IN THE KEEPING POWER OF GOD AND A HOLY WALK — to walk not after the flesh but after the Spirit.",
      refs: "(Jude 1:24; Romans 8:4)",
    },
    {
      title: "Baptism",
      content: "WE BELIEVE IN THE BAPTISM OF THE HOLY GHOST — and the believers’ baptism in water by immersion.",
      refs: "",
    },
    {
      title: "The Lord’s Supper",
      content: "WE BELIEVE IN THE FELLOWSHIP OF THE LORD’S SUPPER.",
      refs: "according to Matthew 26:26; Mark 14:22; Luke 22:19; 1 Corinthians 10:16; 11:23.",
    },
    {
      title: "Ministry of the Spirit",
      content: "WE BELIEVE IN THE PRESENT MINISTRY OF THE HOLY SPIRIT — manifest in spiritual gifts and the fruit of the Spirit.",
      refs: "(Ephesians 4:11; 1 Corinthians 12:8–11; Galatians 5:22–23)",
    },
    {
      title: "Divine Healing",
      content: "WE BELIEVE THAT DIVINE HEALING IS OBTAINED ON THE BASIS OF ATONEMENT.",
      refs: "(1 Peter 2:24; Isaiah 53:4–5)",
    },
    {
      title: "The Universal Church",
      content: "WE BELIEVE IN THE CHURCH — as the universal fellowship of the Body of Christ, expressing herself in local communities under the authority of the Bible.",
      refs: "(Acts 2:42–47; 1 Corinthians 12:12–28; Ephesians 1:23)",
    },
    {
      title: "Holy Matrimony",
      content: "WE BELIEVE IN HOLY MATRIMONY — in the sanctity of marriage, with Scripture teaching monogamy.",
      refs: "(Genesis 2:24; Matthew 5:32; Mark 10:7–9; Romans 7:2; 1 Corinthians 7:10–11; Hebrews 13:4)",
    },
    {
      title: "Dedication of Infants",
      content: "WE BELIEVE IN THE DEDICATION OF INFANTS — Christian parents should dedicate their children to the Lord.",
      refs: "(1 Samuel 1:24–28; Mark 10:13–16; Matthew 19:14–15)",
    },
    {
      title: "The Resurrection",
      content: "WE BELIEVE IN THE RESURRECTION — of both the saved and the lost: the saved unto eternal life, and the lost unto eternal punishment.",
      refs: "(John 5:28; Revelation 20:15)",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* SECTION HEADER */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="inline-block px-4 py-1 bg-zinc-900 border-l-4 border-amber-500 mb-6">
            <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Anchor of Truth</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center">
            Faith <span className="text-pink-600">Statement</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* STICKY SIDEBAR */}
          <div className="lg:w-1/4">
            <AboutNav />
          </div>

          {/* FAITH CONTENT */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {statements.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative pl-8 md:pl-12 py-4 border-l border-zinc-100 hover:border-pink-600 transition-colors duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {/* Decorative number indicator */}
                  <span className="absolute -left-[1px] top-4 w-4 h-[1px] bg-pink-600"></span>
                  
                  <div className="space-y-3">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">
                      Statement {index + 1} • {item.title}
                    </h2>
                    
                    <p className="text-xl md:text-2xl font-bold text-black leading-snug tracking-tight">
                      {item.content}
                    </p>
                    
                    {item.refs && (
                      <p className="text-xs font-black italic font-serif text-zinc-400 tracking-wider">
                        {item.refs}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CLOSING DECORATION */}
            <div className="mt-24 p-10 bg-zinc-50 border border-zinc-100 text-center">
              <p className="text-zinc-400 italic font-serif text-lg">
                "Rooted in the Word, Living the God Kind of Life."
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}