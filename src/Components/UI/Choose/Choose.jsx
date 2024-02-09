import { useState } from "react"
import List from "../List/List"
import styles from "./Choose.module.css"

const Choose = ({ text, list }) => {
  const [ active, setActive ] = useState(false)

  const [ value, setValue ] = useState(text)

  return (
    <div className={ styles.choose }>
        <input onClick={() => setActive(prev => !prev)} className={ styles.hidden } onBlur={() => setActive(false)} type="text" />
        <span className={ styles.text }>{ value }</span>
        <button className= { styles.button } />
        <List setValue={ setValue } active={ active } list={ list } />
    </div>
  )
}

export default Choose
