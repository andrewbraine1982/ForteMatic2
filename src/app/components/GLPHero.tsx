"use client";
import "./GLPHero.css";

export default function GLPHero() {
  return (
    <section className="glpHero">

      <div className="glpHeroContent">

        <span className="glpEyebrow">
          FORTEMATIC GLP-1
        </span>

        <h1>
          Support your body's
          <br />
          natural GLP-1 pathways.
        </h1>

        <p>
          A premium science-backed formula designed to
          support appetite control, metabolic health and
          everyday wellness.
        </p>

        <div className="glpButtons">

          <a
            href="#"
            className="primaryButton"
          >
            Shop on Amazon
          </a>

          <a
            href="#ingredients"
            className="secondaryButton"
          >
            Learn How It Works
          </a>

        </div>

      </div>

      <div className="glpHeroImage">

        {/* GLP-1 bottle image goes here */}

      </div>

    </section>
  );
}
