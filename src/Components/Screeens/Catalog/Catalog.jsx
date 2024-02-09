import Cards from "./Cards/Cards"
import Center from "./Center/Center"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Pagination from "./Pagination/Pagination"
import Seo from "./Seo/Seo"

const Catalog = () => {
  return (
    <>
      <Header />
      <Center /> 
      <Cards />
      <Pagination />
      <Seo />
      <Footer />
    </>
  )
}

export default Catalog
