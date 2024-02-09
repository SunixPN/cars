import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import styles from "./SliderProduct.module.css"

const SliderProduct = ({ setActive, car }) => {
  return (
      <Swiper
      spaceBetween={ 0 }
      modules={ [ Navigation ] }
      navigation
      slidesPerView={ 1 }
      >
      <SwiperSlide>
        <div className={ styles.box }>
          <img className={ styles.image } src={ car.image } alt="car-1" />
          <button onClick={() => setActive(true)} className={ styles.button } />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={ styles.box }>
          <img className={ styles.image } src={ car.image } alt="car-1" />
          <button onClick={() => setActive(true)} className={ styles.button } />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={ styles.box }>
          <img className={ styles.image } src={ car.image } alt="car-1" />
          <button onClick={() => setActive(true)} className={ styles.button } />
        </div>
      </SwiperSlide>
      </Swiper>
  )
}

export default SliderProduct
