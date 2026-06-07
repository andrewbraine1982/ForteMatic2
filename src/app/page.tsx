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
          ForteMatic
        </div>

        <nav className="nav">
          <a href="#products">Shop all</a>
          <a href="#science">Science</a>
          <a href="#goals">Health Goals</a>
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

            <span className="greenStars">
              ★★★★★
            </span>

            <span>
              60,000+ happy customers
            </span>

          </div>

          <h1>

            Elevate your everyday{" "}

            <span className="italicWord">
              health.
            </span>

          </h1>

          <p>

            Premium supplements designed to support
            GLP-1 function, metabolism, energy,
            digestion and long-term wellbeing.

          </p>

          <div className="heroButtons">

            <a
              href={amazonStoreUrl}
              className="primaryBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop the range
            </a>

            <a
              href="#science"
              className="secondaryBtn"
            >
              Explore ingredients
            </a>

          </div>

          <div className="trustRow">

            <div className="trustItem">
              🌱 Premium Ingredients
            </div>

            <div className="trustItem">
              🧪 Science Backed
            </div>

            <div className="trustItem">
              🛡 Trusted by Thousands
            </div>

          </div>

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

        <span>Forbes</span>
        <span>Men’s Health</span>
        <span>Women’s Health</span>
        <span>Healthline</span>
        <span>mindbodygreen</span>

      </section>

      <section id="products" className="contentSection">

        <h2>Targeted support for your health goals</h2>

        <p>
          Science-backed supplements for metabolism,
          gut health, energy, longevity and hormone support.
        </p>

      </section>

      <section id="science" className="contentSection">

        <h2>Built around evidence</h2>

        <p>
          Ingredients selected for function,
          quality and real-world usability.
        </p>

      </section>

      <section id="faq" className="contentSection">

        <h2>Frequently asked questions</h2>

      </section>

    </main>
  );
}
