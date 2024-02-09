import styles from "./Cards.module.css"
import Filter from "./Filter/Filter"
import Products from "./Products/Products"

const Cards = () => {
  return (
    <section className={ styles.section }>
        <Filter />
        <Products />    
    </section>
  )
}

export default Cards
