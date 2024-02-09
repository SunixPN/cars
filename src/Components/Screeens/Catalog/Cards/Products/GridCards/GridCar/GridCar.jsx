import { Link } from "react-router-dom"
import styles from "./GridCar.module.css"
import Slider from "./Slider/Slider"

const GridCar = ({ car }) => {
  return (
    <div className={ styles.car }>
        <Slider car={ car } />
        <p className={ styles.name }>{ car.name }</p>
        <div className={ styles.properties }>
            <div className={ styles.property }>
                <span className={ styles.title }>Номер лота</span>
                <span className={ styles.info }>{ car.lot }</span>
            </div>
            <div className={ styles.property }>
                <span className={ styles.title }>Дата акциона</span>
                <span className={ styles.info }>{ car.data }</span>
            </div>
            <div className={ styles.property }>
                <span className={ styles.title }>Объем двигателя</span>
                <span className={ styles.info }>{ car.V }</span>
            </div>
            <div className={ styles.property }>
                <span className={ styles.title }>Тип топлива</span>
                <span className={ styles.info }>{ car.type }</span>
            </div>
            <div className={ styles.property }>
                <span className={ styles.title }>Одометр</span>
                <span className={ styles.info }>{ car.metr }</span>
            </div>
        </div>
        <div className={ styles.buttonBox }>
            <div className={ styles.price }>
                <span className={ styles.stav }>Текущая ставка</span>
                <span className={ styles.money }>{ car.price }</span>
            </div>
            <Link className={ styles.linkProduct } to={ `/${ car.id }` }>Сделать ставку</Link>
        </div>
        <Link className={ styles.link } to="#">Купить сейчас за 21500$</Link>
    </div>

  )
}

export default GridCar
