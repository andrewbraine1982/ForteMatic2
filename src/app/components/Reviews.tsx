"use client";

import type { CSSProperties, MouseEvent } from "react";
import styles from "./Reviews.module.css";

type Review = {
  name: string;
  country: string;
  flag: string;
  date: string;
  title: string;
  review: string;
  verified: boolean;
};

const reviews: Review[] = [
  {
    name: "beachboi305",
    country: "United States",
    flag: "🇺🇸",
    date: "10 December 2025",
    title: "BEST FIBER SUPPLEMENT ON AMAZON!!",
    review:
      "I struggle with constipation due to medications that I am on and this fibre supplement by far is the best one I have tried. I take four capsules a day with plenty of water and I am now regular and feel so much better. This is so much better than other products I have tried because of the formula, plus it is lower cost. Definitely recommend!",
    verified: true,
  },
  {
    name: "Heff.",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "23 September 2021",
    title: "Helped enormously with the impact of diverticular disease",
    review:
      "As other reviewers have noted, these are not inexpensive, but for anyone who has issues with regularity, I cannot recommend them enough. They have had a hugely positive impact on my dad's experience. Be patient for the first few days while your system gets used to them, especially if you previously had a low-fibre diet.",
    verified: true,
  },
  {
    name: "Edward Jazic",
    country: "United States",
    flag: "🇺🇸",
    date: "7 February 2026",
    title: "Brilliant Bowels",
    review:
      "I have been taking the ForteMatic fibre supplement and it has become a reliable part of my daily routine. The capsules are easy to swallow and I do not notice any unpleasant taste or after-effects. I have noticed smoother digestion and fewer bloated days since taking them consistently. It is a simple, no-nonsense fibre boost without sugary drinks or powders.",
    verified: true,
  },
];

export default function Reviews() {
  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();

    const mouseX = event.clientX - bounds.left;
    const mouseY = event.clientY - bounds.top;

    const rotateY =
      ((mouseX - bounds.width / 2) / bounds.width) * 4;

    const rotateX =
      ((bounds.height / 2 - mouseY) / bounds.height) * 4;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--mouse-x", `${mouseX}px`);
    card.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = (
    event: MouseEvent<HTMLElement>
  ) => {
    const card = event.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.backgroundGlow} />

      <div className={styles.reviewsInner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL CUSTOMER REVIEWS</p>

          <h2>
            Real routines.
            <br />
            Real experiences.
          </h2>

          <p className={styles.intro}>
            Genuine feedback shared by ForteMatic customers.
          </p>
        </div>

        <div className={styles.reviewSummary}>
          <div className={styles.ratingBlock}>
            <div
              className={styles.summaryStars}
              aria-label="Five out of five stars"
            >
              ★★★★★
            </div>

            <strong>5.0 out of 5</strong>
          </div>

          <div className={styles.summaryDivider} />

          <div className={styles.summaryItem}>
            <strong>60,000+</strong>
            <span>Happy customers</span>
          </div>

          <div className={styles.summaryDivider} />

          <div className={styles.summaryItem}>
            <strong>10,000+</strong>
            <span>Five-star reviews</span>
          </div>
        </div>

        <div className={styles.reviewGrid}>
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className={styles.reviewCard}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={
                {
                  "--delay": `${index * 90}ms`,
                  "--rotate-x": "0deg",
                  "--rotate-y": "0deg",
                  "--mouse-x": "50%",
                  "--mouse-y": "50%",
                } as CSSProperties
              }
            >
              <div className={styles.cardGlow} />
              <div className={styles.goldSweep} />

              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div
                    className={styles.stars}
                    aria-label="Five out of five stars"
                  >
                    {"★★★★★".split("").map((star, starIndex) => (
                      <span
                        key={starIndex}
                        style={
                          {
                            "--star-delay": `${starIndex * 65}ms`,
                          } as CSSProperties
                        }
                      >
                        {star}
                      </span>
                    ))}
                  </div>

                  {review.verified && (
                    <span className={styles.verifiedBadge}>
                      <span className={styles.verifiedTick}>✓</span>
                      Verified purchase
                    </span>
                  )}
                </div>

                <div className={styles.quoteMark}>“</div>

                <h3>{review.title}</h3>

                <div className={styles.reviewText}>
                  <p>{review.review}</p>
                </div>

                <div className={styles.reviewer}>
                  <div className={styles.avatar}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div className={styles.reviewerDetails}>
                    <strong>{review.name}</strong>

                    <span>
                      {review.flag} {review.country}
                    </span>
                  </div>

                  <time className={styles.reviewDate}>
                    {review.date}
                  </time>
                </div>
              </div>

              <div className={styles.cardNumber}>
                0{index + 1}
              </div>
            </article>
          ))}
        </div>

        <p className={styles.disclaimer}>
          Reviews reflect individual customer experiences. Results may vary.
        </p>
      </div>
    </section>
  );
}
