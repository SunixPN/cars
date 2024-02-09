import CheckBox from "../../../../UI/CheckBox/CheckBox"
import styles from "./Tarif.module.css"
import Button from "../../../../UI/Button/Button"
import { useSelector } from "react-redux"

const Tarif = () => {
    const { data } = useSelector(state => state.authReducer)

  return (
    <div className={ styles.tarif }>
        <div className={ styles.box }>
            <h2 className={ styles.title }>Мой тарифный план</h2>
            <div className={ styles.name }>
                <p className={ styles.nameTarif }>{ data.data.tarif }</p>
                <p className={ styles.description }>Здесь будет какое-то описание выбранного тарифного плана</p>
            </div>
        </div>
        <div className={ styles.change }>
            <h3 className={ styles.changeTitle }>Сменить тарифный план</h3>
            <CheckBox id={"tarif1"} name={"tarif"}>
                <div className={ styles.elem }>
                    <p className={ styles.nameTarifChoose }>Название тарифного плана 2</p>
                    <p className={ styles.descriptionChoose }>Здесь будет какое-то описание выбранного тарифного плана</p>
                </div>
            </CheckBox>
            <CheckBox id={"tarif2"} name={"tarif"}>
                <div className={ styles.elem }>
                    <p className={ styles.nameTarifChoose }>Название тарифного плана 3</p>
                    <p className={ styles.descriptionChoose }>Здесь будет какое-то описание выбранного тарифного плана</p>
                </div>
            </CheckBox>
            <CheckBox id={"tarif3"} name={"tarif"}>
                <div className={ styles.elem }>
                    <p className={ styles.nameTarifChoose }>Название тарифного плана 4</p>
                    <p className={ styles.descriptionChoose }>Здесь будет какое-то описание выбранного тарифного плана</p>
                </div>
            </CheckBox>
        </div>
        <Button colour={"#004dd5"} font={ 16 }>Продолжить</Button>
    </div>
  )
}

export default Tarif
