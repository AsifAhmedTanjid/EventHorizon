"use client"
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import ManageEvents from "@/components/ManageEvents"; 
import Link from "next/link";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
const ManagePage = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchMyEvents = async () => {
      try {
        const res = await fetch("https://event-horizon-server.vercel.app/my-events", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`, 
          },
        });

        if (!res.ok) throw new Error("Failed to fetch your events");

        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyEvents();
  }, [user]);

// deleting my event

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://event-horizon-server.vercel.app/events/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      });

      const result = await res.json();

      if (result.deletedCount === 1) {
        setEvents((prev) => prev.filter((e) => e._id !== id)); 
        toast.success("Event deleted successfully!");
      } else {
        toast.error("Failed to delete event.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };



 return (
  <div className="max-w-7xl mx-auto p-10">
    <h2 className="text-4xl font-bold mb-6 text-white text-center">
      Manage Your Events
    </h2>
    {loading ? (
      <div className="h-[60vh] flex items-center justify-center">
        <MoonLoader size={64} color="#ffffff" />
      </div>
    ) : events.length === 0 ? (
      <div className="min-h-130 flex items-center justify-center flex-col">
        <div className="text-center py-20 text-gray-400">
          You haven&apos;t created any events yet.
        </div>
        <Link
          href="/events/add"
          className="btn border border-blue-500 text-white py-2 rounded-md hover:border-blue-500 hover:bg-blue-500 hover:text-black transition"
        >
          Add Event
        </Link>
      </div>
    ) : (
      <ManageEvents events={events} handleDelete={handleDelete} />
    )}
  </div>
);

};

export default ManagePage;
