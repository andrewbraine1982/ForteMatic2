export default function Home() {
  return (
    <main>
<section className="hero" aria-labelledby="hero-title">
  <div className="heroSeoText">
  <h1 id="hero-title">
    ForteMatic Supplements for GLP-1 Support, Gut Health, Metabolism, Energy, and Longevity
  </h1>

  <p>
    Science-backed, plant-powered daily supplements designed to support appetite control, digestion, metabolism, cellular energy, and everyday wellness.
  </p>
</div>
      

        <div className="heroImage">
          <img
            src="/hero-products.webp"
            alt="ForteMatic supplement bottles"
          />
        </div>
      </section>
      
  <section className="ticker">
  <span>AS SEEN IN</span>
  <div>
    Forbes · Men’s Health · Women’s Health · Healthline · MindBodyGreen · Forbes · Men’s Health · Women’s Health · Healthline
  </div>
</section>

<section className="support">
  <h2>Targeted support for your health goals.</h2>
  <p>Science-backed formulas designed to support the way you want to feel every day.</p>

  <div className="cards">
    {["GLP-1 Support", "Metabolism", "Gut & Digestion", "Energy & Vitality", "Hormone Support", "Longevity"].map((item) => (
      <div className="card" key={item}>
        <div className="icon">✓</div>
        <h3>{item}</h3>
        <p>Support your body with premium ingredients formulated for daily wellbeing.</p>
      </div>
    ))}
  </div>
</section>

<section className="glp">
  <div>
    <span className="eyebrow">Best Seller</span>
    <h2>The Best GLP-1 Supplement</h2>
    <p>
      ForteMatic GLP-1 is designed to naturally support appetite control,
      fullness, gut health and healthy weight management. Our advanced formula
      combines probiotics, prebiotics and targeted nutrients to support your
      body’s natural GLP-1 pathways.
    </p>
    <ul>
      <li>Supports appetite control and fullness</li>
      <li>Supports natural GLP-1 pathways</li>
      <li>Supports gut health and digestion</li>
      <li>Supports healthy weight management goals</li>
    </ul>
    <a className="cta" href="#">Shop GLP-1 Support</a>
  </div>
</section>

<section className="reviews">
  <h2>Real people. Real results.</h2>
  <div className="reviewGrid">
    <div className="review">★★★★★<p>“GLP-1 has helped me feel fuller and more in control of my appetite.”</p><strong>Sarah M.</strong></div>
    <div className="review">★★★★★<p>“Fiber has become part of my daily routine. No bloating, just regularity.”</p><strong>James T.</strong></div>
    <div className="review">★★★★★<p>“NAD+ gives me clean, steady energy throughout the day.”</p><strong>Emily R.</strong></div>
  </div>
</section>

<section className="faq">
  <h2>Frequently Asked Questions</h2>
  <details open>
    <summary>What is GLP-1?</summary>
    <p>GLP-1 is a naturally occurring hormone involved in appetite, fullness, blood sugar regulation and metabolic health.</p>
  </details>
  <details>
    <summary>What makes ForteMatic GLP-1 one of the best GLP-1 supplements?</summary>
    <p>It combines probiotics, prebiotics and targeted nutrients to support natural GLP-1 pathways, appetite control and gut health.</p>
  </details>
  <details>
    <summary>How does Fiber Supplement help?</summary>
    <p>Fiber supports digestion, regularity, fullness and gut health.</p>
  </details>
  <details>
    <summary>How does NAD+ support energy?</summary>
    <p>NAD+ supports cellular energy, healthy ageing and everyday vitality.</p>
  </details>
</section>

<section className="newsletter">
  <h2>Stay in the loop.</h2>
  <p>Get exclusive offers, product updates and health tips.</p>
  <form>
    <input placeholder="Enter your email" />
    <button>Subscribe</button>
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
