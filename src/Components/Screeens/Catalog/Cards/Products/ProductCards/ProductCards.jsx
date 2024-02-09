import Car from "./Car/Car"
import styles from "./ProductCards.module.css"

const ProductCards = ({ cars, isLoading }) => {

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
    <section className={ styles.section }>
        <p className={ styles.info }>Фото</p>
        <p className={ styles.info }>№ Лота</p>
        <div className={styles.modifyIndo}>
            <div className={styles.infoBox}>
                <p className={ styles.infoText }>Год</p>
                <button className={ styles.button }></button>
            </div>
        </div>
        <p className={ styles.info }>Марка</p>
        <p className={ styles.info }>Модель</p>
        <div className={styles.modifyIndo}>
            <div className={styles.infoBox}>
                <p className={ styles.infoText }>Объем</p>
                <button className={ styles.button }></button>
            </div>
        </div>
        <div className={styles.modifyIndo}>
            <div className={styles.infoBox}>
                <p className={ styles.infoText }>Одометр</p>
                <button className={ styles.button }></button>
            </div>
        </div>
        <div className={styles.modifyIndo}>
            <div className={styles.infoBox}>
                <p className={ styles.infoText }>Дата</p>
                <button className={ styles.button }></button>
            </div>
        </div>
        <div className={styles.modifyIndo}>
            <div className={styles.infoBox}>
                <p className={ styles.infoText }>Ставка</p>
                <button className={ styles.button }></button>
            </div>
        </div>
        <p className={ styles.info }>Действие</p>
    </section>
    {
        cars.map(car => <Car key={ car.id } car={ car } />)
    }
    </>
  )
}

export default ProductCards
