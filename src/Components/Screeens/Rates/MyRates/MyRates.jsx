import Active from './Active/Active'
import Aside from './Aside/Aside'
import End from './End/End'
import In from './In/In'
import styles from './MyRates.module.css'
import { useState } from 'react'

const MyRates = () => {
    const [currentView, setCurrentView] = useState({
        active: true,
        in: false,
        end: false,
      })

      const currentElem = () => {
        if (currentView.active) {
            return <Active />
        }
        if (currentView.in) {
          return <In />
        }
        if (currentView.end) {
          return <End />
        }
      }

    return (
    <section className={ styles.section }>
        <h1 className={ styles.title }>Мои ставки</h1>
        <div className={ styles.box }>
            <Aside currentView={currentView} setCurrentView={setCurrentView} />
            {
                currentElem()
            }
        </div>
    </section>
  )
}

export default MyRates


