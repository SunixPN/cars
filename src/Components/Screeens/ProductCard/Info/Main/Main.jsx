import CarBlock from "./CarBlock/CarBlock"
import styles from "./Main.module.css"
import Characteristics from "./Characteristics/Characteristics"
import Bid from "./Bid/bid"

const Main = ({ car }) => {
  return (
    <div className={ styles.main }>
      <CarBlock car={ car } />
      <div className={ styles.box }>
        <Characteristics car={ car } />
        <Bid />
      </div>
    </div>
  )
}

export default Main
