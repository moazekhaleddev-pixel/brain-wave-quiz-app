import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./CatigoriesList.module.css";
import Catigory from "./Catigory";
import RandomCatigory from "./RandomCatigory";
import { categoryDetails } from "../../../services/constants";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";

export default function CatigoriesList() {
  const { catigories } = useQuiz();
  const { isLoading, err } = useQuiz();

  return (
    <>
      {isLoading && <Loader />}
      {err && <ErrorMessage errorMsg={err} />}
      {!isLoading && !err && (
        <div className={styles.catigoriesContainer}>
          {catigories.map((c) => (
            <Catigory cat={c} key={c.id} details={categoryDetails[c.id]} />
          ))}
          <RandomCatigory details={categoryDetails["random"]} />
        </div>
      )}
    </>
  );
}
