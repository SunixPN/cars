import styles from "./AccSetings.module.css"
import Settings from "./Settings/Settings"
import Profile from "./Profile/Profile"
import { useState } from "react"
import Addres from "./Addres/Addres"
import Tarif from "./Tarif/Tarif"
import Setting from "./Setting/Setting"
import Help from "./Help/Help"

const AccSetings = () => {
  const [currentView, setCurrentView] = useState({
    profile: true,
    addres: false,
    tarif: false,
    setting: false,
    help: false
  })

  const currentElem = () => {
    if (currentView.profile) {
      return <Profile />
    }
    else if (currentView.addres) {
      return <Addres />
    }
    else if (currentView.tarif) {
      return <Tarif />
    }
    else if (currentView.setting) {
      return <Setting />
    }
    else {
      return <Help />
    }
  }

  return (
    <section className={ styles.section }>
        <h1 className={ styles.title }>Настройка аккаунта 123456</h1>
        <div className={ styles.box }>
            <Settings currentView={ currentView } setCurrentView={ setCurrentView } />
            {
              currentElem()
            }
        </div>
    </section>
  )
}

export default AccSetings
