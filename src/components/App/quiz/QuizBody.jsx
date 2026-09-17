import { useEffect, useMemo } from "react";
import styles from "./QuizBody.module.css";
import { useQuiz } from "../../../contexts/QuizContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { categoryDetails } from "../../../services/constants";
import Button from "../../Button";
import useHestory from "../../../hooks/useHestory";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";
import Progress from "../Progress";
import Timer from "../quiz/Timer";
function getLetter(num) {
  return String.fromCharCode(97 + num).toUpperCase();
}
function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export default function Quiz() {
  const {
    getQuiz,
    err,
    isLoading,
    selectedQuiz,
    handleBackToCatrgories,
    secoundsRemaining,
  } = useQuiz();
  const [searchParams] = useSearchParams();
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const type = searchParams?.get("type");
  const difficulty = searchParams?.get("difficulty");
  const amount = searchParams?.get("amount");
  const category = categoryId;
  useHestory(err);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (categoryId && searchParams) {
      getQuiz(categoryId, searchParams, signal);
    }
    return () => controller.abort();
  }, [categoryId, searchParams, getQuiz]);

  useEffect(() => {
    if (secoundsRemaining === 0 && selectedQuiz.length > 0) {
      navigate(
        `/app/results?category=${category}&difficulty=${difficulty}&type=${type}&amount=${amount}`,
      );
    }
  }, [
    secoundsRemaining,
    navigate,
    selectedQuiz,
    category,
    type,
    difficulty,
    amount,
  ]);
  return (
    <>
      {isLoading && <Loader />}
      {err && (
        <ErrorMessage errorMsg={err}>
          <Button
            bgColor="var(--primary)"
            color="var(--primary-foreground)"
            bgHover="var(--accent)"
            onClick={handleBackToCatrgories}
          >
            Back
          </Button>
        </ErrorMessage>
      )}
      {!isLoading && !err && (
        <div className={styles.quiz}>
          <QuizHead />
          <QuizProgress />
          <QuizBody />
          <QuizFooter />
        </div>
      )}
    </>
  );
}

function QuizHead() {
  const { categoryId } = useParams();
  const { currentQuestion } = useQuiz();
  const { category, difficulty } = currentQuestion;
  return (
    <div className={styles.quizHead}>
      {categoryDetails[categoryId].emoji}
      <span>
        {category}.{difficulty}
      </span>
    </div>
  );
}

function QuizProgress() {
  const { index, totalQuestions } = useQuiz();
  return (
    <div className={styles.progress}>
      <span>
        Question {index + 1} of {totalQuestions}
      </span>
      <Progress value={index + 1} max={totalQuestions} />
    </div>
  );
}

function QuizBody() {
  const { currentQuestion, isAnswerd, answer, handleAnswer } = useQuiz();
  const { correct_answer, incorrect_answers, question } = currentQuestion;
  const options = useMemo(
    () => shuffle([...(incorrect_answers || []), correct_answer]),
    [correct_answer, incorrect_answers],
  );
  return (
    <>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.options}>
        {options?.map((o, i) => (
          <button
            key={o}
            className={`${isAnswerd ? (correct_answer === o ? styles.correct : correct_answer !== o && answer === o ? styles.wrong : "") : ""} `}
            onClick={() => {
              const isCorrect = correct_answer === o;
              handleAnswer(o, isCorrect);
            }}
            disabled={isAnswerd}
          >
            <span className={styles.letter}>{getLetter(i)}</span>
            {o}
          </button>
        ))}
      </div>
    </>
  );
}

function QuizFooter() {
  const { totalQuestions, isAnswerd, index, handleNext } = useQuiz();

  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.quizFooter}>
      <Timer />
      <Button
        onClick={() => handleNext(categoryId, searchParams)}
        isDisabled={!isAnswerd}
        bgColor={isAnswerd ? "var(--primary)" : "var(--muted)"}
        color={
          isAnswerd ? "var(--primary-foreground)" : "var(--muted-foreground)"
        }
        bgHover={isAnswerd ? "var(--primary)" : "var(--muted)"}
      >
        {index + 1 === totalQuestions ? "Finish" : "Next Question"}
      </Button>
    </div>
  );
}
