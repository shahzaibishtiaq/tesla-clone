import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                    </ButtonGroup>
                    <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-image: ${props =>`url('/images/${props.bgImage}')`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align:center;
`
const Buttons = styled.div`

`
const ButtonGroup = styled.div`
display: flex;
@media (max-width:768px)
{
    flex-direction: column;
}
`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
color: white;
font-size:12px;
border-radius: 100px;
height: 40px;
width: 256px;
cursor: pointer;
text-transform: Uppercase;
opacity: 0.85;
display: flex;
justify-content: center;
align-items: center;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background: white;
color: black;
opacity: 0.65;
`
const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;
`