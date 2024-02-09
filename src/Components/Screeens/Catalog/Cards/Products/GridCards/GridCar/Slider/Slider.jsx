import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import styles from "./Slider.module.css"
import "swiper/swiper-bundle.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../../../../../../store/favorite/favorite.slice";
import { useGetUserByIdQuery, useSetFavoritesMutation, useUpdateFavoritesMutation } from "../../../../../../../../API/api";
import { useEffect, useState } from "react";



const Slider = ({ car }) => {

  const favReducer = useSelector(state => state.favReducer)

  const isExist = favReducer.some(fav => fav === car.id)

  const [ loaded, setLoaded ] = useState(false)

  const dispatch = useDispatch()

  const [ updateFavorites ] = useUpdateFavoritesMutation()

  useEffect(() => {
    async function update() {
      await updateFavorites({id: localStorage.getItem("id"), data: favReducer})
    }

    if (loaded) {
      update()
    }
    else {
      setLoaded(true)
    }    
  }, [isExist])

  const toggleFavorites = () => {
    dispatch(actions.TogleFavorites(car.id))
  }

  return (
    <Swiper
    spaceBetween={ 0 }
    modules={ [ Navigation, Pagination] }
    pagination={{ clickable: true }}
    slidesPerView={ 1 }
    >
    <SwiperSlide>
      <div className={ styles.imageBox }>
        <img className={ styles.image } src={ car.image1 } alt="" />  
        <button
        onClick={toggleFavorites}
        className={ isExist ? styles.buttonActive : styles.button } 
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={ styles.imageBox }>
        <img className={ styles.image } src={ car.image1 } alt="" />  
        <button
        onClick={toggleFavorites}
        className={ isExist ? styles.buttonActive : styles.button } 
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className={ styles.imageBox }>
        <img className={ styles.image } src={ car.image1 } alt="" />  
        <button
        onClick={toggleFavorites}
        className={ isExist ? styles.buttonActive : styles.button } 
        />
      </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider
