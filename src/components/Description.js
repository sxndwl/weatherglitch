import styled from "styled-components"

const Text = styled.p`
    font-size: 24px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    color: ${props => props.color.theme.colors.textColor};
    z-index: 999;
`

const getRandomNumber = (max) => Math.floor(Math.random() * (max - 100))

const Description = (props) => {
    console.log(props.theme.colors.textColor)
    const { clientHeight, clientWidth } = document.documentElement
    const Texts = []

    const Forecast = props.weather.weather[0].main.toUpperCase()

    for(let i = 0; i < 10; i++) {
        const top = getRandomNumber(clientHeight)
        const left = getRandomNumber(clientWidth)
        Texts.push(<Text key={i} left={left} top={top} color={props}>{Forecast}</Text>)
    }

    return Texts
}

export default Description