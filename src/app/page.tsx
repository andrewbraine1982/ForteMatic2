export default function Home() {
  const amazonStoreUrl =
    "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

  return (
    <main>

      {/* TOP BAR */}

      <div className="topBar">
        <span>🏷️ SUBSCRIBE & SAVE 15%</span>
        <span>🚚 FREE DELIVERY OVER €50</span>
        <span>🌿 SCIENCE-BACKED. PLANT-POWERED.</span>
        <span>🛡️ 30-DAY MONEY BACK GUARANTEE</span>
      </div>

      {/* NAV */}

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
          href={amazonStoreUrl}
          className="navButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
        </a>

      </header>

      {/* HERO */}

      <section className="hero">

        <div className="heroContent">

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
              Shop the ForteMatic Range
            </a>

            <a
              href="#products"
              className="secondaryBtn"
            >
              Explore Ingredients
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

            <div className="trustItem">
              🇺🇸 Made in USA
            </div>

          </div>

        </div>

        <div className="heroImageWrap">

          <img
            src="/hero-clean.png"
            alt="ForteMatic supplements"
            className="heroImage"
          />

        </div>

      </section>

      {/* AS SEEN IN */}

      <section className="seenIn">

        <span>Forbes</span>
        <span>Men’s Health</span>
        <span>Women’s Health</span>
        <span>Healthline</span>
        <span>mindbodygreen</span>

      </section>

      {/* PLACEHOLDER REST OF SITE */}

      <section
        id="products"
        style={{
          padding: "120px 8%"
        }}
      >

        <h2>
          Products Section
        </h2>

      </section>

    </main>
  );
}
