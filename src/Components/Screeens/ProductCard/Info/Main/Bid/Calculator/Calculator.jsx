import styles from "./Calculator.module.css"
import Button from "../../../../../../UI/Button/Button"

const Calculator = () => {
  return (
    <div className={ styles.modalCalc }>								
    <div className={ styles.up }>
        <h3 className={ styles.title }>Калькулятор стоимости</h3>
        <span className={ styles.bidCount }>Укажите ставку</span>
        <input className={ styles.inputCalc } type="text" />
        <span className={ styles.min }>Минимальный шаг 100$</span>
        <Button  colour={ "#66c314" } font={ 16 }>Рассчитать стоимость</Button>
    </div>
    <div className={ styles.price }>
        <span className={ styles.priceText }>Приблизительная стоимость</span>
        <span className={ styles.priceCount }>22000$</span>
    </div>
    <div className={ styles.table }>
        <div className={ styles.elem }>
            <span className={ styles.prop }>Региональный сбор</span>
            <span className={ styles.valueModal }>100$</span>
        </div>
        <div className={ styles.elem }>
            <span className={ styles.prop }>Оформление, включая EX</span>
            <span className={ styles.valueModal }>100$</span>
        </div>
        <div className={ styles.elem }>
            <span className={ styles.prop }>Аукционный сбор</span>
            <span className={ styles.valueModal }>100$</span>
        </div>
        <div className={ styles.elem }>
            <span className={ styles.prop }>Доставка</span>
            <span className={ styles.valueModal }>100$</span>
        </div>
    </div>
    </div>
  )
}

export default Calculator
