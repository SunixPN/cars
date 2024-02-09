import styles from "./Modal.module.css"

const Modal = ({ children, active, setActive, styleModal={}, disabled=false }) => {

  return (
    <div onClick={() => setActive(false)} className={ active ? styles.module : styles.hidden }>
        <div style={ styleModal } onClick={(event) => event.stopPropagation()} className={ active ? styles.content : styles.contentHidden }>
            <img onClick={() => setActive(false)} className={ disabled ? styles.none  : styles.exit } src="exit.png" alt="exit" />
            { children }
        </div>
    </div>
  )
}

export default Modal
