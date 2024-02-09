import styles from "./In.module.css"

const In = () => {
  return (
        <div className={ styles.grid }>
            <div className={ styles.elem }>
                <img className={ styles.image } src={ "Car1.jpeg" } alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <span className={ styles.numLot }>{`Номер лота: 12345`}</span>
                    <span className={ styles.numLot }>До завершения торгов 1 ч 20 мин</span>
                    <span className={ styles.statusText }>{`Статус: Ожидается решение продавца`}</span>
                </div>
            </div>
            <div className={ styles.elem }>
                <img className={ styles.image } src={ "Car2.jpg" } alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <span className={ styles.numLot }>{`Номер лота: 12345`}</span>
                    <span className={ styles.numLot }>До завершения торгов 1 ч 20 мин</span>
                    <span className={ styles.statusText }>{`Статус: Ожидается решение продавца`}</span>
                </div>
            </div>
            <div className={ styles.elem }>
                <img className={ styles.image } src={ "Car3.jpg" } alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <span className={ styles.numLot }>{`Номер лота: 12345`}</span>
                    <span className={ styles.numLot }>До завершения торгов 1 ч 20 мин</span>
                    <span className={ styles.statusText }>{`Статус: Ожидается решение продавца`}</span>
                </div>
            </div>
            <div className={ styles.elem }>
                <img className={ styles.image } src={ "Car4.jpg" } alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <span className={ styles.numLot }>{`Номер лота: 12345`}</span>
                    <span className={ styles.numLot }>До завершения торгов 1 ч 20 мин</span>
                    <span className={ styles.statusText }>{`Статус: Ожидается решение продавца`}</span>
                </div>
            </div>
        </div>
  )
}

export default In