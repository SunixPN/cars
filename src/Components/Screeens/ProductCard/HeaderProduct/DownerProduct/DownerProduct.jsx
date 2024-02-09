import styles from "./DownerProduct.module.css"
import Search from "../../../Catalog/Header/Downer/Search/Search"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../../../store/Auth/auth.slice"

const DownerAuth = () => {
	const [active, setActive] = useState(false)

    const favReducer = useSelector(state => state.favReducer)

    const { data } = useSelector(state => state.authReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const notActive = () => {
            setActive(false)
        }

        window.addEventListener("click", notActive)

        return () => {
            window.removeEventListener("click", notActive)
        }
    }, [])

    const setDrop = (event) => {
        event.stopPropagation()
        setActive(prev => !prev)
    }

    const setName = name => {
        if (name.length > 10) {
            return name.slice(0, 7).concat("...")
        }
        else {
            return name
        }
    }

  return (
    <nav className={ styles.downer }>
        <div className={ styles.wrapper }>
            <div className={ styles.navigate }>
                <Link to={"/auth"}><img className={ styles.logo } src="./logo.svg" alt="logo" /></Link>
                <ul className={ styles.list }>
                    <li><Link className={ styles.link } to="/auth">Каталог</Link></li>
                    <li><Link className={ styles.link } to="/auctions">Аукционы</Link></li>
                    <li><Link className={ styles.link } to="/rates">Мои ставки</Link></li>
                    <div className={ styles.blockLink }>
                        <li><Link className={ styles.link } to="#">Личный кабинет</Link></li>
                        <button className={ styles.arrow } />
                    </div>
                    <div className={ styles.blockLink }>
                        <li><Link className={ styles.link } to="/favorites">Мое избранное</Link></li>
                        <p className={ styles.fav }>{ favReducer.length }</p>
                    </div>
                </ul>
            </div>
            <div className={ styles.panels }>
                <Search auth={ true } />
                <div onClick={setDrop} className={ styles.button }>
                    <p className={ styles.name }>{ setName(data.data.name) }</p>
                    <button className={ styles.arrow }></button>
                    <div className={ active ? styles.drop : [ styles.drop, styles.hidden].join(" ") }>
                        <ul className={ styles.listDrop }>
                            <li><Link className={ styles.listLink } to={"/settings"}>Настройки аккаунта</Link></li>
                            <li><Link className={ styles.listLink } to={"/sales"}>Мои продажи</Link></li>
                            <li><Link className={ styles.listLink } to={"/buy"}>Мои заказы (покупки)</Link></li>
                            <li><Link className={ styles.listLink } to={"/rates"}>Мои ставки</Link></li>
                            <li><Link onClick={() => {
                                dispatch(actions.Exit())
                                localStorage.removeItem("id")
                                }} className={ styles.listLink } to={"#"}>Выход</Link></li>
                        </ul>
                    </div>
                </div>
                <div onClick={setDrop} className={ styles.burger }>
                    <div className={ active ? styles.dropB : [ styles.dropB, styles.hidden].join(" ") }>
                        <ul className={ styles.listDrop }>
                            <li><Link className={ styles.listLink } to={"/auth"}>Каталог</Link></li>
                            <li><Link className={ styles.listLink } to={"/auctions"}>Аукционы</Link></li>
                            <li><Link className={ styles.listLink } to={"/rates"}>Мои ставки</Link></li>
                            <li><Link className={ styles.listLink } to={"/buy"}>Мои покупки</Link></li>
                            <li><Link className={ styles.listLink } to={"/sales"}>Мои продажи</Link></li>
                            <li><Link className={ styles.listLink } to={"#"}>Тарифы</Link></li> 
                            <li><Link className={ styles.listLink } to={"#"}>Как это работает</Link></li>   
                            <li><Link onClick={() => {
                                dispatch(actions.Exit())
                                localStorage.removeItem("id")
                                }} className={ styles.listLink } to={"#"}>Выход</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default DownerAuth