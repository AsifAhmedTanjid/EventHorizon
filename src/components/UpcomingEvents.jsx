import React from "react";
import EventCard from "./EventCard";

const UpcomingEvents = async () => {
  const res = await fetch("https://event-horizon-server.vercel.app/upcoming-event", {
    cache: "no-store",
  });
  const events = await res.json();

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
