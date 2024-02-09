import styles from "./Select.module.css"
import List from "../List/List"
import { useState } from "react"

const Select = ({ text, list }) => {
  const [ active, setActive ] = useState(false)

  const [ value, setValue ] = useState(text)
  
  return (
    <div className={ styles.select }>
        <input onClick={() => setActive(prev => !prev)} className={ styles.hidden } onBlur={() => setActive(false)} type="text" />
        <p className={ styles.text }>{ value }</p>
        <button className={ styles.button } />
        <List setValue={ setValue } active={ active } list={ list } />
    </div>
  )
}

export default Select
