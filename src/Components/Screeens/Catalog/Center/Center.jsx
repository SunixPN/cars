import { useState } from "react"
import Button from "../../../UI/Button/Button"
import styles from "./Center.module.css"
import Modal from "../../../UI/Modal/Modal"
import Login from "./Login/Login"
import Registration from "./Registration/Registration"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useSetFavoritesMutation, useSetUserMutation } from "../../../../API/api"
import { actions } from "../../../../store/Auth/auth.slice"
import { actions as favActions } from "../../../../store/favorite/favorite.slice"


const Center = () => {
  const [loginWindow, setLoginWindow] = useState(false)

  const dispatch = useDispatch()

  const [registrationWindow, setRegistrationWindow] = useState(false)

  const [ setUser ] = useSetUserMutation()

  const [ setFavorites ] = useSetFavoritesMutation()

  const {
    register,
    formState: {
      errors,
    },
    getValues,
    handleSubmit
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = async (data) => {
    const id = Date.now()
    await setUser({ id: id, auth: true, data: data })
    localStorage.setItem("id", id)
    dispatch(actions.CreateAccount({auth: true, data: data}))
    await setFavorites({ id: id, data: [] })
    dispatch(favActions.deleteFavorites())
  }

  return (
    <section className={ styles.section }>
        <div className={ styles.textBox }>
            <p className={ styles.text }>Надежный способ продажи и покупки авто через аукцион</p>
            <div className={ styles.buttonBox }>
                <Button
                onClick={() => setRegistrationWindow(true)} 
                colour={ "#0050CF" } 
                font={ 16 }
                >
                  Зарегистрироваться
                </Button>
                <Button
                onClick={() => setLoginWindow(true)}
                colour={ "#66C314" } 
                font={ 16 }
                >
                  Войти
                </Button>
            </div>
        </div>
        <div className={ styles.car } />
        <Modal active={ loginWindow } setActive={ setLoginWindow }>
            <Login active={ loginWindow } setActive={ setLoginWindow } />
        </Modal>
        <Modal active={ registrationWindow } setActive={ setRegistrationWindow }>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" />
          <Registration getValues={getValues} errors={ errors } handleSubmit={handleSubmit} register={ register } registrationWindow={ registrationWindow } setRegistrationWindow={ setRegistrationWindow } />
        </form>
        </Modal>
    </section>
  )
}

export default Center
