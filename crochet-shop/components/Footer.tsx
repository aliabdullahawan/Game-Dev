import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🧶</span>
            <span className="font-bold text-xl text-rose-600">CrochetCraft</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Handmade with love. Every stitch tells a story. Custom orders
            welcome — just message us on WhatsApp!
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-rose-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-rose-600 transition-colors"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="hover:text-rose-600 transition-colors"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-rose-600 transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <h3 className="font-semibold text-gray-800 mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-600 mb-4">
            For custom orders or inquiries, reach us on WhatsApp or Instagram.
          </p>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-rose-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CrochetCraft. All rights reserved. Made
        with 🧶 &amp; ❤️
      </div>
    </footer>
  );
}
