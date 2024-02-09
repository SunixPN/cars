import styles from "./Elem.module.css"
import Button from "../../../../../../UI/Button/Button"

const Elem = ({ car }) => {
  return (
    <div className={ styles.elem }>
        <img className={ styles.image } src={ car.img } alt="car" />
        <div className={ styles.info }>
            <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
            <span className={ styles.numLot }>{`Номер лота: ${car.lot}`}</span>
            <span className={ styles.numLot }>До завершения торгов 1 ч 20 мин</span>
            <div className={ styles.status }>
                <span className={ styles.statusText }>{`Статус: ${car.status === "win" ? "Лот выигран" : "Лот проигран"}`}</span>
                <Button colour={ "#66c314" } font={ 14 }>Увеличить ставку</Button>
            </div>
        </div>
    </div>
  )
}

export default Elem
