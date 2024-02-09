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
              set: true,
              my: false,
              lots: false,
              waiting: false,
              price: false
          })} 
          active={ currentView.set }
          text="Выставить лот"
          >
            <div className={ currentView.set ? styles.imageBox : styles.nonActive }>
                <img className={ styles.image } src="carIcon.png" alt="carIcon" />
            </div>
          </Tab>
          <Tab onClick={() => setCurrentView({
              set: false,
              my: true,
              lots: false,
              waiting: false,
              price: false
          })} 
          active={ currentView.my }
          text="Мои лоты"
          >
            <p className={ currentView.my ? styles.boxActive : styles.box }>
                3
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
              set: false,
              my: false,
              lots: true,
              waiting: false,
              price: false
          })} 
          active={ currentView.lots }
          text="Лоты на согласовании"
          >
             <p className={currentView.lots ? styles.boxActive : styles.box }>
                2
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
               set: false,
               my: false,
               lots: false,
               waiting: true,
               price: false
          })} 
          active={ currentView.waiting }
          text="Ожидается оплата"
          >
            <p className={ currentView.waiting ? styles.boxActive : styles.box }>
                2
            </p>
          </Tab>
          <Tab onClick={() => setCurrentView({
               set: false,
               my: false,
               lots: false,
               waiting: false,
               price: true
          })} 
          active={ currentView.price }
          text="Проданные лоты"
          >
            <p className={ currentView.price ? styles.boxActive : styles.box }>
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
