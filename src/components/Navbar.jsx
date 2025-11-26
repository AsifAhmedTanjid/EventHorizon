"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { MoonLoader } from "react-spinners";
import toast from "react-hot-toast";

const Navbar = () => {
  const pathname = usePathname();

  const { user, signoutUserFunc, setUser, loading, setLoading } =
    useContext(AuthContext);
  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        setLoading(false);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

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
    <div className="navbar bg-black/90 shadow-sm sticky top-0 z-50 h-2 border-b border-zinc-900">
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
                      pathname === link.href
                        ? "text-blue-500 font-semibold"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <Link href="/" className="-mt-1 text-xl ">
          {" "}
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 px-1">
          {" "}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-blue-500 transition ${
                  pathname === link.href
                    ? "text-blue-500 font-semibold"
                    : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex items-center h-12">
        {loading ? (
          <MoonLoader
            color="#415aff"
            size={5}
            cssOverride={{ display: "inline-block" }}
          />
        ) : user ? (
          <div className="dropdown dropdown-end pr-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  height={40}
                  width={40}
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-900 backdrop-blur-md rounded-box w-52"
            >
              <div className="mb-2 text-center">
                <h1 className="text-sm font-semibold">{user?.displayName}</h1>
                <h5 className="text-xs font-semibold">{user?.email}</h5>
              </div>
              <li>
                <Link href="/events/add">Add Event</Link>
              </li>
              <li>
                <Link href="/events/manage">Manage Event</Link>
              </li>
              <li>
                <button
                  onClick={handleSignout}
                  className="text-red-500 font-bold hover:text-red-700 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn rounded-full px-7 bg-white text-black  hover:opacity-90"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
