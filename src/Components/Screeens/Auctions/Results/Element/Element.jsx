import styles from "./Element.module.css"
import Button from "../../../../UI/Button/Button"

const Element = ({ auction }) => {
  return (
    <div className={ styles.elem }>
        <p className={ auction.country === "Европа" ? styles.country : styles.us }>{ auction.country }</p>
        <div className={ styles.box }>
            <span className={ styles.call }>{ auction.name }</span>
            <span className={ styles.text }>{ `ID аукциона ${auction.id}` }</span>
        </div>
        <div className={ styles.box }>
            <span className={ styles.text }>Количество транспортных средств</span>
            <span className={ styles.text }>{ `${auction.count} автомобиля` }</span>
        </div>
        <div className={ styles.box }>
            <p className={ styles.text }>Дата окончания <span className={ styles.end }>{ auction.date }</span></p>
            <p className={ styles.text }>Оставшееся время <span className={ styles.time }>{ auction.time }</span></p>
        </div>
        <Button colour={"rgb(0, 80, 207)"} font={ 16 } >Смотреть подробнее</Button>
    </div>
  )
}

export default Element
