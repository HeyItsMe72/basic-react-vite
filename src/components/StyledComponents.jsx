import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

export default function StyledComponents() {
    //Variables 
    const mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    const light = {
        color: "#222",
        bgColor: "#ddd"
    }
    const dark = {
        color: "#ddd",
        bgColor: "#222"
    }

    //Functions
    const setTransitionTime = (time) => `all ${time} ease-in-out`;
    //Keyframes use
    const fadeIn = keyframes`
    0% {
        opacity: 0;
    } 100% {
        opacity: 1;
    }
    `;

    //Components
    const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme})=>theme.color};
    background-color: ${({theme})=>theme.bgColor};
    `;
    //Component legacy
    const BoxRounded = styled(Box)`
    border-radius: 25px`;


    const MyH3 = styled.h3`
    background-color: ${mainColor};
    //Use color prop 
    color: ${(props) => props.color};
    //Destructuring
    color: ${({color})=> color};
    //Conditional Render 
    color: ${({color})=>color || "#006678"};
    transition: ${setTransitionTime('.5s')};
    animation: ${fadeIn} 5s ease-in-out;;
    
    &:hover{
        background-color: ${mainAlphaColor80};
    }

    //Define with props
    ${props=>props.buttonprop && css`
        margin: auto;
        max-width: 50%;
        border-radius: .25rem;
        cursor: pointer;
        background-color: red;
        color: black;
    `}
    `;

    const GlobalStyle = createGlobalStyle`
    h2{
        background-color: #61dabf;
        text-transform: uppercase;
    }
    `;
    

    return(
        <>
        <GlobalStyle></GlobalStyle>
        <h2>Styled Components</h2>
        <MyH3>H3 styled Component</MyH3>
        <MyH3 color="#61dafb">H3 styled Component with props</MyH3>
        <MyH3>H3 styled Component with props</MyH3>
        <MyH3 buttonprop="true">H3 styled Component as a button</MyH3>

        <ThemeProvider theme={dark}>
            <Box>This is a styled dark box</Box>
            <BoxRounded>This is a styled rounded box</BoxRounded>
        </ThemeProvider><ThemeProvider theme={light}>
            <Box>This is a styled light box</Box>
            <BoxRounded>This is a styled rounded box</BoxRounded>
        </ThemeProvider>
        </>
    )
}