import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Browse Events",
      desc: "Explore a wide range of events tailored to your interests.",
    },
    {
      title: "Book Your Spot",
      desc: "Secure your ticket or RSVP with a seamless booking experience.",
    },
    {
      title: "Get Instant Confirmation",
      desc: "Receive immediate event details and confirmation after booking.",
    },
    {
      title: "Attend & Enjoy",
      desc: "Show up and enjoy the event — we handle the rest.",
    },
  ];

  return (
    <section className="pt-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          How It Works
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          EventHorizon makes event discovery and booking simple, fast, and hassle-free.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 border border-gray-800 rounded-xl hover:border-gray-600 transition"
            >
              <div className="text-4xl font-bold text-blue-500 mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
