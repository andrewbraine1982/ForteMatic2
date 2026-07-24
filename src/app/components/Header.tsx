"use client";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  amazonStoreUrl: string;
};

export default function Header({ amazonStoreUrl }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        ForteMatic
        <span className={styles.registeredMark}>®</span>
      </a>

      <nav className={styles.nav}>
    <a href="#goals">Health Goals</a>

<a href="#products">Products</a>

<a
  href="/mens-wellness"
  className={pathname === "/mens-wellness" ? styles.activeNav : ""}
>
  Men's Wellness
</a>

<a href="#reviews">Reviews</a>

<a href="#faq">FAQ</a>

        <a
          className={styles.navButton}
          href={amazonStoreUrl}
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
        <a href="#goals" onClick={closeMenu}>
          Health Goals
        </a>

        <a href="#products" onClick={closeMenu}>
          Products
        </a>

        <a href="#reviews" onClick={closeMenu}>
          Reviews
        </a>

        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>

        <a
          className={styles.mobileButton}
          href={amazonStoreUrl}
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
