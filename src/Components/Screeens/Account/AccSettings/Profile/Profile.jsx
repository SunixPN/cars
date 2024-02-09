import styles from "./Profile.module.css"
import { useSelector } from "react-redux"

const Profile = () => {
  const { data } = useSelector(state => state.authReducer)

  return (
    <div className={ styles.profile }>
      <div className={ styles.titleBlock }>
        <h2 className={ styles.title }>Мой профиль</h2>
          <div className={ styles.data }>
            <p className={ styles.user }>Данные пользователя</p>
            <div className={ styles.info }>
              <span className={ styles.agreement }>Пользовательское соглашение</span>
              <span className={ styles.change }>Изменить данные профиля</span>
            </div>
        </div>
      </div>
        <div className={ styles.box }>
          <div className={ styles.grid }>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>Имя</h2>
              <p className={ styles.value }>{ data.data.name }</p>
            </div>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>Фамилия</h2>
              <p className={ styles.value }>{ data.data.surName }</p>
            </div>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>Номер телефона</h2>
              <p className={ styles.value }>{ data.data.telephone }</p>
            </div>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>E-mail</h2>
              <p className={ styles.value }>{ data.data.eMail }</p>
            </div>
          </div>
        </div>
        <div className={ styles.box }>
          <div className={ styles.titleBox }>
            <h2 className={ styles.pass }>Пароль для входа в аккаунт</h2>
            <span className={ styles.change }>Изменить данные профиля</span>
          </div>
          <div className={ styles.passwordBlock }>
            <span className={ styles.label }>Пароль</span>
            <input placeholder={ data.data.password } className={ styles.input } type="password" />
          </div>
        </div>
        <div className={ styles.box }>
          <div className={ styles.titleBox }>
            <h2 className={ styles.pass }>Сведения о компании</h2>
            <span className={ styles.change }>Изменить данные профиля</span>
          </div>
          <div className={ styles.infoCompany }>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>Название компании</h2>
              <p className={ styles.value }>{ data.data.company }</p>
            </div>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>Адрес регистрации</h2>
              <p className={ styles.value }>г. Минск, ул Воронянского 2а</p>
            </div>
            <div className={ styles.elem }>
              <h2 className={ styles.titleGrid }>Что-то еще</h2>
              <p className={ styles.value }>Что-то еще будет</p>
            </div>
          </div>
        </div>
        <div className={ styles.box }>
          <div className={ styles.files }>
            <div className={ styles.titleBox }>
              <h2 className={ styles.pass }>Загруженные файлы</h2>
              <span className={ styles.change }>Изменить данные профиля</span>
            </div>
            <div className={ styles.filesGrid }>
              <div className={ styles.elemGrid }>
                <span className={ styles.doc }>Загруженный документ Х</span>
                <span className={ styles.date }>Загружен: 01.09.2023</span>
              </div>
              <div className={ styles.elemGrid }>
                <span className={ styles.doc }>Загруженный документ Х</span>
                <span className={ styles.date }>Загружен: 01.09.2023</span>
              </div>
              <div className={ styles.elemGrid }>
                <span className={ styles.doc }>Загруженный документ Х</span>
                <span className={ styles.date }>Загружен: 01.09.2023</span>
              </div>
              <div className={ styles.elemGrid }>
                <span className={ styles.doc }>Загруженный документ Х</span>
                <span className={ styles.date }>Загружен: 01.09.2023</span>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Profile
