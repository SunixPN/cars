import styles from "./Downer.module.css"
import { Link } from "react-router-dom"
import Search from "./Search/Search"

const Downer = () => {
  return (
    <nav className={ styles.downer }>
        <div className={ styles.wrapper }>
            <div className={ styles.navigate }>
                <Link to={"/"}><img className={ styles.logo } src="./logo.svg" alt="logo" /></Link>
                <ul className={ styles.list }>
                    <li><Link className={ [styles.link, styles.active].join(" ") } to="/">Каталог</Link></li>
                    <li><Link className={ styles.link } to="/auctions">Аукционы</Link></li>
                    <li><Link className={ styles.link } to="#">Тарифы</Link></li>
                    <li><Link className={ styles.link } to="#">Как это работает</Link></li>
                </ul>
            </div>
            <div className={ styles.panels }>
                <Search auth={ false } />
                <button className={ styles.button }>Вход / Регистрация</button>
                <button className={ styles.burger } />
            </div>
        </div>
    </nav>
  )
}

export default Downer
