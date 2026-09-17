import { ArrowRight } from "lucide-react";
import Button from "../Button";
import styles from "./ReadySection.module.css";
import { useNavigate } from "react-router-dom";
export default function ReadySection() {
    const navigate = useNavigate();
  return (
    <section className={styles.ready}>
      <h2>Ready to test your knowledge?</h2>
      <p>
        Create a free account and start your first quiz in under 60 seconds.
      </p>
      <Button
        onClick={() => navigate("/login/sign-up")}
        color="var(--accent-foreground)"
        bgColor="var(--accent)"
        bgHover="var(--ring)"
      >
        Create Free Acount <ArrowRight size={15} />
      </Button>
    </section>
  );
}
