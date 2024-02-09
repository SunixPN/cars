import styles from "./Characteristics.module.css"

const Characteristics = ({ car }) => {
  return (
    <div className={ styles.characteristics }>
        <div className={ styles.main }>
            <h3 className={ styles.title }>Основные характеристики</h3>
                <div className={ styles.point }>
                    <span className={ styles.name }>Лот</span>
                    <span className={ styles.value }>{ car.lot }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>VIN</span>
                    <span className={ styles.value }>{ car.VIN }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Объем ДВС</span>
                    <span className={ styles.value }>{ car.V }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Тип топлива</span>
                    <span className={ styles.value }>{ car.type }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Трансмиссия</span>
                    <span className={ styles.value }>{ car.transmition }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Привод</span>
                    <span className={ styles.value }>{ car.priv }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Тип кузова</span>
                    <span className={ styles.value }>{ car.body }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Цвет кузова</span>
                    <span className={ styles.value }>{ car.color }</span>
                </div>
                <div className={ styles.point }>
                    <span className={ styles.name }>Пробег</span>
                    <span className={ styles.value }>{ car.metr }</span>
                </div>
        </div>
        <div className={ styles.additional }>
            <h3 className={ styles.title }>Дополнительные сведения</h3>
            <div className={ styles.point }>
                <span className={ styles.name }>Тип повреждения</span>
                <span className={ styles.value }>{ car.damage }</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.name }>Тип документа</span>
                <span className={ styles.value }>{ car.doc }</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.name }>Ключи</span>
                <span className={ styles.value }>{ car.key }</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.name }>Состояние</span>
                <span className={ styles.value }>{ car.state }</span>
            </div>
            <div className={ styles.point }>
                <span className={ styles.name }>Отчет</span>
                <span className={ styles.value }>{ car.report }</span>
            </div>
        </div>
    </div>
  )
}

export default Characteristics
