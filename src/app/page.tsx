const amazonStoreUrl =
  "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

export default function Home() {
  return (
    <main>
<section className="hero" aria-labelledby="hero-title">
  <div className="promoBar">
    <span>🏷️ Subscribe & Save 15%</span>
    <span>🚚 Free Delivery Over $50</span>
    <span>🌿 Science-Backed. Plant-Powered.</span>
    <span>🛡️ 30-Day Money Back Guarantee</span>
  </div>

  <nav className="heroNav" aria-label="Main navigation">
    <strong>ForteMatic</strong>
    <div>
      <a href="#products">Shop all</a>
      <a href="#goals">Health Goals</a>
      <a href="#faq">FAQ</a>
      <a
        className="navShop"
        href={amazonStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop Now
      </a>
    </div>
  </nav>

  <div className="heroInner">
    <div className="heroContent">
      <div className="rating">
        <span>★★★★★</span>
        <strong>60,000+ happy customers</strong>
      </div>

      <h1 id="hero-title">
        Elevate your everyday health with GLP-1, metabolism, energy, and gut support.
      </h1>

      <p className="heroText">
        Premium supplements designed to support GLP-1 function, metabolism,
        energy, digestion, and long-term wellbeing.
      </p>

      <div className="amazonCta">
        <a
          className="primaryButton"
          href={amazonStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop the ForteMatic Range
        </a>
        <span>on</span>
        <strong>amazon</strong>
      </div>

      <div className="trustIcons" aria-label="ForteMatic product benefits">
        <div><span>🌱</span><p>Premium<br />Ingredients</p></div>
        <div><span>⚗️</span><p>Science<br />Backed</p></div>
        <div><span>🛡️</span><p>Trusted by<br />Thousands</p></div>
        <div><span>🇺🇸</span><p>Made in<br />the USA</p></div>
      </div>
    </div>

    <div className="heroVisual">
      <img
        src="/hero-clean.png"
        alt="ForteMatic supplements including GLP-1, Fiber, NAD+, DIM, Akkermansia and Spermidine"
      />
    </div>
  </div>
</section>

    

      <section className="asSeen" aria-labelledby="as-seen-title">
        <h2 id="as-seen-title">As Seen In</h2>
        <div className="logoTicker">
          <div className="logoTrack">
            <span>Forbes</span>
            <span>Men’s Health</span>
            <span>Women’s Health</span>
            <span>Healthline</span>
            <span>MindBodyGreen</span>
            <span>Forbes</span>
            <span>Men’s Health</span>
            <span>Women’s Health</span>
            <span>Healthline</span>
            <span>MindBodyGreen</span>
          </div>
        </div>
      </section>

      <section className="support" id="goals">
        <p className="eyebrowText">Health Goals</p>
        <h2>Targeted support for your health goals.</h2>
        <p>
          ForteMatic formulas are designed for people who want practical daily
          support for appetite, digestion, metabolism, energy, hormones, and
          healthy ageing.
        </p>

        <div className="cards">
          {[
            "GLP-1 Support",
            "Metabolism",
            "Gut & Digestion",
            "Energy & Vitality",
            "Hormone Support",
            "Longevity",
          ].map((item) => (
            <article className="card" key={item}>
              <div className="icon">✓</div>
              <h3>{item}</h3>
              <p>
                Premium daily support made for modern wellness routines.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <p className="eyebrowText">Product Family</p>
        <h2>Explore the ForteMatic family.</h2>
        <div className="productGrid">
          {[
            ["GLP-1 Probiotic + Prebiotic", "Supports appetite, fullness, gut health, and metabolic wellness."],
            ["Fiber Supplement", "Supports digestion, regularity, fullness, and gut balance."],
            ["NAD+ Resveratrol", "Supports cellular energy, vitality, and healthy ageing."],
            ["DIM+ Hormone Support", "Supports hormone balance and everyday wellbeing."],
            ["Akkermansia", "Supports gut barrier function and metabolic health."],
            ["Spermidine", "Supports cellular renewal and longevity-focused wellness."],
          ].map(([title, text]) => (
            <article className="productCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <a className="primaryButton productButton" href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">
          Shop the Full Range on Amazon
        </a>
      </section>

      <section className="trust">
        <p className="eyebrowText">Why ForteMatic</p>
        <h2>Why customers trust ForteMatic.</h2>
        <ul>
          <li>Science-backed supplement formulas</li>
          <li>Plant-powered daily wellness support</li>
          <li>Designed for GLP-1, gut health, metabolism, energy, and longevity</li>
          <li>Trusted by thousands of supplement customers</li>
        </ul>
      </section>

      <section className="reviews">
        <h2>Real people. Real routines.</h2>
        <div className="reviewGrid">
          <article className="review">★★★★★<p>“GLP-1 support helped me feel fuller and more consistent.”</p><strong>Sarah M.</strong></article>
          <article className="review">★★★★★<p>“Fiber became part of my daily gut health routine.”</p><strong>James T.</strong></article>
          <article className="review">★★★★★<p>“NAD+ gives me steady daily energy.”</p><strong>Emily R.</strong></article>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>What is GLP-1?</summary>
          <p>GLP-1 is a naturally occurring hormone involved in appetite, fullness, digestion, and metabolic health.</p>
        </details>

        <details>
          <summary>What makes ForteMatic GLP-1 support different?</summary>
          <p>ForteMatic GLP-1 combines probiotic, prebiotic, and targeted wellness support for appetite, fullness, gut health, and metabolic balance.</p>
        </details>

        <details>
          <summary>Are ForteMatic supplements designed for daily use?</summary>
          <p>Yes. ForteMatic supplements are designed as convenient daily wellness formulas. Always follow the label directions.</p>
        </details>

        <details>
          <summary>Where can I buy ForteMatic?</summary>
          <p>You can shop the ForteMatic supplement range on Amazon.</p>
        </details>
      </section>

      <section className="newsletter">
        <h2>Stay in the loop.</h2>
        <p>Get product updates, wellness tips, and ForteMatic offers.</p>
        <form>
          <input type="email" placeholder="Enter your email" aria-label="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer>
        <h2>ForteMatic</h2>
        <p>Science-backed, plant-powered supplements for everyday health.</p>
        <p>© 2025 ForteMatic. All rights reserved.</p>
      </footer>
    </main>
  );
}
