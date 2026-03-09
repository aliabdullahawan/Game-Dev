export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  colors: string[];
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cozy Granny Square Blanket",
    description:
      "Handcrafted granny square blanket made with premium 100% cotton yarn. Perfect for adding warmth and color to any room. Available in custom color combinations.",
    price: 4500,
    category: "Blankets",
    image: "/images/blanket1.jpg",
    colors: ["Cream", "Sage Green", "Dusty Rose"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Boho Bucket Hat",
    description:
      "Stylish crochet bucket hat, perfect for sunny days. Made with durable cotton blend yarn. One size fits most adults.",
    price: 1200,
    category: "Accessories",
    image: "/images/hat1.jpg",
    colors: ["Natural", "Terracotta", "Sage"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Market Tote Bag",
    description:
      "Eco-friendly crochet tote bag — great for groceries, beach trips, or everyday use. Strong cotton cord ensures it can carry heavy loads.",
    price: 1800,
    category: "Bags",
    image: "/images/bag1.jpg",
    colors: ["Natural", "Beige", "Olive"],
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Amigurumi Bunny",
    description:
      "Adorable handmade crochet bunny toy, perfect as a gift for little ones. Made with hypoallergenic stuffing and soft yarn.",
    price: 900,
    category: "Toys",
    image: "/images/bunny1.jpg",
    colors: ["White", "Pink", "Gray"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Chunky Knit Beanie",
    description:
      "Warm and cozy crochet beanie made with chunky merino-blend yarn. Perfect for cold weather. Available in multiple colors.",
    price: 800,
    category: "Accessories",
    image: "/images/beanie1.jpg",
    colors: ["Cream", "Charcoal", "Rust", "Navy"],
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    name: "Plant Hanger Set",
    description:
      "Set of 3 macramé-style crochet plant hangers. Handmade with natural cotton rope. Suitable for pots up to 20cm diameter.",
    price: 2200,
    category: "Home Decor",
    image: "/images/hanger1.jpg",
    colors: ["Natural"],
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    name: "Baby Booties",
    description:
      "Soft and snuggly crochet baby booties. Made with gentle baby-safe yarn. Available in sizes 0–6 months and 6–12 months.",
    price: 650,
    category: "Baby",
    image: "/images/booties1.jpg",
    colors: ["White", "Pink", "Blue", "Yellow"],
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Sunflower Cushion Cover",
    description:
      "Beautiful crochet cushion cover with a sunflower motif. Fits a standard 45×45cm pillow. Zipper closure for easy removal.",
    price: 1600,
    category: "Home Decor",
    image: "/images/cushion1.jpg",
    colors: ["Yellow & White", "Orange & Cream"],
    inStock: false,
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];
