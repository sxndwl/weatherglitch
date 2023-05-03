import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Wrap = styled.div`
    position: relative;
    width: 45%;
    height: 35%;
    background: ${props => props.theme.gradient};
`

const getRandomNumber = (max) => Math.floor(Math.random() * (max - 500))

const Gradient = (props) => {
    const [position, setPosition] = useState({ top: 0, left: 0 })

    useEffect(() => {
        const { clientHeight, clientWidth } = document.documentElement
        const top = getRandomNumber(clientHeight)
        const left = getRandomNumber(clientWidth)
        setPosition({ top, left })
    }, [])

    return (
        props.theme && <Wrap style={{ top: `${position.top}px`, left: `${position.left}px` }} theme={props.theme} />
    )
}

export default Gradient