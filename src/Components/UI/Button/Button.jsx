import styles from "./Button.module.css"

const Button = ({ children, colour, font,  ...options }) => {
  return (
    <button style={{ backgroundColor: colour, fontSize: font }} className={ styles.button } { ...options } >
        { children }
    </button>
  )
}

export default Button
