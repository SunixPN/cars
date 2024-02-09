import Title from "../Title/Title"
import styles from "./Sixth.module.css"
import CheckBox from "../../../../../UI/CheckBox/CheckBox"

const Sixth = ({ register, sixth, setSixth, setRegistrationWindow }) => {
  return (
    <div className={ sixth ? styles.sixth : styles.hidden }>
        <Title step={ 6 } text={ "Оплата тарифного плана" } />
        <div className={ styles.box }>
            <CheckBox checked value={"Денежный перевод"} register={register} gap={ 15 } id={ "price1" } name={"price"}>
                <div className={ styles.tarif }>
                    <p className={ styles.text }>Денежный перевод</p>
                    <p className={ styles.description }>Для муждународных пользователей</p>
                </div>
            </CheckBox>
            <CheckBox checked value={"bitPay"} register={register} gap={ 15 } id={ "price2" } name={"price"}>
                <div className={ styles.tarif }>
                    <p className={ styles.text }>bitPay</p>
                </div>
            </CheckBox>
            <CheckBox checked value={"GooglePay"} register={register} gap={ 15 } id={ "price3" } name={"price"}>
                <div className={ styles.tarif }>
                    <p className={ styles.text }>GooglePay</p>
                </div>
            </CheckBox>
            <CheckBox checked value={"PayPal"} register={register} gap={ 15 } id={ "price4" } name={"price"}>
                <div className={ styles.tarif }>
                    <p className={ styles.text }>PayPal</p>
                </div>             
            </CheckBox>
            <CheckBox checked value={"Банковская карта"} register={register} gap={ 15 } id={ "price5" } name={"price"}>
                <div className={ styles.tarif }>
                    <p className={ styles.text }>Банковская карта</p>
                </div>             
            </CheckBox>
        </div>
        <button
        className={ styles.button }
        type="submit"
        onClick={() => {
            setSixth(false)
            setRegistrationWindow(false)
        }} 
        colour={ "#004dd5" } 
        font={ 16 }
        >
            Завершить регистрацию
        </button>
    </div>
  )
}

export default Sixth
