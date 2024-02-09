import { useState } from "react"
import styles from "./Filter.module.css"
import FilterUI from "../../../../UI/Filter/FilterUI"
import { allFilters } from "../../../../../data/allFilters.js"
import Choose from "../../../../UI/Choose/Choose"
import Button from "../../../../UI/Button/Button"
import ModifyChoose from "../../../../UI/ModifyChoose/ModifyChoose"

const Filter = () => {
  const [filters, setFilters] = useState(["Автомобиль", "2000 гг.", "15 000 км"])
  const [allFill, setAllFill] = useState(allFilters)

  return (
    <aside className={ styles.filter }>
        <div className={ styles.title }>
            <span className={ styles.text }>Фильтры</span>
            <button className={ styles.button }>Сбросить  все</button>
        </div>
        <div className={ styles.list }>
          {
            filters.map(filter => <FilterUI key={ filter } filters={ filters } setFilters={ setFilters } text={ filter } />)
          }
        </div>
        <div className= { styles.choose }>
          {
            allFill.map(choose => {
              if (choose.name === "Одометр" || choose.name === "Название") {
                return <ModifyChoose key={ choose.name } text={ choose.name } list1={ choose.list_1 } list2={ choose.list_2 } />
              }
              else {
                return <Choose key={ choose.name } text={ choose.name } list={ choose.list } />
              }
            })
          }
        </div>
        <Button colour={ "#004DD5" } font={ 16 }>Показать результаты</Button>
    </aside>
  )
}

export default Filter
