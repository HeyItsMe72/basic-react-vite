import React from 'react';
import "./Styles.css"

export default function Styles() {
    let myStyles = {
        backgroundColor: "green",
        borderRadius: "2rem"
    }
    return(
        <>
        <h2>Styles in React</h2>
        <h3 className='bg-react'>Extern Styles CSS</h3>
        <h3 style={{borderRadius: ".25rem", backgroundColor: "red"}}>Styles in Line</h3>
        <h3 style={myStyles}>Styles in Line Variable</h3>
        <h3 className='bg-react'>Adding Normalize "@import-normalize;"</h3>
        </>
    )
}