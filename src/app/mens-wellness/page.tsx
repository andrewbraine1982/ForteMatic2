"use client";

import Header from "../components/Header";

const ingredients = [
  {
    name: "L-Arginine HCL",
    amount: "410 mg",
    number: "01",
    description:
      "An amino acid used by the body to support nitric oxide production and healthy circulation.",
  },
  {
    name: "L-Arginine AAKG",
    amount: "410 mg",
    number: "02",
    description:
      "Arginine combined with alpha-ketoglutarate, formulated to complement circulation and performance support.",
  },
  {
    name: "L-Citrulline DL-Malate",
    amount: "410 mg",
    number: "03",
    description:
      "Supports the body's natural arginine availability and complements nitric oxide production.",
  },
  {
    name: "Beetroot Powder",
    amount: "110 mg",
    number: "04",
    description:
      "A naturally nitrate-rich botanical traditionally used to support healthy blood flow and vitality.",
  },
];

const benefits = [
  {
    icon: "↗",
    title: "Circulation Support",
    text: "Ingredients selected to support healthy circulation and nitric oxide production.",
  },
  {
    icon: "⚡",
    title: "Performance Support",
    text: "A focused formula designed to complement stamina, energy and male vitality.",
  },
  {
    icon: "◉",
    title: "Premium Formula",
    text: "Four carefully selected active ingredients in a straightforward capsule format.",
  },
  {
    icon: "✓",
    title: "Easy to Use",
    text: "Convenient capsules designed to fit naturally into your wellness routine.",
  },
];

const faqs = [
  {
    question: "What is ForteMatic V-Pill?",
    answer:
      "V-Pill is a men's wellness supplement formulated with L-Arginine, L-Citrulline and Beetroot Powder. Its ingredients are selected to complement healthy circulation, vitality and performance.",
  },
  {
    question: "What ingredients does it contain?",
    answer:
      "Each recommended serving contains L-Arginine HCL, L-Arginine Alpha-Ketoglutarate, L-Citrulline DL-Malate and Beetroot Powder.",
  },
  {
    question: "How should I take V-Pill?",
    answer:
      "Always follow the directions printed on the product packaging. Do not exceed the recommended daily serving.",
  },
  {
    question: "Is V-Pill a medicine?",
    answer:
      "No. V-Pill is a food supplement and is not intended to diagnose, treat, cure or prevent any disease.",
  },
  {
    question: "Where can I buy it?",
    answer:
      "V-Pill is available through the ForteMatic Amazon store. Use any Buy on Amazon button on this page to view current availability.",
  },
];

