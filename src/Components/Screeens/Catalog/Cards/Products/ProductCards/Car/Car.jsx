import styles from "./Car.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../../../../../../store/favorite/favorite.slice"
import { useState, useEffect } from "react"
import { useUpdateFavoritesMutation } from "../../../../../../../API/api"

const Car = ({ car }) => {
  const favReducer = useSelector(state => state.favReducer)

  const dispath = useDispatch()

  const [loaded, setLoaded] = useState(false)

  const [ updateFavorites ] = useUpdateFavoritesMutation()

  const isExist = favReducer.some(fav => fav === car.id)

  useEffect(() => {
    async function update() {
      await updateFavorites({id: localStorage.getItem("id"), data: favReducer})
    }

    if (loaded) {
      update()
    }
    else {
      setLoaded(true)
    }    
  }, [isExist])

  return (
    <div className={ styles.car }>
        <div className={ styles.image }>
            <img className={ styles.imageCar } src={ car.image } alt="car_image" />
            <button
            onClick={() => dispath(actions.TogleFavorites(car.id))}
            className={ isExist ? styles.buttonActive : styles.button } 
            />
        </div>
        <Link to="#" className={ styles.linkInfo }>{ car.lot }</Link>
        <p className={ styles.info }>{ car.year }</p>
        <p className={ styles.info }>{ car.mark }</p>
        <p className={ styles.info }>{ car.model }</p>
        <p className={ styles.info }>{ car.V }</p>
        <p className={ styles.info }>{ car.metr }</p>
        <p className={ styles.info }>{ car.data }</p>
        <p className={ styles.info }>{ car.price }</p>
        <div className={ styles.buttonBox }>
            <div className={ styles.wrapper }>
                <Link className={ styles.linkProduct } to={`/${ car.id }`}>Сделать ставку</Link>
                <Link to="#" className={ styles.link }>Купить сейчас за 21500$</Link>
            </div>
        </div>
    </div>
  )
}

export default Car
