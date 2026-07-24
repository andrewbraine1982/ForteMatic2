"use client";

import styles from "./Header.module.css";

type HeaderProps = {
  amazonStoreUrl: string;
};

export default function Header({ amazonStoreUrl }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        ForteMatic
        <span className={styles.registeredMark}>®</span>
      </a>

      <nav className={styles.nav}>
        <a href="#goals">Health Goals</a>
        <a href="#products">Products</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a
        className={styles.navButton}
        href={amazonStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop Now
      </a>
    </header>
  );
}
