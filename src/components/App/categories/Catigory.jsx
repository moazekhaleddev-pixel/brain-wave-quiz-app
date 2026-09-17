import { ArrowRight } from "lucide-react";
import styles from "./Catigory.module.css";
import { useNavigate } from "react-router-dom";
export default function Catigory({ cat, details }) {
  const { id, name } = cat;
  const { emoji, color } = details;
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/app/categories/${id}/setup`)} className={styles.catigory} style={{ "--catColor": color }}>
      <span style={{ backgroundColor: `rgb( from ${color} r g b / 30%)` }}>
        {emoji}
      </span>
      <div className={styles.catInfo}>
        <h3>{name}</h3>
        <h4>
          Start Quiz
          <span>
            <ArrowRight color={color} size={14}/>
          </span>
        </h4>
      </div>
    </div>
  );
}
