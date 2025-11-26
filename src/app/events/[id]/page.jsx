import Image from "next/image";
import Link from "next/link";

export default async function EventDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://event-horizon-server.vercel.app/events/${id}`,
    { cache: "no-store" }
  );

  const event = await res.json();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner */}
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
        {/* Card Wrapper */}
        <div className="bg-[#0e0e0e] rounded-2xl p-8 shadow-xl border border-gray-800/40">
          {/* Back */}
          <Link
            href="/events"
            className="inline-flex items-center mb-6 text-gray-300 hover:text-white transition"
          >
            ← Back to Events
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {event.eventName}
          </h1>
          {/* Description */}
          <div className="text-gray-300 leading-relaxed text-lg mb-10">
            {event.description}
          </div>

          {/* Meta Info Grid */}
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
                {event.ticketPrice === 0 ? "Free" : `${event.ticketPrice} BDT`}
              </p>
            </div>

            <div className="bg-black/40 border border-gray-800 p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Category</p>
              <p className="text-lg font-semibold">{event.category}</p>
            </div>
          </div>

          {/* Venue & Organizer */}
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

          {/* Tickets */}
          <div className="mt-10 flex justify-end">
            <button
              disabled
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold text-white shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Book Ticket
            </button>
          </div>
        <div className=" flex justify-end">
                <p className="mt-3 text-sm text-indigo-400 font-mono tracking-wider animate-pulse">
              ⚠ Booking will be unleashed beyond the Event Horizon…
            </p>
        </div>
        </div>
      </div>
    </div>
  );
}
