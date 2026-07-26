import GoldDivider from "./GoldDivider";
import styles from "./PathwayDiagram.module.css";

export default function PathwayDiagram() {
  return (
    <>
      <GoldDivider />

      <section
        id="how-it-works"
        className={styles.section}
      >
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            THE FORTEMATIC PATHWAY™
          </span>

          <h2>
            How Your Body Naturally Supports
            <br />
            Appetite & Metabolic Wellness
          </h2>

          <p>
            GLP-1 is one part of a complex network connecting your digestive
            system, appetite regulation and metabolic health. ForteMatic GLP-1
            is designed to complement your body's natural processes through
            carefully selected nutritional ingredients.
          </p>
        </div>

        <div className={styles.diagram}>
          <div className={styles.node}>
            <div className={styles.circle}></div>
            <h3>Brain</h3>
            <span>Appetite Signals</span>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.node}>
            <div className={styles.circle}></div>
            <h3>Gut Microbiome</h3>
            <span>Digestive Wellness</span>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.nodeMain}>
            <div className={styles.circleMain}></div>

            <h3>Your Body</h3>

            <p>
              Natural GLP-1 pathways help coordinate communication between the
              digestive system, appetite regulation and normal metabolic
              function.
            </p>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.node}>
            <div className={styles.circle}></div>
            <h3>Fullness</h3>
            <span>Satiety After Meals</span>
          </div>

          <div className={styles.connector}></div>

          <div className={styles.node}>
            <div className={styles.circle}></div>
            <h3>Metabolic Wellness</h3>
            <span>Healthy Lifestyle Support</span>
          </div>
        </div>
      </section>
    </>
  );
}
