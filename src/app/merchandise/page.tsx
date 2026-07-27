import Image from "next/image";
import Link from "next/link";
import styles from "./Merchandise.module.css";

export default function MerchandisePage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>FORTEMATIC MERCHANDISE</span>

          <h1 className={styles.title}>
            Designed to
            <br />
            Elevate Everyday
            <br />
            <span>Wellness.</span>
          </h1>

          <p className={styles.description}>
            Premium accessories and apparel crafted with the same attention to
            detail as every ForteMatic product. Designed for everyday
            performance and made to complement your wellness journey.
          </p>

          <div className={styles.features}>
            <div>Premium materials. Purposeful design.</div>
            <div>Made to support your everyday.</div>
          </div>

          <Link href="#" className={styles.button}>
            Join the Waitlist
          </Link>
        </div>

  <div className={styles.heroImage}>
  <Image
    src="/Merchandise_range.png"
    alt="ForteMatic Merchandise Collection"
    fill
    priority
    className={styles.heroProductImage}
  />
</div>
</section>

{/* Brand Promise */}
<section className={styles.promiseBar}>
        <div className={styles.promise}>
          <h3>Premium Quality</h3>
          <p>Crafted with care.</p>
        </div>

        <div className={styles.promise}>
          <h3>Built to Last</h3>
          <p>Made for everyday use.</p>
        </div>

        <div className={styles.promise}>
          <h3>Sustainable Choices</h3>
          <p>Designed with longevity in mind.</p>
        </div>

        <div className={styles.promise}>
          <h3>Made for Your Lifestyle</h3>
          <p>Accessories that move with you.</p>
        </div>
      </section>

      {/* Products */}
      <section className={styles.products}>
        <article className={styles.card}>
          <span className={styles.badge}>COMING SOON</span>

        <div className={styles.productImage}>
  <Image
    src="/premium_shaker.png"
    alt="Premium Shaker"
    fill
    className={styles.productPhoto}
  />
</div>

          <h2>Premium Shaker</h2>

          <p>
            A premium BPA-free shaker designed for effortless mixing wherever
            your day takes you.
          </p>

          <ul>
            <li>600ml Capacity</li>
            <li>Leakproof Lid</li>
            <li>Stainless Steel Whisk</li>
          </ul>
        </article>

        <article className={styles.card}>
          <span className={styles.badge}>COMING SOON</span>

        <div className={styles.productImage}>
  <Image
    src="/insulated_bottle.png"
    alt="Insulated Bottle"
    fill
    className={styles.productPhoto}
  />
</div>

          <h2>Insulated Bottle</h2>

          <p>
            Double-wall stainless steel bottle engineered to keep every drink at
            the perfect temperature.
          </p>

          <ul>
            <li>750ml Capacity</li>
            <li>24-Hour Cold</li>
            <li>Premium Finish</li>
          </ul>
        </article>

        <article className={styles.card}>
          <span className={styles.badge}>COMING SOON</span>

          <div className={styles.productImage}>
  <Image
    src="/premium_t_shirt.png"
    alt="Premium T-Shirt"
    fill
    className={styles.productPhoto}
  />
</div>

          <h2>Premium T-Shirt</h2>

          <p>
            Heavyweight cotton with subtle embroidered branding for effortless
            everyday wear.
          </p>

          <ul>
            <li>Premium Cotton</li>
            <li>Relaxed Fit</li>
            <li>Embroidered Logo</li>
          </ul>
        </article>

        <article className={styles.card}>
          <span className={styles.badge}>COMING SOON</span>

       <div className={styles.productImage}>
  <Image
    src="/tote_bag.png"
    alt="Premium Tote Bag"
    fill
    className={styles.productPhoto}
  />
</div>

          <h2>Canvas Tote</h2>

          <p>
            A durable organic canvas tote created to carry your everyday
            wellness essentials.
          </p>

          <ul>
            <li>Organic Canvas</li>
            <li>Reinforced Handles</li>
            <li>Everyday Carry</li>
          </ul>
        </article>
      </section>

      {/* Waitlist */}
      <section className={styles.waitlist}>
        <div className={styles.waitlistContent}>
          <h2>Be the first to know.</h2>

          <p>
            Join our waitlist to receive launch updates, early access and
            exclusive offers when the ForteMatic merchandise collection becomes
            available.
          </p>
        </div>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Join Waitlist
          </button>
        </form>
      </section>
    </main>
  );
}
