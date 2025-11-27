import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 mt-20 px-6">
      <div className="max-w-7xl mx-auto py-12 grid md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="text-xl ">
            <Logo></Logo>
          </Link>
          <p className="mt-3 text-sm text-gray-500">
            Navigating events across space, time, and beyond.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Explore</h3>
          <a href="/about" className="hover:text-blue-500 transition">
            About
          </a>
          <Link href="/events" className="hover:text-blue-500 transition">
            Events
          </Link>
          <a href="/contact" className="hover:text-blue-500 transition">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:text-blue-500 transition">
            Privacy Policy
          </a>
          <a href="terms-and-condition" className="hover:text-blue-500 transition">
            Terms & Conditions
          </a>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://github.com/AsifAhmedTanjid"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/asifahmedtanjid/"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              Twitter / X
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-neutral-800 text-gray-600 text-sm">
        © {new Date().getFullYear()} EventHorizon. All rights reserved.
      </div>
    </footer>
  );
}
