import { useState } from "react"

export const useFetch = (asyncFunction) => {
    const [isLoaded, setIsloaded] = useState(false)

    const fetching = async () => {
        setIsloaded(true)
        await asyncFunction()
        setIsloaded(false)
    }

    return [isLoaded, fetching]
}