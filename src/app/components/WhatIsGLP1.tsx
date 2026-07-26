import GoldDivider from "./GoldDivider";
import styles from "./WhatIsGLP1.module.css";

export default function WhatIsGLP1() {
  return (
    <>
      <GoldDivider />

      <section className={styles.section}>

        <div className={styles.left}>

          <span className={styles.eyebrow}>
            UNDERSTANDING GLP-1
          </span>

          <h2>
            What Is GLP-1?
          </h2>

          <p>
            GLP-1 (glucagon-like peptide-1) is a naturally occurring hormone
            produced primarily in the gut after eating. It plays an important
            role in helping the body regulate appetite, feelings of fullness,
            blood sugar and normal metabolic function.
          </p>

          <p>
            As food moves through the digestive system, GLP-1 is released as
            part of the body's natural signalling process. It communicates with
            multiple organs involved in appetite and digestion, helping support
            normal hunger signals and satiety after meals.
          </p>

          <p>
            Because of its role in appetite regulation and metabolic health,
            GLP-1 has become one of the most widely discussed areas of nutrition
            and wellness research. Many people are now exploring ways to support
            their body's natural GLP-1 pathways through healthy lifestyle
            choices, gut health and targeted nutritional ingredients.
          </p>

        </div>

        <div className={styles.right}>

          <div className={styles.card}>

            <div className={styles.icon}>🧠</div>

            <h3>Brain</h3>

            <p>
              Helps regulate appetite and feelings of fullness.
            </p>

          </div>

          <div className={styles.card}>

            <div className={styles.icon}>🦠</div>

            <h3>Gut</h3>

            <p>
              Produced naturally within the digestive system after eating.
            </p>

          </div>

          <div className={styles.card}>

            <div className={styles.icon}>⚖️</div>

            <h3>Metabolism</h3>

            <p>
              Supports normal metabolic processes and healthy weight management goals.
            </p>

          </div>

          <div className={styles.card}>

            <div className={styles.icon}>💚</div>

            <h3>Satiety</h3>

            <p>
              Supports natural feelings of fullness and appetite control.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}
