import { useGetCarsQuery } from "../../../API/api"
import HeaderAuth from "../Auth/HeaderAuth/HeaderAuth"
import Footer from "../Catalog/Footer/Footer"
import FavCars from "./FavCars/FavCars"

const Favorites = () => {
  const { data: cars, isLoading } = useGetCarsQuery() 

  return (
    <>
    <HeaderAuth activeFav={ true } />
    <FavCars cars={ cars } isLoading={ isLoading } />
    <Footer />
    </>
  )
}

export default Favorites
