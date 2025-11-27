"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter an email");

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Subscribed successfully! Check your email");
        setEmail("");
      } else {
        toast.error("Subscription failed. Try again.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16  text-white">
      <div className="max-w-3xl  mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Stay Updated with EventHorizon
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter and never miss exciting events happening near you.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center lg:mx-8">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border  md:flex-3"
          />

          <button
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold px-6 py-3 rounded-full transition hover:cursor-pointer md:flex-1"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
