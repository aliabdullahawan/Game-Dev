"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🧶</span>
          <span className="font-bold text-xl text-rose-600 tracking-tight">
            CrochetCraft
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-rose-600 transition-colors">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-rose-600 transition-colors"
          >
            Shop
          </Link>
          <Link href="/#about" className="hover:text-rose-600 transition-colors">
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-rose-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Cart icon */}
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative p-2">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-rose-600 transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-rose-600"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="hover:text-rose-600"
          >
            Shop
          </Link>
          <Link
            href="/#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-rose-600"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-rose-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
