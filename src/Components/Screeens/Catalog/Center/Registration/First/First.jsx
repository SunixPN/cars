import { useState } from "react"
import Button from "../../../../../UI/Button/Button"
import CheckBox from "../../../../../UI/CheckBox/CheckBox"
import Title from "../Title/Title"
import styles from "./First.module.css"

const First = ({ register, first, setFirst, setSecond }) => {
  return (
    <div className={ first ? styles.first : styles.hidden }>
        <Title step={ 1 } text={ "Выберите тип пользователя" } />
        <div className={ styles.inputs }>
            <div className={ styles.elem }>
                <span className={ styles.text }>Вы регистрируетесь как</span>
                <CheckBox checked value={"Юридическое лицо"} register={ register } id={ "choice1" } name={ "face" }>
                    <span className={ styles.textForRadio }>Юридическое лицо</span>
                </CheckBox>
                <CheckBox checked value={"Физическое лицо"} register={ register } id={ "choice2" } name={ "face" }>
                    <span className={ styles.textForRadio }>Физическое лицо</span>
                </CheckBox>
            </div>
            <div className={ styles.elem }>
                <span className={ styles.text }>Выберите роль пользователя</span>
                <CheckBox checked value={"Standart"} register={ register } id={ "secChoice1" } name={ "role" }>
                    <span className={ styles.textForRadio }> Standart (хочу только покупать лоты)</span>
                </CheckBox>
                <CheckBox checked value={"Pro"} register={ register } id={ "secChoice2" } name={ "role" }>
                    <span className={ styles.textForRadio }>Pro (хочу покупать и выставлять лоты на продажу)</span>
                </CheckBox>
            </div>
        </div>
        <Button
        onClick={(event) => {
            event.preventDefault()
            setFirst(false)
            setSecond(true)
        }} 
        colour={ "#004dd5" } 
        font={ 16 }
        >
            Продолжить
        </Button>
    </div>
  )
}

export default First
