import { useQuiz } from "../../../contexts/QuizContext";
import formatTime from "../../../services/formatSecounds";
import styles from "./ResultMarks.module.css";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import { ClockFading } from "lucide-react";
export default function ResultMarks() {
  const { userAnswers, secoundsRemaining, totalQuestions } = useQuiz();
  const totalCorrectAnswers = userAnswers.filter((a) => a.isCorrect).length;
  const totalWrongAnswers = userAnswers.filter((a) => !a.isCorrect).length;
  const timeTaken = formatTime(totalQuestions * 20 - secoundsRemaining);
  return (
    <div className={styles.marks}>
      <Mark>
        <span>
          <Check size={20} color="var(--green-border)" />
        </span>
        <span style={{color:"var(--green-border)"}}>{totalCorrectAnswers}</span>
        <span>
            Correct
        </span>
      </Mark>
      <Mark>
        <span><X size={20} color="var(--red-border)"/></span>
        <span style={{color:"var(--red-border)"}}> {totalWrongAnswers}</span>
        <span>
            Wrong
        </span>
      </Mark>
      <Mark>
        <span>
          <ClockFading size={20} color="var(--card-foreground)" />
        </span>
        <span style={{color:"var(--card-foreground)"}} >{timeTaken}</span>
        <span>
            Time Taken
        </span>
      </Mark>
    </div>
  );
}

function Mark({ children }) {
  return <div className={styles.mark}>{children}</div>;
}
