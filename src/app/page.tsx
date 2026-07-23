"use client";

import { useEffect, useRef, useState } from "react";
import ClosingExperience from "./components/ClosingExperience";

type AnimatedNumberProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

function AnimatedNumber({
  end,
  suffix = "",
  duration = 1600,
}: AnimatedNumberProps) {
  const [value, setValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(end * easedProgress);

          setValue(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [duration, end]);

  return (
    <span ref={numberRef}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Home() {
  const amazonStoreUrl =
    "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

  return (
    <main>
      <div className="topBar">
        <span>🏷️ SUBSCRIBE & SAVE 15%</span>
        <span>🚚 FREE DELIVERY OVER €50</span>
        <span>🌿 SCIENCE-BACKED. PLANT-POWERED.</span>
        <span>🛡️ 30-DAY MONEY BACK GUARANTEE</span>
      </div>

      <header className="header">
        <a className="logo" href="/">
          ForteMatic<span className="registeredMark">®</span>
        </a>

        <nav className="nav">
          <a href="#goals">Health Goals</a>
          <a href="#products">Products</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
          className="navButton"
          href={amazonStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
        </a>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <div className="stars">
            <span className="greenStars">★★★★★</span>
            <span>60,000+ happy customers</span>
          </div>

          <h1>
            Elevate your everyday <span className="italicWord">health.</span>
          </h1>

          <p>
            Premium daily supplements designed to support GLP-1 support, gut
            health, metabolism, energy, hormone support and long-term wellbeing.
          </p>

          <div className="heroButtons">
            <a
              className="primaryBtn"
              href={amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Shop on</span>

              <span className="amazonLogoText">
                amazon
                <span className="amazonSmile"></span>
              </span>
            </a>

            <a className="secondaryBtn" href="#products">
              Explore Products
            </a>
          </div>

          <ul className="trustRow">
            <li className="trustItem">
              <span>🌱</span>
              <p>Premium Ingredients</p>
            </li>

            <li className="trustItem">
              <span>🧪</span>
              <p>Science Backed</p>
            </li>

            <li className="trustItem">
              <span>🇺🇸</span>
              <p>Made in USA</p>
            </li>

            <li className="trustItem">
              <span>✅</span>
              <p>GMP Certified</p>
            </li>
          </ul>
        </div>

        <div className="heroRight">
          <img
            src="/hero-clean.png"
            alt="ForteMatic supplements"
            className="heroImage"
          />
        </div>
      </section>

      <section className="seenIn">
        <span>AS SEEN IN</span>
        <strong>Forbes</strong>
        <strong>Men’s Health</strong>
        <strong>Women’s Health</strong>
        <strong>Healthline</strong>
        <strong>mindbodygreen</strong>
      </section>

      <section className="statsBar">
        <div className="statCard">
          <h3>
            <AnimatedNumber end={60000} suffix="+" />
          </h3>
          <p>Happy Customers</p>
        </div>

        <div className="statCard">
          <h3>
            <AnimatedNumber end={10000} suffix="+" />
          </h3>
          <p>5★ Reviews</p>
        </div>

        <div className="statCard">
          <h3>
            <AnimatedNumber end={20} suffix="+" />
          </h3>
          <p>Countries Served</p>
        </div>

        <div className="statCard">
          <h3>
            <AnimatedNumber end={30} suffix="-Day" />
          </h3>
          <p>Money Back Guarantee</p>
        </div>
      </section>

      <section id="goals" className="contentSection">
        <p className="sectionLabel">Health Goals</p>

        <h2>Built around modern wellness goals.</h2>

        <div className="goalPills">
          <span>GLP-1 Support</span>
          <span>Gut Health</span>
          <span>Metabolism</span>
          <span>Energy</span>
          <span>Hormone Support</span>
          <span>Longevity</span>
          <span>Fiber Supplement</span>
          <span>NAD+</span>
          <span>Akkermansia</span>
          <span>Spermidine</span>
          <span>DIM</span>
        </div>
      </section>

      <section id="products" className="rangeSection">
        <div className="rangeContent">
          <div>
            <p className="sectionLabel">Product Family</p>

            <h2>One brand. Multiple wellness goals.</h2>

            <p className="rangeText">
              Discover premium daily supplements supporting gut health,
              metabolism, energy, hormone balance, longevity and GLP-1 support.
            </p>
          </div>

          <img
            src="/range-bottles.png"
            alt="ForteMatic supplement range"
            className="rangeImage"
          />
        </div>
      </section>

      <section className="featureSection">
        <div className="featureImageWrap">
          <img
            src="/glp1-feature.png"
            alt="ForteMatic GLP-1 supplement"
            className="featureImage"
          />
        </div>

        <div className="featureContent">
          <p className="sectionLabel">Featured Formula</p>

          <h2>Support your GLP-1 wellness journey.</h2>

          <p>
            Designed for appetite awareness, fullness support, digestive
            wellness and healthy metabolic routines.
          </p>

          <ul className="featureList">
            <li>Supports fullness and satisfaction</li>
            <li>Supports gut health and digestion</li>
            <li>Complements healthy lifestyle habits</li>
            <li>Easy daily routine</li>
          </ul>

          <a
            className="featureButton"
            href={amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop GLP-1 Support
          </a>
        </div>
      </section>

      <section className="gallerySection">
        <p className="sectionLabel centerLabel">Community</p>

        <h2 className="galleryTitle">
          Real people. Real wellness routines.
        </h2>

        <div className="galleryGrid">
          {Array.from({ length: 10 }, (_, i) => (
            <img
              key={i}
              src={`/review-${i + 1}.jpg`}
              alt={`ForteMatic community image ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="reviews" className="reviewsSection">
        <p className="sectionLabel centerLabel">Reviews</p>

        <h2 className="reviewsTitle">
          Why customers choose ForteMatic.
        </h2>

        <div className="reviewCards">
          <article>
            <div>★★★★★</div>

            <p>
              Easy to fit into my routine and the quality feels premium.
            </p>
          </article>

          <article>
            <div>★★★★★</div>

            <p>
              Love having GLP-1 support, gut health and longevity products from
              one brand.
            </p>
          </article>

          <article>
            <div>★★★★★</div>

            <p>
              Fast delivery, clean branding and straightforward wellness
              products.
            </p>
          </article>
        </div>
      </section>

      <section id="faq" className="faqSection">
        <p className="sectionLabel">FAQ</p>

        <h2>Frequently asked questions.</h2>

        <details>
          <summary>Where can I buy ForteMatic?</summary>

          <p>All products are available through the ForteMatic Amazon store.</p>
        </details>

        <details>
          <summary>What products does ForteMatic offer?</summary>

          <p>
            ForteMatic offers supplements for GLP-1 support, gut health,
            metabolism, energy, longevity and hormone support.
          </p>
        </details>

        <details>
          <summary>What are NAD+, Akkermansia and Spermidine?</summary>

          <p>
            Popular wellness ingredients commonly used in longevity and gut
            health routines.
          </p>
        </details>

        <details>
          <summary>Is DIM used for hormone support?</summary>

          <p>
            DIM is commonly used by individuals looking to support healthy
            hormone balance.
          </p>
        </details>
      </section>

      <section className="newsletterSection">
        <div className="newsletterContent">
          <div>
            <p className="sectionLabel">Newsletter</p>

            <h2>Get wellness tips, product launches and exclusive offers.</h2>

            <div className="newsletterForm">
              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button type="button">Subscribe</button>
            </div>
          </div>

          <img
            src="/newsletter-bottle.png"
            alt="ForteMatic newsletter"
            className="newsletterBottle"
          />
        </div>
      </section>

    <ClosingExperience amazonStoreUrl={amazonStoreUrl} />
    </main>
  );
}
