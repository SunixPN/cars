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
            active: true,
            in: false,
            end: false,
          })} 
          active={ currentView.active }
          text="Активные ставки"
          >
            <p className={ currentView.active ? styles.boxActive : styles.box }>
                3
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
            active: false,
            in: true,
            end: false,
          })} 
          active={ currentView.in }
          text="Ставки на согласование"
          >
            <p className={ currentView.in ? styles.boxActive : styles.box }>
                2
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
            active: false,
            in: false,
            end: true,
          })} 
          active={ currentView.end }
          text="Завершенные ставки"
          >
             <p className={ currentView.end ? styles.boxActive : styles.box }>
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