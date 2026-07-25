"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  amazonStoreUrl: string;
};

export default function Header({ amazonStoreUrl }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
        <a href={isHome ? "#goals" : "/#goals"}>
          Health Goals
        </a>

        <a href={isHome ? "#products" : "/#products"}>
          Products
        </a>

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

        <a href={isHome ? "#reviews" : "/#reviews"}>
          Reviews
        </a>

        <a href={isHome ? "#faq" : "/#faq"}>
          FAQ
        </a>

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
        <a
          href={isHome ? "#goals" : "/#goals"}
          onClick={closeMenu}
        >
          Health Goals
        </a>

        <a
          href={isHome ? "#products" : "/#products"}
          onClick={closeMenu}
        >
          Products
        </a>

        <a
          href="/mens-wellness"
          onClick={closeMenu}
        >
          Men's Wellness
        </a>

        <a
          href="/powders"
          onClick={closeMenu}
        >
          Powders
        </a>

        <a
          href={isHome ? "#reviews" : "/#reviews"}
          onClick={closeMenu}
        >
          Reviews
        </a>

        <a
          href={isHome ? "#faq" : "/#faq"}
          onClick={closeMenu}
        >
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
