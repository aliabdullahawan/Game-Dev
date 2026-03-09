"use client";

import Link from "next/link";
import { Trash2, ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getCategoryEmoji, WHATSAPP_NUMBER } from "@/lib/utils";

function buildWhatsAppMessage(
  items: ReturnType<typeof useCart>["items"],
  totalPrice: number
): string {
  const lines = items.map(
    (item) =>
      `• *${item.product.name}* (${item.selectedColor}) x${item.quantity} — Rs ${(
        item.product.price * item.quantity
      ).toLocaleString()}`
  );

  return [
    "Hi! I'd like to place an order 🧶",
    "",
    "*Order Summary:*",
    ...lines,
    "",
    `*Total: Rs ${totalPrice.toLocaleString()}*`,
    "",
    "Please confirm availability and payment details. Thank you!",
  ].join("\n");
}

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <span className="text-7xl block mb-6">🛒</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Your cart is empty
        </h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven't added anything yet.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
        >
          <ShoppingBag className="w-5 h-5" /> Start Shopping
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage(items, totalPrice)
  )}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Your Cart 🛒
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-rose-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items list */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedColor}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center"
            >
              {/* Emoji thumbnail */}
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {getCategoryEmoji(item.product.category)}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">
                  {item.product.name}
                </h3>
                <p className="text-xs text-rose-500 mt-0.5">
                  Color: {item.selectedColor}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Rs {item.product.price.toLocaleString()} each
                </p>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.selectedColor,
                      item.quantity - 1
                    )
                  }
                  className="px-2 py-1 text-gray-500 hover:bg-gray-50 text-lg font-bold"
                >
                  −
                </button>
                <span className="px-3 py-1 text-sm font-semibold border-x border-gray-200">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      item.selectedColor,
                      item.quantity + 1
                    )
                  }
                  className="px-2 py-1 text-gray-500 hover:bg-gray-50 text-lg font-bold"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-gray-900 text-sm">
                  Rs {(item.product.price * item.quantity).toLocaleString()}
                </p>
                <button
                  onClick={() =>
                    removeFromCart(item.product.id, item.selectedColor)
                  }
                  className="text-gray-300 hover:text-rose-500 transition-colors mt-1"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Clear cart */}
          <div className="text-right">
            <button
              onClick={clearCart}
              className="text-sm text-gray-400 hover:text-rose-500 transition-colors underline"
            >
              Clear all items
            </button>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 text-lg mb-4">
              Order Summary
            </h2>

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex justify-between"
                >
                  <span className="line-clamp-1 flex-1 mr-2">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-medium text-gray-800 flex-shrink-0">
                    Rs {(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Total</span>
                <span className="font-extrabold text-rose-600 text-xl">
                  Rs {totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                * Delivery charges will be confirmed via WhatsApp
              </p>
            </div>

            {/* WhatsApp order button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-md text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>

            <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
              Clicking this will open WhatsApp with your order details
              pre-filled. We&apos;ll confirm and arrange delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
