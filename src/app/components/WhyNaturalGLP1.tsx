import GoldDivider from "./GoldDivider";
import styles from "./WhyNaturalGLP1.module.css";

export default function WhyNaturalGLP1() {
  return (
    <>
      <GoldDivider />

      <section className={styles.section}>

        <div className={styles.header}>

          <span className={styles.eyebrow}>
            NATURAL SUPPORT
          </span>

          <h2>
            Why Natural GLP-1 Support Matters
          </h2>

          <p>
            Healthy GLP-1 activity is influenced by more than one factor.
            Nutrition, gut health, physical activity and lifestyle all play a
            role in supporting your body's natural appetite regulation and
            metabolic function.
          </p>

        </div>

        <div className={styles.grid}>

          <article className={styles.card}>

            <div className={styles.icon}>🥗</div>

            <h3>Healthy Appetite</h3>

            <p>
              Supporting your body's natural GLP-1 pathways may help promote
              healthy appetite regulation and feelings of fullness as part of a
              balanced lifestyle.
            </p>

          </article>

          <article className={styles.card}>

            <div className={styles.icon}>🦠</div>

            <h3>Gut Microbiome</h3>

            <p>
              A healthy gut microbiome plays an important role in digestive
              wellness and is closely connected with the body's natural GLP-1
              signalling pathways.
            </p>

          </article>

          <article className={styles.card}>

            <div className={styles.icon}>⚡</div>

            <h3>Metabolic Health</h3>

            <p>
              Natural GLP-1 support is part of a broader approach to supporting
              healthy metabolism, energy balance and long-term wellness goals.
            </p>

          </article>

          <article className={styles.card}>

            <div className={styles.icon}>💚</div>

            <h3>Everyday Wellness</h3>

            <p>
              Combined with healthy nutrition, regular activity and quality
              sleep, targeted nutritional support can complement your wellness
              routine.
            </p>

          </article>

        </div>

      </section>
    </>
  );
}
