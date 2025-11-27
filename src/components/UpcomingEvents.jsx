"use client";

import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

export default function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://event-horizon-server.vercel.app/upcoming-event"
        );
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch upcoming events:", err);
        setEvents([]);
      }
      setLoading(false);
    };

    fetchUpcomingEvents();
  }, []);

  // Skeleton 
  const skeletons = Array.from({ length: 6 }).map((_, i) => (
    <div
      key={i}
      className="bg-neutral-800 animate-pulse rounded-xl h-125 w-full"
    ></div>
  ));

  return (
    <section className="pt-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
          Upcoming Events
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center">
          Discover the latest and most exciting events happening near you. 
          Plan ahead, grab your tickets, and never miss out on the fun!
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skeletons}
          </div>
        ) : events.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-400">No upcoming events found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
