import HeadPrice from "./HeadPrice/HeadPrice"
import styles from "./Price.module.css"
import { useState } from "react"

const Lots = () => {

	const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false })

  return (
		<section className={ styles.section }>
			<HeadPrice buttonsState={ buttonsState } setButtonState={ setButtonState } />
		</section>
  )
}

export default Lots
