import SliderProduct from "./SliderProduct/SliderProduct"
import styles from "./CarBlock.module.css"
import { useState } from "react"
import Modal from "../../../../../UI/Modal/Modal"
import SliderModal from "./SliderModal/SliderModal"
import ImageCars from "./ImageCars/ImageCars"

const CarBlock = ({ car }) => {
	const [modalZoom, setModalZoom] = useState(false)

  const [modalPhotos, setModalPhotos] = useState(false)

  const [count, setCount] = useState(3)

  const carArray = [{id: 1, image: car.image}, {id: 2, image: car.image}, {id: 3, image: car.image}, {id: 4, image: car.image}, {id: 5, image: car.image}, {id: 6, image: car.image}, {id: 7, image: car.image}, {id: 8, image: car.image}, {id: 9, image: car.image}]

  return (
    <div className={ styles.carBlock }>
        <SliderProduct setActive={ setModalZoom } car={ car } />
        <div className={ styles.grid }>
            {
              carArray.map((carIteration, index) => {
                if (!(index >= count)) {
                  return <img key={carIteration.id} className={ styles.car } src={ carIteration.image } alt="car_1"/>
                }
              })
            }
        </div>
        <div className={ styles.about }>
            <div className={ styles.photos }>
                <span onClick={() => setCount(prev => prev + 3)} className={ styles.text }>Еще фото</span>
                <img className={ styles.arrow } src="Button.svg" alt="arrow" />
            </div>
            <div className={ styles.box }>
                <button onClick={() => setModalPhotos(true)} className={ styles.buttonFirst }>Все фото в одном окне</button>
                <button className={ styles.button }>Скачать фото</button>
            </div>
        </div>
				<Modal styleModal={{ padding: 0, backgroundColor: "transparent" }} active={ modalZoom } setActive={ setModalZoom }>
					<SliderModal car={ car } />
				</Modal>
        <Modal disabled={ true } styleModal={{ padding: 24 }} active={ modalPhotos } setActive={ setModalPhotos }>
          <ImageCars car={ car } />
        </Modal>
    </div>
  )
}

export default CarBlock
