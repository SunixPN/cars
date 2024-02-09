import styles from "./Number.module.css"

const Number = ({ children, active }) => {

  return (
    <span 
    className={ active ? styles.numberActive : styles.number }
    > 
    { children } 
    </span>
  )
}

export default Number
