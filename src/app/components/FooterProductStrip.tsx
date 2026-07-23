"use client";

import ProductPreviewCard from "./ProductPreviewCard";

type FooterProductStripProps = {
  amazonStoreUrl: string;
};

export default function FooterProductStrip({
  amazonStoreUrl,
}: FooterProductStripProps) {
  const products = [
    {
      title: "GLP-1 Support",
      benefit: "Supports healthy metabolism",
      image: "/glp1-feature.png",
      href: amazonStoreUrl,
    },
    {
      title: "DIM+",
      benefit: "Hormone balance support",
      image: "/glp1-feature.png",
      href: amazonStoreUrl,
    },
    {
      title: "NAD+",
      benefit: "Daily cellular energy",
      image: "/glp1-feature.png",
      href: amazonStoreUrl,
    },
    {
      title: "Fiber",
      benefit: "Gut & digestive health",
      image: "/glp1-feature.png",
      href: amazonStoreUrl,
    },
    {
      title: "Spermidine",
      benefit: "Healthy ageing support",
      image: "/glp1-feature.png",
      href: amazonStoreUrl,
    },
  ];

  return (
    <section className="footerProductStrip">
      <div className="footerProductHeader">
        <p>DISCOVER THE COLLECTION</p>

        <h2>Explore the ForteMatic range.</h2>

        <span />
      </div>

      <div className="footerProductGrid">
        {products.map((product) => (
          <ProductPreviewCard
            key={product.title}
            title={product.title}
            benefit={product.benefit}
            image={product.image}
            href={product.href}
          />
        ))}
      </div>
    </section>
  );
}
