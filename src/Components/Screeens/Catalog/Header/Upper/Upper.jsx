import styles from "./Upper.module.css"

const Upper = () => {
  return (
    <div className={ styles.upper }>
        <div className={ styles.wrapper }>
            <p className={ styles.text }>Название страны,  город, номер телефона</p>
            <div className={ styles.info }>
                <div className={ styles.pointOfInfo }>
                    <span className={ styles.name }>Регион</span>
                    <img className={ styles.region } src="./BY.svg" alt="region" />
                    <button className={ styles.button } />
                </div>
                <div className={ styles.pointOfInfo }>
                    <span className={ styles.name }>Язык</span>
                    <span className={ styles.point }>RU</span>
                    <button className={ styles.button } />
                </div>
                <div className={ styles.pointOfInfo }>
                    <span className={ styles.name }>Валюта</span>
                    <span className={ styles.point }>Доллар США</span>
                    <button className={ styles.button } />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upper
