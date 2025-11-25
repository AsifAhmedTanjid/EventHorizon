import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Abdur Rakib",
      role: "Event Enthusiast",
      feedback:
        "EventHorizon makes it so easy to find and book events I actually care about. Love the clean interface!",
      avatar: "/rakib.jpg",
    },
    {
      name: "Jhankar Mahbub",
      role: "Organizer",
      feedback:
        "Managing my events has never been simpler. I can track attendees, update info, and see insights effortlessly.",
      avatar: "/jhankar.jpg",
    },
    {
      name: "Dr. Azizul Islam Milton",
      role: "Music Lover",
      feedback:
        "I discovered so many amazing concerts through EventHorizon. The categories and how it works are super intuitive.",
      avatar: "/azizul.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          What Our Users Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Real feedback from people who use EventHorizon to discover and manage events.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{t.role}</p>
                <p className="text-gray-300 italic">&quot;{t.feedback}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
