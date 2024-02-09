import styles from "./Grid.module.css"

const Grid = ({ buttonsState }) => {
  return (
    <>
    {
        buttonsState.all
        ?
        <div className={ styles.grid }>
            <div className={ styles.elem }>
            <div className={ styles.box }>
                <img className={ styles.image } src="Car1.jpeg" alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <div className={ styles.down }>
                        <div className={ styles.downInfo1 }>
                            <span className={ styles.numLot }>Номер лота: 123456</span>
                            <span className={ styles.type }>Тип топлива: Бензин</span>
                        </div>
                        <div className={ styles.downInfo2 }>
                            <span className={ styles.type }>Объем двигателя: 2997</span>
                            <span className={ styles.type }>Одометр: 31 068 км</span>
                        </div>
                    </div>
                    <div className={ styles.price_date }>
                        <p className={ styles.price }>Сумма покупки 20000$</p>
                        <p className={ styles.price }>Дата покупки 01.01.24</p>
                    </div>
                </div>
            </div>
            <div className={ styles.files }>
                <p className={ styles.fileElem }>Подтверждение заказа</p>
                <p className={ styles.fileElem }>Разрешение на выдачу</p>
                <p className={ styles.fileElem }>Счет-фактура</p>
                <p className={ styles.fileElem }>ЕХ</p>
                <p className={ styles.fileElem }>Сертификат о доставке</p>
                <p className={ styles.fileElem }>Бриф</p>
            </div>
            </div>
            <div className={ styles.elem }>
            <div className={ styles.box }>
                <img className={ styles.image } src="Car2.jpg" alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <div className={ styles.down }>
                        <div className={ styles.downInfo1 }>
                            <span className={ styles.numLot }>Номер лота: 123456</span>
                            <span className={ styles.type }>Тип топлива: Бензин</span>
                        </div>
                        <div className={ styles.downInfo2 }>
                            <span className={ styles.type }>Объем двигателя: 2997</span>
                            <span className={ styles.type }>Одометр: 31 068 км</span>
                        </div>
                    </div>
                    <div className={ styles.price_date }>
                        <p className={ styles.price }>Сумма покупки 20000$</p>
                        <p className={ styles.price }>Дата покупки 01.01.24</p>
                    </div>
                </div>
            </div>
            <div className={ styles.files }>
                <p className={ styles.fileElem }>Подтверждение заказа</p>
                <p className={ styles.fileElem }>Разрешение на выдачу</p>
                <p className={ styles.fileElem }>Счет-фактура</p>
                <p className={ styles.fileElem }>ЕХ</p>
                <p className={ styles.fileElem }>Сертификат о доставке</p>
                <p className={ styles.fileElem }>Бриф</p>
            </div>
            </div>
            <div className={ styles.elem }>
            <div className={ styles.box }>
                <img className={ styles.image } src="Car3.jpg" alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <div className={ styles.down }>
                        <div className={ styles.downInfo1 }>
                            <span className={ styles.numLot }>Номер лота: 123456</span>
                            <span className={ styles.type }>Тип топлива: Бензин</span>
                        </div>
                        <div className={ styles.downInfo2 }>
                            <span className={ styles.type }>Объем двигателя: 2997</span>
                            <span className={ styles.type }>Одометр: 31 068 км</span>
                        </div>
                    </div>
                    <div className={ styles.price_date }>
                        <p className={ styles.price }>Сумма покупки 20000$</p>
                        <p className={ styles.price }>Дата покупки 01.01.24</p>
                    </div>
                </div>
            </div>
            <div className={ styles.files }>
                <p className={ styles.fileElem }>Подтверждение заказа</p>
                <p className={ styles.fileElem }>Разрешение на выдачу</p>
                <p className={ styles.fileElem }>Счет-фактура</p>
                <p className={ styles.fileElem }>ЕХ</p>
                <p className={ styles.fileElem }>Сертификат о доставке</p>
                <p className={ styles.fileElem }>Бриф</p>
            </div>
            </div>
            <div className={ styles.elem }>
            <div className={ styles.box }>
                <img className={ styles.image } src="Car4.jpg" alt="car" />
                <div className={ styles.info }>
                    <h3 className={ styles.title }>2020 VOLKSWAGENGolf Sportsvan VII</h3>
                    <div className={ styles.down }>
                        <div className={ styles.downInfo1 }>
                            <span className={ styles.numLot }>Номер лота: 123456</span>
                            <span className={ styles.type }>Тип топлива: Бензин</span>
                        </div>
                        <div className={ styles.downInfo2 }>
                            <span className={ styles.type }>Объем двигателя: 2997</span>
                            <span className={ styles.type }>Одометр: 31 068 км</span>
                        </div>
                    </div>
                    <div className={ styles.price_date }>
                        <p className={ styles.price }>Сумма покупки 20000$</p>
                        <p className={ styles.price }>Дата покупки 01.01.24</p>
                    </div>
                </div>
            </div>
            <div className={ styles.files }>
                <p className={ styles.fileElem }>Подтверждение заказа</p>
                <p className={ styles.fileElem }>Разрешение на выдачу</p>
                <p className={ styles.fileElem }>Счет-фактура</p>
                <p className={ styles.fileElem }>ЕХ</p>
                <p className={ styles.fileElem }>Сертификат о доставке</p>
                <p className={ styles.fileElem }>Бриф</p>
            </div>
        </div>
    </div>
        :
        <h2 className={ styles.nothing }>Ничего не найдено</h2>
    }

    </>
  )
}

export default Grid
