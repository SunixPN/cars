import { useMemo } from "react"
import styles from "./FavCars.module.css"
import { useSelector } from "react-redux"
import GridCar from "../../Catalog/Cards/Products/GridCards/GridCar/GridCar"
import Loader from "../../../UI/Loader/Loader"

const FavCars = ({ cars, isLoading }) => {
    const favReducer = useSelector(state => state.favReducer)

    const favCars = useMemo(() => cars.filter(car => favReducer.some(fav => fav === car.id)), [favReducer])

    if (isLoading) {
      return <Loader />
    }

  return (
    <section className={ styles.section }>
        <h1 className={ styles.title }>Моё избранное</h1>
        {
            favCars.length === 0
            ?
            <h2 className={ styles.sub }>Тут пока ничего нету</h2>
            :
            <div className={ styles.grid }>
            {
                favCars.map(favCar => <GridCar key={ favCar.id } car={ favCar } />)
            }
        </div>
        }
    </section>
  )
}

export default FavCars
