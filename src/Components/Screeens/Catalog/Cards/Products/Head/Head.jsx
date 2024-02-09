import Select from "../../../../../UI/Select/Select"
import styles from "./Head.module.css"
import FilterMob from "./FilterMob/FilterMob"

const Head = ({ active, setActive, activeGrid, setActiveGrid }) => {

  return (
    <>
        <div className={ styles.head }>
        <FilterMob />
        <p className={ styles.result }><span className={ styles.opacity }>Найдено</span> 120 результатов</p>
        <div className={ styles.sort }>
            <div className={ styles.sortBox }>
                <span className={ styles.text }>Сортировать</span>
                <Select list={["Значение 1", "Значение 2", "Значение 3"]} text={ "Сначала ближайшие" } />
            </div>
            <div className={ [styles.sortBox, styles.hidden].join(" ") }>
                <span className={ styles.text }>Отражать по</span>
                <Select list={["21", "22", "23"]} text={ "20" } />
            </div>
            <div className={ styles.layout }>
                <img 
                onClick={() => {
                    setActive(true)
                    setActiveGrid(false)
                }}
                className={ styles.layout1 } 
                src={ active ? "layout1.svg"  : "layout1-d.svg" }
                alt="layout1" 
                />
                <img 
                onClick={() => {
                    setActiveGrid(true)
                    setActive(false)
                }}
                className={ styles.layout2 } 
                src={ activeGrid ? "layout2-a.svg"  : "layout2.svg" }
                alt="layout2" 
                />
            </div>
        </div>
    </div>
    <p className={ styles.resultMob }><span className={ styles.opacity }>Найдено</span> 120 результатов</p>
    </>

  )
}

export default Head
