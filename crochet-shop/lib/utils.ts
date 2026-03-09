export function getCategoryEmoji(category: string): string {
  const map: Record<string, string> = {
    Blankets: "🛏️",
    Accessories: "🎩",
    Bags: "👜",
    Toys: "🐰",
    "Home Decor": "🌿",
    Baby: "👶",
  };
  return map[category] ?? "🧶";
}

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567";
