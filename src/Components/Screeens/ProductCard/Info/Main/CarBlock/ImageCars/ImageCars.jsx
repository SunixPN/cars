import styles from "./ImageCars.module.css"

const ImageCars = ({ car }) => {
  return (
    <div className={ styles.imageCars }>
        <img className={ styles.image } src={ car.image } alt="car_1" />
        <img className={ styles.image } src={ car.image1 } alt="car_1" />
        <img className={ styles.image } src={ car.image2 } alt="car_1" />
    </div>
  )
}

export default ImageCars
