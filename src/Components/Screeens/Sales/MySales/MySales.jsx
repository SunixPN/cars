import Aside from "./Aside/Aside"
import styles from "./MySales.module.css"
import { useState } from "react"
import Set from "./Set/Set"
import Lots from "./Lots/Lots"
import Price from "./Price/Price"

const MySales = () => {
	const [currentView, setCurrentView] = useState({
    set: true,
    my: false,
    lots: false,
    waiting: false,
    price: false
  })

	const currentElem = () => {
		if (currentView.set) {
			return <Set /> 
		}
		else if (currentView.my) {
			return <Lots />
		}
		else if (currentView.lots) {
			return <Price />
		}
		else if (currentView.waiting) {
			return <Set />
		}
		else {
			return <Price />
		}
	}

  return (
    <section className={ styles.section }>
        <h1 className={ styles.title }>Мои продажи</h1>
        <div className={ styles.box }>
					<Aside currentView={ currentView } setCurrentView={ setCurrentView } />
					{
						currentElem()
					}
        </div>
    </section>
  )
}

export default MySales
