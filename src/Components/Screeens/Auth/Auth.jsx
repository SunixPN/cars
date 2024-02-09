import Pagination from "../Catalog/Pagination/Pagination"
import Cards from "../Catalog/Cards/Cards"
import HeaderAuth from "./HeaderAuth/HeaderAuth"
import Seo from "../Catalog/Seo/Seo"
import Footer from "../Catalog/Footer/Footer"

const Auth = () => {
  return (
    <>
        <HeaderAuth />
        <Cards />
        <Pagination />
        <Seo />
        <Footer />
    </>
  )
}

export default Auth
