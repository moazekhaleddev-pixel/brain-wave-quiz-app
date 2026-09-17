import { ArrowRight } from "lucide-react";
import Button from "../Button";
import Logo from "../Logo";
import styles from "./MoukCard.module.css";
const question = {
  question: "Who developed the theory of general relativity?",
  options: ["Issac Newton", "Albert Einstein", "Max Planck", "Niels Bohr"],
  correctOption: 1,
};
export default function MouckCard() {
  return (
    <div className={styles.mouckCard}>
      <div className={styles.head}>
        <Logo />
        <ul>
          <li>
            <span className={styles.dot}></span>
          </li>
          <li>
            <span className={styles.dot}></span>
          </li>
          <li>
            <span className={styles.dot}></span>
          </li>
        </ul>
      </div>
      <div className={styles.status}>
        <span>Question 3 of 10</span>
        <span className={styles.timer}>07:42</span>
      </div>
      <div className={styles.progress}>
        <progress value={3} max={10} />
      </div>
      <div className={styles.questionBody}>
        <h2>{question.question}</h2>
        <div className={styles.options}>
          {question.options.map((o, i) => (
            <div
              key={i}
              className={`${styles.option} ${i === question.correctOption ? styles.correct : ""}`}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + i)}.
              </span>
              <span>{o}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Button
          bgColor="var(--primary)"
          bgHover="var(--primary)"
          color="#f1f5f9"
        >
          next question <ArrowRight size={15} />
        </Button>
      </div>
      <div className={styles.stats}>
        <div>
          <span>80%</span>
          <span>Speed</span>
        </div>
        <div>
          <span>76%</span>
          <span>Accuracy</span>
        </div>

        <div>
          <span>2🔥</span>
          <span>Streak</span>
        </div>
      </div>
      <div className={styles.profile}>
        <span>AG</span>
        <div className={styles.info}>
          <span>Alex G.Just scored</span>
          <span>100% on Science Hard 🎉</span>
        </div>
      </div>
    </div>
  );
}
