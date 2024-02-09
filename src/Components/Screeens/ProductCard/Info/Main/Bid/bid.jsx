import { useState } from "react"
import styles from "./bid.module.css"
import Modal from "../../../../../UI/Modal/Modal"

import Calculator from "./Calculator/Calculator"

const Bid = () => {
	let [ value, setValue ] = useState(0)

	const [ active, setActive ] = useState(false)

  return (
    <div className={ styles.bid }>
        <div className={ styles.block }>
            <h4 className={ styles.current }>Текущая ставка</h4>
            <div className={ styles.count }>
                <input 
								onChange={(event) => setValue(event.target.value)}
								value={ value } 
								className={ styles.input } 
								type="text" 
								/>
                <div className={ styles.buttons }>
                    <button
										onClick={() => setValue(--value)}
										className={ styles.dec } 
										/>
                    <button
										onClick={() => setValue(++value)} 
										className={ styles.inc } 
										/>
                </div>
            </div>
            <button className={ styles.button }>Сделать ставку</button>
            <div className={ styles.last }>
                <span className={ styles.text }>До завершения торгов</span>
                <span className={ styles.time }>7ч 59 мин</span>
            </div>
        </div>
        <div className={ styles.win }>
            <div className={ styles.textBlock }>
                <p className={ styles.text1 }>Winning bid</p>
                <p className={ styles.text2 }>Outbid</p>
            </div>
            <button className={ styles.winButton }>Купить сейчас за 22000$</button>
        </div>
        <div
				onClick={() => setActive(prev => !prev)} 
				className={ styles.calculator }
				>
            <img className={ styles.image } src="calculator.png" alt="calculator" />
            <button className={ styles.calculate }>Калькулятор стоимости</button>
				</div>
						<Modal active={ active } setActive={ setActive } styleModal={ { paddingTop: 50, paddingBottom: 50, paddingLeft: 0, paddingRight: 0 } }>
							<Calculator />
						</Modal>
        <div className={ styles.info }>
            <div className={ styles.point }>
                <span className={ styles.text }>Статус</span>
                <span className={ styles.value }>В транзите</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.text }>Порт назначения</span>
                <span className={ styles.value }>Клайпеда, Литва, если будет длинная строка</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.text }>Место назначения</span>
                <span className={ styles.value }>Вильнюс, Литва</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.text }>Дата доставки</span>
                <span className={ styles.value }>20.06.2023</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.text }>Дата торгов</span>
                <span className={ styles.value }>20.06.2023 9:00</span>
            </div>
            <img className={ styles.logo } src="CarFa.png" alt="logo" />
        </div>
    </div>
  )
}

export default Bid
