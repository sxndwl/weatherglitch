import { useState, useEffect } from 'react'
import axios from 'axios'

const useWeather = () => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isFirstVisit, setIsFirstVisit] = useState(localStorage.getItem('isFirstVisit') === null)

    const TOKEN = '2bd27f8ac9131b3542b76fd4f604fd73'

    useEffect(() => {
        if (!isFirstVisit) {
            const fetchData = async () => {
                setLoading(true)
                try {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0, allow: true })
                    })

                    const { latitude, longitude } = position.coords;
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${TOKEN}&units=metric`)
                    setWeather(response.data)
                    setLoading(false)
                }
                catch (err) {
                    setLoading(false)
                    setError(err.message)
                }
            }
            fetchData()
        }

        localStorage.setItem('isFirstVisit', false)
    }, [isFirstVisit])

    return { weather, loading, error, isFirstVisit, setIsFirstVisit }
};

export default useWeather