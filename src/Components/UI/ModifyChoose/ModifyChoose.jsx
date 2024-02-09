import { useState } from "react"
import List from "../List/List"
import styles from "./ModifyChoose.module.css"

const ModifyChoose = ({ text, list1, list2 }) => {
  const [active1, setActive1] = useState(false)

  const [active2, setActive2] = useState(false)

  const [value1, setValue1] = useState("2022")

  const [value2, setValue2] = useState("2022")

  return (
    <div className={ styles.choose }>
        <span className={ styles.text }>{ text }</span>
        <div className={ styles.box }>
            <div className={ styles.elem }>
                <input onClick={() => setActive1(prev => !prev)} className={ styles.hidden } onBlur={() => setActive1(false)} type="text" />
                <span className={styles.elemChoose}>{ value1 }</span>
                <button className= { styles.button } />
                <List styleList={{padding: 0}} styleListing={{paddingRight: 12}} setValue={ setValue1 } active={ active1 } list={ list1 } />
            </div>
            <span className={ styles.line } />
            <div className={ styles.elem }>
                <input onClick={() => setActive2(prev => !prev)} className={ styles.hidden } onBlur={() => setActive2(false)} type="text" />
                <span className={styles.elemChoose}>{ value2 }</span>
                <button className= { styles.button } />
                <List styleList={{padding: 0}} styleListing={{paddingRight: 12}} setValue={ setValue2 } active={ active2 } list={ list2 } />
            </div>
        </div>
    </div>
  )
}

export default ModifyChoose
