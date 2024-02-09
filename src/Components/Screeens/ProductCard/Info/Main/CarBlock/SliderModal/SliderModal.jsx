import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import styles from "./SliderModal.module.css"

const SliderModal = ({ car }) => {
  return (
      <Swiper
      spaceBetween={ 0 }
      modules={ [ Navigation ] }
      navigation
      slidesPerView={ 1 }
      >
      <SwiperSlide>
          <img className={ styles.image } src={ car.image } alt="car-1" />
      </SwiperSlide>
      <SwiperSlide>
          <img className={ styles.image } src={ car.image } alt="car-1" />
      </SwiperSlide>
      <SwiperSlide>
          <img className={ styles.image } src={ car.image } alt="car-1" />
      </SwiperSlide>
      </Swiper>
  )
}

export default SliderModal