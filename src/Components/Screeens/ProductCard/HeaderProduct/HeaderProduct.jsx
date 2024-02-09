import Upper from "../../Catalog/Header/Upper/Upper"
import styles from "./HeaderProduct.module.css"
import DownerProduct from "./DownerProduct/DownerProduct"

const HeaderAuth = () => {
  return (
    <header className={ styles.header }>
        <Upper />
        <DownerProduct />
    </header>
  )
}

export default HeaderAuth