import { useDispatch } from "react-redux"
import styles from "./Settings.module.css"
import Tab from "./Tab/Tab"
import { actions } from "../../../../../store/Auth/auth.slice"

const Settings = ({ currentView, setCurrentView }) => {
  const dispatch = useDispatch()

  return (
    <aside className={ styles.settings }>
        <ul className={ styles.list }>
          <Tab onClick={() => setCurrentView({
              profile: true,
              addres: false,
              tarif: false,
              setting: false,
              help: false
          })} 
          active={ currentView.profile }
          text="Мой профиль"
          >
          </Tab>
          <Tab onClick={() => setCurrentView({
              profile: false,
              addres: true,
              tarif: false,
              setting: false,
              help: false
          })} 
          active={ currentView.addres }
          text="Адрес доставки"
          > 
          </Tab>
          <Tab onClick={() => setCurrentView({
              profile: false,
              addres: false,
              tarif: true,
              setting: false,
              help: false
          })} 
          active={ currentView.tarif }
          text="Мой тарифный план"
          >
          </Tab>
          <Tab onClick={() => setCurrentView({
              profile: false,
              addres: false,
              tarif: false,
              setting: true,
              help: false
          })} 
          active={ currentView.setting }
          text="Настройка уведомлений"
          >
          </Tab>
          <Tab onClick={() => setCurrentView({
              profile: false,
              addres: false,
              tarif: false,
              setting: false,
              help: true
          })} 
          active={ currentView.help }
          text="Справка и поддержка"
          >
          </Tab>
        </ul>
        <span onClick={() => dispatch(actions.Exit())} className={ styles.exit }>Выход из аккаунта</span>
    </aside>
  )
}

export default Settings
