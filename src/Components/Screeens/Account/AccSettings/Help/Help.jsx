import { useState } from "react"
import styles from "./Help.module.css"
import Button from "../../../../UI/Button/Button"

const Help = () => {
	const [file, setFile] = useState("Прикрепить файл")

  return (
    <div className={ styles.help }>
        <div className={ styles.box }>
            <h2 className={ styles.title }>Справка и поддержка</h2>
            <p className={ styles.paragraph }>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный</p>
        </div>
        <div className={ styles.text }>
            <h3 className={ styles.sub }>Текст вашего обращения</h3>
            <textarea className={ styles.area }></textarea>
        </div>
        <input
				onChange={(event) => setFile(event.target.files[0].name)} 
				id="file" 
				className={ styles.input } 
				type="file" 
				/>
        <label className={ styles.label } htmlFor="file">{ file }</label>
				<Button	colour={ "#004dd5" } font={ 16 }>Продолжить</Button>
    	</div>
  )
}

export default Help
