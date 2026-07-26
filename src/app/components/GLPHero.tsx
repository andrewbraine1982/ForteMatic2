"use client";

import Image from "next/image";
import styles from "./GLPHero.module.css";

export default function GLPHero() {
  return (
    <section className={styles.glpHero}>
      <div className={styles.glpHeroContent}>
        <span className={styles.glpEyebrow}>
          FORTEMATIC GLP-1
        </span>

        <h1>
          Support your body's
          <br />
          natural GLP-1 pathways.
        </h1>

        <p>
          A premium science-backed formula designed to
          support appetite control, metabolic health,
          digestive wellness and everyday wellbeing.
        </p>

        <div className={styles.glpButtons}>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Buy Now on Amazon
          </a>

          <a
            href="#pathway"
            className={styles.secondaryButton}
          >
            Learn How It Works
          </a>
        </div>
      </div>

      <div className={styles.glpHeroImage}>
        <div className={styles.heroGlow}></div>

        <div className={styles.heroBottle}>
          <Image
            src="/products/GLP.png"
            alt="ForteMatic GLP-1"
            width={460}
            height={680}
            priority
            className={styles.heroBottleImage}
          />
        </div>
      </div>
    </section>
  );
}
