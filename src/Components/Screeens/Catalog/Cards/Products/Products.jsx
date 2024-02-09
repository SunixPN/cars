import { useState } from "react"
import GridCards from "./GridCards/GridCards"
import Head from "./Head/Head"
import ProductCards from "./ProductCards/ProductCards"
import styles from "./Products.module.css"
import { useGetCarsQuery } from "../../../../../API/api"

const Products = () => {
  const [active, setActive] = useState(false)

  const [activeGrid, setActiveGrid] = useState(true)

  const { data: cars, isLoading } = useGetCarsQuery()

  return (
      <section className={ styles.section }>
        <Head active={ active } setActive={ setActive } activeGrid={ activeGrid } setActiveGrid={ setActiveGrid } />
        {
          active
          ?
          <ProductCards cars={ cars } isLoading={ isLoading } />
          :
          <GridCards cars={ cars } isLoading={ isLoading } />
        }
    </section>
  )
}

export default Products
