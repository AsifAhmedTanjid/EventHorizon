"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Your message was sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
      <p className="max-w-2xl text-center text-gray-400 mb-12">
        Have a question, encountered a cosmic glitch, or just want to say hello?
        Send us a message — we usually respond faster than a photon.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl w-full mb-16">
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-xl font-semibold text-white mb-2">📧 Email</h2>
          <p className="text-gray-400">
            <a
              href="mailto:support@eventhorizon.app"
              className="text-blue-400 hover:underline"
            >
              support@eventhorizon.app
            </a>
            <br />
            <a
              href="mailto:dev@eventhorizon.app"
              className="text-blue-400 hover:underline"
            >
              dev@eventhorizon.app
            </a>
          </p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-xl font-semibold text-white mb-2">🌐 Social</h2>
          <p className="text-gray-400 space-y-1">
            <Link
              href="https://x.com/"
              className="text-blue-400 hover:underline block"
              target="_blank"
            >
              Twitter (X)
            </Link>
            <Link
              href="https://www.instagram.com/"
              className="text-blue-400 hover:underline block"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/in/asifahmedtanjid/"
              className="text-blue-400 hover:underline block"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/AsifAhmedTanjid"
              className="text-blue-400 hover:underline block"
              target="_blank"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>

      <form className="max-w-3xl w-full bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Send Us a Message
        </h2>

        <div className="space-y-5">
          <div>
            <label className="text-gray-300">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-300">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="text-gray-300">Your Message</label>
            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-blue-500"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          <button
            onClick={handleContact}
            className="w-full inline-flex items-center justify-center px-6 py-2 rounded-md border border-gray-700 text-gray-200 font-medium
                       transition-colors duration-200 hover:text-blue-400 hover:border-blue-500
                       hover:cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
