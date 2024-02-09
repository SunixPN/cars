import styles from "./CustomCheck.module.css"

const CustomCheck = ({ text, id }) => {
  return (
    <div className={ styles.check }>
        <input className={ styles.input } id={ id } type="checkbox" />
        <label className={ styles.label } htmlFor={ id } />
        <span className={ styles.text }>{ text }</span>
    </div>
  )
}

export default CustomCheck
