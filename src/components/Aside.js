import styled from "styled-components"

const Wrap = styled.div`
    display: flex;
    gap: 40px;
    position: fixed;
    bottom: 40px;
    left: 40px;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    z-index: 9999;
`

const Title = styled.p`
    font-size: 24px;
    color: ${props => props.theme.theme.colors.dataColor};
`

const Aside = (props) => {
    const date = new Date()

    return(
        props.theme && (
            <Wrap>
                <Title theme={props}>{date.toLocaleTimeString([], { timeStyle: 'short' })}</Title>
                <Title theme={props}>{props.weather.name.toUpperCase()}</Title>
                <Title theme={props}>{Math.round(props.weather.main.temp)}°C</Title>
            </Wrap>
        )
    )
}

export default Aside