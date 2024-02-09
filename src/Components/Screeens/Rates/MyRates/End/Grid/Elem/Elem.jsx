import styles from "./Elem.module.css"

const Elem = ({ car }) => {
  return (
    <div className={ styles.elem }>
        <img className={ styles.image } src={ car.img } alt="car" />
        <div className={ styles.info }>
            <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
            <span className={ styles.numLot }>{`Номер лота: ${car.lot}`}</span>
            <span className={ styles.numLot }>До завершения торгов 1 ч 20 мин</span>
            <div className={ styles.status }>
                <p className={ car.status === "Winning" ? styles.statusText : styles.statusTextRed }>{car.status}</p>
                <p className={ styles.price }>Моя ставка:   20000$</p>
            </div>
        </div>
    </div>
  )
}

export default Elem