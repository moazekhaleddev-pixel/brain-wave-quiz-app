import { useNavigate } from 'react-router-dom';
import styles from './FormHead.module.css'
import { ArrowLeft } from 'lucide-react';
import ThemeBtn from '../ThemeBtn';
export default function FormHead() {
    const navigate = useNavigate();
  return (
    <div className={styles.formHead}>
        <button onClick={()=>navigate("/")}><ArrowLeft size={15}/>Back To Home</button>
        <ThemeBtn/>
    </div>
  )
}
