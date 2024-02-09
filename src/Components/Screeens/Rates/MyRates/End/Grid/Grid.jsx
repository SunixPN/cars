import styles from "./Grid.module.css"
import Elem from "./Elem/Elem"

const Grid = ({ buttonsState }) => {
    const cars = [
        {
            id: 1,
            img: "Car1.jpeg",
            lot: 12345,
            status: "Winning"
        },
        {
            id: 2,
            img: "Car2.jpg",
            lot: 12345,
            status: "Outbid"
        },
        {
            id: 3,
            img: "Car3.jpg",
            lot: 12345,
            status: "Outbid"
        },
        {
            id: 4,
            img: "Car4.jpg",
            lot: 12345,
            status: "Winning"
        }
    ]

    const writting = (car) => {
        if (buttonsState.all) {
            return <Elem key={ car.id } car={ car } />
        }
        else if (buttonsState.eu) {
            if (car.status === "Winning") {
                return <Elem key={ car.id } car={ car } />
            }
        }
        else {
            if (car.status === "Outbid") {
                return <Elem key={ car.id } car={ car } />
            }
        }
    }

  return (
    <div className={ styles.grid }>
        {
            cars.map(car => writting(car))
        }
    </div>
  )
}

export default Grid

