import styles from "./QuizSetupModal.module.css";
import { categoryDetails } from "../../../services/constants";
import {  X } from "lucide-react";
import { useState } from "react";
import { Select } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useQuiz } from "../../../contexts/QuizContext";
import Button from "../../Button";
export default function QuizSetupModal() {
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(10);
  const [type, setType] = useState("Multiple");
  const { categoryId } = useParams();
  const navigate = useNavigate();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.setup}>
        <DifficultyHead id={categoryId} />
        <DifficultyBtns difficulty={difficulty} setDifficulty={setDifficulty} />
        <Select
          label="NUMBERS OF QUESTIONS"
          data={[10, 20, 30, 40, 50]}
          value={amount}
          comboboxProps={{ withinPortal: false }}
          onChange={setAmount}
        />
        <Select
          label="NUMBERS OF QUESTIONS"
          data={["Multiple", "Boolean"]}
          comboboxProps={{ withinPortal: false }}
          value={type}
          onChange={setType}
        />
        <Button
          color="var(--accent-foreground)"
          bgColor="var(--accent)"
          bgHover="var(--ring)"
          onClick={() =>
            navigate(
              `/app/quiz/${categoryId}?amount=${amount}&type=${type.toLowerCase()}&difficulty=${difficulty}`,
            )
          }
        >
          start Quiz
        </Button>
      </div>
    </div>
  );
}

function DifficultyBtns({ difficulty, setDifficulty }) {
  return (
    <div className={styles.difficultyBtns}>
      <button
        style={
          difficulty === "easy"
            ? {
                backgroundColor: "var(--green-bg)",
                border: "1px solid var(--green-border)",
                color: "var(--green-border)",
              }
            : {
                backgroundColor: "var(--muted)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
              }
        }
        onClick={() => setDifficulty("easy")}
      >
        Easy
      </button>

      <button
        style={
          difficulty === "medium"
            ? {
                backgroundColor: "var(--yellow-bg)",
                border: "1px solid var(--yellow-border)",
                color: "var(--yellow-border)",
              }
            : {
                backgroundColor: "var(--muted)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
              }
        }
        onClick={() => setDifficulty("medium")}
      >
        Medium
      </button>

      <button
        style={
          difficulty === "hard"
            ? {
                backgroundColor: "var(--red-bg)",
                border: "1px solid var(--red-border)",
                color: "var(--red-border)",
              }
            : {
                backgroundColor: "var(--muted)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
              }
        }
        onClick={() => setDifficulty("hard")}
      >
        Hard
      </button>
    </div>
  );
}

function DifficultyHead({ id }) {
  const navigate = useNavigate();
  const { emoji, color } = categoryDetails[id || "random"];
  const { catigories } = useQuiz();
  
    const name = catigories.find((c)=>c.id === +id)?.name  || "Random";
  return (
    <div className={styles.head}>
      <div>
        <span style={{ backgroundColor: `rgb( from ${color} r g b / 30%)` }}>
          {emoji}
        </span>
        <div className={styles.catInfo}>
          <h3>Configure quiz</h3>
          <h4>{name}</h4>
        </div>
      </div>
      <button onClick={() => navigate("/app/categories")}>
        <X color="var(--card-foreground)" size={14} />
      </button>
    </div>
  );
}
