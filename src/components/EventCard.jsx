import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({ event }) => {
  const shortDescription =
    event.description.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <div className="border text-white rounded-lg shadow-lg overflow-hidden hover:scale-102 transform transition duration-300">
      <Image
        height={192}
        width={400}
        src={event.eventImage}
        alt={event.eventName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{event.eventName}</h3>
        <p className="text-gray-400 text-sm mb-1">
          <span className="font-semibold">Venue:</span> {event.venueName}
        </p>
        <p className="text-gray-400 text-sm mb-1">
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="text-gray-400 text-sm mb-1">
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.eventDate).toLocaleDateString()}
        </p>
        <p className="text-gray-400 text-sm mb-2">
          <span className="font-semibold">Category:</span> {event.category}
        </p>
        <p className="text-gray-300 text-sm mb-4 min-h-10">{shortDescription}</p>
        <div className="flex justify-between items-center text-sm font-medium mb-4">
          <span>Tickets Remaining: {event.ticketsCount}</span>
          <span>Price: {event.ticketPrice} BDT</span>
        </div>
        <Link href={`events/${event._id}`} className=" btn w-full border border-blue-500  text-white py-2 rounded-md hover:border-blue-500 hover:bg-blue-500 hover:text-black
                         hover:cursor-pointer transition">
          View Details
        </Link>
      </div>
    </div>
  );
};



export default EventCard;
