"use client";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const {
    createUser,
    setLoading,
    updateProfileFunc,
    signInWithGoogleFunc,
    setUser,
  } = useContext(AuthContext);
  const router = useRouter();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const lengthPattern = /^.{6,}$/;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    if (!lengthPattern.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    } else if (!uppercasePattern.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercasePattern.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfileFunc(name, photo)
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            setLoading(false);
            toast.success("Registered successfully!");
            setTimeout(() => router.push("/"), 1000);
          })
          .catch((error) => {
            toast.error("Registration failed: " + error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogleFunc()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("Login successful!", { duration: 1500 });
        setTimeout(() => router.push("/"), 1500);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="flex items-center justify-center p-6">
      {/* <Toaster position="top-center" /> */}
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create your EventHorizon account
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="absolute top-3 right-3 text-gray-400 hover:cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition hover:cursor-pointer">
            Register
          </button>
        </form>

        <div className="my-4 flex items-center justify-center text-gray-400">
          <span className="border-b w-1/3 border-gray-600"></span>
          <span className="mx-2">or</span>
          <span className="border-b w-1/3 border-gray-600"></span>
        </div>

        <button
          onClick={handleGoogleSignin}
          className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 transition hover:cursor-pointer"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Continue with Google
        </button>

        <p className="mt-4 text-gray-400 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
