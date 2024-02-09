import styles from "./Grid.module.css"
import Elem from "./Elem/Elem"

const Grid = ({ buttonsState }) => {
    const cars = [
        {
            id: 1,
            img: "Car1.jpeg",
            lot: 12345,
            status: "win"
        },
        {
            id: 2,
            img: "Car2.jpg",
            lot: 12345,
            status: "def"
        },
        {
            id: 3,
            img: "Car3.jpg",
            lot: 12345,
            status: "def"
        },
        {
            id: 4,
            img: "Car4.jpg",
            lot: 12345,
            status: "win"
        }
    ]

    const writting = (car) => {
        if (buttonsState.all) {
            return <Elem key={ car.id } car={ car } />
        }
        else if (buttonsState.eu) {
            if (car.status === "win") {
                return <Elem key={ car.id } car={ car } />
            }
        }
        else {
            if (car.status === "def") {
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

