"use client";
import FooterProductStrip from "./FooterProductStrip";

import { MouseEvent, useEffect, useRef, useState } from "react";

type ClosingExperienceProps = {
  amazonStoreUrl: string;
};

export default function ClosingExperience({
  amazonStoreUrl,
}: ClosingExperienceProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const bounds = section.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;

    section.style.setProperty("--footer-mouse-x", `${mouseX}px`);
    section.style.setProperty("--footer-mouse-y", `${mouseY}px`);

    const moveX = (mouseX / bounds.width - 0.5) * 8;
    const moveY = (mouseY / bounds.height - 0.5) * 8;

    section.style.setProperty("--footer-image-x", `${moveX}px`);
    section.style.setProperty("--footer-image-y", `${moveY}px`);
  };

  const handleMouseLeave = () => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    section.style.setProperty("--footer-image-x", "0px");
    section.style.setProperty("--footer-image-y", "0px");
  };

  return (
    <div
      ref={sectionRef}
      className={`closingExperience ${isVisible ? "isVisible" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <section className="brandStorySection">
        <div className="brandStoryImage" aria-hidden="true"></div>
        <div className="brandStoryOverlay" aria-hidden="true"></div>

        <div className="brandStoryContent">
          <p className="brandStoryEyebrow">The ForteMatic approach</p>

          <h2>
            Better ingredients.
            <br />
            Better habits.
            <br />
            <span>Better health.</span>
          </h2>

          <p className="brandStoryText">
            Premium science-backed supplements designed to fit naturally into
            everyday wellness routines.
          </p>

          <div className="brandStoryActions">
            <a
              className="closingPrimaryButton"
              href={amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop ForteMatic
              <span aria-hidden="true">→</span>
            </a>

            <a className="closingSecondaryButton" href="#products">
              Explore the range
            </a>
          </div>
        </div>
      </section>
<FooterProductStrip
  amazonStoreUrl={amazonStoreUrl}
/>
      
      <footer className="premiumFooter">
        <div className="footerGlow" aria-hidden="true"></div>

        <div className="premiumFooterTop">
          <div className="premiumFooterBrand">
            <a className="premiumFooterLogo" href="/">
              ForteMatic<span>®</span>
            </a>

            <p>
              Premium supplements supporting modern wellness, healthy routines
              and long-term wellbeing.
            </p>

            <a
              className="footerEmail"
              href="mailto:info@fortematic.com"
            >
              info@fortematic.com
            </a>
          </div>

          <div className="premiumFooterColumn">
            <h3>Products</h3>

            <a href="#products">GLP-1 Support</a>
            <a href="#products">Gut Health</a>
            <a href="#products">Metabolism</a>
            <a href="#products">Energy</a>
            <a href="#products">Longevity</a>
          </div>

          <div className="premiumFooterColumn">
            <h3>Discover</h3>

            <a href="#goals">Health Goals</a>
            <a href="#products">Product Range</a>
            <a href="#reviews">Customer Reviews</a>
            <a href="#faq">Frequently Asked Questions</a>
          </div>

          <div className="premiumFooterColumn premiumFooterCompany">
            <h3>Company</h3>

            <strong>Braine &amp; Braine Co LLC</strong>

            <address>
              30 N Gould St Ste R
              <br />
              Sheridan, WY 82801
              <br />
              United States
            </address>

            <a href="mailto:info@fortematic.com">
              info@fortematic.com
            </a>
          </div>
        </div>

        <div className="footerTrustStrip">
          <div className="footerTrustItem">
            <span>★★★★★</span>
            <p>10,000+ Reviews</p>
          </div>

          <div className="footerTrustItem">
            <span>60,000+</span>
            <p>Happy Customers</p>
          </div>

          <div className="footerTrustItem">
            <span>20+</span>
            <p>Countries Served</p>
          </div>

          <div className="footerTrustItem">
            <span>30-Day</span>
            <p>Money-Back Guarantee</p>
          </div>

          <div className="footerTrustItem">
            <span>USA</span>
            <p>Made in the USA</p>
          </div>
        </div>

        <div className="premiumFooterBottom">
          <div>
            <p className="footerSignature">
              Designed to support healthier tomorrows.
            </p>

            <p>
              © 2026 ForteMatic® · Braine &amp; Braine Co LLC
            </p>
          </div>

          <div className="footerLegalLinks">
            <a href="#faq">FAQ</a>
            <a href="mailto:info@fortematic.com">Contact</a>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
