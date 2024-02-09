import styles from "./GridCards.module.css"
import GridCar from "./GridCar/GridCar"
import Loader from "../../../../../UI/Loader/Loader"

const GridCards = ({ cars, isLoading }) => {

  if (isLoading) {
    return <Loader />
  }
  
  return (
    <section className={ styles.grid }>
        {
          cars.map(car => <GridCar key={ car.id } car={ car } />)
        }
    </section>
  )
}

export default GridCards
