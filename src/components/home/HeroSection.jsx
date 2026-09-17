import styles from "./HeroSection.module.css";
import Heading from "./Heading";
import MouckCard from "./MoukCard";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Heading />
      <MouckCard />
    </section>
  );
}
