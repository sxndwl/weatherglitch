import { useState, useEffect } from "react"
import useWeather from '../hooks/useWeather'
import useTheme from "../hooks/useTheme"
import { theme } from '../styles/theme'
import styled from 'styled-components'
import Gradient from './Gradient'
import Aside from "./Aside"
import Description from "./Description"
import Emoji from "./Emoji"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme && props.theme.colors && props.theme.colors.backgroundColor};
`

const GlitchWeather = () => {
    const { weather, loading, error } = useWeather()
    const weatherTheme = useTheme(weather)
    const [weatherLoaded, setWeatherLoaded] = useState(false)

    useEffect(() => {

        if (weather) {
            setWeatherLoaded(true)
        }
        
    }, [weather])

    if (loading || !weatherLoaded) {
        return (
            <h1>loading</h1>
        )
    }

    if (error) {
        return (
            <h1>error</h1>
        )
    }

    return (
            <Wrapper theme={theme[weatherTheme]}>
                <Gradient theme={theme[weatherTheme]} />
                <Aside theme={theme[weatherTheme]} weather={weather} />
                <Description theme={theme[weatherTheme]} weather={weather} />
                <Emoji theme={theme[weatherTheme]} />
            </Wrapper>
    )
}

export default GlitchWeather
