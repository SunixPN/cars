import Button from "../../../../../UI/Button/Button"
import Title from "../Title/Title"
import styles from "./Second.module.css"
import InputMask from "react-input-mask"

const Second = ({ errors, handleSubmit, register, second, setSecond, setThird }) => {
    const onContinue = (event) => {
        setSecond(false)
        setThird(true)
        event.preventDefault
    }

  return (
    <div className={ second ? styles.second : styles.hidden }>
        <Title step={ 2 } text={ "Заполните необходимые данные" } />
        <div className={ styles.inputs }>
            <div className={ styles.box }>
                <span className={ styles.text }>Название компании</span>
                <input 
                { ...register("company", {
                    required: "Обязательно поле!",
                    maxLength: {
                        value: 20,
                        message: "Слишком длинное название!"
                    },
                    validate: (value) => !/[@#$%^&*~ +=_\-!?/.,><]/.test(value) || "Ввод запрещённых символов"
                }) }
                placeholder="Default Input" 
                className={ styles.input } 
                type="text" 
                />
                <div className={ styles.errorBox }>
                    {
                        errors?.company && <p className={ styles.error }>{ errors.company.message }</p>
                    }
                </div>
            </div>
            <div className={ styles.box }>
                <span className={ styles.text }>Имя</span>
                <input 
                { ...register("name", {
                    required: "Обязательно поле!",
                    maxLength: {
                        value: 25,
                        message: "Слишком длинное имя!"
                    },
                    validate: (value) => !/[@#$%^&*~ 1234567890+=_\-!?/.,)(><}{[\]:;"']/.test(value) || "Ввод запрещённых символов"
                }) }
                placeholder="Default Input" 
                className={ styles.input } 
                type="text" 
                />
                <div className={ styles.errorBox }>
                    {
                        errors?.name && <p className={ styles.error }>{ errors.name.message }</p>
                    }
                </div>
            </div>
            <div className={ styles.box }>
                <span className={ styles.text }>Фамилия</span>
                <input 
                { ...register("surName", {
                    required: "Обязательно поле!",
                    maxLength: {
                        value: 25,
                        message: "Слишком длинная фамилия!"
                    },
                    validate: (value) => !/[@#$%^&*~ 1234567890+=_\-!?/.,)(><}{[\]:;"']/.test(value) || "Ввод запрещённых символов"
                }) }
                placeholder="Default Input" 
                className={ styles.input } 
                type="text" 
                />
                <div className={ styles.errorBox }>
                    {
                        errors?.surName && <p className={ styles.error }>{ errors.surName.message }</p>
                    }
                </div>
            </div>
            <div className={ styles.box }>
                <span className={ styles.text }>Номер мобильного телефона</span>
                <InputMask
                onFocus={(event) => {
                    const elem = event.target
                    elem.selectionStart = 0
                    elem.selectionEnd = 0
                }}
                mask={"+375 (99) 999-99-99"}
                alwaysShowMask={ true }
                maskChar={"_"}
                { ...register("telephone", {
                    validate: (value) => !value.includes("_") || "Введите свой номер телефона!" 
                }) } 
                placeholder="Default Input" 
                className={ styles.input } 
                type="text" 
                />
                <div className={ styles.errorBox }>
                    {
                        errors?.telephone && <p className={ styles.error }>{ errors.telephone.message }</p>
                    }
                </div>
            </div>
            <div className={ styles.box }>
                <span className={ styles.text }>Электронная почта</span>
                <input 
                { ...register("eMail", {
                    required: "Обязательно поле!",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: 'Введите корректный адрес электронной почты'
                      },  
                }) }
                placeholder="Default Input" 
                className={ styles.input } 
                type="text" 
                />
                <div className={ styles.errorBox }>
                    {
                        errors?.eMail && <p className={ styles.error }>{ errors.eMail.message }</p>
                    }
                </div>
            </div>
        </div>
        <div className={ styles.check }>
            <input
            { ...register("required", {
                required: "Выберите данный ЧекБокс"
            }) } 
            id="checkBox" 
            className={ styles.checkBox } 
            type="checkbox" 
            />
            <label htmlFor="checkBox" className={ styles.label }></label>
            <span className={ styles.textForCheck }>Выбирая это поле, я подтверждаю, что мой возраст не менее 18 лет, и что мною прочитаны и приняты Условия сотрудничества между участниками и Prebid, Политика конфиденциальности</span>
        </div>
        <div className={ styles.errorBox }>
            {
                errors?.required && <p className={ styles.error }>{ errors.required.message }</p>
            }
        </div>
        <Button
        onClick={handleSubmit(onContinue)}
        colour={ "#004dd5" } 
        font={ 16 }
        >
            Продолжить
        </Button>
    </div>
  )
}



export default Second
