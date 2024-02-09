import Title from "../Title/Title"
import styles from "./Forth.module.css"
import Button from "../../../../../UI/Button/Button"

const Forth = ({ getValues, errors, handleSubmit, register, forth, setForth, setFiveth }) => {
    const onContinue = (event) => {
        setForth(false)
        setFiveth(true)
        event.preventDefault
    }

  return (
    <div className={ forth ? styles.forth : styles.hidden }>
        <Title step={ 4 } text={ "Придумайте логин и пароль" } />
        <div className={ styles.inputs }>
            <div className={ styles.box }>
                <span className={ styles.text }>Пароль</span>
                {
                    forth
                    ?
                    <input
                    { ...register("password", {
                        required: "Обязательно поле!",
                        minLength: {
                            value: 5,
                            message: "Пароль должен содержать минимум 5 символов!"
                        },
                        validate: {
                            containsSpecial: (value) => /[@#$%^&*~+=_\-!?/.,)(]/.test(value) || "Пароль должен содержать спецсимволы",
                            containsNumbers: (value) => /[1234567890]/.test(value) || "Пароль должен содержать число/цифру",
                            noSpaces: (value) => !/[ ]/.test(value) || "В пароле не должно быть пробелов (используйте '_')" 
                        }
                    })}
                    className={ styles.input } 
                    type="password" 
                    />
                    :
                    <></>
                }

                <div className={ styles.errorBox }>
                    {
                        errors?.password && <p className={ styles.error }>{ errors.password.message }</p>
                    }
                </div>
            </div>
            <div className={ styles.box }>
                <span className={ styles.text }>Повторите пароль</span>
                {
                    forth
                    ?
                    <input
                    { ...register("repeat", {
                        validate: value => value === getValues("password") || "Пароли не совпадают"
                    }) } 
                    className={ styles.input } 
                    type="password" 
                    />
                    :
                    <></>
                }
                <div className={ styles.errorBox }>
                    {
                        errors?.repeat && <p className={ styles.error }>{ errors.repeat.message }</p>
                    }
                </div>
            </div>
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

export default Forth
