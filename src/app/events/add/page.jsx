"use client";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const AddEvent = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      eventName: e.target.eventName.value,
      eventImage: e.target.eventImage.value,
      venueName: e.target.venueName.value,
      location: e.target.location.value,
      eventDate: e.target.eventDate.value,
      ticketsCount: Number(e.target.ticketsCount.value),
      ticketPrice: Number(e.target.ticketPrice.value),
      category: e.target.category.value,
      description: e.target.description.value,
      organizerName: user.displayName,
      createdAt: new Date(),
    };

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.insertedId) {
          toast.success("Event added successfully!");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Could not add your event. Try again later");
      });
  };

  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto rounded-md shadow-lg p-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Launch Your Galactic Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Event Name</label>
              <input
                type="text"
                name="eventName"
                placeholder="e.g. Interstellar Music Fest"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Venue Name</label>
              <input
                type="text"
                name="venueName"
                placeholder="e.g. Orion Space Center"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Dhanmondi, Dhaka"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Event Image URL</label>
              <input
                type="url"
                name="eventImage"
                placeholder="Paste image link"
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block font-medium mb-1">Event Date</label>
              <input
                type="date"
                name="eventDate"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Tickets Count</label>
              <input
                type="number"
                name="ticketsCount"
                placeholder="e.g. 500"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Ticket Price (BDT)
              </label>
              <input
                type="number"
                name="ticketPrice"
                placeholder="e.g. 25"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                required
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
          </div>

          <div>
            <label className="block font-medium mb-1">Event Description</label>
            <textarea
              name="description"
              placeholder="Write a short description about your event..."
              required
              rows="4"
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 transition hover:cursor-pointer">
              Add Event
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddEvent;
