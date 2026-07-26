"use client";

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
          support appetite control, metabolic health and
          everyday wellness.
        </p>

        <div className={styles.glpButtons}>

          <a
            href="#"
            className={styles.primaryButton}
          >
            Shop on Amazon
          </a>

          <a
            href="#ingredients"
            className={styles.secondaryButton}
          >
            Learn How It Works
          </a>

        </div>

      </div>

      <div className={styles.glpHeroImage}>

        {/* GLP-1 bottle image goes here */}

      </div>

    </section>
  );
}
