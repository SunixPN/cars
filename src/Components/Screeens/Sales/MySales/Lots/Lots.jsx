import Grid from "./Grid/Grid"
import HeadLots from "./HeadLots/HeadLots"
import styles from "./Lots.module.css"
import { useState } from "react"

const Lots = () => {

	const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false })

  return (
		<section className={ styles.section }>
			<HeadLots buttonsState={ buttonsState } setButtonState={ setButtonState } />
			<Grid buttonsState={ buttonsState } />
		</section>
  )
}

export default Lots
