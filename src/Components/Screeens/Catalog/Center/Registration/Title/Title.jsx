import styles from "./Title.module.css"

const Title = ({ step, text }) => {
  return (
    <div className={ styles.title }>
        <h2 className={ styles.reg }>Регистрация в личном кабинете</h2>
        <div className={ styles.step }>
            <p className={ styles.count }>{ `Шаг ${ step }` }</p>
            <p className={ styles.text }>{ text }</p>
        </div>
    </div>
  )
}

export default Title
