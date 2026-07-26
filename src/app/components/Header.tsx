"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useMarket } from "./MarketProvider";
import MarketSelector from "./MarketSelector";

export default function Header() {
  const { market } = useMarket();

  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMensWellness = pathname === "/mens-wellness";

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goalsLink = isHome ? "#goals" : "/#goals";
  const productsLink = isHome ? "#products" : "/#products";
  const reviewsLink = isHome ? "#reviews" : "/#reviews";
  const faqLink = isMensWellness
    ? "#faq"
    : isHome
    ? "#faq"
    : "/#faq";

  return (
  <header className={styles.header}>
  <a className={styles.logo} href="/">
    ForteMatic
    <span className={styles.registeredMark}>®</span>
  </a>

  <MarketSelector />

  <nav className={styles.nav}>
        <a href={goalsLink}>Health Goals</a>

        <a
          href="https://fortematic.com/best-glp-1-supplement/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GLP-1
        </a>

        <a href={productsLink}>Products</a>

        <a
          href="/mens-wellness"
          className={pathname === "/mens-wellness" ? styles.activeNav : ""}
        >
          Men's Wellness
        </a>

        <a
          href="/powders"
          className={pathname === "/powders" ? styles.activeNav : ""}
        >
          Powders
        </a>

        <a href={reviewsLink}>Reviews</a>

        <a href={faqLink}>FAQ</a>

     <a
  className={styles.navButton}
  href={market.amazonUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  Shop Now
</a>
      </nav>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <a href={goalsLink} onClick={closeMenu}>
          Health Goals
        </a>

        <a
          href="https://fortematic.com/best-glp-1-supplement/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          GLP-1
        </a>

        <a href={productsLink} onClick={closeMenu}>
          Products
        </a>

        <a href="/mens-wellness" onClick={closeMenu}>
          Men's Wellness
        </a>

        <a href="/powders" onClick={closeMenu}>
          Powders
        </a>

        <a href={reviewsLink} onClick={closeMenu}>
          Reviews
        </a>

        <a href={faqLink} onClick={closeMenu}>
          FAQ
        </a>

        <a
          className={styles.mobileButton}
          href={market.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}
