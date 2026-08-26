export const metadata = {
  title: "Best GLP-1 Supplement | ForteMatic",
  description:
    "Discover ForteMatic GLP-1 support for appetite, gut health and healthy weight-management goals.",
};

const amazonUrl =
  "https://www.amazon.com/s?k=ForteMatic+GLP-1";

export default function BestGLP1Supplement() {
  return (
    <main
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#151515",
        background: "#ffffff",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "18px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <a
          href="/"
          style={{
            color: "#111",
            textDecoration: "none",
            fontWeight: 900,
            fontSize: 25,
          }}
        >
          ForteMatic®
        </a>

        <a
          href={amazonUrl}
          style={{
            background: "#111",
            color: "#fff",
            padding: "13px 22px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 800,
          }}
        >
          Buy on Amazon →
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "90px 6%",
          textAlign: "center",
          background: "#f3f3ef",
        }}
      >
        <p
          style={{
            fontSize: 13,
            letterSpacing: 2,
            fontWeight: 900,
          }}
        >
          FORTEMATIC GLP-1 SUPPORT
        </p>

        <h1
          style={{
            maxWidth: 950,
            margin: "20px auto",
            fontSize: "clamp(42px, 7vw, 76px)",
            lineHeight: 1.03,
          }}
        >
          Natural GLP-1 Support for Your Wellness Goals
        </h1>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto 32px",
            fontSize: 21,
            lineHeight: 1.6,
          }}
        >
          A daily nutritional formula designed to support appetite,
          healthy fullness, gut health and weight-management goals.
        </p>

        <a
          href={amazonUrl}
          style={{
            display: "inline-block",
            background: "#111",
            color: "#fff",
            padding: "17px 30px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 900,
            fontSize: 17,
          }}
        >
          Shop ForteMatic on Amazon →
        </a>

        <p
          style={{
            marginTop: 28,
            fontWeight: 700,
          }}
        >
          ✓ Appetite Support &nbsp;&nbsp; ✓ Gut Health &nbsp;&nbsp; ✓
          Weight Management
        </p>
      </section>

      {/* EXPLANATION */}
      <section
        style={{
          maxWidth: 950,
          margin: "0 auto",
          padding: "75px 6%",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 46px)",
          }}
        >
          What is GLP-1?
        </h2>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.7,
          }}
        >
          GLP-1 (glucagon-like peptide-1) is a hormone naturally produced
          by the body and involved in appetite signalling, feelings of
          fullness, digestion and metabolic processes.
        </p>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.7,
          }}
        >
          ForteMatic GLP-1 is a dietary supplement designed to complement
          healthy lifestyle habits with nutritional ingredients selected
          to support gut and metabolic wellness.
        </p>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "75px 6%",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 46px)",
              textAlign: "center",
            }}
          >
            Everyday Support
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginTop: 40,
            }}
          >
            {[
              [
                "Appetite Support",
                "Designed to complement healthy appetite and fullness signals.",
              ],
              [
                "Gut Health",
                "Supports digestive balance and everyday gut wellness.",
              ],
              [
                "Weight Management",
                "Designed to complement healthy diet, activity and lifestyle goals.",
              ],
              [
                "Metabolic Wellness",
                "Nutritional support for everyday metabolic wellness.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  border: "1px solid #444",
                  borderRadius: 18,
                  padding: 28,
                }}
              >
                <h3
                  style={{
                    fontSize: 22,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    lineHeight: 1.6,
                    color: "#ddd",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section
        style={{
          padding: "80px 6%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 850,
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 46px)",
            }}
          >
            GLP-1 Support Without Prescription Medication
          </h2>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
            }}
          >
            ForteMatic GLP-1 is a dietary supplement. It does not contain
            semaglutide, tirzepatide or prescription GLP-1 medication.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#f3f3ef",
          padding: "80px 6%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(34px, 5vw, 48px)",
          }}
        >
          Discover ForteMatic GLP-1
        </h2>

        <p
          style={{
            fontSize: 19,
            marginBottom: 30,
          }}
        >
          Available on Amazon.
        </p>

        <a
          href={amazonUrl}
          style={{
            display: "inline-block",
            background: "#111",
            color: "#fff",
            padding: "17px 30px",
            borderRadius: 999,
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          Buy on Amazon →
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#ddd",
          padding: "40px 6%",
          textAlign: "center",
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        <strong>ForteMatic®</strong>

        <p
          style={{
            maxWidth: 850,
            margin: "15px auto 0",
          }}
        >
          *These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat,
          cure, or prevent any disease.
        </p>
      </footer>
    </main>
  );
}
