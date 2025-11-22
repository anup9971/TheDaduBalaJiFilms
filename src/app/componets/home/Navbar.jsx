"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
           The Dadu BalaJi Films
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">Our Project</Link>
          <Link href="/services">AboutUs</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? "" : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between  items-center px-6 py-4 border-b">
          <span className="text-xl font-bold text-gray-900">The Dadu BalaJi Films</span>
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 space-y-4">
          <Link href="/" className="text-gray-700 text-lg" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="text-gray-700 text-lg" onClick={() => setOpen(false)}>
           Our Project
          </Link>
          <Link href="/services" className="text-gray-700 text-lg" onClick={() => setOpen(false)}>
            AboutUs
          </Link>
          <Link href="/contact" className="text-gray-700 text-lg" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
