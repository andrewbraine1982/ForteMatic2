import styles from "./Hero.module.css";

type HeroProps = {
  amazonStoreUrl: string;
};

export default function Hero({ amazonStoreUrl }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.stars}>
          <span className={styles.greenStars}>★★★★★</span>
          <span>60,000+ happy customers</span>
        </div>

        <h1>
          Elevate your everyday{" "}
          <span className={styles.italicWord}>health.</span>
        </h1>

        <p>
          Premium daily supplements designed to support GLP-1 support, gut
          health, metabolism, energy, hormone support and long-term wellbeing.
        </p>

        <div className={styles.heroButtons}>
          <a
            className={styles.primaryBtn}
            href={amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.buyText}>Buy now on</span>

            <span className={styles.amazonText}>
              Amazon
            </span>

            <span className={styles.arrow}>
              →
            </span>
          </a>

          <a
            className={styles.secondaryBtn}
            href="#find-your-formula"
          >
            Explore Products
          </a>
        </div>

        <ul className={styles.trustRow}>
          <li className={styles.trustItem}>
            <span aria-hidden="true">🌱</span>
            <p>Premium Ingredients</p>
          </li>

          <li className={styles.trustItem}>
            <span aria-hidden="true">🧪</span>
            <p>Science Backed</p>
          </li>

          <li className={styles.trustItem}>
            <span aria-hidden="true">🇺🇸</span>
            <p>Made in USA</p>
          </li>

          <li className={styles.trustItem}>
            <span aria-hidden="true">✅</span>
            <p>GMP Certified</p>
          </li>
        </ul>
      </div>

      <div className={styles.heroRight}>
        <>
          <img
            src="/hero-clean.png"
            alt="ForteMatic supplements"
            className={`${styles.heroImage} ${styles.desktopHero}`}
          />

          <img
            src="/hero_mobile.png"
            alt="ForteMatic supplements"
            className={`${styles.heroImage} ${styles.mobileHero}`}
          />
        </>
      </div>
    </section>
  );
}
