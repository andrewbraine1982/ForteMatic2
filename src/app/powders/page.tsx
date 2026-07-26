"use client";

import Image from "next/image";
import Header from "../components/Header";

const powders = [
  {
    name: "Creatine",
    subtitle: "Micronised Monohydrate",
    image: "/fortematic_creatine.png",
  },
  {
    name: "Whey Protein",
    subtitle: "Premium Protein Isolate",
    image: "/fortematic_whey.png",
  },
  {
    name: "Marine Collagen",
    subtitle: "Hydrolysed Peptides",
    image: "/fortematic_collagen.png",
  },
  {
    name: "Daily Greens",
    subtitle: "Superfood Blend",
    image: "/fortematic_green.png",
  },
  {
    name: "Electrolytes",
    subtitle: "Advanced Hydration",
    image: "/fortematic_electrolytes.png",
  },
  {
    name: "Hair Food",
    subtitle: "Hair, Skin & Nails",
    image: "/fortematic_hairfood.png",
  },
];

export default function PowdersPage() {
  const amazonStoreUrl =
    "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

  return (
    <main className="powdersPage">
  <Header />

      <section className="powdersHero">
        <p className="powdersEyebrow">FORTEMATIC LABS</p>

        <h1>Powders.</h1>

        <p className="powdersLead">
          Premium daily nutrition.
          <br />
          Designed for modern wellness.
        </p>
      </section>

      <section className="collectionSection">
        <div className="collectionHeading">
          <span>THE COLLECTION</span>

          <h2>Currently in Development</h2>
        </div>

        <div className="powderGrid">
          {powders.map((product) => (
            <article key={product.name} className="powderCard">
              <div className="imageGlow" />

              <Image
                src={product.image}
                alt={product.name}
                width={350}
                height={420}
                className="powderImage"
              />

              <h3>{product.name}</h3>

              <p>{product.subtitle}</p>

              <div className="statusBadge">
                ● In Development
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
