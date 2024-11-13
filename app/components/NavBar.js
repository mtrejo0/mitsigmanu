"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/brothers", label: "Brothers" },
  { path: "/exec", label: "Exec" },
  { path: "/photos", label: "Photos" },
  { path: "/summer-housing", label: "Summer Housing" },
  { path: "/rush", label: "Rush" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-sm border-b border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gold hover:opacity-80 transition-colors duration-300"
            >
              MIT Sigma Nu
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === path
                      ? "bg-gold text-black"
                      : "text-gold hover:bg-gold hover:text-black"
                  } transition-colors duration-300`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-black hover:bg-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === path
                    ? "bg-gold text-black"
                    : "text-gold hover:bg-gold hover:text-black"
                } transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
