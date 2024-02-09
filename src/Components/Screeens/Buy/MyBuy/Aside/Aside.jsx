import styles from "./Aside.module.css"
import Tab from "../../../Account/AccSettings/Settings/Tab/Tab"
import { useDispatch } from "react-redux"
import { actions } from "../../../../../store/Auth/auth.slice"

const Aside = ({ currentView, setCurrentView }) => {
  const dispatch = useDispatch()

  return (
    <aside className={ styles.settings }>
        <ul className={ styles.list }>
          <Tab onClick={() => setCurrentView({
            waiting: true,
            cathing: false,
            history: false,
          })} 
          active={ currentView.waiting }
          text="Ожидает оплату"
          >
            <p className={ currentView.waiting ? styles.boxActive : styles.box }>
                2
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
            waiting: false,
            cathing: true,
            history: false,
          })} 
          active={ currentView.cathing }
          text="Необходимо забрать"
          >
            <p className={ currentView.cathing ? styles.boxActive : styles.box }>
                2
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
            waiting: false,
            cathing: false,
            history: true,
          })} 
          active={ currentView.history }
          text="История покупок"
          >
             <p className={ currentView.history ? styles.boxActive : styles.box }>
                1
            </p>
          </Tab>
        </ul>
        <span onClick={() => {
          localStorage.removeItem("id")
          dispatch(actions.Exit())}} className={ styles.exit }>Выход из аккаунта</span>
    </aside>
  )
}

export default Aside