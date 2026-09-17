import { useNavigate } from 'react-router-dom';
import styles from './RandomCatigory.module.css'

import { ArrowRight } from "lucide-react";
export default function RandomCatigory({ details }) {
  const navigate = useNavigate()
  const { emoji, color } = details;
  return (
    <div onClick={()=>navigate("/app/categories/random/setup")} className={styles.catigory} style={{ "--catColor": color }}>
      <span style={{ backgroundColor: `rgb( from ${color} r g b / 30%)` }}>
        {emoji}
      </span>
      <div className={styles.catInfo}>
        <h3>Random</h3>
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
