"use client";

import Link from "next/link";
import React from "react";

export default function Error({ reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white lg:-my-18 mx-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Visual */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* rotating horizon ring */}
            <div
              className="absolute inset-0 rounded-full blur-lg opacity-40"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.9), rgba(99,102,241,0.85), rgba(14,165,233,0.9))",
                filter: "blur(24px)",
                transform: "scale(1.05)",
                animation: "pulse 4s ease-in-out infinite",
              }}
            />
            <svg viewBox="0 0 200 200" className="w-full h-full relative" aria-hidden>
              <defs>
                <radialGradient id="g" cx="50%" cy="30%">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#4f46e5" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.85" />
                </radialGradient>
                <filter id="f">
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
              </defs>

              <g style={{ transformOrigin: "50% 50%", animation: "spin 14s linear infinite" }}>
                <circle cx="100" cy="100" r="78" fill="none" stroke="url(#g)" strokeWidth="6" strokeOpacity="0.75" />
                <circle cx="100" cy="100" r="60" fill="#05060a" stroke="#0ea5e9" strokeWidth="2" strokeOpacity="0.12" />
              </g>

              <circle cx="100" cy="100" r="28" fill="#000000" stroke="#111827" strokeWidth="1" />
              <circle cx="100" cy="100" r="12" fill="#0ea5e9" className="animate-pulse" />
            </svg>

            {/* floating particles */}
            <div
              className="absolute -top-3 -right-3 w-4 h-4 rounded-full"
              style={{ background: "#3B82F6", boxShadow: "0 6px 18px rgba(59,130,246,0.45)" }}
            />
            <div
              className="absolute -left-3 bottom-3 w-3 h-3 rounded-full"
              style={{ background: "#60A5FA", boxShadow: "0 6px 18px rgba(96,165,250,0.3)" }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">⚠️</h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-100">
            Cosmic Error
            <span className="text-blue-400">:</span>
          </h2>

          <p className="mt-3 text-gray-300 text-lg md:text-xl leading-relaxed">
            Oops! Something went wrong. The universe seems a little unstable right now.
          </p>

          <p className="mt-4 text-gray-400">
            Try again or navigate back to a safer orbit.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-white text-black font-semibold shadow-sm
                         transition-all duration-250 hover:shadow-lg hover:opacity-90"
            >
              Retry
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-gray-700 text-gray-200 font-medium
                         transition-colors duration-200 hover:text-blue-400 hover:border-blue-500"
            >
              Return to Orbit
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            If this keeps happening, contact support or check your network connection.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.06); }
          100% { opacity: 0.35; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
