import styles from "./Info.module.css"
import Head from "./Head/Head"
import Main from "./Main/Main"
import { cars } from "../../../../data/Cars"
import { useParams } from "react-router-dom"

const Info = () => {
  const { id } = useParams()

  const car = cars.find(car => car.id == id)

  return (
    <section className={ styles.section }>
      <Head car={ car } />
      <Main car={ car } />
    </section>
  )
}

export default Info
