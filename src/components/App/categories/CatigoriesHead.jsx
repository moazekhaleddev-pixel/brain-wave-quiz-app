import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./CatigoriesHead.module.css";

export default function CatigoriesHead() {
    const {availableCatigories} = useQuiz()
  return (
    <div className={styles.head}>
      <div>
        <h2>Choose Category</h2>
        <p>
          Select a topic to begin. Configure difficulty and question count in
          the next step.
        </p>
      </div>
      <div className={styles.available}>
        {availableCatigories} Available
      </div>
    </div>
  );
}
