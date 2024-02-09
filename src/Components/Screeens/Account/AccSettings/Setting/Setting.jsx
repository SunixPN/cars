import CustomCheck from "./CustomCheck/CustomCheck"
import styles from "./Setting.module.css"

const Setting = () => {
  return (
    <div className={ styles.setting }>
        <div className={ styles.box }>
            <h2 className={ styles.title }>Настройка уведомлений</h2>
            <p className={ styles.paragraph }>Мы ценим вашу конфеденциальность. Укажите ниже какую информацию вы хотите получать и с помощью какого канала связи</p>
        </div>
        <div className={ styles.block }>
            <div className={ styles.elem }>
                <span className={ styles.text }>Вы сделали самую высокую ставку</span>
                <CustomCheck text={"На e-mail"} id={"check1"} />
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Ваша ставка больше не самая высокая</span>
                <CustomCheck text={"На e-mail"} id={"check2"} />
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Вы выиграли / проиграли аукцион</span>
                <CustomCheck text={"На e-mail"} id={"check3"} />
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Продавец принял / не принял вашу ставку и автомобиль будет / не будет предоставлен вам</span>
                <CustomCheck text={"На e-mail"} id={"check4"} />
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Подтверждение вашей покупки</span>
                <CustomCheck text={"На e-mail"} id={"check5"} />
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Подтверждение вашего платежа</span>
                <CustomCheck text={"На e-mail"} id={"check6"} />
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Новости и новые предложения от компании PreBid</span>
                <CustomCheck text={"На e-mail"} id={"check7"} />
            </div>
        </div>
    </div>
  )
}

export default Setting
