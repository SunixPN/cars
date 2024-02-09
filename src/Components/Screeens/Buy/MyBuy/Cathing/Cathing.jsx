import styles from "./Cathing.module.css"
import Grid from "./Grid/Grid"
import Head from "./Head/Head"
import { useState } from "react"

const Cathing = () => {
    const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false, cath: false })

  return (
    <section className={ styles.section }>
        <Head buttonsState={buttonsState} setButtonState={setButtonState} />
        <Grid buttonsState={buttonsState} />
    </section>
  )
}

export default Cathing
