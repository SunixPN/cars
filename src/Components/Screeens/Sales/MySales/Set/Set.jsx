import Select from "../../../../UI/Select/Select"
import styles from "./Set.module.css"
import Button from "../../../../UI/Button/Button"
import { useState } from "react"

const Set = () => {
    const [cars, setCars] = useState([])
  return (
    <div className={ styles.set }>
        <div className={ styles.box }>
            <h2 className={ styles.title }>Основные характеристики</h2>
            <div className={ styles.grid }>
                <Select text={"Марка автомобиля"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Объем ДВС"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Тип кузова"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Модель"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Трансмиссия"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Цвет кузова"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Год выпуска"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Тип топлива"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Пробег"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"VIN номер"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Привод"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Тип повреждения"} list={["Значение 1", "Значение 2", "Значение 3"]} />
            </div>
        </div>
        <div className={ styles.box }>
            <h2 className={ styles.title }>Дополнительная информация</h2>
            <div className={ styles.grid }>
                <Select text={"Тип документа"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Состояние"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Ключи"} list={["Значение 1", "Значение 2", "Значение 3"]} />
                <Select text={"Отчет"} list={["Значение 1", "Значение 2", "Значение 3"]} />
            </div>
        </div>
        <div className={ styles.file }>
            <div className={ styles.titleBox }>
                <h2 className={ styles.title }>Загрузить фото</h2>
                <p className={ styles.sub }>Загрузите до 20 фотографий в хорошем качестве</p>
            </div>
            <div className={ styles.blockPhotos }>
                <input
                onChange={() => setCars([...cars, "Car1.jpeg"])} 
                className={ styles.input } 
                type="file" 
                id="file" 
                />
                <label className={ styles.label } htmlFor="file">+ Загрузить фото</label>
                {
                    cars.map(car => <img className={ styles.image } src={ car } alt="car"></img>)
                }
            </div>
        </div>
        <Button colour={ "#0050cf" } font={ 16 }>Отправить на модерацию</Button>
    </div>
  )
}

export default Set
