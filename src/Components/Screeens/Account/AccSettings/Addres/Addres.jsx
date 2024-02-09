import styles from "./Addres.module.css"
import CheckBox from "../../../../UI/CheckBox/CheckBox"

const Addres = () => {
  return (
    <div className={ styles.addres }>
        <div className={ styles.box }>
            <h2 className={ styles.title }>Адрес доставки</h2>
            <span className={ styles.subTitle }>Укажите приоритетный адрес доставки купленных вами лотов</span>
        </div>
        <div className={ styles.chooses }>
            <CheckBox id={"addres1"} name={"addres"}>
                <div className={ styles.onCheck }>
                    <span className={ styles.text }>СВХ Минск</span>
                    <span className={ styles.text }>г. Минск, ул. Воронянского 20а</span>
                </div>
            </CheckBox>
            <CheckBox id={"addres2"} name={"addres"}>
                <div className={ styles.onCheck }>
                    <span className={ styles.text }>СВХ Гомель</span>
                    <span className={ styles.text }>г. Гомель, ул. Воронянского 20а</span>
                </div>
            </CheckBox>
        </div>
    </div>
  )
}

export default Addres
