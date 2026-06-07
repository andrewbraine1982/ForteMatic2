const amazonStoreUrl =
  "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

export default function Home() {
  return (
    <main>

      <section className="hero">

        <div className="promoBar">
          <span>🏷 Subscribe & Save 15%</span>
          <span>🚚 Free Delivery Over €50</span>
          <span>🌿 Science-Backed. Plant-Powered.</span>
          <span>🛡 30-Day Money Back Guarantee</span>
        </div>

        <nav className="heroNav">

          <strong>ForteMatic</strong>

          <div>
            <a href="#products">Shop all</a>
            <a href="#science">Science</a>
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

            <h1>
              Elevate your
              <br />
              everyday <em>health.</em>
            </h1>

            <p className="heroText">
              Premium supplements designed to support GLP-1 function,
              metabolism, energy, digestion and long-term wellbeing.
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

              <div className="amazonText">
                <span>on</span>
                <strong>amazon</strong>
              </div>

            </div>

            <div className="trustIcons">

              <div>
                <span>🌱</span>
                <p>
                  Premium
                  <br />
                  Ingredients
                </p>
              </div>

              <div>
                <span>🧪</span>
                <p>
                  Science
                  <br />
                  Backed
                </p>
              </div>

              <div>
                <span>🛡</span>
                <p>
                  Trusted by
                  <br />
                  Thousands
                </p>
              </div>

              <div>
                <span>🇺🇸</span>
                <p>
                  Made in
                  <br />
                  USA
                </p>
              </div>

            </div>

          </div>

          <div className="heroVisual">

            <img
              src="/hero-clean.png"
              alt="ForteMatic supplements supporting metabolism, gut health, GLP-1 pathways and longevity"
            />

          </div>

        </div>

      </section>

    </main>
  );
}
