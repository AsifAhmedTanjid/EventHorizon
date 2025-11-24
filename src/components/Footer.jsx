import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 mt-20 px-6">
      <div className="max-w-7xl mx-auto py-12 grid md:grid-cols-3 gap-10 text-gray-400">
        <div>
          <h2 className="text-xl font-bold text-white"><Logo></Logo></h2>
          <p className="mt-3 text-sm text-gray-500">
            Navigating events across space, time, and beyond.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <a href="/about" className="hover:text-blue-500 transition">About</a>
          <a href="/events" className="hover:text-blue-500 transition">Events</a>
          <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
          <a href="#" className="hover:text-blue-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition">Terms & Conditions</a>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-blue-500 transition">GitHub</a>
            <a href="#" className="hover:text-blue-500 transition">Twitter / X</a>
            <a href="#" className="hover:text-blue-500 transition">Instagram</a>
            <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-neutral-800 text-gray-600 text-sm">
        © {new Date().getFullYear()} EventHorizon. All rights reserved.
      </div>
    </footer>
  );
}
