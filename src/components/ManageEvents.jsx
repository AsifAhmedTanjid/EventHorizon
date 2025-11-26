
import React from "react";
import Image from "next/image";

export default function ManageEvents({ events, handleDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div
          key={event._id}
          className="border border-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/50 transition-shadow duration-300"
        >
        
          <div className="relative h-48 w-full">
            <Image
              src={event.eventImage}
              alt={event.eventName}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-2xl"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-2">{event.eventName}</h3>
            <p className="text-gray-400 text-sm mb-3">
              {new Date(event.eventDate).toLocaleDateString()} | {event.category}
            </p>
            <p className="text-gray-300 text-sm line-clamp-3 mb-4">{event.description}</p>
            <div className="flex gap-3">
              <a
                href={`/events/${event._id}`}
                className="flex-1  btn w-full border border-blue-500  text-white py-2 rounded-md hover:border-blue-500 hover:bg-blue-500 hover:text-black
                         hover:cursor-pointer transition"
              >
                View
              </a>
              <button
                onClick={()=>{
                    handleDelete(event._id)
                }}
                className="flex-1  btn w-full border border-red-500  text-red-500 py-2 rounded-md hover:border-red-500 hover:bg-red-500 hover:text-white
                         hover:cursor-pointer transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
