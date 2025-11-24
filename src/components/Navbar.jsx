'use client'
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

const links = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
//   const links = (
//     <>
//       <li>
//        <Link href="/">Home</Link>
//       </li>
//       <li>
//        <Link href="/events">Events</Link>
//       </li>
//       <li>
//        <Link href="/about">About</Link>
//       </li>
//       <li>
//        <Link href="/contact">Contact</Link>
//       </li>
   
//     </>
//   );
  return (
    <div className="navbar bg-black/90 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
  <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  {links.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className={`hover:text-blue-500 transition ${
          pathname === link.href ? "text-blue-500 font-semibold" : "text-white"
        }`}
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

          </ul>
        </div>
        <a className="-mt-1 text-xl ">
          {" "}
    <Logo></Logo>
         
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">  {links.map((link) => (
    <li key={link.href}>
      <Link
        href={link.href}
        className={`hover:text-blue-500 transition ${
          pathname === link.href ? "text-blue-500 font-semibold" : "text-white"
        }`}
      >
        {link.name}
      </Link>
    </li>
  ))}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full px-7 bg-white text-black  hover:opacity-90">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
