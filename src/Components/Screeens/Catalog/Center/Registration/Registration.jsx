import { useEffect, useState } from "react"
import First from "./First/First"
import Second from "./Second/Second"
import Third from "./Third/Third"
import Forth from "./Forth/Forth"
import Fiveth from "./Fiveth/Fiveth"
import Sixth from "./Sixth/Sixth"

const Registration = ({ getValues, errors, handleSubmit, register, registrationWindow, setRegistrationWindow }) => {
	useEffect(() => {
		setFirst(true)
		setSecond(false)
		setThird(false)
		setForth(false)
		setFiveth(false)
		setSixth(false)
	}, [registrationWindow])

	const [first, setFirst] = useState(true)

	const [second, setSecond] = useState(false)

	const [third, setThird] = useState(false)

	const [forth, setForth] = useState(false)

	const [fiveth, setFiveth] = useState(false)

	const [sixth, setSixth] = useState(false)

  return (
    <>
		<First register={ register } first={ first } setFirst={ setFirst } setSecond={ setSecond } />
		<Second errors={ errors } handleSubmit={ handleSubmit } register={ register } second={ second } setSecond={ setSecond } setThird={ setThird } />
		<Third third={ third } setThird={ setThird } setForth={ setForth } />
		<Forth getValues={getValues} errors={ errors } handleSubmit={ handleSubmit } register={ register } forth={ forth } setForth={ setForth } setFiveth={ setFiveth } />
		<Fiveth register={register} fiveth={ fiveth } setFiveth={ setFiveth } setSixth={ setSixth } />
		<Sixth register={register} sixth={ sixth } setSixth={ setSixth } setRegistrationWindow={ setRegistrationWindow } />
    </>
  )
}

export default Registration
