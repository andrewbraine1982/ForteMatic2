"use client";

import {
  CSSProperties,
  MouseEvent,
  useRef,
  useState,
} from "react";

type ProductShowcaseProps = {
  amazonStoreUrl: string;
};

type Product = {
  id: string;
  tab: string;
  title: string;
  benefit: string;
  description: string;
  image: string;
  reviews: string;
  accent: string;
};

const products: Product[] = [
  {
    id: "glp1",
    tab: "GLP-1",
    title: "GLP-1 Support",
    benefit: "Metabolism & weight management support",
    description:
      "A premium daily formula designed to complement healthy routines and support your wellness journey.",
    image: "/products/GLP.png",
    reviews: "10,000+ reviews",
    accent: "76, 145, 255",
  },
  {
    id: "akkermansia",
    tab: "Akkermansia",
    title: "Akkermansia",
    benefit: "Advanced gut microbiome support",
    description:
      "Targeted daily support created for a balanced gut microbiome, digestive wellness and everyday vitality.",
    image: "/products/Akkermansia.png",
    reviews: "4,000+ reviews",
    accent: "37, 193, 164",
  },
  {
    id: "fiber",
    tab: "Fiber",
    title: "Daily Fiber",
    benefit: "Digestive health & regularity support",
    description:
      "A convenient daily fiber formula designed to support digestion, regularity and lasting gut health.",
    image: "/products/FIBER.png",
    reviews: "4,600+ reviews",
    accent: "232, 153, 66",
  },
  {
    id: "dim",
    tab: "DIM+",
    title: "DIM+",
    benefit: "Hormone balance support",
    description:
      "A thoughtfully formulated supplement designed to support healthy hormone metabolism and everyday balance.",
    image: "/products/dim.png",
    reviews: "3,800+ reviews",
    accent: "72, 178, 105",
  },
  {
    id: "nad",
    tab: "NAD+",
    title: "NAD+",
    benefit: "Cellular energy & healthy ageing",
    description:
      "Premium cellular support created for energy production, vitality and a healthy approach to ageing.",
    image: "/products/NAD.png",
    reviews: "3,500+ reviews",
    accent: "162, 108, 255",
  },
  {
    id: "spermidine",
    tab: "Spermidine",
    title: "Spermidine",
    benefit: "Longevity & cellular renewal support",
    description:
      "Daily longevity support designed to complement healthy habits and promote cellular wellbeing.",
    image: "/products/Spermidine.png",
    reviews: "2,800+ reviews",
    accent: "228, 199, 100",
  },
];

export default function ProductShowcase({
  amazonStoreUrl,
}: ProductShowcaseProps) {
  const [activeProductId, setActiveProductId] = useState("glp1");
  const showcaseRef = useRef<HTMLElement | null>(null);

  const activeProduct =
    products.find((product) => product.id === activeProductId) ??
    products[0];

  const showcaseStyle = {
    "--showcase-accent": activeProduct.accent,
  } as CSSProperties;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const showcase = showcaseRef.current;

    if (!showcase) {
      return;
    }

    const bounds = showcase.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;

    const moveX = (relativeX / bounds.width - 0.5) * 14;
    const moveY = (relativeY / bounds.height - 0.5) * 10;

    showcase.style.setProperty(
      "--showcase-mouse-x",
      `${relativeX}px`
    );

    showcase.style.setProperty(
      "--showcase-mouse-y",
      `${relativeY}px`
    );

    showcase.style.setProperty(
      "--showcase-bottle-x",
      `${moveX}px`
    );

    showcase.style.setProperty(
      "--showcase-bottle-y",
      `${moveY}px`
    );
  };

  const handleMouseLeave = () => {
    const showcase = showcaseRef.current;

    if (!showcase) {
      return;
    }

    showcase.style.setProperty("--showcase-bottle-x", "0px");
    showcase.style.setProperty("--showcase-bottle-y", "0px");
  };

  return (
    <section
      ref={showcaseRef}
      className="productShowcase"
      style={showcaseStyle}
      aria-labelledby="product-showcase-title"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="productShowcasePointerGlow" aria-hidden="true" />

      <div className="productShowcaseInner">
        <header className="productShowcaseHeader">
          <p>Discover the collection</p>

          <h2 id="product-showcase-title">
            Find your daily formula.
          </h2>
        </header>

        <div
          className="productShowcaseTabs"
          role="tablist"
          aria-label="Choose a ForteMatic product"
        >
          {products.map((product) => {
            const isActive = product.id === activeProduct.id;

            return (
              <button
                key={product.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`productShowcaseTab ${
                  isActive ? "isActive" : ""
                }`}
                onClick={() => setActiveProductId(product.id)}
              >
                {product.tab}
              </button>
            );
          })}
        </div>

        <div className="productShowcaseStage">
          <div className="productShowcaseVisual">
            <div
              className="productShowcaseHalo"
              aria-hidden="true"
            />

            <div
              className="productShowcaseOrbit productShowcaseOrbitOne"
              aria-hidden="true"
            />

            <div
              className="productShowcaseOrbit productShowcaseOrbitTwo"
              aria-hidden="true"
            />

            <figure
              key={activeProduct.id}
              className="productShowcaseBottle"
            >
              <img
                src={activeProduct.image}
                alt={`${activeProduct.title} supplement bottle`}
              />
            </figure>

            <div
              className="productShowcaseShadow"
              aria-hidden="true"
            />
          </div>

          <article
            key={`${activeProduct.id}-content`}
            className="productShowcaseContent"
          >
            <p className="productShowcaseNumber">
              {String(
                products.findIndex(
                  (product) => product.id === activeProduct.id
                ) + 1
              ).padStart(2, "0")}
              <span>/</span>
              {String(products.length).padStart(2, "0")}
            </p>

            <p className="productShowcaseBenefit">
              {activeProduct.benefit}
            </p>

            <h3>{activeProduct.title}</h3>

            <p className="productShowcaseDescription">
              {activeProduct.description}
            </p>

            <div className="productShowcaseRating">
              <span aria-label="Five stars">★★★★★</span>
              <p>{activeProduct.reviews}</p>
            </div>

            <a
              className="productShowcaseButton"
              href={amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop {activeProduct.tab}
              <span aria-hidden="true">→</span>
            </a>

            <p className="productShowcaseGuarantee">
              30-day money-back guarantee
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
