import styles from './Button.module.css'
export default function Button({isDisabled,onClick,children,color,bgColor,bgHover}) {
  return (
    <button disabled={isDisabled} className={styles.btn} style={{color:color,"--bg-color":bgColor,"--hover-bg":bgHover}} onClick={onClick}>
        {children}
    </button>
  )
}
