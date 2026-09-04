import styles from "./Hero.module.css";

type HeroProps = {
  amazonStoreUrl: string;
};

export default function Hero({ amazonStoreUrl }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} aria-hidden="true" />

      <div className={styles.heroContent}>
        <div className={styles.stars}>
          <span className={styles.greenStars}>★★★★★</span>
          <span className={styles.customerText}>
            60,000+ happy customers
          </span>
        </div>

        <div className={styles.brandMark}>ForteMatic®</div>

        <h1>
          <span>LA DOLCE</span>
          <span>VITA</span>
        </h1>

        <div className={styles.goldDivider}>
          <span />
          <span className={styles.goldLeaf}>✦</span>
          <span />
        </div>

        <h2>ELEVATED SUPPORT. EVERY DAY.</h2>

        <p className={styles.intro}>
          Premium daily supplements for gut health, metabolism, energy,
          hormone support and healthy ageing.
        </p>

        <ul className={styles.trustRow}>
          <li>
            <span className={styles.trustIcon}>✦</span>
            <span>Premium<br />Ingredients</span>
          </li>

          <li>
            <span className={styles.trustIcon}>⌬</span>
            <span>Science<br />Backed</span>
          </li>

          <li>
            <span className={styles.trustIcon}>◇</span>
            <span>Made in<br />USA</span>
          </li>

          <li>
            <span className={styles.trustIcon}>✓</span>
            <span>Third-Party<br />Tested</span>
          </li>
        </ul>

        <div className={styles.heroButtons}>
          <a
            className={styles.primaryBtn}
            href={amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop Best Sellers
            <span className={styles.arrow}>→</span>
          </a>

          <a
            className={styles.secondaryBtn}
            href="#goals"
          >
            Explore the Range
          </a>
        </div>
      </div>
    </section>
  );
}
