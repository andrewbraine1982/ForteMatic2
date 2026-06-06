export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroText">
          <div className="stars">★★★★★ <span>60,000+ happy customers</span></div>

          <h1>
            Elevate your <br />
            everyday <em>health.</em>
          </h1>

          <p>
            Premium supplements designed to support GLP-1 function, metabolism,
            energy, digestion and long-term wellbeing.
          </p>

          <a className="cta" href="#">
            Shop the ForteMatic Range
          </a>
        </div>

        <div className="heroImage">
          <img src="/hero-products.webp" alt="ForteMatic supplement product range" />
        </div>
      </section>
    </main>
  );
}
