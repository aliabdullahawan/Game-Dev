"use client";

import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { use, useState } from "react";
import { ArrowLeft, MessageCircle, ShoppingCart, Check } from "lucide-react";
import { getProductById } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { getCategoryEmoji, WHATSAPP_NUMBER } from "@/lib/utils";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = getProductById(id);
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] ?? ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const handleAddToCart = () => {
    addToCart(product, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappMessage = `Hi! I'd like to order:\n\n*${product.name}*\nColor: ${selectedColor}\nQty: ${quantity}\nPrice: Rs ${(product.price * quantity).toLocaleString()}\n\nPlease confirm availability. Thank you!`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-rose-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image placeholder */}
        <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-3xl h-80 md:h-full flex items-center justify-center text-9xl relative">
          {getCategoryEmoji(product.category)}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center">
              <span className="bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-4">
          <div>
            <Link
              href="/products"
              className="text-xs text-rose-500 font-semibold uppercase tracking-wide hover:underline"
            >
              {product.category}
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
              {product.name}
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="text-3xl font-bold text-gray-900">
            Rs {product.price.toLocaleString()}
          </div>

          {/* Color picker */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Color:{" "}
              <span className="text-rose-600 font-normal">{selectedColor}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    selectedColor === color
                      ? "border-rose-600 bg-rose-50 text-rose-700 font-semibold"
                      : "border-gray-200 text-gray-600 hover:border-rose-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-gray-700">Quantity:</p>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 font-bold"
              >
                −
              </button>
              <span className="px-4 py-2 text-sm font-semibold text-gray-800 border-x border-gray-200">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-50 font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
            Total:{" "}
            <span className="font-bold text-gray-900 text-lg">
              Rs {(product.price * quantity).toLocaleString()}
            </span>
          </div>

          {/* Action buttons */}
          {product.inStock ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 rounded-xl transition-colors ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-rose-600 hover:bg-rose-700 text-white"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </>
                )}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Order via WhatsApp
              </a>
            </div>
          ) : (
            <div className="bg-gray-100 text-gray-500 text-center py-3 rounded-xl font-medium">
              Currently Out of Stock
            </div>
          )}

          <p className="text-xs text-gray-400 text-center">
            💬 Questions? Chat with us on WhatsApp for custom sizes or colors.
          </p>
        </div>
      </div>
    </div>
  );
}
