import styles from "./FilterMob.module.css"

const FilterMob = () => {
  return (
    <button className={ styles.filter }>
        <span className={ styles.span }>Фильтр</span>
        <img className={ styles.icon } src="filter.svg" alt="filter" />
    </button>
  )
}

export default FilterMob
