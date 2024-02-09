import styles from "./CheckBox.module.css"

const CheckBox = ({ register=function() {}, id, name, value, children, gap = null, ...options }) => {
  return (
    <div style={ {gap: gap} } className={ styles.blockInput }>
        <input
        { ...options }
        name={ name }
        value={value}
        id={ id }
        {...register(name)} 
        type="radio" 
        className={ styles.radio } 
        />
        <label className={ styles.label } htmlFor={ id } />
        { children }
    </div>
  )
}

export default CheckBox
