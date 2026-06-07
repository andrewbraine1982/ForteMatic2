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
      <div className="logo">
  ForteMatic<span className="registeredMark">®</span>
</div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#products">Shop all</a>
          <a href="#science">Science</a>
          <a href="#goals">Health Goals</a>
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
            Premium supplements designed to support GLP-1 function, metabolism,
            energy, digestion and long-term wellbeing.
          </p>

          <div className="heroButtons">
           <a
  className="primaryBtn"
  href={amazonStoreUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  Shop on

  <span className="amazonLogoText">
    amazon
    <span className="amazonSmile"></span>
  </span>
</a>

            <a className="secondaryBtn" href="#products">
              Explore Products
            </a>
          </div>

          <div className="trustRow">
            <div className="trustItem"><span>🌱</span><p>Premium Ingredients</p></div>
            <div className="trustItem"><span>🧪</span><p>Science Backed</p></div>
            <div className="trustItem"><span>🇺🇸</span><p>Made in USA</p></div>
            <div className="trustItem"><span>✅</span><p>GMP Certified</p></div>
          </div>
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

      <section id="products" className="contentSection">
        <p className="sectionLabel">Product Family</p>
        <h2>Explore the ForteMatic range.</h2>
        <p>Targeted daily supplements for GLP-1 support, gut health, metabolism, energy, hormone balance and longevity.</p>
      </section>

      <section id="goals" className="contentSection softSection">
        <p className="sectionLabel">Health Goals</p>
        <h2>Support the way you want to feel every day.</h2>
        <p>Choose formulas designed around appetite support, digestion, energy, metabolic health and long-term wellbeing.</p>
      </section>

      <section id="science" className="contentSection">
        <p className="sectionLabel">Science</p>
        <h2>Built around functional ingredients.</h2>
        <p>ForteMatic formulas are designed for practical daily routines using supplement ingredients selected for wellness support.</p>
      </section>

      <section id="faq" className="contentSection softSection">
        <p className="sectionLabel">FAQ</p>
        <h2>Frequently asked questions.</h2>

        <details>
          <summary>Where can I buy ForteMatic?</summary>
          <p>You can shop the ForteMatic range through our Amazon store.</p>
        </details>

        <details>
          <summary>What does ForteMatic GLP-1 support?</summary>
          <p>ForteMatic GLP-1 is designed to support appetite, fullness, gut health and metabolic wellness.</p>
        </details>
      </section>
    </main>
  );
}
