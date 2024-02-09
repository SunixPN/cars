import Title from "../Title/Title"
import styles from "./Third.module.css"
import Button from "../../../../../UI/Button/Button"
import { useState } from "react"

const Third = ({ third, setThird, setForth }) => {
	const [file2, setFile2] = useState("")

	const [file1, setFile1] = useState("")

  return (
    <div className={ third ? styles.third : styles.hidden }>
        <Title step={ 3 } text={ "Загрузите необходимые документы" } />
        <div className={ styles.files }>
            <div className={ styles.file }>
                <span className={ styles.text }>Загрузить лицензию?</span>
                <input
				onChange={(event) => setFile1(event.target.files[0].name)} 
				id="file1" 
				className={ styles.input } 
				type="file" 
				/>
                <label className={ styles.label } htmlFor="file1">Прикрепить файл</label>
				{
					file1
					?
					<p className={ styles.fileName }>{ file1 }</p>
					:
					<>
					</>
				}
            </div>
            <div className={ styles.file }>
                <span className={ styles.text }>Загрузить ещё какой-нибудь файл</span>
                <input
				onChange={(event) => setFile2(event.target.files[0].name)} 
				id="file2" 
				className={ styles.input } 
				type="file" 
				/>
                <label className={ styles.label } htmlFor="file2">Прикрепить файл</label>
				{
					file2
					?
					<p className={ styles.fileName }>{ file2 }</p>
					:
					<>
					</>
				}
            </div>
        </div>
        <Button
        onClick={(event) => {
			event.preventDefault()
            setThird(false)
            setForth(true)
        }} 
        colour={ "#004dd5" } 
        font={ 16 }
        >
            Продолжить
        </Button>
    </div>
  )
}

export default Third
