"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const params = useParams();
  const { id } = params;

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://event-horizon-server.vercel.app/events/${id}`
        );
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
      }
      setLoading(false);
    };

    fetchEvent();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white">
      {loading ? (
        <>
          <div className="relative w-full h-80 md:h-[420px] bg-neutral-800 animate-pulse rounded-xl" />

          <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 space-y-6">
            <div className="bg-[#0e0e0e] p-8 rounded-2xl border border-gray-700/40 space-y-4 animate-pulse">
              <div className="h-6 w-32 bg-neutral-800 rounded" />
              <div className="h-10 w-3/4 bg-neutral-800 rounded" />
              <div className="h-6 w-full bg-neutral-800 rounded" />
              <div className="h-6 w-full bg-neutral-800 rounded" />
              <div className="h-6 w-5/6 bg-neutral-800 rounded mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="h-20 bg-neutral-800 rounded" />
                <div className="h-20 bg-neutral-800 rounded" />
                <div className="h-20 bg-neutral-800 rounded" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="h-28 bg-neutral-800 rounded" />
                <div className="h-28 bg-neutral-800 rounded" />
              </div>

              <div className="h-12 w-32 bg-neutral-800 rounded" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative w-full h-80 md:h-[420px]">
            <Image
              src={event.eventImage}
              alt={event.eventName}
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black" />
          </div>

          <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10">
            <div className="bg-[#0e0e0e] rounded-2xl p-8 shadow-xl border border-gray-800/40">
              <Link
                href="/events"
                className="inline-flex items-center mb-6 text-gray-300 hover:text-white transition"
              >
                ← Back to Events
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {event.eventName}
              </h1>

              <div className="text-gray-300 leading-relaxed text-lg mb-10">
                {event.description}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-black/40 border border-gray-800 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-lg font-semibold">
                    {new Date(event.eventDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="bg-black/40 border border-gray-800 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Ticket Price</p>
                  <p className="text-lg font-semibold">
                    {event.ticketPrice === 0
                      ? "Free"
                      : `${event.ticketPrice} BDT`}
                  </p>
                </div>

                <div className="bg-black/40 border border-gray-800 p-4 rounded-xl">
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="text-lg font-semibold">{event.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/40 border border-gray-800 p-5 rounded-xl">
                  <p className="text-gray-400 text-sm">Venue</p>
                  <p className="text-xl font-semibold">{event.venueName}</p>
                  <p className="text-gray-400 text-sm mt-1">{event.location}</p>
                </div>

                <div className="bg-black/40 border border-gray-800 p-5 rounded-xl">
                  <p className="text-gray-400 text-sm">Organizer</p>
                  <p className="text-xl font-semibold">{event.organizerName}</p>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  disabled
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-white shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Ticket
                </button>
              </div>
              <div className="flex justify-end">
                <p className="mt-3 text-sm text-indigo-400 font-mono tracking-wider animate-pulse">
                  ⚠ Booking will be unleashed beyond the Event Horizon…
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
