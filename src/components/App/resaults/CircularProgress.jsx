import styles from './CircularProgress.module.css'
export default function CircularProgress({ current, total }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  const progressRatio = current / total;
  const strokeDashoffset = circumference - progressRatio * circumference;

  return (
    <div className={styles.circularContainer}>
      <svg className={styles.svg} viewBox="0 0 100 100">
        <circle
          className={styles.bgCircle}
          cx="50"
          cy="50"
          r={radius}
        />
        <circle
          className={styles.progressCircle}
          cx="50"
          cy="50"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      
      <div className={styles.textContainer}>
        <span className={styles.currentNumber}>{current}</span>
        <span className={styles.totalText}>of {total}</span>
      </div>
    </div>
  );
}