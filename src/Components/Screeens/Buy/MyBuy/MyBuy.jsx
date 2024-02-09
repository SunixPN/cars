import Aside from "./Aside/Aside"
import Waiting from "./Aside/Waiting/Waiting"
import Cathing from "./Cathing/Cathing"
import styles from "./MyBuy.module.css"
import { useState } from "react"
import Price from "../../Sales/MySales/Price/Price"

const MyBuy = () => {
	const [currentView, setCurrentView] = useState({
    waiting: true,
    cathing: false,
    history: false,
  })

	const currentElem = () => {
		if (currentView.waiting) {
			return <Waiting />
		}
		if (currentView.cathing) {
			return <Cathing />
		}
		if (currentView.history) {
			return <Price />
		}
	}

  return (
    <section className={ styles.section }>
        <h1 className={ styles.title }>Мои заказы (покупки)</h1>
				<div className={ styles.box }>
					<Aside currentView={currentView} setCurrentView={setCurrentView} />
					{
						currentElem()
					}
				</div>
    </section>
  )
}

export default MyBuy
