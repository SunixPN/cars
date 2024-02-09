import styles from "./List.module.css"

const List = ({ styleList = {}, styleListing = {}, active, list, setValue }) => {
  return (
    <div style={ styleList } className={ active ? styles.list : styles.hiiden }>
        <ul className={ styles.listing }>
            {
                list.map(l => <li style={ styleListing } key={ l } onMouseDown={() => setValue(l) } className={ styles.point }>{ l }</li>)
            }
        </ul>
    </div>
  )
}

export default List
