import styles from "./FilterUI.module.css"

const FilterUI = ({ filters, setFilters, text }) => {
  return (
    <div className={ styles.filter }>
        <span className={ styles.text }>{ text }</span>
        <button
        onClick={() => setFilters(filters.filter(filt => filt !== text))} 
        className={ styles.button } 
        />
    </div>
  )
}

export default FilterUI
