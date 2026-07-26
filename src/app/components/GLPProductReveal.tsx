import Image from "next/image";
import GoldDivider from "./GoldDivider";
import styles from "./GLPProductReveal.module.css";

export default function GLPProductReveal() {
  return (
    <>
      <GoldDivider />

      <section className={styles.section}>

        <div className={styles.imageColumn}>

          <div className={styles.glow}></div>

          <div className={styles.pedestal}></div>

          <div className={styles.imageWrapper}>
            <Image
              src="/products/GLP.png"
              alt="ForteMatic GLP-1"
              width={520}
              height={720}
              priority
              className={styles.productImage}
            />
          </div>

        </div>

        <div className={styles.content}>

          <span className={styles.eyebrow}>
            FORTEMATIC GLP-1
          </span>

          <h2>
            Evidence-Informed Nutrition.
            <br />
            Premium Daily Support.
          </h2>

          <p className={styles.intro}>
            ForteMatic GLP-1 has been carefully formulated to support healthy
            appetite regulation, digestive wellness and metabolic health through
            thoughtfully selected ingredients that complement your body's
            natural processes.
          </p>

          <div className={styles.highlights}>

            <div className={styles.card}>
              <h3>Berberine</h3>
              <p>
                Traditionally studied for its role in supporting healthy
                metabolic function.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Prebiotics</h3>
              <p>
                Help nourish beneficial bacteria that support a balanced gut
                microbiome.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Probiotics</h3>
              <p>
                Selected strains that contribute to everyday digestive wellness.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Chromium</h3>
              <p>
                Contributes to normal macronutrient metabolism and maintenance
                of normal blood glucose levels.
              </p>
            </div>

          </div>

          <div className={styles.footer}>

            <div className={styles.badges}>
              <span>Premium Formula</span>
              <span>Daily Use</span>
              <span>Evidence-Informed</span>
            </div>

            <button className={styles.button}>
              Explore The Formula
            </button>

          </div>

        </div>

      </section>
    </>
  );
}
