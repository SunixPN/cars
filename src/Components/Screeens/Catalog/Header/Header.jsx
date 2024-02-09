import Downer from "./Downer/Downer"
import styles from "./Header.module.css"
import Upper from "./Upper/Upper"

const Header = () => {
  return (
    <header className={ styles.header }>
        <Upper />
        <Downer />
    </header>
  )
}

export default Header
