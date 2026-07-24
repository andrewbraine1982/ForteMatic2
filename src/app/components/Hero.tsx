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
            <span>Shop on</span>

            <span className={styles.amazonLogoText}>
              amazon
              <span className={styles.amazonSmile} />
            </span>
          </a>

          <a className={styles.secondaryBtn} href="#products">
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
        <img
          src="/hero-clean.png"
          alt="ForteMatic supplements"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
