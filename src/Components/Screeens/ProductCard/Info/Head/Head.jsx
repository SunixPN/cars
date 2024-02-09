import { Link } from "react-router-dom"
import styles from "./Head.module.css"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../../../store/favorite/favorite.slice"

const Head = ({ car }) => {
  const favReducer = useSelector(state => state.favReducer)

  const isExist = favReducer.some(fav => fav === car.id)

  const dispath = useDispatch()

  return (
    <div className={ styles.head }>
      <div className={ styles.linkBlock }>
        <img className={ styles.image } src="./arrow-left.svg" alt="arrow" />
        <Link className={ styles.link } to="/auth">Назад к результатам</Link>
      </div>
      <div className={ styles.headInfo }>
        <h2 className={ styles.name }>{ car.name }</h2>
        <div className={ styles.additionally }>
          <div className={ styles.point }>
            <img className={ styles.icon } src="./favorite.png" alt="favorite" />
            <button 
            onClick={() => dispath(actions.TogleFavorites(car.id))} 
            className={ isExist ? styles.textActive : styles.text }>
              { isExist ? "В избранном" : "Добавить в избранное"}
            </button>
          </div>
          <div className={ styles.point }>
            <img className={ styles.icon } src="share.png" alt="share" />
            <button className={ styles.text }>Поделиться</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
