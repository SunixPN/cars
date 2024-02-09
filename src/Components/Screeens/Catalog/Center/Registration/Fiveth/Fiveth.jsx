import CheckBox from "../../../../../UI/CheckBox/CheckBox"
import Title from "../Title/Title"
import styles from "./Fiveth.module.css"
import Button from "../../../../../UI/Button/Button"

const Fiveth = ({ register, fiveth, setFiveth, setSixth }) => {
  return (
    <div className={ fiveth ? styles.fiveth : styles.hidden }>
        <Title step={ 5 } text={ "Выберите тарифный план" } />
        <div className={ styles.box }>
            <CheckBox checked value={"Нету"} register={register} gap={ 15 } id={ "tarif1" } name={"tarif"}>
                <div className={ styles.tarif }>
                    <p className={ styles.text }>Выбрать тарифный план позже</p>
                    <p className={ styles.description }>Здесь будет распологаться краткое описание</p>
                </div>
            </CheckBox>
            <CheckBox checked value={"Тарифный план 1"} register={register} gap={ 15 } id={ "tarif2" } name={"tarif"}>
                <div className={ styles.tarif }>
                    <div className={ styles.textBlock }>
                        <p className={ styles.text }>Тарифный план 1</p>
                        <span className={ styles.price }>100$ в месяц</span>
                    </div>
                    <p className={ styles.description }>Здесь будет распологаться краткое описание</p>
                </div>
            </CheckBox>
            <CheckBox checked value={"Тарифный план 2"} register={register} gap={ 15 } id={ "tarif3" } name={"tarif"}>
                <div className={ styles.tarif }>
                    <div className={ styles.textBlock }>
                        <p className={ styles.text }>Тарифный план 2</p>
                        <span className={ styles.price }>200$ в месяц</span>
                    </div>
                    <p className={ styles.description }>Здесь будет распологаться краткое описание</p>
                </div>
            </CheckBox>
            <CheckBox checked value={"Тарифный план 3"} register={register} gap={ 15 } id={ "tarif4" } name={"tarif"}>
                <div className={ styles.tarif }>
                    <div className={ styles.textBlock }>
                        <p className={ styles.text }>Тарифный план 3</p>
                        <span className={ styles.price }>300$ в месяц</span>
                    </div>
                    <p className={ styles.description }>Здесь будет распологаться краткое описание</p>
                </div>               
            </CheckBox>
        </div>
        <Button
        onClick={(event) => {
            event.preventDefault()
            setFiveth(false)
            setSixth(true)
        }} 
        colour={ "#004dd5" } 
        font={ 16 }
        >
            Продолжить
        </Button>
    </div>
  )
}

export default Fiveth
