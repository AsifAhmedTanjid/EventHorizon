"use client";

import React, { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import { MoonLoader } from "react-spinners";


export default function AllEvents() {
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const url = search
          ? `https://event-horizon-server.vercel.app/search?search=${search}`
          : "https://event-horizon-server.vercel.app/events";
        const res = await fetch(url);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setEvents([]);
      }
      setLoading(false);
    };

   
    fetchEvents();
  }, [search]); 

  return (
    <section className="pt-10 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white text-center">
          All Events in the Cosmos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-center">
          Navigate through the galaxy of events awaiting you. From interstellar concerts to cosmic art expos, tech summits, and gaming tournaments — chart your course and secure your spot among the stars.
        </p>

        
        <div className="flex flex-col-reverse md:flex-row justify-end mb-10 gap-4">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" max-w-md p-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            <select
                name="category"
                onChange={(e) => setSearch(e.target.value)}
                required
                className=" border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Select Category</option>
                <option value="Music">Music</option>
                <option value="Arts&Culture">Arts & Culture</option>
                <option value="Tech">Tech</option>
                <option value="Business">Business</option>
                <option value="Sports">Sports</option>
                <option value="Workshops">Workshops</option>
              </select>
        </div>

        
        {loading ? (
          <div className="h-[60vh] flex items-center justify-center">
            <MoonLoader size={64} color="#ffffff"></MoonLoader>
          </div>
        ) : events?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="h-[60vh] flex items-center justify-center">
            <h1>Nothing found</h1>
          </div>
        )}
      </div>
    </section>
  );
}
