import { useState, useEffect } from "react"

const useTheme = (weather) => {
    const [weatherTheme, setWeatherTheme] = useState(undefined)

    useEffect(() => {
        if (weather) {
            const main = weather.weather[0].main

            switch (main) {
                case 'Clouds':
                case 'Mist':
                case 'Smoke':
                case 'Fog':
                    setWeatherTheme('cloudy');
                    break;
                case 'Thunderstorm':
                    setWeatherTheme('thunderstorm');
                    break;
                case 'Rain':
                case 'Drizzle':
                    setWeatherTheme('rainy');
                    break;
                case 'Clear':
                    setWeatherTheme('sunny');
                    break;
                default:
                    setWeatherTheme('thunderstorm')
            }
        } else {
            setWeatherTheme('sunny');
        }
    }, [weather])
    
    return weatherTheme
}

export default useTheme