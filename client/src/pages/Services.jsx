import React from "react";
import { Book, Users, Church } from "lucide-react";
import worshipImg from "../assets/anagkazo.jpeg";

export default function Services() {
  return (
    <div
      className="bg-base-200 text-base-content min-h-screen"
      style={{
        backgroundImage: `url(${worshipImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="bg-black/60 min-h-screen w-full flex flex-col items-center py-16">

        {/* ✝️ INTRO SECTION */}
        <section className="max-w-2xl mx-auto py-16 text-left text-base-100">
          <p className="text-sm md:text-xl italic leading-relaxed mb-6 px-6 md:pt-12 pt-10">
            At <strong className="underline underline-offset-4 text-white">Zoe Worship Centre</strong>, 
            our services are designed to inspire transformation, ignite spiritual growth, 
            and bring believers together in fellowship, worship, and the Word.
          </p>
        </section>

        {/* SERVICES LIST */}
        <section className="max-w-2xl w-full px-4 md:px-0 ">

          {/* SUNDAY SERVICES */}
          <ul className="list rounded-box shadow-md text-white bg-primary/70 backdrop-blur-md">
            <li className="p-4 pb-2 text-xs md:text-lg tracking-wide font-bold">
              Sunday Services
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">01</div>
              <div><Church className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Ministers Service</div>
                <div className="text-xs uppercase font-semibold">
                  8:00 AM – 9:00 AM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">02</div>
              <div><Church className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>First Service</div>
                <div className="text-xs uppercase font-semibold">
                  9:05 AM – 10:45 AM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">03</div>
              <div><Church className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Second Service</div>
                <div className="text-xs uppercase font-semibold">
                  10:50 AM – 1:00 PM
                </div>
              </div>
            </li>
          </ul>

          {/* WEEKDAY SERVICES */}
          <ul className="list rounded-box shadow-md mt-8 text-white bg-primary/70 backdrop-blur-md">
            <li className="p-4 pb-2 text-xs md:text-lg tracking-wide font-bold">
              Weekly & Departmental Fellowships
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">01</div>
              <div><Book className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Morning Devotions</div>
                <div className="text-xs uppercase font-semibold">
                  5:30 AM – 7:50 AM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">02</div>
              <div><Users className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Tuesday Fellowship</div>
                <div className="text-xs uppercase font-semibold">
                  6:30 PM – 7:30 PM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">03</div>
              <div><Users className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Thursday Bodaboda Outreach</div>
                <div className="text-xs uppercase font-semibold">
                  3:00 PM – 4:00 PM
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">04</div>
              <div><Church className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Friday Mini-Vigil</div>
                <div className="text-xs uppercase font-semibold">
                  9:00 PM – Midnight
                </div>
              </div>
            </li>

            <li className="list-row items-center gap-4 p-4 hover:bg-gray-200/10 transition-colors rounded-md">
              <div className="text-4xl font-thin tabular-nums">05</div>
              <div><Users className="w-10 h-10 text-secondary" /></div>
              <div className="list-col-grow">
                <div>Departmental Fellowships</div>
                <div className="text-xs uppercase font-semibold">
                  Scheduled per department
                </div>
              </div>
            </li>
          </ul>
        </section>

        {/* CTA BOX */}
        <section className="max-w-2xl w-full px-4 md:px-0 mt-12 text-center text-base-100">
          <div className="bg-primary/70 p-8 rounded-xl backdrop-blur-md shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Stay Connected With Us
            </h3>

            <p className="text-sm md:text-base leading-relaxed opacity-90 mb-6">
              Join our services, follow our livestream, or reach out for prayer or support. 
              We’d love to walk with you on your spiritual journey.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="/live" className="btn btn-secondary px-8 w-full md:w-auto">
                Watch Livestream
              </a>

              <a href="/contact" className="btn btn-outline btn-secondary px-8 w-full md:w-auto">
                Plan Your Visit
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
