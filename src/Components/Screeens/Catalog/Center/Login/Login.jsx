import styles from "./Login.module.css"
import { Link } from "react-router-dom"
import Button from "../../../../UI/Button/Button"
import { useEffect, useState } from "react"
import { useGetUsersQuery } from "../../../../../API/api"
import { useDispatch } from "react-redux"
import { actions } from "../../../../../store/Auth/auth.slice"

const Login = ({ active, setActive }) => {
	const [dataInput, setDataInput] = useState({password: "", eMail: ""})

	const [ isError, setIsError ] = useState(false) 

	useEffect(() => {
		setIsError(false)
	}, [active])

	const { data: users } = useGetUsersQuery()

	const dispatch = useDispatch()

	const handleClick = () => {
		const currentUser = users.filter(user => user.data.password === dataInput.password && user.data.eMail === dataInput.eMail)[0]
		if (currentUser) {
			localStorage.setItem("id", currentUser.id)
			dispatch(actions.CreateAccount({ auth: currentUser.auth, data: currentUser.data }))
			setActive(false)
		}
		else {
			setIsError(true)
		}
	}

  return (
    <div className={ styles.login }>
        <div className={ styles.title }>
            <h2 className={ styles.textTitle }>Вход в личный кабинет</h2>
            <div className={ styles.reg }>
                <span className={ styles.regText }>Еще нет аккаунта?</span>
                <Button colour={ "#66c314" } font={ 16 }>Зарегистироваться</Button>
            </div>
        </div>
        <div className={ styles.form }>
            <div className={ styles.elem }>
                <label className={ styles.label } htmlFor="e-mail">Электронная почта</label>
                <input
								value={ dataInput.eMail } 
								onChange={(event) => setDataInput({ ...dataInput, eMail: event.target.value })}
								placeholder="Default Input" 
								className={ styles.inputLog } 
								type="text" 
								name="e-mail" 
								/>
            </div>
            <div className={ styles.elem }>
                <label className={ styles.label } htmlFor="pass">Пароль</label>
                <input
								value={ dataInput.password } 
								onChange={(event) => setDataInput({ ...dataInput, password: event.target.value })}
								className={ styles.inputLog } 
								type="password" 
								name="pass" 
								/>
            </div>
        </div>
        <div className={ styles.continue }>
            <Button
            onClick={handleClick} 
            colour={ "#004dd5" } 
            font={ 16 }
            >
                Продолжить
            </Button>
            <Link className={ styles.link } to={"#"}>Забыли пароль</Link>
        </div>
				<p className={ isError ? styles.error : styles.hidden }>Такого аккаунта не существует</p>
    </div>
  )
}

export default Login
