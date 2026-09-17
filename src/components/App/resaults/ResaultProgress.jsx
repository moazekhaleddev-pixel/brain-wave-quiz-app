import { useQuiz } from "../../../contexts/QuizContext";
import Progress from "../Progress";
import CircularProgress from "./CircularProgress";
import styles from "./ResaultProgress.module.css";

export default function ResaultProgress() {
  const { score, totalQuestions } = useQuiz();
    const accuracyPercentage = Math.floor(score / totalQuestions * 100);
  return (
    <div className={styles.resultsProgrees}>
      <CircularProgress current={score} total={totalQuestions} />
      <div className={styles.accuracy}>
        <div>
            <span>Accuracy</span>
            <span>{accuracyPercentage}%</span>
        </div>
        <Progress value={score} max={totalQuestions}  />
      </div>
    </div>
  );
}
