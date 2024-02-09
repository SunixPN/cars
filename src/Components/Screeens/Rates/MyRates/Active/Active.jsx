import HeadActive from "./HeadActive/HeadActive"
import styles from "./Active.module.css"
import { useState } from "react"
import Grid from "./Grid/Grid"

const Active = () => {

	const [buttonsState, setButtonState] = useState({ all: true, us: false, eu: false })

  return (
		<section className={ styles.section }>
			<HeadActive buttonsState={ buttonsState } setButtonState={ setButtonState } />
            <Grid buttonsState={buttonsState} />
		</section>
  )
}

export default Active