"use client";

import Header from "../components/Header";
import ClosingExperience from "../components/ClosingExperience";

export default function MensWellnessPage() {
  const amazonStoreUrl =
    "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

  return (
    <main className="mensPage">

      <Header amazonStoreUrl={amazonStoreUrl} />

      <section className="mensHero">

        <div className="mensHeroContent">

          <p className="mensEyebrow">
            MEN'S WELLNESS
          </p>

          <h1>
            V-PILL
          </h1>

          <h2>
            Fast-acting natural support
            <br />
            when confidence matters most.
          </h2>

          <p className="mensIntro">
            Premium nitric oxide support featuring
            L-Arginine HCL, L-Arginine Alpha-Ketoglutarate,
            L-Citrulline DL-Malate and Beetroot Powder.
            Designed to complement healthy circulation,
            vitality and everyday confidence.
          </p>

          <div className="mensButtons">

            <a
              className="mensPrimaryButton"
              href={amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy on Amazon →
            </a>

            <a
              className="mensSecondaryButton"
              href="#ingredients"
            >
              View Ingredients
            </a>

          </div>

        </div>

        <div className="mensHeroImage">

          <img
            src="/v-pill-box.png"
            alt="ForteMatic V-Pill"
          />

        </div>

      </section>

      <section
        id="ingredients"
        className="mensPlaceholder"
      >

        <h2>Ingredient Spotlight</h2>

        <p>
          Coming next...
        </p>

      </section>

      <ClosingExperience amazonStoreUrl={amazonStoreUrl} />

    </main>
  );
}
