import Button from "../Button";
import GoogleIcon from "./GoogleIcon";
import GithubIcon from "./GitHubIcon";
import styles from "./LoginBtns.module.css";

export default function LoginBtns() {
  return (
    <div className={styles.loginBtns}>
      <Button color="var(--card-foreground)" bgColor="var(--card)" bgHover="var(--muted)">
        <GoogleIcon />
        Continue With Google
      </Button>
      <Button color="var(--card-foreground)" bgColor="var(--card)" bgHover="var(--muted)">
        <GithubIcon />
        Continue With Google with Git Hub
      </Button>
    </div>
  );
}