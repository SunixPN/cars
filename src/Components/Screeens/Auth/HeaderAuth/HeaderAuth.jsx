import Upper from "../../Catalog/Header/Upper/Upper"
import DownerAuth from "./DownerAuth/DownerAuth"
import styles from "./HeaderAuth.module.css"

const HeaderAuth = ({ activeFav=false }) => {
  return (
    <header className={ styles.header }>
        <Upper />
        <DownerAuth activeFav={activeFav} />
    </header>
  )
}

export default HeaderAuth
