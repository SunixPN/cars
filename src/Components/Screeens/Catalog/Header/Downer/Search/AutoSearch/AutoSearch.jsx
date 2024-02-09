import { Link } from "react-router-dom"
import styles from "./AutoSearch.module.css"

const AutoSearch = ({ car }) => {
  return (
    <Link to={`/${ car.id }`}>
        <div className={ styles.auto }>
            <img className={ styles.image } src={ car.image } alt={ `Car_${ car.id }` } />
            <p className={ styles.p }>{ car.name }</p>
        </div>
    </Link>
  )
}

export default AutoSearch
