import styled from "styled-components"

const Wrap = styled.p`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`

const getRandomNumber = (max) => Math.floor(Math.random() * (max - 100))

const Emoji = (props) => {
    const { clientHeight, clientWidth } = document.documentElement
    const Emojis = []

    for(let i = 0; i < 10; i++){
        const top = getRandomNumber(clientHeight)
        const left = getRandomNumber(clientWidth)
        Emojis.push(<Wrap key={i} top={top} left={left}><img src={props.theme.emoji} width='30px' height='30px' alt='icon'></img></Wrap>)
    }
    return Emojis
}

export default Emoji