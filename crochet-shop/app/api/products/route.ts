import { NextResponse } from "next/server";
import { products, getProductById } from "@/lib/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const category = searchParams.get("category");

  if (id) {
    const product = getProductById(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  if (category && category !== "All") {
    const filtered = products.filter((p) => p.category === category);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(products);
}
