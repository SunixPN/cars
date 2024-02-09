import Upper from "../../Catalog/Header/Upper/Upper"
import DownerAuctions from "./DownerAuctions/DownerAuctions"
import styles from "./HeaderAuctions.module.css"

const HeaderAuctions = () => {
  return (
    <header className={ styles.header }>
        <Upper />
        <DownerAuctions />
    </header>
  )
}

export default HeaderAuctions