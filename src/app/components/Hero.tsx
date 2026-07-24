type HeroProps = {
  amazonStoreUrl: string;
};

export default function Hero({ amazonStoreUrl }: HeroProps) {
  return (
    <>
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
    </>
  );
}
