import Number from "./Number/Number"
import styles from "./Pagination.module.css"

const Pagination = () => {
  return (
    <div className={ styles.pagination }>
        <button className={ styles.buttonLeft } />
        <div className={ styles.numbers }>
            <Number active={true}>1</Number>
            <Number active={false}>2</Number>
            <Number active={false}>3</Number>
            <span className={ styles.points }>...</span>
            <Number>100</Number>
        </div>
        <button className={ styles.buttonRight } />
    </div>
  )
}

export default Pagination
