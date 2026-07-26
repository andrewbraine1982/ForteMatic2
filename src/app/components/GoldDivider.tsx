import styles from "./GoldDivider.module.css";

export default function GoldDivider() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.line}></div>

      <div className={styles.badge}>
        <span className={styles.wordmark}>
          FORTE<span className={styles.gold}>MATIC</span>
        </span>

        <span className={styles.tagline}>
          SCIENCE • NATURE
        </span>
      </div>

      <div className={styles.line}></div>

    </div>
  );
}