export default function MensWellnessPage() {
  const amazonStoreUrl =
    "https://www.amazon.com/stores/Fortematic/page/6163DE39-5041-406B-904E-F346876EB933?lp_asin=B0FKZ4HJ6D&ref_=ast_bln&store_ref=bl_ast_dp_brandlogo_sto";

  return (
    <main className="vpPage">
      <Header amazonStoreUrl={amazonStoreUrl} />

      {/* HERO */}
      <section className="vpHero">
        <div className="vpHeroGlow vpHeroGlowOne" />
        <div className="vpHeroGlow vpHeroGlowTwo" />

        <div className="vpHeroContent">
          <p className="vpEyebrow">FORTE​MATIC MEN&apos;S WELLNESS</p>

          <h1>
            Confidence,
            <br />
            <span>formulated.</span>
          </h1>

          <p className="vpHeroDescription">
            A premium men&apos;s wellness formula featuring L-Arginine,
            L-Citrulline and Beetroot Powder. Designed to complement healthy
            circulation, stamina and everyday confidence.
          </p>

          <div className="vpHeroButtons">
            <a
              href={amazonStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vpPrimaryButton"
            >
              Buy on Amazon
              <span>→</span>
            </a>

            <a href="#ingredients" className="vpSecondaryButton">
              Explore the formula
            </a>
          </div>

          <div className="vpHeroDetails">
            <div>
              <strong>4</strong>
              <span>Active ingredients</span>
            </div>

            <div>
              <strong>14</strong>
              <span>Capsules per pack</span>
            </div>

            <div>
              <strong>580 mg</strong>
              <span>Per capsule</span>
            </div>
          </div>
        </div>

        <div className="vpHeroVisual">
          <div className="vpProductHalo" />

          <div className="vpProductLabel vpProductLabelTop">
            <span />
            Nitric oxide support
          </div>

          <img
            src="/v-pill-box.png"
            alt="ForteMatic For Men V-Pill supplement box and capsules"
            className="vpProductImage"
          />

          <div className="vpProductLabel vpProductLabelBottom">
            <span />
            Premium active formula
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="vpTrustStrip" aria-label="Product benefits">
        <div>Premium ingredients</div>
        <span>•</span>
        <div>Men&apos;s wellness support</div>
        <span>•</span>
        <div>Convenient capsule format</div>
        <span>•</span>
        <div>Available on Amazon</div>
      </section>

      {/* INTRODUCTION */}
      <section className="vpIntroSection">
        <div className="vpSectionLabel">
          <span>01</span>
          THE V-PILL APPROACH
        </div>

        <div className="vpIntroGrid">
          <h2>
            Built for the moments
            <br />
            that matter.
          </h2>

          <div className="vpIntroCopy">
            <p>
              Confidence is connected to how you feel — physically and
              mentally. V-Pill brings together four focused ingredients in one
              straightforward men&apos;s wellness formula.
            </p>

            <p>
              Its amino acids and beetroot powder are selected to support the
              body&apos;s natural nitric oxide pathways and complement healthy
              circulation, performance and vitality.
            </p>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section id="ingredients" className="vpIngredientsSection">
        <div className="vpSectionHeader">
          <div>
            <div className="vpSectionLabel vpSectionLabelLight">
              <span>02</span>
              INSIDE THE FORMULA
            </div>

            <h2>
              Four ingredients.
              <br />
              One focused formula.
            </h2>
          </div>

          <p>
            No distracting wellness trends. Just a carefully selected
            combination of amino acids and botanical support.
          </p>
        </div>

        <div className="vpIngredientGrid">
          {ingredients.map((ingredient) => (
            <article className="vpIngredientCard" key={ingredient.name}>
              <div className="vpIngredientCardTop">
                <span className="vpIngredientNumber">{ingredient.number}</span>
                <span className="vpIngredientAmount">{ingredient.amount}</span>
              </div>

              <div>
                <h3>{ingredient.name}</h3>
                <p>{ingredient.description}</p>
              </div>

              <div className="vpIngredientLine" />
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="vpBenefitsSection">
        <div className="vpSectionLabel">
          <span>03</span>
          DESIGNED WITH PURPOSE
        </div>

        <div className="vpBenefitsHeading">
          <h2>
            Support that fits
            <br />
            your routine.
          </h2>

          <p>
            V-Pill is designed for men looking for a convenient supplement that
            complements an active, confident lifestyle.
          </p>
        </div>

        <div className="vpBenefitsGrid">
          {benefits.map((benefit) => (
            <article className="vpBenefitCard" key={benefit.title}>
              <div className="vpBenefitIcon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SUPPLEMENT FACTS */}
      <section className="vpFactsSection">
        <div className="vpFactsIntro">
          <div className="vpSectionLabel vpSectionLabelLight">
            <span>04</span>
            FORMULA DETAILS
          </div>

          <h2>
            Know exactly
            <br />
            what&apos;s inside.
          </h2>

          <p>
            A transparent look at the active ingredients shown on the V-Pill
            product label.
          </p>
        </div>

        <div className="vpFactsCard">
          <div className="vpFactsTitle">
            <div>
              <span>FORTE​MATIC FOR MEN</span>
              <h3>Supplement Facts</h3>
            </div>

            <div className="vpFactsCapsule">V-PILL</div>
          </div>

          <div className="vpFactsHeading">
            <span>Active ingredient</span>
            <span>Amount</span>
          </div>

          {ingredients.map((ingredient) => (
            <div className="vpFactsRow" key={ingredient.name}>
              <span>{ingredient.name}</span>
              <strong>{ingredient.amount}</strong>
            </div>
          ))}

          <p className="vpFactsNote">
            Always refer to the packaging for the complete ingredients,
            directions, warnings and recommended serving information.
          </p>
        </div>
      </section>

      {/* LIFESTYLE STATEMENT */}
      <section className="vpStatementSection">
        <div className="vpStatementGlow" />

        <p>PERFORMANCE. VITALITY. CONFIDENCE.</p>

        <h2>
          Feel prepared.
          <br />
          Stay confident.
        </h2>

        <a
          href={amazonStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="vpGoldButton"
        >
          Discover V-Pill on Amazon
          <span>→</span>
        </a>
      </section>

      {/* FAQ */}
      <section id="faq" className="vpFaqSection">
        <div className="vpFaqHeading">
          <div className="vpSectionLabel">
            <span>05</span>
            QUESTIONS, ANSWERED
          </div>

          <h2>Frequently asked questions.</h2>
        </div>

        <div className="vpFaqList">
          {faqs.map((faq) => (
            <details className="vpFaqItem" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="vpFaqPlus">+</span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="vpFinalCta">
        <div className="vpFinalCtaContent">
          <p>FORTE​MATIC FOR MEN</p>

          <h2>
            Ready when
            <br />
            confidence matters.
          </h2>

          <a
            href={amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="vpPrimaryButton"
          >
            Buy V-Pill on Amazon
            <span>→</span>
          </a>

          <small>
            Availability, pricing and delivery details are provided by Amazon.
          </small>
        </div>

        <div className="vpFinalProduct">
          <div className="vpFinalProductGlow" />

          <img
            src="/v-pill-box.png"
            alt="ForteMatic V-Pill"
          />
        </div>
      </section>

      {/* PRODUCT-SPECIFIC FOOTER */}
      <footer className="vpFooter">
        <div className="vpFooterBrand">
          <strong>ForteMatic<sup>®</sup></strong>
          <p>Premium wellness support for modern life.</p>
        </div>

        <div className="vpFooterLinks">
          <a href="/">Home</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#faq">FAQ</a>
          <a
            href={amazonStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop on Amazon
          </a>
        </div>

        <div className="vpFooterBottom">
          <span>© {new Date().getFullYear()} ForteMatic.</span>

          <p>
            Food supplements should not be used as a substitute for a varied,
            balanced diet and healthy lifestyle.
          </p>
        </div>
      </footer>
    </main>
  );
}
