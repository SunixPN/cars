import styles from "./Tab.module.css"

const Tab = ({ children, active, text="", ...options  }) => {
  return (
    <div { ...options } className={ styles.box }>
    <li className={ active ? [styles.elem, styles.active].join(" ") : styles.elem }>
      { text }
    </li>
    { children }
    </div>
  )
}

export default Tab
