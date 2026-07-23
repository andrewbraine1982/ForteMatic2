"use client";

type ProductPreviewCardProps = {
  title: string;
  benefit: string;
  image: string;
  href: string;
};

export default function ProductPreviewCard({
  title,
  benefit,
  image,
  href,
}: ProductPreviewCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="productPreviewCard"
    >
      <div className="productPreviewImage">
        <img src={image} alt={title} />
      </div>

      <div className="productPreviewContent">
        <h3>{title}</h3>
        <p>{benefit}</p>

        <span className="productPreviewArrow">
          Explore →
        </span>
      </div>
    </a>
  );
}
