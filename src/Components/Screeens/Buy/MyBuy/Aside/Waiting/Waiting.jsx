import styles from "./Waiting.module.css"
import { useState } from "react"
import HeadWaiting from "./HeadWaiting/HeadWaiting"
import Grid from "./Grid/Grid"

const Waiting = () => {
    const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false })

  return (
    <section className={ styles.section }>
        <HeadWaiting buttonsState={buttonsState} setButtonState={setButtonState} />
        <Grid buttonsState={buttonsState} />
    </section>
  )
}

export default Waiting
