import { Check, CircleX } from "lucide-react";
import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./QuestionReview.module.css";

export default function QuestionReview() {
  const { selectedQuiz, userAnswers } = useQuiz();

  return (
    <ul className={styles.reviews}>
      <li >Question Review</li>
      {userAnswers.map((a, i) => (
        <Review
          key={selectedQuiz[i].question}
          userAnswer={a}
          currentQuestion={selectedQuiz[i]}
        />
      ))}
    </ul>
  );
}

function Review({ userAnswer, currentQuestion }) {
  const questionText = currentQuestion.question;
  const correctAnswer = currentQuestion["correct_answer"];
  const answer = userAnswer.answer;

  return (
    <li>
      <span className={styles.icon}>
        {userAnswer.isCorrect ? (
          <Check color="var(--green-border)" size={18} strokeWidth={2.5} />
        ) : (
          <CircleX color="var(--red-border)" size={18} strokeWidth={2} />
        )}
      </span>
      <div>
        <div className={styles.question}>{questionText}</div>
        {!userAnswer.isCorrect && (
          <div className={styles.wrongAnswer}>{answer}</div>
        )}
        <div className={styles.correctAnswer}>{correctAnswer}</div>
      </div>
    </li>
  );
}