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
    text-align: center;
`

const Inner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const GlitchWeather = () => {
    const { weather, loading, error, isFirstVisit } = useWeather()
    const weatherTheme = useTheme(weather)
    const [weatherLoaded, setWeatherLoaded] = useState(false)
    console.log(weatherTheme)

    useEffect(() => {
        if (weather) {
            setWeatherLoaded(true)
        }
    }, [weather])

    if (isFirstVisit) {
        return (
            <Wrapper theme={theme[weatherTheme]}>
                <Inner>
                    <h1>Добро пожаловать, мы используем ваше местоположение, чтобы показать вам текущую погоду в вашем регионе.</h1>
                    <button onClick={() => window.location.reload()}>Разрешить доступ к местоположению.</button>
                    <Gradient theme={theme[weatherTheme]} />
                </Inner>
            </Wrapper>
        )
    }

    if (loading || !weatherLoaded) {
        return (
            <h1>loading</h1>
        )
    }

    if (error) {
        return (
            <h1>error, refresh the page</h1>
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
