import Results from "../Results/Results"
import styles from "./Center.module.css"
import Head from "./Head/Head"
import { useState } from "react"

const Center = () => {
	const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false })

  return (
    <section className={ styles.section }>
        <Head buttonsState={buttonsState} setButtonState={setButtonState} />
        <Results buttonsState={buttonsState} />
    </section>
  )
}

export default Center
