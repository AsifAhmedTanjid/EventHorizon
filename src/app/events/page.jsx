import EventCard from "@/components/EventCard";
import React from "react";
const EventPage = () => {
 const events = [
  {
    _id: "1",
    eventName: "Interstellar Music Fest",
    eventImage:
      "https://img.freepik.com/free-psd/banner-template-concert_23-2148403186.jpg?w=740&t=st=1700969046~exp=1700969646~hmac=8f321c28e0b3e448102d5d3d9b7c9c7b17d16a87b08f3ff6e12e06d5d1250d84",
    venueName: "Orion Space Center",
    location: "Dhanmondi, Dhaka",
    eventDate: "2025-11-27",
    ticketsCount: 800,
    ticketPrice: 6000,
    category: "Music",
    description:
      "Experience the electric energy of 'Interstellar Music Fest,' a one-day music festival with top DJ performances, light shows, and cosmic vibes. Don't miss this unforgettable galactic party experience.",
    organizerName: "Asif Ahmed Tanjid",
  },
  {
    _id: "2",
    eventName: "Cosmic Art Expo",
    eventImage:
      "https://img.freepik.com/free-photo/modern-art-gallery-interior_23-2148893203.jpg?w=740&t=st=1700969122~exp=1700969722~hmac=6b301d0e68eaf76aeb1b148a54a8e9b0a0b6c2285e4dfdf156f3bc41f897f464",
    venueName: "Nebula Art Hall",
    location: "Banani, Dhaka",
    eventDate: "2025-12-05",
    ticketsCount: 300,
    ticketPrice: 2000,
    category: "Art",
    description:
      "Explore the Cosmic Art Expo showcasing futuristic paintings, sculptures, and interactive installations. Connect with artists from around the galaxy and enjoy a journey through cosmic creativity.",
    organizerName: "Luna Art Collective",
  },
  {
    _id: "3",
    eventName: "Galaxy Tech Conference",
    eventImage:
      "https://img.freepik.com/free-photo/modern-conference-room_23-2149237134.jpg?w=740&t=st=1700969189~exp=1700969789~hmac=12f3f2bcb56c7e6aa23da8b9e8cf32c107bfaf056c8de31f631aaf0a5a3170b2",
    venueName: "Cosmos Convention Center",
    location: "Gulshan, Dhaka",
    eventDate: "2025-12-15",
    ticketsCount: 500,
    ticketPrice: 10000,
    category: "Tech",
    description:
      "Join the Galaxy Tech Conference to explore next-generation technologies, AI, and space innovation. Network with top innovators and prepare for a future beyond the stars.",
    organizerName: "TechNova",
  },
  {
    _id: "4",
    eventName: "Nebula Gaming Tournament",
    eventImage:
      "https://img.freepik.com/free-psd/online-gaming-background_23-2148409651.jpg?w=740&t=st=1700969275~exp=1700969875~hmac=b1d0aa2f6a8b79e9c0e3f5b0e5a1a5ed10f6c5c2b5c0f8b3c0f2f0d0f3d0f2f0",
    venueName: "Starlight Arena",
    location: "Mirpur, Dhaka",
    eventDate: "2025-12-20",
    ticketsCount: 1000,
    ticketPrice: 4000,
    category: "Gaming",
    description:
      "Compete with top gamers in the Nebula Gaming Tournament. Experience high-stakes matches, epic prizes, and the thrill of cosmic competition.",
    organizerName: "Galaxy Gaming League",
  },
  {
    _id: "5",
    eventName: "Astro Science Fair",
    eventImage:
      "https://img.freepik.com/free-photo/modern-science-lab_23-2149273548.jpg?w=740&t=st=1700969351~exp=1700969951~hmac=7c3f2a9b7e0a4d1f2e7f3b5a6c1f4e8d0b9c1e7a2d0b3f6c5d7a8f1c2b3d4e5f",
    venueName: "Cosmic Research Lab",
    location: "Uttara, Dhaka",
    eventDate: "2025-12-28",
    ticketsCount: 200,
    ticketPrice: 500,
    category: "Science Fiction",
    description:
      "Explore the wonders of space and science at the Astro Science Fair. Interactive exhibits, futuristic tech, and engaging workshops await all visitors.",
    organizerName: "AstroSphere",
  },
  {
    _id: "6",
    eventName: "Lunar Workshop Series",
    eventImage:
      "https://img.freepik.com/free-photo/workshop-scene_23-2148893207.jpg?w=740&t=st=1700969402~exp=1700970002~hmac=6d5b0f1a3b7d4e2f5c8b1c3d7f6a8e9b0d1c2b3f4a5d6b7c8d9e0f1a2b3c4d5e",
    venueName: "Moonlight Studio",
    location: "Banani, Dhaka",
    eventDate: "2026-01-05",
    ticketsCount: 150,
    ticketPrice: 2500,
    category: "Workshops",
    description:
      "Join the Lunar Workshop Series and learn from top experts in science, art, and tech. Hands-on activities and knowledge-sharing in a futuristic setting.",
    organizerName: "Lunar Collective",
  },
  {
    _id: "7",
    eventName: "Cosmic Jazz Night",
    eventImage:
      "https://img.freepik.com/free-photo/jazz-band-performance_23-2148425671.jpg?w=740&t=st=1700969478~exp=1700970078~hmac=2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
    venueName: "Orion Music Hall",
    location: "Gulshan, Dhaka",
    eventDate: "2026-01-12",
    ticketsCount: 400,
    ticketPrice: 3500,
    category: "Music",
    description:
      "Relax under the stars with smooth tunes at Cosmic Jazz Night. Featuring top jazz musicians performing cosmic-inspired pieces.",
    organizerName: "Orion Jazz Club",
  },
  {
    _id: "8",
    eventName: "Stellar Art Workshop",
    eventImage:
      "https://img.freepik.com/free-photo/art-class-interior_23-2148893210.jpg?w=740&t=st=1700969540~exp=1700970140~hmac=3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5",
    venueName: "Nebula Art Studio",
    location: "Dhanmondi, Dhaka",
    eventDate: "2026-01-20",
    ticketsCount: 100,
    ticketPrice: 1500,
    category: "Art",
    description:
      "Participate in the Stellar Art Workshop to create your own cosmic-inspired artworks. Learn new techniques from expert artists in a futuristic setting.",
    organizerName: "Nebula Arts",
  },
  {
    _id: "9",
    eventName: "Quantum Tech Summit",
    eventImage:
      "https://img.freepik.com/free-photo/technology-conference_23-2149237142.jpg?w=740&t=st=1700969600~exp=1700970200~hmac=4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5",
    venueName: "Cosmos Innovation Hub",
    location: "Gulshan, Dhaka",
    eventDate: "2026-02-02",
    ticketsCount: 600,
    ticketPrice: 12000,
    category: "Tech",
    description:
      "Join leading innovators at the Quantum Tech Summit to explore the future of AI, robotics, and interstellar technology.",
    organizerName: "TechNova",
  },
  {
    _id: "10",
    eventName: "Galaxy Gaming Expo",
    eventImage:
      "https://img.freepik.com/free-psd/gaming-event-banner_23-2148409652.jpg?w=740&t=st=1700969660~exp=1700970260~hmac=5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5",
    venueName: "Starlight Arena",
    location: "Banani, Dhaka",
    eventDate: "2026-02-10",
    ticketsCount: 900,
    ticketPrice: 5000,
    category: "Gaming",
    description:
      "Experience the ultimate Galaxy Gaming Expo with tournaments, VR experiences, and interactive gaming zones. Join the cosmic gaming adventure.",
    organizerName: "Galaxy Gaming League",
  },
];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventPage;