import { useEffect, useState } from "react"
import styles from "./Search.module.css"
import { useFetch } from "../../../../../../hooks/useFetch"
import axios from "axios"
import Loader from "../../../../../UI/Loader/Loader"
import AutoSearch from "./AutoSearch/AutoSearch"

const Search = ({ auth }) => {
  const [value, setValue] = useState("")

  const [cars, setCars] = useState([])

  const [ activeDrop, setActiveDrop ] = useState(false)

  const [ isLoaded, fetching ] = useFetch(async () => {
    const response = await axios.get(`http://localhost:3000/cars?q=${ value }`)
    setCars(value ? response.data : [])
  })

  const handleClick = async (event) => {
    event.stopPropagation()
    await fetching()
    setActiveDrop(true)
  }

  const handleFocus = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    const handleClick = () => {
      setActiveDrop(false)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className={ styles.search }>
        <input 
        autoComplete="off"
        value={ value }
        onClick={handleFocus}
        onChange={(event) => setValue(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            handleClick(event)
          }
        }}
        placeholder="Поиск" 
        className={auth ? styles.inputAuth : styles.input } 
        type="text" 
        name="search-result" 
        />
        <button onClick={handleClick} className={ styles.icon } />
        {
          <ul className={ activeDrop ? styles.drop : styles.hidden }>
            {
              isLoaded
              ?
              <Loader />
              :
              cars.length !== 0
              ?
              <>
                <p className={ styles.p }>Результаты поиска:</p>
                <div className={ styles.results }>
                  {
                     cars.map(car => <AutoSearch key={ car.id } car={ car } />)
                  }
                </div>
              </>
              :
              <h2 className={ styles.nothing }>Ничего не найдено</h2>
            }
          </ul>
        }
    </div>
  )
}

export default Search
