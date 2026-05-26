"use client";

import Link from "next/link";
import { useState } from "react";
import { Rocket, Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/discover", label: "Discover Founders" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 font-plus-jakarta text-lg">
              FounderConnect
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/signin"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors px-4 py-2"
            >
              Sign in
            </Link>
            <Link
              href="/auth/signin"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md hover:shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get started free
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 font-medium py-2 hover:text-violet-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/auth/signin"
              className="text-center text-gray-700 font-medium py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Sign in
            </Link>
            <Link
              href="/auth/signin"
              className="text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Get started free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
