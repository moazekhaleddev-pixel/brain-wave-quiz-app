import AppHeader from '../components/App/AppHeader'
import QuestionReview from '../components/App/resaults/QuestionReview'
import ResaultNavigation from '../components/App/resaults/ResaultNavigation'
import ResaultProgress from '../components/App/resaults/ResaultProgress'
import ResultMarks from '../components/App/resaults/ResultMarks'
import useHestory from '../hooks/useHestory'
import styles from './Results.module.css'
export default function Results() {
  useHestory()
  return (
    <div className={styles.results}>
      <AppHeader/>
      <ResaultProgress/>
      <ResultMarks/>
      <QuestionReview/>
      <ResaultNavigation/>
    </div>
  )
}
