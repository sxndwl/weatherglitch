import styled, { keyframes } from "styled-components";

const p9 = keyframes`
    100% {background-size:120% 120%}
`

const Loader = styled.div`
    width:240px;
    height:120px;
    border-radius:200px 200px 0 0;
    mask: repeating-radial-gradient(farthest-side at bottom ,#0000 0,#000 1px 12%,#0000 calc(12% + 1px) 20%);
    background:
    radial-gradient(farthest-side at bottom,#766DF4 0 95%,#0000 0) bottom/0% 0% no-repeat
    #E4E4ED;
    animation: ${p9} 1s infinite  steps(6);
`

const Wrapper = styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50% , -50%)
`

const Loading = () => {
    return (
        <Wrapper>
            <Loader />
        </Wrapper>
    )
}

export default Loading