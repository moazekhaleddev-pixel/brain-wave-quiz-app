import { ArrowRight, ChevronRight, Star } from "lucide-react";
import styles from "./Heading.module.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
export default function Heading() {
  const navigate = useNavigate();
  return (
    <div className={styles.heading}>
      <div className={styles.mark}>
        <Star size={14} />
        Now With 500+ Questions Across multible Chalenges
      </div>
      <h1>
        Chalenge Your
        <br /> Mind,
        <br /> <span>Anywhere, AnyTime.</span>
      </h1>
      <p>
        BrainWave is a precision-crafted trivia platform that adapts to your
        level. Track your accuracy, compete across categories, and see yourself
        improve.
      </p>
      <div className={styles.ctaBtn}>
        <Button
          onClick={() => navigate("/login/sign-up")}
          color="var(--accent-foreground)"
          bgColor="var(--accent)"
          bgHover="var(--ring)"
        >
          start your first quiz <ArrowRight size={15} />
        </Button>
        <Button
          onClick={() => navigate("/login")}
          color="var(--card-foreground)"
          bgColor="var(--card)"
          bgHover="var(--muted)"
        >
          login to dashboard <ChevronRight size={15} />
        </Button>
      </div>
      <div className={styles.stats}>
        <div>
          <span>10k+</span>
          <span>Players</span>
        </div>
        <div>
          <span>500+</span>
          <span>Questions</span>
        </div>
        <div>
          <span>25+</span>
          <span>catigories</span>
        </div>
      </div>
    </div>
  );
}
