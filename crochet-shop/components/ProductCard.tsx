"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { getCategoryEmoji } from "@/lib/utils";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addToCart(product, product.colors[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
        {/* Product image placeholder */}
        <div className="relative h-52 bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center">
          <span className="text-6xl select-none">
            {getCategoryEmoji(product.category)}
          </span>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
          {product.featured && product.inStock && (
            <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-rose-500 font-medium uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-gray-800 group-hover:text-rose-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>

          {/* Colors */}
          <div className="flex gap-1 mt-2 flex-wrap">
            {product.colors.slice(0, 4).map((c) => (
              <span
                key={c}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Price + cart */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-gray-900 text-lg">
              Rs {product.price.toLocaleString()}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-xl transition-colors ${
                product.inStock
                  ? added
                    ? "bg-green-500 text-white"
                    : "bg-rose-600 hover:bg-rose-700 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              {added ? "Added!" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
