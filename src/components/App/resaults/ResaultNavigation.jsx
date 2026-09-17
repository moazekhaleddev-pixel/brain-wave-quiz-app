import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../Button";
import styles from "./ResaultNavigation.module.css";
import { useQuiz } from "../../../contexts/QuizContext";
export default function ResaultNavigation() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams?.get("type");
  const difficulty = searchParams?.get("difficulty");
  const amount = searchParams?.get("amount");
  const category = searchParams?.get("category");
  const { dispatch } = useQuiz();
  return (
    <div className={styles.navigation}>
      <Button
        bgColor="var(--primary)"
        color="var(--primary-foreground)"
        bgHover="var(--accent)"
        onClick={() => {
          dispatch({ type: "reset/quiz" });
          navigate(
            `/app/quiz/${category}?amount=${amount}&type=${type.toLowerCase()}&difficulty=${difficulty}`,
          );
        }}
      >
        Play Again
      </Button>
      <Button
        bgColor="var(--muted)"
        color="var(--muted-foreground)"
        bgHover="var(--card)"
        onClick={() => {
          dispatch({ type: "reset/quiz" });
          navigate("/app");
        }}
      >
        Back to DashBoard
      </Button>
    </div>
  );
}
