import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white rounded-md mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Discover and Attend Events Effortlessly
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            EventHorizon helps you find, book, and manage events seamlessly.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              href="/events"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              Explore Events
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 text-gray-300 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/hero.png"
            alt="Event Illustration"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
