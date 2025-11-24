import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Event Horizon",
  description: "Event Ticket Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
