import Link from "next/link";
import { ArrowRight, MessageCircle, Star, Package, Palette } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 px-4 overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-20 select-none">🧶</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10 select-none">✂️</div>
        <div className="max-w-6xl mx-auto text-center relative">
          <span className="inline-block bg-rose-100 text-rose-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ✨ Handmade with Love
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Beautiful Crochet,
            <br />
            <span className="text-rose-600">Made Just for You</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Discover our collection of handcrafted crochet pieces — from cozy
            blankets to adorable accessories. Custom orders welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-md"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in a custom crochet order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5" /> Custom Order
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-rose-50">
            <div className="bg-rose-100 p-3 rounded-full">
              <Star className="w-7 h-7 text-rose-600" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Premium Quality</h3>
            <p className="text-gray-500 text-sm">
              Every piece is made with care using high-quality, soft yarns.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-green-50">
            <div className="bg-green-100 p-3 rounded-full">
              <MessageCircle className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg">
              Easy WhatsApp Orders
            </h3>
            <p className="text-gray-500 text-sm">
              Add items to your cart and place your order directly via WhatsApp.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-amber-50">
            <div className="bg-amber-100 p-3 rounded-full">
              <Palette className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="font-bold text-gray-800 text-lg">Custom Colors</h3>
            <p className="text-gray-500 text-sm">
              Most items available in custom colors — just ask us on WhatsApp!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Items
              </h2>
              <p className="text-gray-500 mt-1">Our most loved pieces</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-rose-600 font-semibold hover:underline"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-rose-600 font-semibold hover:underline"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How to Order
          </h2>
          <p className="text-gray-500 mb-10">
            Placing an order is quick and easy!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                emoji: "🛍️",
                title: "Browse & Select",
                desc: "Browse our shop and add your favourite items to the cart.",
              },
              {
                step: "2",
                emoji: "🛒",
                title: "Review Your Cart",
                desc: "Check your cart, choose colors, and review the total.",
              },
              {
                step: "3",
                emoji: "💬",
                title: "Order via WhatsApp",
                desc: 'Click "Order via WhatsApp" and we\'ll confirm your order instantly.',
              },
            ].map(({ step, emoji, title, desc }) => (
              <div
                key={step}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="bg-rose-600 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {step}
                  </span>
                  <span className="text-2xl">{emoji}</span>
                </div>
                <h3 className="font-bold text-gray-800">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 px-4 bg-rose-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl mb-4 block">🧶</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About CrochetCraft
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are a small home-based crochet business passionate about creating
            beautiful, handmade pieces. Each item is carefully crafted with
            premium yarns and lots of love. We accept custom orders — choose
            your own colors, sizes, and patterns. Place your order through
            WhatsApp for a quick and personal experience!
          </p>
        </div>
      </section>
    </div>
  );
}
