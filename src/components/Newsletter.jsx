import React from "react";

export default function Newsletter() {
  return (
    <section className="py-16  text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Stay Updated with EventHorizon
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter and never miss exciting events happening near you.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-1"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition hover:cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
