import { useState, useEffect } from 'react'
import axios from 'axios'

const useWeather = () => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject)
                })

                const { latitude, longitude } = position.coords;
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2bd27f8ac9131b3542b76fd4f604fd73&units=metric`)
                setWeather(response.data)
                setLoading(false)
            }
            catch (err) {
                setLoading(false)
                setError(err.message)
            }
        }
        fetchData()
    }, [])

    return { weather, loading, error }
};

export default useWeather