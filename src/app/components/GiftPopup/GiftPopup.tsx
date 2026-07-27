"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./module.css";

const STORAGE_KEY = "fortematicGiftPopupDismissedAt";
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
const OPEN_DELAY = 1200;
const CLOSE_ANIMATION_DURATION = 450;

export default function GiftPopup() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissedAt = window.localStorage.getItem(STORAGE_KEY);

    if (dismissedAt) {
      const timeSinceDismissal = Date.now() - Number(dismissedAt);

      if (timeSinceDismissal < SEVEN_DAYS) {
        return;
      }
    }

    const openTimer = window.setTimeout(() => {
      setIsMounted(true);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    }, OPEN_DELAY);

    return () => window.clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMounted]);

  const closePopup = () => {
    window.localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsVisible(false);

    window.setTimeout(() => {
      setIsMounted(false);
    }, CLOSE_ANIMATION_DURATION);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`${styles.overlay} ${
        isVisible ? styles.overlayVisible : ""
      }`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <section
        className={`${styles.popup} ${
          isVisible ? styles.popupVisible : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gift-popup-title"
        aria-describedby="gift-popup-description"
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={closePopup}
          aria-label="Close complimentary gift message"
        >
          <span />
          <span />
        </button>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Complimentary gift</p>

          <h2 id="gift-popup-title" className={styles.title}>
            We&apos;d love
            <br />
            your feedback.
          </h2>

          <div className={styles.divider}>
            <span />
            <span className={styles.star}>★</span>
            <span />
          </div>

          <div
            id="gift-popup-description"
            className={styles.description}
          >
            <p>Purchased ForteMatic through Amazon?</p>

            <p>
              Leave an honest review and email us
              a screenshot of your posted review
              at info@fortematic.com
            </p>

            <p>
              After submitting eligible feedback, you may choose a
              complimentary ForteMatic accessory, subject to availability
              and programme terms.
            </p>
          </div>

          <Link
            href="/rewards"
            className={styles.primaryButton}
            onClick={closePopup}
          >
            Claim your gift
          </Link>

          <button
            type="button"
            className={styles.continueButton}
            onClick={closePopup}
          >
            Continue shopping
          </button>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageGlow} />

          <Image
            src="/Merchandise_range.png"
            alt="ForteMatic premium shaker, insulated bottle, T-shirt and tote bag"
            fill
            priority
            sizes="(max-width: 760px) 88vw, 52vw"
            className={styles.merchandiseImage}
          />
        </div>

        <p className={styles.privacy}>
          Secure and private. Your information is handled with care.
        </p>
      </section>
    </div>
  );
}
