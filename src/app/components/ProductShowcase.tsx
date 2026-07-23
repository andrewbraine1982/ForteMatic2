"use client";

import { useState } from "react";

type Props = {
  amazonStoreUrl: string;
};

const products = [
  {
    name: "GLP-1",
    title: "GLP-1 Support",
    benefit: "Metabolism & Weight Management",
    image: "/products/GLP.png",
    reviews: "10,000+ Reviews",
    description:
      "Premium daily metabolic support designed to complement healthy habits and help you feel your best.",
  },
  {
    name: "Akkermansia",
    title: "Akkermansia",
    benefit: "Advanced Gut Health",
    image: "/products/Akkermansia.png",
    reviews: "4,000+ Reviews",
    description:
      "Supports digestive wellness and a balanced gut microbiome with a premium daily formula.",
  },
  {
    name: "Fiber",
    title: "Daily Fiber",
    benefit: "Digestive Support",
    image: "/products/FIBER.png",
    reviews: "4,600+ Reviews",
    description:
      "An easy daily fibre formula supporting digestion, regularity and overall gut health.",
  },
  {
    name: "DIM+",
    title: "DIM+",
    benefit: "Hormone Support",
    image: "/products/dim.png",
    reviews: "3,800+ Reviews",
    description:
      "A premium formula supporting healthy hormone metabolism and everyday balance.",
  },
  {
    name: "NAD+",
    title: "NAD+",
    benefit: "Healthy Ageing",
    image: "/products/NAD.png",
    reviews: "3,500+ Reviews",
    description:
      "Supports cellular energy production and long-term vitality.",
  },
  {
    name: "Spermidine",
    title: "Spermidine",
    benefit: "Longevity Support",
    image: "/products/Spermidine.png",
    reviews: "2,800+ Reviews",
    description:
      "Designed to complement healthy ageing and cellular renewal.",
  },
];

export default function ProductShowcase({
  amazonStoreUrl,
}: Props) {
  const [active, setActive] = useState(0);

  const product = products[active];

  return (
    <section className="productShowcase">

      <h2>Find Your Formula</h2>

      <p className="productSubtitle">
        Premium supplements for every wellness goal.
      </p>

      <div className="productTabs">
        {products.map((p, index) => (
          <button
            key={p.name}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="productCard">

        <img
          src={product.image}
          alt={product.title}
        />

        <div className="productInfo">

          <h3>{product.title}</h3>

          <h4>{product.benefit}</h4>

          <p>{product.description}</p>

          <div className="reviews">
            ★★★★★ {product.reviews}
          </div>

          <a
            href={amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shopButton"
          >
            Shop on Amazon →
          </a>

        </div>

      </div>

    </section>
  );
}
