import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./Timer.module.css";
import { ClockFading } from "lucide-react";
import formatSecounds from "../../../services/formatSecounds";
import { useEffect } from "react";
export default function Timer() {
  const { secoundsRemaining, decSecounds } = useQuiz();
  const timer = formatSecounds(secoundsRemaining);
  useEffect(() => {
    const timer = setInterval(() => {
      decSecounds();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [decSecounds]);
  return (
    <div className={styles.timer}>
      <ClockFading />
      <span>{timer}</span>
    </div>
  );
}
