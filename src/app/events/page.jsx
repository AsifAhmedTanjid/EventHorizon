import React from "react";
import EventCard from "@/components/EventCard";

const EventPage = async () => {
  const res = await fetch("https://event-horizon-server.vercel.app/events");
  const events = await res.json();

  return (
    <section className="pt-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 ">
<h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white text-center">
  All Events in the Cosmos
</h2>
<p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center">
  Navigate through the galaxy of events awaiting you. From interstellar concerts to cosmic art expos, tech summits, and gaming tournaments — chart your course and secure your spot among the stars.
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

export default EventPage;
