import React from "react";

export default function Categories() {
  const categories = [
    { name: "Music", icon: "🎶", color: "text-purple-600", bg: "bg-purple-900/20", border: "border-purple-600" },
    { name: "Business", icon: "📊", color: "text-green-600", bg: "bg-green-900/20", border: "border-green-600" },
    { name: "Tech", icon: "💻", color: "text-yellow-400", bg: "bg-yellow-900/20", border: "border-yellow-400" },
    { name: "Sports", icon: "⚽", color: "text-orange-500", bg: "bg-orange-900/20", border: "border-orange-500" },
    { name: "Arts & Culture", icon: "🎨", color: "text-pink-500", bg: "bg-pink-900/20", border: "border-pink-500" },
    { name: "Workshops", icon: "🛠️", color: "text-blue-500", bg: "bg-blue-900/20", border: "border-blue-500" },
  ];

  return (
    <section className="pt-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Explore Event Categories
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Discover events based on your interests and explore new experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`p-6 border rounded-xl flex flex-col items-center justify-center hover:scale-105 transition transform cursor-pointer ${cat.border} ${cat.bg}`}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className={`text-lg font-semibold ${cat.color}`}>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
