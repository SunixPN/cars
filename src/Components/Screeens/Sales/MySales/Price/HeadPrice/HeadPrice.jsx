import styles from "./HeadPrice.module.css"
import { useState } from "react"

const HeadLots = ({ buttonsState, setButtonState }) => {
	const [choose, setChoose] = useState({allTime: true, period: false})

	const [date, setDate] = useState(["2023", "01", "21"])

  return (
    <>
        <div className={ styles.head }>
        <div className={ styles.box }>
            <div className={ styles.buttons }>
                <button onClick={() => {setButtonState({all: true, eu: false, us: false})}} className={ buttonsState.all ? styles.buttonActive : styles.button }>Все</button>
                <button onClick={() => {setButtonState({all: false, eu: true, us: false})}} className={ buttonsState.eu ? styles.buttonActive : styles.button }>Самая высокая ставка</button>
                <button onClick={() => {setButtonState({all: false, eu: false, us: true})}} className={ buttonsState.us ? styles.buttonActive : styles.button }>Цена перебита</button>
            </div>
            <div className={ styles.filters }>
                <div className={ styles.chooses }>
                    <button onClick={() => setChoose({allTime: true, period: false})} className={ choose.allTime ? styles.chooseActive : styles.choose }>Показать за всё время</button>
                    <button onClick={() => setChoose({allTime: false, period: true})} className={ choose.period ? styles.chooseActive : styles.choose }>Показать за период</button>
                </div>
                <div className={ styles.date }>
					<span className={ styles.textDate }>{`${date[2]}.${date[1]}.${date[0]}`}</span>
                    <input
					value={ date[0] !== "гггг" ?  date.join("-") : "2023-01-21"}
					onChange={(event) => setDate(((event.target.value || "гггг-мм-дд")).split("-"))} 
					className={ styles.input } 
					id="date" 
					type="date" 
					/>
                    <label className={ styles.label } htmlFor="date">
                        <svg width="1em" height="1em" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true" focusable="false" className="rs-picker-toggle-caret rs-icon" aria-label="calendar" data-category="legacy"><path d="M1 4v8.5a.5.5 0 00.5.5H8c0-.128.049-.256.146-.354.555-.555.854-1.6.854-3.146a.5.5 0 01.621-.485l.119.03A2.623 2.623 0 0012.999 6.5V4h-12zm3-2h6V0h1v2h1.5A1.5 1.5 0 0114 3.5v3a3.623 3.623 0 01-4.015 3.603c-.064 1.245-.335 2.212-.831 2.898H12.5a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2a1.5 1.5 0 01-1.5 1.5h-11a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5H3v-2h1v2zm5 4V5h1v1h2v1h-2v1H9V7H7v2h1v1H7v2H6v-2H4v2H3v-2H1V9h2V7H1V6h2V5h1v1h2V5h1v1h2zM6 9V7H4v2h2z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <h2 className={ styles.nothing }>Ничего не найдено</h2>
    </>

  )
}

export default HeadLots
