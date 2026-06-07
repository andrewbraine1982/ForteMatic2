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
        <a className="logo" href="/" aria-label="ForteMatic home">
          ForteMatic<span className="registeredMark">®</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#goals">Health Goals</a>
          <a href="#products">Products</a>
          <a href="#trust">Why ForteMatic</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="navButton" href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">
          Shop Now
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroLeft">
          <div className="stars">
            <span className="greenStars">★★★★★</span>
            <span>60,000+ happy customers</span>
          </div>

          <h1 id="hero-title">
            Elevate your everyday <span className="italicWord">health.</span>
          </h1>

          <p>
            Premium daily supplements designed to support GLP-1 support, gut health,
            metabolism, energy, hormone support and long-term wellbeing.
          </p>

          <div className="heroButtons">
            <a className="primaryBtn" href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">
              <span>Shop on</span>
              <span className="amazonLogoText" aria-label="Amazon">
                amazon
                <span className="amazonSmile" aria-hidden="true"></span>
              </span>
            </a>

            <a className="secondaryBtn" href="#products">
              Explore Products
            </a>
          </div>

          <ul className="trustRow" aria-label="Product trust badges">
            <li className="trustItem"><span>🌱</span><p>Premium Ingredients</p></li>
            <li className="trustItem"><span>🧪</span><p>Science Backed</p></li>
            <li className="trustItem"><span>🇺🇸</span><p>Made in USA</p></li>
            <li className="trustItem"><span>✅</span><p>GMP Certified</p></li>
          </ul>
        </div>

        <div className="heroRight">
          <img
            src="/hero-clean.png"
            alt="ForteMatic GLP-1, Fiber, NAD+, DIM, Akkermansia and Spermidine supplement bottles"
            className="heroImage"
          />
        </div>
      </section>

      <section className="seenIn" aria-label="As seen in">
        <span>AS SEEN IN</span>
        <strong>Forbes</strong>
        <strong>Men’s Health</strong>
        <strong>Women’s Health</strong>
        <strong>Healthline</strong>
        <strong>mindbodygreen</strong>
      </section>

      <section id="goals" className="contentSection softSection" aria-labelledby="goals-title">
        <p className="sectionLabel">Health Goals</p>
        <h2 id="goals-title">Support the way you want to feel every day.</h2>
        <div className="cardGrid">
          <article><h3>GLP-1 support</h3><p>Daily support for appetite, fullness, cravings and metabolic wellness.</p></article>
          <article><h3>Gut health</h3><p>Fiber supplement options and Akkermansia support for digestive balance.</p></article>
          <article><h3>Energy & metabolism</h3><p>Targeted formulas for metabolism, energy and everyday performance.</p></article>
          <article><h3>Hormone support</h3><p>DIM support for people looking to maintain healthy hormone balance.</p></article>
          <article><h3>Longevity</h3><p>NAD+ and Spermidine support for cellular health and healthy aging routines.</p></article>
          <article><h3>Daily wellness</h3><p>Simple supplement routines made for consistency, clarity and long-term health.</p></article>
        </div>
      </section>

      <section id="products" className="contentSection" aria-labelledby="products-title">
        <p className="sectionLabel">Product Family</p>
        <h2 id="products-title">Explore the ForteMatic range.</h2>
        <div className="productGrid">
          <article><h3>GLP-1 Support</h3><p>For appetite, fullness, gut health and metabolic support.</p></article>
          <article><h3>Fiber Supplement</h3><p>Daily fiber support for digestion, regularity and gut wellness.</p></article>
          <article><h3>NAD+</h3><p>Longevity support for energy, cellular health and healthy aging.</p></article>
          <article><h3>Akkermansia</h3><p>Gut microbiome support for digestive and metabolic wellness.</p></article>
          <article><h3>Spermidine</h3><p>Cellular health and longevity support for daily wellness routines.</p></article>
          <article><h3>DIM</h3><p>Hormone support designed for balance and everyday wellbeing.</p></article>
        </div>
      </section>

      <section id="trust" className="contentSection softSection" aria-labelledby="trust-title">
        <p className="sectionLabel">Why Customers Trust ForteMatic</p>
        <h2 id="trust-title">Clean, practical supplements for modern wellness.</h2>
        <ul className="checkList">
          <li>Real supplement formulas built around daily health goals.</li>
          <li>Clear product positioning for GLP-1 support, gut health, metabolism and longevity.</li>
          <li>Premium ingredients selected for practical wellness routines.</li>
          <li>Easy Amazon shopping with fast delivery and simple reordering.</li>
        </ul>
      </section>

      <section id="reviews" className="contentSection" aria-labelledby="reviews-title">
        <p className="sectionLabel">Social Proof</p>
        <h2 id="reviews-title">Loved by everyday wellness customers.</h2>
        <div className="reviewGrid">
          <article><p>“Easy to add to my morning routine and I feel more consistent with my health goals.”</p><strong>★★★★★ Verified Customer</strong></article>
          <article><p>“I like that the range covers gut health, energy, metabolism and longevity in one place.”</p><strong>★★★★★ Verified Customer</strong></article>
          <article><p>“Clean branding, clear formulas and simple ordering through Amazon.”</p><strong>★★★★★ Verified Customer</strong></article>
        </div>
      </section>

      <section id="faq" className="contentSection softSection" aria-labelledby="faq-title">
        <p className="sectionLabel">FAQ</p>
        <h2 id="faq-title">Frequently asked questions.</h2>

        <details>
          <summary>Where can I buy ForteMatic?</summary>
          <p>You can shop the ForteMatic supplement range through our Amazon store.</p>
        </details>

        <details>
          <summary>What does ForteMatic GLP-1 support?</summary>
          <p>ForteMatic GLP-1 support is designed for appetite, fullness, gut health and metabolic wellness.</p>
        </details>

        <details>
          <summary>Does ForteMatic make a fiber supplement?</summary>
          <p>Yes. ForteMatic offers fiber supplement support for digestion, regularity and gut health.</p>
        </details>

        <details>
          <summary>What are NAD+, Akkermansia, Spermidine and DIM used for?</summary>
          <p>NAD+ and Spermidine are commonly used in longevity routines, Akkermansia supports gut health, and DIM supports hormone balance.</p>
        </details>

        <details>
          <summary>Are ForteMatic supplements a replacement for medical advice?</summary>
          <p>No. Supplements are not intended to diagnose, treat, cure or prevent disease. Speak with a healthcare professional before starting a new supplement routine.</p>
        </details>
      </section>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <p className="sectionLabel">Stay Connected</p>
        <h2 id="newsletter-title">Get wellness updates and product news.</h2>
        <form>
          <label htmlFor="email">Email address</label>
          <div className="emailRow">
            <input id="email" name="email" type="email" placeholder="you@example.com" />
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div>
          <div className="footerLogo">ForteMatic<span className="registeredMark">®</span></div>
          <p>Premium supplements for GLP-1 support, gut health, metabolism, energy, hormone support and longevity.</p>
        </div>
        <div className="footerLinks">
          <a href="#products">Products</a>
          <a href="#goals">Health Goals</a>
          <a href="#faq">FAQ</a>
          <a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Amazon Store</a>
        </div>
      </footer>
    </main>
  );
}
