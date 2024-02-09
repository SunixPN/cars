import HeadEnd from "./HeadEnd/HeadEnd"
import styles from "./End.module.css"
import { useState } from "react"
import Grid from "./Grid/Grid"

const End = () => {

	const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false })

  return (
		<section className={ styles.section }>
			<HeadEnd buttonsState={ buttonsState } setButtonState={ setButtonState } />
            <Grid buttonsState={ buttonsState } />
		</section>
  )
}

export default End