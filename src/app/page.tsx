"use client";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

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
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [showAllReviews, setShowAllReviews] = useState(false);
const [activeFaq, setActiveFaq] = useState(0);
  return (
    <main>
 <div className="topBar">
  <div className="topBarTrack">
    <span>🏷️ Subscribe &amp; Save 15%</span>
    <span>🚚 Free Delivery Over €50</span>
    <span>🌿 Science-Backed. Plant-Powered.</span>
    <span>🛡️ 30-Day Money Back Guarantee</span>

    <span>🏷️ Subscribe &amp; Save 15%</span>
    <span>🚚 Free Delivery Over €50</span>
    <span>🌿 Science-Backed. Plant-Powered.</span>
    <span>🛡️ 30-Day Money Back Guarantee</span>
  </div>
</div>

<Header />
      <Hero amazonStoreUrl={amazonStoreUrl} />

<section className="seenIn">

  <div className="seenLabel">
    AS FEATURED IN
  </div>

  <div className="seenTrack">
    <div className="seenTrackInner">

    <span>FORBES</span>
    <span>MEN'S HEALTH</span>
    <span>WOMEN'S HEALTH</span>
    <span>HEALTHLINE</span>
    <span>MINDBODYGREEN</span>

    <span>FORBES</span>
    <span>MEN'S HEALTH</span>
    <span>WOMEN'S HEALTH</span>
    <span>HEALTHLINE</span>
    <span>MINDBODYGREEN</span>

  </div>
    </div>

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

<section className="rangeSection">
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

   <Link
  href="/glp-1"
  className="featureButton"
>
  Explore GLP-1 →
</Link>
        </div>
      </section>

<section className="gallerySection">
  <p className="sectionLabel centerLabel">Community</p>

  <h2 className="galleryTitle">
    Real people. Real wellness routines.
  </h2>

  <div className={`galleryGrid ${showAllReviews ? "expanded" : ""}`}>
    {Array.from({ length: 10 }, (_, i) => (
      <img
        key={i}
        src={`/review-${i + 1}.jpg`}
        alt={`ForteMatic community image ${i + 1}`}
        className={!showAllReviews && i >= 4 ? "mobileHiddenReview" : ""}
      />
    ))}
  </div>

  <button
    type="button"
    className="galleryToggle"
    onClick={() => setShowAllReviews(!showAllReviews)}
  >
    {showAllReviews ? "Show Less ↑" : "View More Reviews →"}
  </button>
</section>

  <Reviews />

    <section id="faq" className="faqSection">
  <p className="sectionLabel">FAQ</p>

  <h2>Frequently asked questions.</h2>

  {[
    {
      q: "Where can I buy ForteMatic supplements?",
      a: "ForteMatic supplements are available through our official Amazon store, making it easy to browse our full range of wellness products with fast delivery and trusted customer service.",
    },
    {
      q: "What wellness goals do ForteMatic supplements support?",
      a: "Our range is designed to support gut health, GLP-1 wellness routines, metabolism, energy, healthy ageing, hormone balance and everyday wellbeing using carefully selected ingredients.",
    },
    {
      q: "What is Akkermansia?",
      a: "Akkermansia is a naturally occurring beneficial gut bacterium that has become popular in digestive wellness research and is commonly included in modern gut health routines.",
    },
    {
      q: "What is NAD+?",
      a: "NAD+ is a naturally occurring coenzyme involved in cellular energy production. NAD+ support supplements are often chosen by people interested in healthy ageing and vitality.",
    },
    {
      q: "What is Spermidine?",
      a: "Spermidine is a naturally occurring compound found in foods such as wheat germ and soybeans. It is widely recognised for its role in healthy ageing research.",
    },
    {
      q: "What is DIM used for?",
      a: "DIM (Diindolylmethane) is commonly used to support healthy hormone balance and is popular among both men and women looking to maintain overall wellness.",
    },
    {
      q: "Can ForteMatic supplements be taken alongside a healthy lifestyle?",
      a: "Yes. Our supplements are designed to complement balanced nutrition, regular exercise and healthy daily habits as part of an overall wellness routine.",
    },
    {
      q: "Why choose ForteMatic?",
      a: "ForteMatic combines science-backed ingredients, premium formulations and trusted manufacturing standards to create supplements that fit easily into everyday wellness routines.",
    },
  ].map((faq, index) => (
    <div
      key={index}
      className={`faqItem ${activeFaq === index ? "active" : ""}`}
    >
      <button
        className="faqQuestion"
        onClick={() =>
          setActiveFaq(activeFaq === index ? -1 : index)
        }
      >
        <span>{faq.q}</span>

        <span className="faqIcon">
          {activeFaq === index ? "−" : "+"}
        </span>
      </button>

      <div
        className="faqAnswer"
        style={{
          maxHeight: activeFaq === index ? "220px" : "0",
        }}
      >
        <p>{faq.a}</p>
      </div>
    </div>
  ))}
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
