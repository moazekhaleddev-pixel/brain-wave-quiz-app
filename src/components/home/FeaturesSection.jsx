import styles from "./FeaturesSection.module.css";
import { Zap } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { Goal } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.head}>
        <h2>Built for curious minds</h2>
        <p>
          Every feature is crafted around one goal: making learning addictively
          enjoyable.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Zap color="#818CF8" />
          </div>

          <p className={styles.title}>Vast Categories</p>
          <p className={styles.desc}>
            10 hand-curated categories from General Knowledge to Film, Music,
            and beyond. Easy, Medium, and Hard tiers per category.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <ChartColumnIncreasing color="#34D399" />
          </div>

          <p className={styles.title}>Real-time Scoring</p>
          <p className={styles.desc}>
            Watch your score climb with every correct answer. The built-in timer
            adds just enough pressure to keep things interesting.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <Goal color="#F472B6" />
          </div>

          <p className={styles.title}>Track Your Accuracy</p>
          <p className={styles.desc}>
            Detailed results after every quiz: correct, wrong, time taken, and
            accuracy rate — so you always know where you stand.
          </p>
        </div>
      </div>
    </section>
  );
}
